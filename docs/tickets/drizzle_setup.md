отлично — беру drizzle. Ниже даю готовые файлы для старта: схема БД, конфиг drizzle-kit, клиент Neon, минимальные RLS-политики, seed-скрипт и интеграция с Lucia так, чтобы на каждый запрос выставлять app.tenant_id в сессии Postgres.

Скопируйте файлы как есть, затем выполните команды в конце.

⸻

1. Пакеты и скрипты

// package.json (фрагмент)
{
"type": "module",
"scripts": {
"dev": "vite dev",
"build": "vite build",
"preview": "vite preview",
"db:generate": "drizzle-kit generate",
"db:migrate": "drizzle-kit migrate",
"db:push": "drizzle-kit push", // опционально, если хотите без файлов миграций
"db:studio": "drizzle-kit studio",
"db:seed": "tsx scripts/seed.ts"
},
"devDependencies": {
"@types/node": "^20.12.12",
"drizzle-kit": "^0.26.0",
"tsx": "^4.7.0",
"typescript": "^5.4.0"
},
"dependencies": {
"@lucia-auth/adapter-drizzle": "^1.0.0",
"lucia": "^3.0.0",
"@neondatabase/serverless": "^0.9.3",
"drizzle-orm": "^0.35.0",
"zod": "^3.23.8",
"posthog-node": "^4.0.0",
"ably": "^1.2.44"
}
}

// drizzle.config.ts (в корне)
import type { Config } from "drizzle-kit";

export default {
schema: "./src/lib/db/schema.ts",
out: "./drizzle",
dialect: "postgresql",
dbCredentials: {
url: process.env.DATABASE_URL!,
},
strict: true,
verbose: true,
} satisfies Config;

⸻

2. Клиент БД (Neon) + «tenant context»

// src/lib/db/client.ts
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import \* as schema from "./schema";

const connection = neon(process.env.DATABASE_URL!);
export const db = drizzle(connection, { schema });

// Хелпер: установить app.tenant_id на текущий сеанс (per request)
export async function setTenantContext(tenantId: string) {
// set_config(scope=local) → аналог SET LOCAL
await connection(
`select set_config('app.tenant_id', '${tenantId}', true);`
);
}

⸻

3. Схема БД (минимум MVP) — Drizzle

// src/lib/db/schema.ts
import {
pgTable, serial, text, timestamp, uuid, integer, boolean, index, primaryKey, jsonb, pgEnum
} from "drizzle-orm/pg-core";

// enums
export const orderType = pgEnum("order_type", ["pickup","delivery"]);
export const orderStatus = pgEnum("order_status", ["new","in_progress","ready","completed","cancelled"]);
export const membershipRole = pgEnum("membership_role", ["owner","manager","staff"]);

export const tenants = pgTable("tenants", {
id: uuid("id").defaultRandom().primaryKey(),
name: text("name").notNull(),
brandColor: text("brand_color"),
timezone: text("timezone").default("Europe/Berlin"),
logoUrl: text("logo_url"),
createdAt: timestamp("created_at", { withTimezone: true }).defaultNow()
}, (t) => ({
nameIdx: index("tenants_name_idx").on(t.name)
}));

export const users = pgTable("users", {
id: uuid("id").defaultRandom().primaryKey(),
email: text("email").notNull().unique(),
name: text("name"),
createdAt: timestamp("created_at", { withTimezone: true }).defaultNow()
});

