<script>
    import Calendar from "../components/calendar.svelte";
	import '../styles/main.postcss';
	import { getCurrentEvent } from "../lib/events"
</script>

<main class="flex">

	<div id="pages" class="w-100 float-left overflow-hidden container-aside grid-cols-2 grid-rows-2 grid">
		<a href="/events" id="events-nav-card" class="nav-card variant-ghost-primary">
			<header>
				<img src="https://gamepress.gg/arknights/sites/arknights/files/2023-07/WhereVernalWindsWillNeverBlowGBLBanner.png" alt="Current event" class="overflow-hidden">
			</header>
			<div>
				<h3 class="h3 text-center">Events</h3>
				{getCurrentEvent()?.getDisplayName()}
			</div>
			<footer>
				f
			</footer>
		</a>
		<a href="/birthdays" id="birthdays-nav-card" class="nav-card variant-ghost-secondary wip" on:click={(event)=>{event.preventDefault()}}>Birthdays</a>
		<a href="/headhunting" id="headhunting-nav-card" class="nav-card variant-ghost-tertiary wip" on:click={(event)=>{event.preventDefault()}}>
			Headhunting
		</a>
	</div>
	
	<div id="cal-preview" class="h-screen"> <!-- NOTE: fix fixed wrapping-->
		<a href="/cal" class="bottom-0 fixed">--></a>
		<Calendar></Calendar>
	</div>
</main>