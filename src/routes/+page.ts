import type { AkEvent } from "$lib/types/event";
import { getCurrentEvent } from "$lib/events"

export async function load() {
	const e:AkEvent|null = getCurrentEvent()
	return {
		event: e,
		eventData: await import(`../../src/data/events/${e?.getId()}.json`)
	}
}