export const memberships = pgTable("memberships", {
userId: uuid("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
tenantId: uuid("tenant_id").notNull().references(() => tenants.id, { onDelete: "cascade" }),
role: membershipRole("role").notNull().default("owner"),
createdAt: timestamp("created_at", { withTimezone: true }).defaultNow()
}, (t) => ({
pk: primaryKey({ columns: [t.userId, t.tenantId] }),
byTenant: index("memberships_tenant_idx").on(t.tenantId),
byUser: index("memberships_user_idx").on(t.userId)
}));

export const locations = pgTable("locations", {
id: uuid("id").defaultRandom().primaryKey(),
tenantId: uuid("tenant_id").notNull().references(() => tenants.id, { onDelete: "cascade" }),
name: text("name").notNull(),
address: text("address"),
lat: text("lat"),
lon: text("lon"),
hoursJson: jsonb("hours_json"), // {mon:[["09:00","18:00"],...]}
createdAt: timestamp("created_at", { withTimezone: true }).defaultNow()
}, (t) => ({
byTenant: index("locations_tenant_idx").on(t.tenantId)
}));

export const menus = pgTable("menus", {
id: uuid("id").defaultRandom().primaryKey(),
tenantId: uuid("tenant_id").notNull().references(() => tenants.id, { onDelete: "cascade" }),
name: text("name").notNull(),
isActive: boolean("is_active").default(true),
createdAt: timestamp("created_at", { withTimezone: true }).defaultNow()
}, (t)=>({
byTenant: index("menus_tenant_idx").on(t.tenantId)
}));

export const categories = pgTable("categories", {
id: uuid("id").defaultRandom().primaryKey(),
menuId: uuid("menu_id").notNull().references(() => menus.id, { onDelete: "cascade" }),
name: text("name").notNull(),
sort: integer("sort").default(0)
}, (t)=>({
byMenu: index("categories_menu_idx").on(t.menuId)
}));

export const items = pgTable("items", {
id: uuid("id").defaultRandom().primaryKey(),
menuId: uuid("menu_id").notNull().references(() => menus.id, { onDelete: "cascade" }),
sku: text("sku"),
name: text("name").notNull(),
description: text("description"),
priceCents: integer("price_cents").notNull(),
imageUrl: text("image_url"),
isAvailable: boolean("is_available").default(true),
createdAt: timestamp("created_at", { withTimezone: true }).defaultNow()
}, (t)=>({
byMenu: index("items_menu_idx").on(t.menuId)
}));

export const modifiers = pgTable("modifiers", {
id: uuid("id").defaultRandom().primaryKey(),
tenantId: uuid("tenant_id").notNull().references(()=>tenants.id, { onDelete: "cascade" }),
name: text("name").notNull(),
type: text("type").notNull() // single|multi (для простоты)
}, (t)=>({
byTenant: index("modifiers_tenant_idx").on(t.tenantId)
}));

export const itemModifiers = pgTable("item_modifiers", {
itemId: uuid("item_id").notNull().references(()=>items.id, { onDelete: "cascade" }),
modifierId: uuid("modifier_id").notNull().references(()=>modifiers.id, { onDelete: "cascade" })
}, (t)=>({
pk: primaryKey({ columns: [t.itemId, t.modifierId] })
}));

export const options = pgTable("options", {
id: uuid("id").defaultRandom().primaryKey(),
modifierId: uuid("modifier_id").notNull().references(()=>modifiers.id, { onDelete: "cascade" }),
name: text("name").notNull(),
priceDeltaCents: integer("price_delta_cents").default(0),
isDefault: boolean("is_default").default(false)
}, (t)=>({
byModifier: index("options_modifier_idx").on(t.modifierId)
}));

export const customers = pgTable("customers", {
id: uuid("id").defaultRandom().primaryKey(),
tenantId: uuid("tenant_id").notNull().references(()=>tenants.id, { onDelete: "cascade" }),
email: text("email"),
phone: text("phone"),
name: text("name"),
lastOrderAt: timestamp("last_order_at", { withTimezone: true }),
totalSpentCents: integer("total_spent_cents").default(0)
}, (t)=>({
byTenant: index("customers_tenant_idx").on(t.tenantId)
}));

export const orders = pgTable("orders", {
id: uuid("id").defaultRandom().primaryKey(),
tenantId: uuid("tenant_id").notNull().references(()=>tenants.id, { onDelete: "cascade" }),
locationId: uuid("location_id").notNull().references(()=>locations.id, { onDelete: "restrict" }),
customerId: uuid("customer_id").references(()=>customers.id, { onDelete: "set null" }),
type: orderType("type").notNull(),
status: orderStatus("status").notNull().default("new"),
totalCents: integer("total_cents").notNull().default(0),
placedAt: timestamp("placed_at", { withTimezone: true }).defaultNow(),
paidAt: timestamp("paid_at", { withTimezone: true }),
source: text("source").default("web") // web|kiosk|aggregator
}, (t)=>({
byTenant: index("orders_tenant_idx").on(t.tenantId),
byLoc: index("orders_location_idx").on(t.locationId)
}));

export const orderItems = pgTable("order_items", {
id: uuid("id").defaultRandom().primaryKey(),
orderId: uuid("order_id").notNull().references(()=>orders.id, { onDelete: "cascade" }),
itemId: uuid("item_id").notNull().references(()=>items.id, { onDelete: "restrict" }),
qty: integer("qty").notNull().default(1),
basePriceCents: integer("base_price_cents").notNull(),
finalPriceCents: integer("final_price_cents").notNull()
}, (t)=>({
byOrder: index("order_items_order_idx").on(t.orderId)
}));

export const orderItemOptions = pgTable("order_item_options", {
orderItemId: uuid("order_item_id").notNull().references(()=>orderItems.id, { onDelete: "cascade" }),
optionId: uuid("option_id").notNull().references(()=>options.id, { onDelete: "restrict" }),
priceDeltaCents: integer("price_delta_cents").default(0)
}, (t)=>({
pk: primaryKey({ columns: [t.orderItemId, t.optionId] })
}));

export const files = pgTable("files", {
id: uuid("id").defaultRandom().primaryKey(),
tenantId: uuid("tenant_id").notNull().references(()=>tenants.id, { onDelete: "cascade" }),
key: text("key").notNull(), // путь в R2
url: text("url").notNull(),
mime: text("mime"),
bytes: integer("bytes"),
createdAt: timestamp("created_at", { withTimezone: true }).defaultNow()
}, (t)=>({
byTenant: index("files_tenant_idx").on(t.tenantId)
}));

export const events = pgTable("events", {
id: uuid("id").defaultRandom().primaryKey(),
tenantId: uuid("tenant_id").notNull().references(()=>tenants.id, { onDelete: "cascade" }),
kind: text("kind").notNull(), // order_created, payment_succeeded, etc
happenedAt: timestamp("happened_at", { withTimezone: true }).defaultNow(),
payload: jsonb("payload")
}, (t)=>({
byTenant: index("events_tenant_idx").on(t.tenantId),
byKind: index("events_kind_idx").on(t.kind)
}));

⸻

4. Первичная миграция и RLS (SQL)

После db:generate у вас будут SQL-миграции в ./drizzle. Добавьте файл ./drizzle/000_init_rls.sql:

-- drizzle/000_init_rls.sql

-- 1) Включаем RLS там, где есть tenant_id
ALTER TABLE locations ENABLE ROW LEVEL SECURITY;
ALTER TABLE menus ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY; -- через menu → косвенно, но включим на будущий столбец
ALTER TABLE items ENABLE ROW LEVEL SECURITY;
ALTER TABLE modifiers ENABLE ROW LEVEL SECURITY;
ALTER TABLE options ENABLE ROW LEVEL SECURITY; -- опционально, если привяжете через modifier → косвенно
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_item_options ENABLE ROW LEVEL SECURITY;
ALTER TABLE files ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE memberships ENABLE ROW LEVEL SECURITY;
ALTER TABLE tenants ENABLE ROW LEVEL SECURITY;

