import type { Item } from '$lib/types/item.js';

export async function load({ params }) {
	const eventId = params.eid;
	let itemTable:Map<string, Item> = new Map(Object.entries((await import("../../../../data/tables/item_table.json")).items))
	
	return {
		id: eventId,
		itemTable: itemTable,
		eventData: await import(`../../../../data/events/${eventId}.json`)
	}
}