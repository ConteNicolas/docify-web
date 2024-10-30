<script lang="ts">
	import { SidebarProvider, SidebarTrigger } from '$lib/components/ui/sidebar';
	import { useStore } from '$lib/hooks/useStore';
	import { AUTH_KEY } from '$lib/store-keys';
	import type { AuthStore } from '$lib/stores/auth-store.svelte';
	import DashboardSidebar from './dashboard/components/DashboardSidebar.svelte';

	const authStore = useStore<AuthStore>(AUTH_KEY);

	let { children } = $props();

	// onMount(async () => {
	// 	console.log('Autenticado 🔐 ', authStore?.isAuthenticated);

	// 	if (!authStore?.isAuthenticated) {
	// 		await goto('/sign-in');
	// 	}
	// });
</script>

<SidebarProvider>
	<DashboardSidebar />
	<main>
		<SidebarTrigger class="hover:bg-orange-400 size-12 hover:text-white mt-3 ml-3" />
		{@render children?.()}
	</main>
</SidebarProvider>