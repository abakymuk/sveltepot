import type { RequestEvent } from '@sveltejs/kit';

export const reroute = (request: RequestEvent) => request.url.pathname;
