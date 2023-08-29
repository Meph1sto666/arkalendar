<title>CALENDAR</title>

<script lang="ts">
	import '../styles/calendar.postcss';
	import { getDaysInMonth } from "$lib";
    import data from "../data/calendar/eventdata.json";
	import { AkEvent } from "../lib/types/event";
	import Month from "./calendar/month.svelte";
	
	const events: AkEvent[] = [];
	for (let i of data.en_US) {
		if (["CHECKIN_ONLY", "LOGIN_ONLY", "PRAY_ONLY", "GRID_GACHA_V2", "GRID_GACHA"].some((v) => {return i.type.toLowerCase().includes(v.toLowerCase())})) continue
		events.push(new AkEvent(i.start, i.end, i.id, i.type, i.colors));
	}

	function getMonthsBetweenDates(startDate: Date, endDate: Date): number {
		let diffMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12;
		diffMonths -= startDate.getMonth() + 1;
		diffMonths += endDate.getMonth() + 1;
		return diffMonths <= 0 ? 0 : Math.ceil(diffMonths);
	}

	var MONTHS = Array.from(
		{
			length:
				getMonthsBetweenDates(
					events[events.length - 1].getStart(),
					events[0].getEnd()
				) + 1,
		},
		(_, i) => {
			return new Date(
				events[events.length - 1].getStart().getFullYear(),
				events[events.length - 1].getStart().getMonth() + i
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
