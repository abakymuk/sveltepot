import { sequence } from '@sveltejs/kit/hooks';
import { eq } from 'drizzle-orm';
import { sha256 } from '@oslojs/crypto/sha2';
import { encodeHexLowerCase } from '@oslojs/encoding';
import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import { pgTable, timestamp, text, uuid } from 'drizzle-orm/pg-core';
import { c as private_env } from './internal.js';
const users = pgTable('users', {
	id: uuid('id').primaryKey().defaultRandom(),
	email: text('email').notNull().unique(),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at').defaultNow().notNull()
});
const session = pgTable('session', {
	id: text('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => users.id),
	expiresAt: timestamp('expires_at', { withTimezone: true, mode: 'date' }).notNull()
});
const schema = /* @__PURE__ */ Object.freeze(
	/* @__PURE__ */ Object.defineProperty(
		{
			__proto__: null,
			session,
			users
		},
		Symbol.toStringTag,
		{ value: 'Module' }
	)
);
if (!private_env.DATABASE_URL) throw new Error('DATABASE_URL is not set');
const sql = neon(private_env.DATABASE_URL);
const db = drizzle(sql, { schema });
const DAY_IN_MS = 1e3 * 60 * 60 * 24;
const sessionCookieName = 'auth-session';
async function validateSessionToken(token) {
	const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)));
	const [result] = await db
		.select({
			// Adjust user table here to tweak returned data
			user: { id: users.id, email: users.email },
			session
		})
		.from(session)
		.innerJoin(users, eq(session.userId, users.id))
		.where(eq(session.id, sessionId));
	if (!result) {
		return { session: null, user: null };
	}
	const { session: session$1, user } = result;
	const sessionExpired = Date.now() >= session$1.expiresAt.getTime();
	if (sessionExpired) {
		await db.delete(session).where(eq(session.id, session$1.id));
		return { session: null, user: null };
	}
	const renewSession = Date.now() >= session$1.expiresAt.getTime() - DAY_IN_MS * 15;
	if (renewSession) {
		session$1.expiresAt = new Date(Date.now() + DAY_IN_MS * 30);
		await db
			.update(session)
			.set({ expiresAt: session$1.expiresAt })
			.where(eq(session.id, session$1.id));
	}
	return { session: session$1, user };
}
function setSessionTokenCookie(event, token, expiresAt) {
	event.cookies.set(sessionCookieName, token, {
		expires: expiresAt,
		path: '/'
	});
}
function deleteSessionTokenCookie(event) {
	event.cookies.delete(sessionCookieName, {
		path: '/'
	});
}
const handleAuth = async ({ event, resolve }) => {
	const sessionToken = event.cookies.get(sessionCookieName);
	if (!sessionToken) {
		event.locals.user = null;
		event.locals.session = null;
		return resolve(event);
	}
	const { session: session2, user } = await validateSessionToken(sessionToken);
	if (session2) {
		setSessionTokenCookie(event, sessionToken, session2.expiresAt);
	} else {
		deleteSessionTokenCookie(event);
	}
	event.locals.user = user;
	event.locals.session = session2;
	return resolve(event);
};
const handle = sequence(handleAuth);
export { handle };
