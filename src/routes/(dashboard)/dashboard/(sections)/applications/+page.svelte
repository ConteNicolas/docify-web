<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import OrganizationApplicationsTable from './components/OrganizationApplicationsTable.svelte';
	import PersonalApplicationsTable from './components/PersonalApplicationsTable.svelte';
</script>

<div
	class="flex h-full justify-center w-full rounded-md border-2 border-gray-50 bg-secondary-background dark:border-none"
>
	<Tabs.Root class="w-full h-full" value="personal">
		<div class="w-full flex justify-center items-center" style="height: 6%;">
			<Tabs.List class="mt-2">
				<Tabs.Trigger value="personal">Personal</Tabs.Trigger>
				<Tabs.Trigger value="organization">Organization</Tabs.Trigger>
			</Tabs.List>
		</div>
		<div class="w-full" style="height: 94%;">
			<Tabs.Content class="w-full h-full" value="personal">
				<PersonalApplicationsTable />
			</Tabs.Content>
			<Tabs.Content class="w-full h-full" value="organization">
				<OrganizationApplicationsTable />
			</Tabs.Content>
		</div>
	</Tabs.Root>
</div>
