<script lang="ts">
	// Dependency: Highlight JS
	import hljs from 'highlight.js';
	import '$lib/styles/highlight-js.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	storeHighlightJs.set(hljs);

	// Dependency: Floating UI
	import { storePopup } from '@skeletonlabs/skeleton';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	// SvelteKit Imports
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	// import { afterNavigate } from '$app/navigation';

	// Types
	// import type { ModalComponent } from '@skeletonlabs/skeleton';

	// Stores
	import { storeTheme } from '$lib/stores';
	import { storePreview } from '$lib/layouts/DocsThemer/stores';

	// import DocsSearch from '$lib/modals/DocsSearch/DocsSearch.svelte';
	// // NOTE: (forms example uses direct method)
	// import ModalExampleList from '$lib/modals/examples/ModalExampleList.svelte';
	// import ModalExampleEmbed from '$lib/modals/examples/ModalExampleEmbed.svelte';
	// import ModalExampleImage from '$lib/modals/examples/ModalExampleImage.svelte';

	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// import '$lib/styles/blog.css';
	import '../app.postcss';

	// Handle Vercel Production Mode
	import type { LayoutServerData } from './$types';
	export let data: LayoutServerData;
	// Pass to Store for Ad Conditionals
	// IMPORTANT: DO NOT MODIFY THIS UNLESS YOU KNOW WHAT YOU'RE DOING
	// import { storeVercelProductionMode } from '$lib/stores';
	// storeVercelProductionMode.set(data.vercelEnv === 'production');
	// Init Vercel Analytics
	// if ($storeVercelProductionMode) import('@vercel/analytics').then((mod) => mod.inject());

	// Registered list of Components for Modals
	// const modalComponentRegistry: Record<string, ModalComponent> = {
	// 	modalSearch: { ref: DocsSearch },
	// 	exampleList: { ref: ModalExampleList },
	// 	exampleEmbed: { ref: ModalExampleEmbed },
	// 	exampleImage: { ref: ModalExampleImage }
	// };

	function matchPathWhitelist(pageUrlPath: string): boolean {
		// If homepage route
		if (pageUrlPath === '/') return true;
		// If any blog route
		if (pageUrlPath.includes('/blog')) return true;
		return false;
	}

	// Set body `data-theme` based on current theme status
	storeTheme.subscribe(setBodyThemeAttribute);

	storePreview.subscribe(setBodyThemeAttribute);
	function setBodyThemeAttribute(): void {
		if (!browser) return;
		document.body.setAttribute('data-theme', $storePreview ? 'generator' : $storeTheme);
	}

	// Reactive
	// Current Theme Data
	$: ({ currentTheme } = data);
	// Disable left sidebar on homepage
	// $: slotSidebarLeft = matchPathWhitelist($page.url.pathname) ? 'w-0' : 'bg-surface-50-900-token lg:w-auto';





    import { getGameTime } from "$lib";
	// // The ordering of these imports is critical to your app working properly
	// import "../styles/themes/dark.postcss";
	// // If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// // Most of your app wide CSS should be put in this file
	// import '../app.postcss';
	// import ThemeSelector from "../components/ThemeSelector.svelte";

	let time = getGameTime()
	function updateTime() {
		time = getGameTime()
	}
	const interval = setInterval(updateTime, 1000);
</script>

<svelte:head>
	{@html `\<style\>${currentTheme}\</style\>`}
</svelte:head>

<nav>
	<div id="nav-back" />
	<div id="nav-home" />
	<div id="en-game-time-clock">
		//{time.getFullYear().toString().padStart(4,"0")}/{time.getMonth().toString().padStart(2,"0")}-{time.getDate().toString().padStart(2,"0")
	}////{time.getHours().toString().padStart(2,"0")}-{time.getMinutes().toString().padStart(2,"0")}-{time.getSeconds().toString().padStart(2,"0")}//
	<div>
	<!-- <ThemeSelector></ThemeSelector> -->
</nav>
<slot></slot>