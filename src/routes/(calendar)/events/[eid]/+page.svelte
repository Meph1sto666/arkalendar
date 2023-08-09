<script lang="ts">
	import { page } from '$app/stores';
	import Item from '../../../../components/item.svelte';
	export let data;
</script>

<!-- <table class="w-full">
	{#each Object.keys(data.eventData.summary) as k}
		<tr>
			<th>{k}</th>
			{#each data.eventData.summary[k] as i}	
				<td>
					<Item item={data.itemTable.get(i.id)} />
				</td>
			{/each}
		</tr>
	{/each}
</table> -->

<section class="w-full h-full">
	{#each Object.keys(data.eventData.summary) as k}
		<div class="card p-4">
			<header>
				<h1 class="h3">{k}</h1>
			</header>
			<div>
				{#each data.eventData.summary[k] as i}
					<Item item={data.itemTable.get(i.id)} />
				{/each}
			</div>
		</div>
	{/each}
</section>
