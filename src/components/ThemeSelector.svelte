<script lang="ts">
	import { enhance } from '$app/forms';

	// Types
	import type { SubmitFunction } from '@sveltejs/kit';

	// Components & Utilities
	import { AppBar, LightSwitch, popup, modalStore } from '@skeletonlabs/skeleton';

	// Stores
	import { storeTheme } from '$lib/stores';


	const themes = [
		{ type: 'skeleton', name: 'Skeleton', icon: '💀' },
		{ type: 'modern', name: 'Modern', icon: '🤖' },
		{ type: 'rocket', name: 'Rocket', icon: '🚀' },
		{ type: 'seafoam', name: 'Seafoam', icon: '🧜‍♀️' },
		{ type: 'vintage', name: 'Vintage', icon: '📺' },
		{ type: 'sahara', name: 'Sahara', icon: '🏜️' },
		{ type: 'hamlindigo', name: 'Hamlindigo', icon: '👔' },
		{ type: 'gold-nouveau', name: 'Gold Nouveau', icon: '💫' },
		{ type: 'crimson', name: 'Crimson', icon: '⭕' }
		// { type: 'seasonal', name: 'Seasonal', icon: '🎆' }
		// { type: 'test', name: 'Test', icon: '🚧' },
	];

	const setTheme: SubmitFunction = () => {
		return async ({ result, update }) => {
			await update();
			if (result.type === 'success') {
				const theme = result.data?.theme as string;
				storeTheme.set(theme);
			}
		};
	};
</script>

<div>
	<!-- trigger -->
	<button class="btn hover:variant-soft-primary" use:popup={{ event: 'click', target: 'theme' }}>
		<i class="fa-solid fa-palette text-lg md:!hidden" />
		<span class="hidden md:inline-block">Theme</span>
		<i class="fa-solid fa-caret-down opacity-50" />
	</button>
	<!-- popup -->
	<div class="card p-4 w-60 shadow-xl" data-popup="theme">
		<div class="space-y-4">
			<section class="flex justify-between items-center">
				<h6 class="h6">Mode</h6>
				<LightSwitch />
			</section>
			<nav class="list-nav p-4 -m-4 max-h-64 lg:max-h-[500px] overflow-y-auto">
				<form action="/?/setTheme" method="POST" use:enhance={setTheme}>
					<ul>
						{#each themes as { icon, name, type }}
							<li>
								<button
									class="option w-full h-full"
									type="submit"
									name="theme"
									value={type}
									class:bg-primary-active-token={$storeTheme === type}
								>
									<span>{icon}</span>
									<span>{name}</span>
								</button>
							</li>
						{/each}
					</ul>
				</form>
			</nav>
			<div>
				<a class="btn variant-ghost-surface w-full" href="/docs/generator">Create a Theme</a>
			</div>
		</div>
		<div class="arrow bg-surface-100-800-token" />
	</div>
</div>