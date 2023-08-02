<script lang="ts">
	import Calendar from "../components/calendar.svelte";
	import '../styles/main.postcss';
	// @ts-ignore
	import { getCurrentEvent } from "$lib/events"
	import type { AkEvent } from "$lib/types/event";
	import { getGameTime } from "$lib";
	import { ProgressBar } from "@skeletonlabs/skeleton";
	const cEvent:AkEvent|null = getCurrentEvent()
</script>

<main class="inline-flex flex-row justify-evenly items-stretch flex-wrap w-screen">
	<div id="pages" class="w-100 float-left overflow-hidden container-aside grid-cols-2 grid-rows-2 grid gap-3">
		<a href="/events" id="events-nav-card" class="nav-card variant-ghost-primary">
			<header>
				<img src="/src/data/assets/hh_banners/{cEvent?.getId()}_banner.png" alt="Current event" class=" w-full">
			</header>
			<div>
				<h1 class="h2 text-center">Events</h1>
				{cEvent?.getDisplayName()}
			</div>
			<footer>
				<ProgressBar
					value={((getGameTime().getTime()-cEvent?.getStart().getTime())/(24*60**2*1000))}
					max={((cEvent?.getEnd().getTime()-cEvent?.getStart().getTime())/(24*60**2*1000))}>
				</ProgressBar>
			</footer>
		</a>
		<a href="/birthdays" id="birthdays-nav-card" class="nav-card variant-ghost-secondary wip" on:click={(event)=>{event.preventDefault()}}>
			Birthdays
		</a>
		<a href="/headhunting" id="headhunting-nav-card" class="nav-card variant-ghost-tertiary wip" on:click={(event)=>{event.preventDefault()}}>
			Headhunting
		</a>
	</div>
	
	<div id="cal-preview" class="h-screen overflow-x-hidden overflow-y-scroll"> <!-- NOTE: fix fixed wrapping-->
		<a href="/cal" class="bottom-0 fixed">--></a>
		<Calendar></Calendar>
	</div>
</main>