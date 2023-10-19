<script lang="ts">
	import type { Furn } from '$lib/types/furn';
	export let furn: Furn | undefined;
</script>

<div class="flex justify-center items-center w-fit relative select-none float-left h-24">
	<img
		src="/assets/furn/{furn?.iconId}.png"
		class="object-center"
		alt={furn?.iconId}
	/>
</div>