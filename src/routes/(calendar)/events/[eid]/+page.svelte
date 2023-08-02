<script lang="ts">
	// import { Table, tableMapperValues } from '@skeletonlabs/skeleton';
	// import type { TableSource } from '@skeletonlabs/skeleton';
	import {page} from "$app/stores";
	import Item from "../../../../components/item.svelte";
	export let data;
	// const tableSimple: TableSource = {
		//     head: ["Item", "Amount"],
		//     body: tableMapperValues(data.eventData.summary.mission_rewards, ["name", "amount"])
		// }
</script>

<!-- <Table source="{tableSimple}"></Table> -->

<!-- {data.itemTable} -->
<!-- <img src="./data/assets/items/MTL_ASC_DI.png" alt=""> -->
{#each data.eventData.summary.shop as i}
	<Item item={i}></Item>
{/each}

<pre>
	{JSON.stringify($page, null, 4)}
</pre>