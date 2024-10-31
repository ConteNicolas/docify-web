
<script lang="ts">
    import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import House from 'lucide-svelte/icons/house';
    import Cubes from 'lucide-svelte/icons/boxes';
    import Stores from 'lucide-svelte/icons/store';
    import Users from 'lucide-svelte/icons/users';
    import ChartColumn from 'lucide-svelte/icons/chart-column';
    import FingerPrint from 'lucide-svelte/icons/fingerprint';
    import CircleHelp from 'lucide-svelte/icons/circle-help';
    import Network from 'lucide-svelte/icons/network';
    import Microchip from 'lucide-svelte/icons/microchip';

    const items = [
        {
            title: 'Home',
            url: '#',
            icon: House
        },
        {
            title: 'Marketplace',
            url: '#',
            icon: Stores
        },
        {
            title: 'Applications',
            url: '#',
            icon: Cubes
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
            icon: FingerPrint
        },
        {
            title: 'Integrations',
            url: '#',
            icon: Microchip
        },
        {
            title: "Webhooks",
            url: "#",
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
                        <Sidebar.MenuButton class="font-medium text-base hover:bg-orange-400 hover:text-white h-10">  
                            {#snippet child({ props })}
                                <a href={item.url} {...props}>
                                    <item.icon class="sidebar-icon-size ml-3" />
                                    <span class="ml-2 text-md">{item.title}</span>
                                </a>
                            {/snippet}
                        </Sidebar.MenuButton>
                    </Sidebar.MenuItem>
                {/each}
            </Sidebar.Menu>
        </Sidebar.GroupContent>
    </Sidebar.Group>
</Sidebar.Content>