import type { Furn } from '$lib/types/furn';
import type { Item } from '$lib/types/item.js';

export async function load({ params }) {
	const eventId = params.eid;
	let itemTable:Map<string, Item> = new Map(Object.entries((await import("../../../../data/tables/item_table.json")).items))
	let buildTable:Map<string, Furn> = new Map(Object.entries((await import("../../../../data/tables/building_data.json")).customData.furnitures))
	
	return {
		id: eventId,
		itemTable: itemTable,
		buildTable: buildTable,
		eventData: await import(`../../../../data/events/${eventId}.json`)
	}
}