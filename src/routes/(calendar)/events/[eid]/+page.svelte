<script lang="ts">
    import {page} from "$app/stores";
	export let data
</script>

<h1>EVENT PAGE FOR {data.id}</h1>

<pre>
    {JSON.stringify($page, null, 4)}
</pre>