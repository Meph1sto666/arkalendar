import data from "../data/calendar/events.json";
import { AkEvent } from "../lib/types/event";

const events: AkEvent[] = [];
for (let i of data.future) {
	events.push(new AkEvent(i.start, i.end, i.id, i.colors));
}
