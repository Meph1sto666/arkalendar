<script lang="ts">
	import {page} from "$app/stores";
	import Item from "../../../../components/item.svelte";
	export let data;
</script>

<ul>
	{#each Object.keys(data.eventData.summary) as k}
	<li>

		{#each data.eventData.summary[k] as i}
			<Item item={data.itemTable.get(i.id)}></Item>
		{/each}
	</li>
	{/each}
</ul>


<!-- 
<pre>
	{JSON.stringify($page, null, 4)}
</pre> -->