-- 2) Функция current_tenant_id() читает set_config
CREATE OR REPLACE FUNCTION app.current_tenant_id()
RETURNS uuid
LANGUAGE sql STABLE AS $$
SELECT current_setting('app.tenant_id', true)::uuid

$$
;

-- 3) Политики (простая изоляция по tenant_id)
-- Таблицы, где есть tenant_id:
DO
$$

BEGIN
-- helper proc
EXECUTE '
CREATE POLICY tenant_isolation_select ON locations
FOR SELECT USING (tenant_id = app.current_tenant_id());
';
EXCEPTION WHEN duplicate_object THEN END;

$$
;

-- Повторить для каждой таблицы:
CREATE POLICY tenant_isolation_select ON menus FOR SELECT USING (tenant_id = app.current_tenant_id());
CREATE POLICY tenant_isolation_select ON items FOR SELECT USING ( (SELECT m.tenant_id FROM menus m WHERE m.id = items.menu_id) = app.current_tenant_id() );
CREATE POLICY tenant_isolation_select ON modifiers FOR SELECT USING (tenant_id = app.current_tenant_id());
CREATE POLICY tenant_isolation_select ON options FOR SELECT USING ( (SELECT tenant_id FROM modifiers WHERE modifiers.id = options.modifier_id) = app.current_tenant_id() );
CREATE POLICY tenant_isolation_select ON customers FOR SELECT USING (tenant_id = app.current_tenant_id());
CREATE POLICY tenant_isolation_select ON orders FOR SELECT USING (tenant_id = app.current_tenant_id());
CREATE POLICY tenant_isolation_select ON order_items FOR SELECT USING ( (SELECT tenant_id FROM orders WHERE orders.id = order_items.order_id) = app.current_tenant_id() );
CREATE POLICY tenant_isolation_select ON order_item_options FOR SELECT USING ( (SELECT tenant_id FROM orders o JOIN order_items oi ON oi.order_id=o.id WHERE oi.id=order_item_options.order_item_id) = app.current_tenant_id() );
CREATE POLICY tenant_isolation_select ON files FOR SELECT USING (tenant_id = app.current_tenant_id());
CREATE POLICY tenant_isolation_select ON events FOR SELECT USING (tenant_id = app.current_tenant_id());
CREATE POLICY tenant_isolation_select ON memberships FOR SELECT USING (tenant_id = app.current_tenant_id());
CREATE POLICY tenant_isolation_select ON tenants FOR SELECT USING (id = app.current_tenant_id());

