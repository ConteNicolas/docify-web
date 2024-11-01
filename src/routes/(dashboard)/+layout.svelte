<script lang="ts">
	import { SidebarProvider } from '$lib/components/ui/sidebar';
	import { useStore } from '$lib/hooks/useStore';
	import { AUTH_KEY } from '$lib/store-keys';
	import type { AuthStore } from '$lib/stores/auth-store.svelte';
	import { onMount } from 'svelte';
	
	import DashboardNavbar from './dashboard/components/DashboardNavbar.svelte';
	import DashboardSidebar from './dashboard/components/DashboardSidebar.svelte';
	import { goto } from '$app/navigation';

	const authStore = useStore<AuthStore>(AUTH_KEY);

	let { children } = $props();

	onMount(async () => {
		console.log('Autenticado 🔐 ', authStore?.isAuthenticated);

		if (!authStore?.isAuthenticated) {
			await goto('/sign-in');
		}
	});
</script>

{#if authStore?.isAuthenticated}
	<SidebarProvider>
		<DashboardSidebar />
		<main class="w-full h-screen flex flex-col">
			<div class="w-full" style="height: 7%;">
				<DashboardNavbar />
			</div>
			<div class="w-full p-6" style="height: 93%;">
				{@render children?.()}
			</div>
		</main>
	</SidebarProvider>
{/if}