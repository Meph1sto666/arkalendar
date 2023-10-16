<script lang="ts">
	import type { Furn } from '$lib/types/furn';
	export let furn: Furn | undefined;
	
	function correctSize(event:Event): void {
		if (event.target.height > event.target.width) event.target.classList.add("h-full")
		else event.target.classList.add("w-full")
	}
</script>

<div class="flex justify-center items-center w-fit relative select-none float-left h-24">
	<img
		src="/assets/furn/{furn?.iconId}.png"
		class="absolute object-center"
		alt={furn?.iconId}
		width="auto"
	/>
</div>