-- INSERT/UPDATE/DELETE — те же условия
CREATE POLICY tenant_isolation_iud ON locations FOR ALL USING (tenant_id = app.current_tenant_id()) WITH CHECK (tenant_id = app.current_tenant_id());
CREATE POLICY tenant_isolation_iud ON menus FOR ALL USING (tenant_id = app.current_tenant_id()) WITH CHECK (tenant_id = app.current_tenant_id());
CREATE POLICY tenant_isolation_iud ON items FOR ALL USING ((SELECT m.tenant_id FROM menus m WHERE m.id = items.menu_id) = app.current_tenant_id())
  WITH CHECK ((SELECT m.tenant_id FROM menus m WHERE m.id = items.menu_id) = app.current_tenant_id());
CREATE POLICY tenant_isolation_iud ON modifiers FOR ALL USING (tenant_id = app.current_tenant_id()) WITH CHECK (tenant_id = app.current_tenant_id());
CREATE POLICY tenant_isolation_iud ON options FOR ALL USING ((SELECT tenant_id FROM modifiers WHERE modifiers.id = options.modifier_id) = app.current_tenant_id())
  WITH CHECK ((SELECT tenant_id FROM modifiers WHERE modifiers.id = options.modifier_id) = app.current_tenant_id());
CREATE POLICY tenant_isolation_iud ON customers FOR ALL USING (tenant_id = app.current_tenant_id()) WITH CHECK (tenant_id = app.current_tenant_id());
CREATE POLICY tenant_isolation_iud ON orders FOR ALL USING (tenant_id = app.current_tenant_id()) WITH CHECK (tenant_id = app.current_tenant_id());
CREATE POLICY tenant_isolation_iud ON order_items FOR ALL USING ((SELECT tenant_id FROM orders WHERE orders.id = order_items.order_id) = app.current_tenant_id())
  WITH CHECK ((SELECT tenant_id FROM orders WHERE orders.id = order_items.order_id) = app.current_tenant_id());
