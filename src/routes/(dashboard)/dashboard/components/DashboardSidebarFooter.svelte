<script lang="ts">
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';

	import Settings from 'lucide-svelte/icons/settings';
	import SignOut from 'lucide-svelte/icons/log-out';
	import { useStore } from '$lib/hooks/useStore';
	import { AUTH_KEY } from '$lib/store-keys';
	import type { AuthStore } from '$lib/stores/auth-store.svelte';

	const authStore = useStore<AuthStore>(AUTH_KEY);

</script>

<Sidebar.Footer class="h-20">
	<DropdownMenu.Root>
		<DropdownMenu.Trigger>
			{#snippet child({ props })}
				<Sidebar.MenuButton
					{...props}
					class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground h-full"
				>
					<div class="flex w-full flex-row items-center justify-start">
						<div
							class="ml-2 flex size-8 items-center justify-center rounded-full bg-orange-600 text-white"
						>
							CA
						</div>
						<div class="ml-3 flex w-1/2 flex-col items-start justify-center">
							<span class="text-md font-bold">Usuario</span>
							<span class="text-sm font-light">admin@admin.com</span>
						</div>
					</div>
				</Sidebar.MenuButton>
			{/snippet}
		</DropdownMenu.Trigger>
		<DropdownMenu.Content side="top" class="mb-3 w-[--bits-dropdown-menu-anchor-width]">
			<DropdownMenu.Item class="hover:bg-orange-400 hover:text-white">
				<Settings />
				<span>Settings</span>
			</DropdownMenu.Item>
			<DropdownMenu.Item onclick={() => authStore.signOut()}>
				<SignOut />
				<span>Logout</span>
			</DropdownMenu.Item>
		</DropdownMenu.Content>
	</DropdownMenu.Root>
</Sidebar.Footer>
