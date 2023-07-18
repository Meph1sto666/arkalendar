<script>
    import Calendar from "../components/Calendar.svelte";
	import { AppBar, AppShell } from '@skeletonlabs/skeleton';
</script>
<AppShell>
	<svelte:fragment slot="sidebarRight">
		<Calendar></Calendar>
	</svelte:fragment>
</AppShell>