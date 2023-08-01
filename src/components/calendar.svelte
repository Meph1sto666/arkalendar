<title>CALENDAR</title>

<script lang="ts">
	import { getDaysInMonth } from "$lib";
    import data from "../data/calendar/events.json";
	import { AkEvent } from "../lib/types/event";
	import Month from "./calendar/month.svelte";
	
	const events: AkEvent[] = [];
	for (let i of data.future) {
		events.push(new AkEvent(i.start, i.end, i.id, i.colors));
	}

	function getMonthsBetweenDates(startDate: Date, endDate: Date): number {
		let diffMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12;
		diffMonths -= startDate.getMonth() + 1;
		diffMonths += endDate.getMonth() + 1;
		return diffMonths <= 0 ? 0 : diffMonths;
	}

	var MONTHS = Array.from(
		{
			length:
				getMonthsBetweenDates(
					events[0].getStart(),
					events[events.length - 1].getEnd()
				) + 1,
		},
		(_, i) => {
			return new Date(
				events[0].getStart().getFullYear(),
				events[0].getStart().getMonth() + i
			);
		}
	).map((m) => {
		return Array.from({ length: getDaysInMonth(m) }, (_, i) => {
			return new Date(m.getFullYear(), m.getMonth(), m.getDate() + i);
		});
	});
</script>

<main id="cal-container flex">
		{#each MONTHS as m}
			<Month m={m} events={events}></Month>
		{/each}
</main>
