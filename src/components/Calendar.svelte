<title>CALENDAR</title>

<script lang="ts">
    import { goto } from "$app/navigation";
	import { getGameTime, getDaysInMonth, isSameDay, weeksSinceMonthStart, timeToColor, isInSameWeek } from "$lib";
    import data from "../data/calendar/events.json";
	import { AkEvent } from "../lib/types/event";
	import Month from "./calendar/month.svelte";
	
	var events: AkEvent[] = [];
	for (let i of data.future) {
		events.push(new AkEvent(i.start, i.end, i.id));
	}


	function getMonthsBetweenDates(startDate: Date, endDate: Date): number {
		let diffMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12;
		diffMonths -= startDate.getMonth() + 1;
		diffMonths += endDate.getMonth() + 1;
		return diffMonths <= 0 ? 0 : diffMonths;
	}

	const TIME = getGameTime();
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

	function getOverlapTags(e:AkEvent, d:Date):string {
		for (let i of events) {
			if (e==i) continue
			if (!(e.isWithinEvent(d) && i.isWithinEvent(d))) continue; // !(e.isWithinEvent(i.getStart()) || e.isWithinEvent(i.getEnd())) && || i.isWithinEvent(e.getStart()) || i.isWithinEvent(e.getEnd())
			if (i.getStart() <= e.getStart()) return " overlap-bottom"
			else return " overlap-top"
		}
		return ""
	}

	function getClasses(d:Date, e:AkEvent) {
		return `event${isSameDay(d,e.getStart())?' event-start':''}${isSameDay(d,e.getEnd())?' event-end':''}${getOverlapTags(e,d)}`
	}
	
	function redirectEvent(event:Event) {
		// @ts-ignore
		goto(`/events/${event.target?.dataset.event_id}`);
	}

</script>

<main>
	<div id="cal-container">	
		{#each MONTHS as m}
			<Month></Month>
			<section class="{m[0].getDay()!=0?'section-shift':''}">
				<div class="cal-grid" id={String(m[0].getMonth())}>
					{#each m as d}
					<div class="cal-grid-day{isSameDay(TIME, d)?' today':''}" id={String(d.getDate())} style="{(d.getDate()==1)? '--col-start:' + (d.getDay()+1):''}">
						{d.getDate()}
					</div>
					{/each}
				</div>
				<div class="overlay">
					{#each events as e}
						{#if e.getStart().getMonth() === m[0].getMonth() || e.getEnd().getMonth() == m[0].getMonth()}
							{#each m as d}
								{#if e.isWithinEvent(d) && ((d.getDay()==0) || isSameDay(d, e.getStart()) || (isSameDay(d, e.getEnd()) && !(isInSameWeek(d,e.getEnd()))))}
									<div class="{getClasses(d,e)}" on:click={redirectEvent} data-event_id="{e.getId()}" role="none"
										style="--row: {weeksSinceMonthStart(d)}; --col-start: {isSameDay(d,e.getStart())?(d.getDay()+1)*2:d.getDay()*2+1}; --col-end: {isInSameWeek(d,e.getEnd())?(e.getEnd().getDay()+1)*2:7*2+1}; --colors: {timeToColor(e.getStart())}, {timeToColor(e.getEnd())}">
											{(isInSameWeek(d,e.getStart()))?e.getDisplayName():''}
									</div>
								{/if}
							{/each}
						{/if}
					{/each}
				</div>
			</section>
		{/each}
	</div>
</main>