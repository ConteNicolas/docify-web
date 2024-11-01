<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import {
		House,
		Boxes,
		Store,
		Users,
		ChartColumn,
		Fingerprint,
		CircleHelp,
		Network,
		Microchip
	} from 'lucide-svelte';

	const items = [
		{
			title: 'Home',
			url: '/dashboard',
			icon: House
		},
		{
			title: 'Marketplace',
			url: '#',
			icon: Store
		},
		{
			title: 'Applications',
			url: '/dashboard/applications',
			icon: Boxes
		},
		{
			title: 'Organizations',
			url: '#',
			icon: Users
		},
		{
			title: 'Metrics',
			url: '#',
			icon: ChartColumn
		},
		{
			title: 'Security',
			url: '#',
			icon: Fingerprint
		},
		{
			title: 'Integrations',
			url: '#',
			icon: Microchip
		},
		{
			title: 'Webhooks',
			url: '#',
			icon: Network
		},
		{
			title: 'Help',
			url: '#',
			icon: CircleHelp
		}
	];
</script>

<Sidebar.Content class="mt-5">
	<Sidebar.Group>
		<Sidebar.GroupContent>
			<Sidebar.Menu>
				{#each items as item}
					<Sidebar.MenuItem>
						<Sidebar.MenuButton
							class="h-10 font-medium hover:bg-orange-500 hover:text-white"
						>
							{#snippet child({ props })}
								<a href={item.url} {...props}>
									<item.icon class="ml-3" style="width: 25px; height: 25px;" />
									<span class="text-base ml-3">{item.title}</span>
								</a>
							{/snippet}
						</Sidebar.MenuButton>
					</Sidebar.MenuItem>
				{/each}
			</Sidebar.Menu>
		</Sidebar.GroupContent>
	</Sidebar.Group>
</Sidebar.Content>
