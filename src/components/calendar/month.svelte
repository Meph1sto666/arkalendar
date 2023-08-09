<script lang="ts">
    import { getGameTime, isSameDay, isInSameWeek } from "$lib";
    import type { AkEvent } from "$lib/types/event";
	import Day from "./day.svelte";
    export let events: AkEvent[]
    export let m: Date[]
	const TIME = getGameTime();

</script>

<section class="{m[0].getDay()!=0?'section-shift':''}">
    <h1 class="cal-month">
        {m[0].getFullYear()}
        <span class="cal-month">
            {m[0].toLocaleString('default', { month: 'long' })}
        </span>
    </h1>
    <div class="cal-grid" id={String(m[0].getMonth())}>
        {#each m as d}
        <div class="cal-grid-day{isSameDay(TIME, d)?' today':''}" id={String(d.getDate())} style="{(d.getDate()==1)? 'grid-column-start:' + (d.getDay()+1):''}">
            {d.getDate()}
        </div>
        {/each}
    </div>
    <div class="overlay">
        {#each events as e}
            {#if e.getStart().getMonth() === m[0].getMonth() || e.getEnd().getMonth() == m[0].getMonth()}
                {#each m as d}
                    {#if e.isWithinEvent(d) && ((d.getDay()==0) || isSameDay(d, e.getStart()) || (isSameDay(d, e.getEnd()) && !(isInSameWeek(d,e.getEnd()))))}
                        <Day d={d} e={e} events={events}></Day>
                    {/if}
                {/each}
            {/if}
        {/each}
    </div>
</section>