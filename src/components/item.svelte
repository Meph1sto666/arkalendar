<script lang="ts">
	import type { Item } from '$lib/types/item';
	export let item: Item | undefined;
	export let amount: number

	function correctSize(event:Event): void {
		if (event.target.height > event.target.width) event.target.classList.add("h-full")
		else event.target.classList.add("w-full")
	}
</script>

<div class="flex justify-center items-center w-fit relative select-none float-left h-24" >
	<img
		src="/assets/items/bg/{Math.min(item.rarity + 1, 5)}.png"
		class="object-center w-auto relative h-full"
		alt="itm bg"
	/>
	<img
		src="/assets/items/{item?.iconId}.png"
		class="absolute object-center"
		alt={item?.iconId}
		width="auto"
		on:load={correctSize}
	/>
	<span class="z-50">
		{amount}
	</span>
</div>