CREATE POLICY tenant_isolation_iud ON order_item_options FOR ALL USING ((SELECT tenant_id FROM orders o JOIN order_items oi ON oi.order_id=o.id WHERE oi.id=order_item_options.order_item_id) = app.current_tenant_id())
  WITH CHECK ((SELECT tenant_id FROM orders o JOIN order_items oi ON oi.order_id=o.id WHERE oi.id=order_item_options.order_item_id) = app.current_tenant_id());
CREATE POLICY tenant_isolation_iud ON files FOR ALL USING (tenant_id = app.current_tenant_id()) WITH CHECK (tenant_id = app.current_tenant_id());
CREATE POLICY tenant_isolation_iud ON events FOR ALL USING (tenant_id = app.current_tenant_id()) WITH CHECK (tenant_id = app.current_tenant_id());
CREATE POLICY tenant_isolation_iud ON memberships FOR ALL USING (tenant_id = app.current_tenant_id()) WITH CHECK (tenant_id = app.current_tenant_id());
-- Для tenants обычно INSERT делает системная логика (setup), можно ограничить до owner.

Примечание: для categories/items мы проверяем tenant косвенно через menus. Это безопасно и упрощает схему (избегаем дублирования tenant_id).

⸻

5) Seed-скрипт (минимум)

// scripts/seed.ts
import "dotenv/config";
import { db } from "../src/lib/db/client";
import {
  tenants, locations, menus, categories, items, users, memberships
} from "../src/lib/db/schema";
import { eq } from "drizzle-orm";

async function main() {
  // 1. Пользователь-демо
  const [user] = await db.insert(users).values({
    email: "founder@example.com",
    name: "Founder"
  }).returning();

  // 2. Тенант
  const [tenant] = await db.insert(tenants).values({
    name: "Demo Resto",
    brandColor: "#7c3aed",
    timezone: "Europe/Berlin"
  }).returning();

  // 3. membership
  await db.insert(memberships).values({
    userId: user.id,
    tenantId: tenant.id,
    role: "owner"
  });

  // 4. Локация
  const [loc] = await db.insert(locations).values({
    tenantId: tenant.id,
    name: "Main Kitchen",
    address: "Berlin"
  }).returning();

  // 5. Меню + категории + блюда
  const [menu] = await db.insert(menus).values({
    tenantId: tenant.id,
    name: "Default"
  }).returning();

  const [cat] = await db.insert(categories).values({
    menuId: menu.id,
    name: "Burgers",
    sort: 1
  }).returning();

  await db.insert(items).values([
    { menuId: menu.id, name: "Classic Burger", priceCents: 990 },
    { menuId: menu.id, name: "Cheese Burger", priceCents: 1090 },
    { menuId: menu.id, name: "Veggie Burger", priceCents: 950 }
  ]);

  console.log("Seed complete:", {
    userEmail: user.email,
    tenantId: tenant.id,
    locationId: loc.id,
    menuId: menu.id,
    categoryId: cat.id
  });
}

main().then(()=>process.exit(0)).catch((e)=>{ console.error(e); process.exit(1); });


⸻

6) Lucia + SvelteKit: установка tenant-контекста на запрос

Идея: после проверки сессии мы находим membership активного пользователя (например, по выбранному tenant_id из cookie/поддомена), и выставляем app.tenant_id в PG:

// src/hooks.server.ts
import type { Handle } from "@sveltejs/kit";
import { db, setTenantContext } from "$lib/db/client";
import { memberships } from "$lib/db/schema";
import { lucia } from "$lib/auth/lucia"; // см. ниже

