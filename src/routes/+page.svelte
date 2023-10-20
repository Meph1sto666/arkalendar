<script lang="ts">
	import Calendar from "../components/calendar.svelte";
	import '../styles/main.postcss';
	// @ts-ignore
	import { getGameTime } from "$lib";
	import { ProgressBar } from "@skeletonlabs/skeleton";
	export let data
</script>

<main class="inline-flex flex-row justify-evenly items-stretch flex-wrap w-screen">
	<div id="pages" class="w-100 float-left overflow-hidden container-aside grid-cols-2 grid-rows-2 grid gap-3">
		<a href="/events" id="events-nav-card" class="nav-card variant-ghost-primary">
			<header>
				{#if data.eventData!=null}
				<img src="/assets/banners/{data.eventData.banner}" alt="Current event" class=" w-full">
				{/if}
				{#if data.eventData==null}
					<span class="absolute bg-secondary-900">PLACEHOLDER</span>
					<img src="/assets/banners/unknown_eb.png" alt="Current event" class=" w-full">
				{/if}
			</header>
			<div>
				<h1 class="h2 text-center">Events</h1>
				{data.event?.getDisplayName()}
			</div>
			<footer>
				<ProgressBar
					value={((getGameTime().getTime()-data.event?.getStart().getTime())/(24*60**2*1000))}
					max={((data.event?.getEnd().getTime()-data.event?.getStart().getTime())/(24*60**2*1000))}>
				</ProgressBar>
			</footer>
		</a>
		<a href="/birthdays" id="birthdays-nav-card" class="nav-card variant-ghost-secondary wip" on:click={(event)=>{event.preventDefault()}}>
			Birthdays
		</a>
		<a href="/headhunting" id="headhunting-nav-card" class="nav-card variant-ghost-tertiary wip" on:click={(event)=>{event.preventDefault()}}>
			<header>
				{#if data.eventData!=null}
					<img src="/assets/banners/{data.eventData.hh_banner}" alt="Current event" class=" w-full">
				{/if}
				{#if data.eventData==null}
					<span class="absolute bg-secondary-900">PLACEHOLDER</span>
					<img src="/assets/banners/unknown.png" alt="Current event" class=" w-full">
				{/if}
			</header>
			Headhunting
		</a>
	</div>
	
	<div id="cal-preview" class="h-screen overflow-x-hidden overflow-y-scroll"> <!-- NOTE: fix fixed wrapping-->
		<a href="/cal" class="bottom-0 fixed">--></a>
		<Calendar></Calendar>
	</div>
</main>