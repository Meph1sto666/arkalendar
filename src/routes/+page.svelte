<script>
    import Calendar from "../components/calendar.svelte";
	import { AppBar, AppShell } from '@skeletonlabs/skeleton';
</script>
<AppShell>
	<svelte:fragment slot="sidebarRight">
		<Calendar></Calendar>
	</svelte:fragment>
</AppShell>