<script lang="ts">
	import { page } from '$app/stores';
	import Furniture from '../../../../components/furniture.svelte';
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
<!-- 
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
</section> -->

<section class="w-full h-full">
	{#each data.eventData.missions as m}
		<table>
			<th>{m.description}</th>
			<td>
				{#each m.rewards as r}
					{#if r.type.toLowerCase() == "furn"}
						<Furniture furn={data.buildTable.get(r.id)}></Furniture>					
					{/if}
					{#if data.itemTable.get(r.id) != null}
						<Item item={data.itemTable.get(r.id)} amount={r.count}></Item>
					{/if}
				{/each}
			</td>
		</table>
	{/each}
</section>
