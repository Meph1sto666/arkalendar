<script lang="ts">
    import { goto } from "$app/navigation";
	import type { AkEvent } from "../../lib/types/event";
	import { isSameDay, weeksSinceMonthStart, isInSameWeek } from "$lib";
	
    export let e: AkEvent
    // export let m
    export let d: Date
    export let events: AkEvent[]
    
    function getClasses(d:Date, e:AkEvent) {
		return `event${isSameDay(d,e.getStart())?' event-start':''}${isSameDay(d,e.getEnd())?' event-end':''}${getOverlapTags(e,d)}`
	}
	
	function redirectEvent(event:Event) {
		// @ts-ignore
		goto(`/events/${event.target?.dataset.event_id}`);
	}
    function getOverlapTags(e:AkEvent, d:Date):string {
		for (let i of events) {
			if (e==i) continue
			if (!(e.isWithinEvent(d) && i.isWithinEvent(d))) continue; // !(e.isWithinEvent(i.getStart()) || e.isWithinEvent(i.getEnd())) && || i.isWithinEvent(e.getStart()) || i.isWithinEvent(e.getEnd())
			if (i.getStart() <= e.getStart()) return " overlap-bottom"
			else return " overlap-top"
		}
		return ""
	}
</script>

<div on:click={redirectEvent} data-event_id="{e.getId()}" role="none" class="{getClasses(d,e)}"
style="grid-row: {weeksSinceMonthStart(d)}; grid-column-start: {isSameDay(d,e.getStart())?(d.getDay()+1)*2:d.getDay()*2+1}; grid-column-end: {isInSameWeek(d,e.getEnd())?(e.getEnd().getDay()+1)*2:7*2+1}; --colors: {e.getColors()}">
    {(isInSameWeek(d,e.getStart()))?e.getDisplayName():''}
</div>