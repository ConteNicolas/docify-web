<script lang="ts">
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import * as Avatar from '$lib/components/ui/avatar/index.js';

	import Settings from 'lucide-svelte/icons/settings';
	import SignOut from 'lucide-svelte/icons/log-out';
	import { useStore } from '$lib/hooks/useStore';
	import { AUTH_KEY } from '$lib/store-keys';
	import type { AuthStore } from '$lib/stores/auth-store.svelte';
	import { goto } from '$app/navigation';
	import { getAvatarName } from '$lib/utils';

	const authStore = useStore<AuthStore>(AUTH_KEY);

	const handleSignOut = async () => {
		await authStore.signOut(async () => await goto('/sign-in'));
	};
</script>

<Sidebar.Footer class="h-20">
	<DropdownMenu.Root>
		<DropdownMenu.Trigger>
			{#snippet child({ props })}
				<Sidebar.MenuButton
					{...props}
					class="h-full data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
				>
					<div class="flex w-full flex-row items-center justify-start">
						<Avatar.Root class="ml-3">
							<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
							<Avatar.Fallback>{getAvatarName(authStore?.currentUser?.firstName, authStore?.currentUser?.lastName)}</Avatar.Fallback>
						</Avatar.Root>
						<div class="ml-3 flex w-1/2 flex-col items-start justify-center">
							<span class="text-md font-bold">{authStore?.currentUser?.firstName}</span>
							<span class="truncate text-sm font-light"
								>{authStore?.currentUser?.email && authStore?.currentUser?.email?.length > 20
									? authStore?.currentUser?.email.substring(0, 19)
									: authStore?.currentUser?.email}</span
							>
						</div>
					</div>
				</Sidebar.MenuButton>
			{/snippet}
		</DropdownMenu.Trigger>
		<DropdownMenu.Content side="top" class="mb-3 w-[--bits-dropdown-menu-anchor-width]">
			<DropdownMenu.Item class="hover:bg-orange-500 hover:text-white">
				<Settings />
				<span>Settings</span>
			</DropdownMenu.Item>
			<DropdownMenu.Item onclick={handleSignOut}>
				<SignOut />
				<span>Logout</span>
			</DropdownMenu.Item>
		</DropdownMenu.Content>
	</DropdownMenu.Root>
</Sidebar.Footer>
