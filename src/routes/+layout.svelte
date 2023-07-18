<script lang='ts'>
	import { AppBar, AppShell } from "@skeletonlabs/skeleton";
    import { getGameTime } from "$lib";
	// The ordering of these imports is critical to your app working properly
	import '../styles/themes/dark.postcss';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	
	import '../styles/calendar.postcss';
	import Calendar from "../components/Calendar.svelte";

	let time = getGameTime()
	function updateTime() {
		time = getGameTime()
	}
	const interval = setInterval(updateTime, 1000);
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<div  class="text-4xl">
					<span class="first-letter: text-secondary-600 p-0 m-0">AR</span>
					<span class="first-letter: text-primary-600 p-0 m-0">K</span>
					<span class="first-letter: text-tertiary-600 p-0 m-0">ALENDAR</span>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<span class="">
					//{time.getFullYear().toString().padStart(4,"0")}-{time.getMonth().toString().padStart(2,"0")}-{time.getDate().toString().padStart(2,"0")}////{time.getHours().toString().padStart(2,"0")}-{time.getMinutes().toString().padStart(2,"0")}-{time.getSeconds().toString().padStart(2,"0")}//
				</span>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- (sidebarLeft) -->
	<svelte:fragment slot="sidebarRight">
		<Calendar></Calendar>
	</svelte:fragment>
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
	<!-- (footer) -->
</AppShell>
<slot></slot>