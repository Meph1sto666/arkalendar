<script lang='ts'>
	import { AppBar, AppShell } from "@skeletonlabs/skeleton";
    import { getGameTime } from "$lib";

	import '../styles/themes/dark.postcss';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';

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
				<nav>
					<ul>
						<li>
							<a href="/">HOME</a>
							<a href="/cal">Calendar</a>
						</li>
					</ul>
				</nav>
			</svelte:fragment>
			<div class="text-4xl text-center">
				<span class="first-letter: text-secondary-600 p-0 m-0">AR</span>
				<span class="first-letter: text-primary-600 p-0 m-0">K</span>
				<span class="first-letter: text-tertiary-600 p-0 m-0">ALENDAR</span>
			</div>
			<svelte:fragment slot="trail">
				<span class="">
					//{time.getFullYear().toString().padStart(4,"0")}-{time.getMonth().toString().padStart(2,"0")}-{time.getDate().toString().padStart(2,"0")}////{time.getHours().toString().padStart(2,"0")}-{time.getMinutes().toString().padStart(2,"0")}-{time.getSeconds().toString().padStart(2,"0")}//
				</span>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<slot />
	<svelte:fragment slot="footer">Page Footer</svelte:fragment>
</AppShell>