<script lang="ts">
	import Calendar from 'lucide-svelte/icons/calendar';
	import House from 'lucide-svelte/icons/house';
	import Inbox from 'lucide-svelte/icons/inbox';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';

	const items = [ 
		{
			title: 'Api marketplace',
			url: '#',
			icon: Calendar
		},
		{
			title: 'Applications',
			url: '#',
			icon: House
		},
		{
			title: 'Organizations',
			url: '#',
			icon: Inbox
		},
		{
			title: 'Settings',
			url: '#',
			icon: Calendar
		}
	];
</script>

<Sidebar.Root>
	<Sidebar.Header class="w-full items-center justify-center">
		<h1 class="pacifico-regular ml-3 text-4xl font-bold">Docify 🗃️</h1>
	</Sidebar.Header>
	<Sidebar.Content class="mt-5">
		<Sidebar.Group>
			<Sidebar.GroupContent>
				<Sidebar.Menu>
					{#each items as item}
						<Sidebar.MenuItem>
							<Sidebar.MenuButton class="font-medium text-base hover:bg-orange-400 hover:text-white">  
								{#snippet child({ props })}
									<a href={item.url} {...props}>
										<item.icon class="sidebar-icon-size mr-3" />
										<span class="ml-1 text-md">{item.title}</span>
									</a>
								{/snippet}
							</Sidebar.MenuButton>
						</Sidebar.MenuItem>
					{/each}
				</Sidebar.Menu>
			</Sidebar.GroupContent>
		</Sidebar.Group>
	</Sidebar.Content>
	<Sidebar.Footer>
		<div class="flex w-full flex-row ml-2">
			<div
				class="flex w-11 items-center justify-center rounded-full bg-orange-600 font-bold text-white"
			>
				CA
			</div>
			<div class="ml-3 flex w-2/3 flex-col">
				<span class="text-md font-bold">Usuario</span>
				<span class="text-sm font-light">admin@admin.com</span>
			</div>
		</div>
	</Sidebar.Footer>
</Sidebar.Root>


<style>
	.sidebar-icon-size {
		height: 30px !important;
		width: 30px !important;
	}
</style>