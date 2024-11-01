<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { PanelLeftOpen, PanelLeftClose, Bell, Moon, Sun } from 'lucide-svelte';
	import { useSidebar } from '$lib/components/ui/sidebar';
	import DashboardBreadcrumb from './DashboardBreadcrumb.svelte';

	import { toggleMode, mode } from 'mode-watcher';

	const sidebar = useSidebar();
</script>

<div class="h-full w-full flex flex-row">
	<div class="ml-3 flex flex-row h-full w-1/2 items-center justify-start">
		<Button
			variant="ghost"
			class="hover:bg-transparent hover:text-orange-400 mt-2"
			onclick={() => sidebar.toggle()}
		>
			{#if sidebar.open}
				<PanelLeftClose style="height: 26px; width: 26px;" />
			{:else}
				<PanelLeftOpen style="height: 26px; width: 26px;" />
			{/if}
		</Button>

		<DashboardBreadcrumb />
	</div>
    <div class="w-1/2 h-full flex flex-row items-end justify-end">
		<Button variant="ghost" onclick={toggleMode} class="text-md font-bold rounded-full size-12 flex items-center justify-center cursor-pointer hover:bg-transparent hover:text-orange-500 mr-3">
			{#if $mode === 'dark'}
				<Sun style="height: 20px; width: 20px;" />
			{:else}
            	<Moon style="height: 20px; width: 20px;" />
			{/if}
        </Button>
		
        <Button variant="ghost" class="text-md font-bold rounded-full size-12 flex items-center justify-center cursor-pointer hover:text-orange-500 hover:bg-transparent mr-8">
            <Bell style="height: 20px; width: 20px;" />
		</Button>
    </div>
</div>