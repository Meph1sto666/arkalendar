import { getGameTime } from "$lib";
import data from "../data/calendar/eventdata.json";
import { AkEvent } from "../lib/types/event";


export function getCurrentEvent(): AkEvent | null {
	for (let i of data.en_US) {
		if (!i.type.toLowerCase().includes("act")) continue
		let ae = new AkEvent(i.start, i.end, i.id, i.colors)
		if (ae.isWithinEvent(getGameTime())) return ae
	}
	return null
}