export const handle: Handle = async ({ event, resolve }) => {
  // Lucia: извлекаем сессию
  const authRequest = lucia.handleRequest(event);
  const session = await authRequest.validate();
  event.locals.user = session?.user ?? null;

  // определяем tenant (упрощённо: берём первый membership)
  let tenantId: string | null = null;
  if (event.locals.user) {
    const rows = await db.query.memberships.findMany({
      where: (m, { eq }) => eq(m.userId, event.locals.user.id),
      limit: 1
    });
    tenantId = rows[0]?.tenantId ?? null;
  }

  if (tenantId) {
    await setTenantContext(tenantId); // ← теперь RLS будет работать автоматически
    event.locals.tenantId = tenantId;
  }

  return resolve(event);
};

Простой конфиг Lucia (адаптер drizzle):

// src/lib/auth/lucia.ts
import { lucia as baseLucia } from "lucia";
import { sveltekit } from "lucia/middleware";
import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle";
import { db } from "$lib/db/client";
import { users } from "$lib/db/schema";

const adapter = new DrizzlePostgreSQLAdapter(db, users, null as any);
// ↑ Для Lucia v3 вам потребуется завести таблицы sessions/keys (можете добавить в schema.ts при необходимости)

export const lucia = baseLucia({
  adapter,
  env: (process.env.NODE_ENV === "production") ? "PROD" : "DEV",
  middleware: sveltekit(),
  sessionCookie: { attributes: { sameSite: "lax" } }
});

export type Auth = typeof lucia;

Примечание: для полноценной Lucia нужны таблицы sessions и keys. Их легко добавить в schema (из примеров Lucia) или использовать готовый шаблон. Если нужно — добавлю сразу.

⸻

7) Health-endpoint и проверка контуров

// src/routes/api/health/+server.ts
import type { RequestHandler } from "./$types";
import { db } from "$lib/db/client";

export const GET: RequestHandler = async () => {
  try {
    // простой запрос
    await db.execute("select 1");
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (e) {
    return new Response(JSON.stringify({ ok: false, error: String(e) }), { status: 500 });
  }
};


⸻

8) Ably каркас

// src/lib/realtime/ably.ts
import Ably from "ably";

const apiKey = process.env.ABLY_API_KEY!;
export const ably = new Ably.Rest(apiKey);

export function channelForTenant(tenantId: string, topic: string) {
  return ably.channels.get(`${topic}:tenant:${tenantId}`);
}

// пример отправки
export async function publish(tenantId: string, topic: string, payload: unknown) {
  const ch = channelForTenant(tenantId, topic);
  await ch.publish({ name: "event", data: payload });
}


⸻

9) .env.example (минимум)

DATABASE_URL=postgres://user:pass@ep-xxx.neon.tech/neondb
AUTH_SECRET=replace_me
ABLY_API_KEY=xxx:xxx
POSTHOG_KEY=phc_xxx
POSTHOG_HOST=https://us.i.posthog.com
R2_ACCESS_KEY_ID=xxx
R2_SECRET_ACCESS_KEY=xxx
R2_BUCKET=potlucky-media
R2_PUBLIC_BASE_URL=https://r2.yourcdn.com
APP_URL=http://localhost:5173


⸻

10) Команды запуска

# 0) пакеты
pnpm i

# 1) сгенерировать миграции из схемы
pnpm db:generate

# 2) применить миграции в Neon
pnpm db:migrate

# 3) добавить RLS (наш SQL-файл)
# (если вы положили его в ./drizzle/000_init_rls.sql, он применится в шаге миграции;
# если нет — выполните вручную в консоли Neon)

# 4) засеять демо-данные
pnpm db:seed

# 5) запустить dev
pnpm dev


⸻

Что дальше (в рамках вашего спринта 1)
	1.	✅ Вставить эти файлы → db:generate → db:migrate → db:seed.
	2.	✅ Подключить Flowbite-Svelte и собрать базовый шэлл /dashboard.
	3.	✅ Сделать /setup страницу, которая создаёт tenant + первую локацию и переводит на /dashboard.
	4.	✅ Деплой на Vercel, завести секреты, включить Preview Deployments.
	5.	✅ Проверить RLS: под двумя пользователями данные строго изолированы.


$$
