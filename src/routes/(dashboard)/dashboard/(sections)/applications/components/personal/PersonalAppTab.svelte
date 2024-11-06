<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { useApplication } from '$lib/hooks/useApplication';
	import { useStore } from '$lib/hooks/useStore';
	import { ApplicationAccessLevel, type IGetAllApplicationsByOwnerResponse } from '$lib/models/applications';
	import type { IPaginationList } from '$lib/models/pagination';
	import { LOADING_SPINNER_KEY } from '$lib/store-keys';
	import type { LoadingSpinnerStore } from '$lib/stores/loading-spinner-store.svelte';
	import { isApiErrorResponse } from '$lib/utils';
	import { CircleXIcon, CirclePlus, PlusIcon, LockKeyholeIcon, LockKeyholeOpenIcon } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import CreatePersonalAppSheet from './CreatePersonalAppSheet.svelte';

	import * as Table from '$lib/components/ui/table';
	import * as Pagination from '$lib/components/ui/pagination';
	import { Input } from '$lib/components/ui/input';

	const { getAllApplicationsByOwner } = useApplication();

	const loadingSpinnerStore = useStore<LoadingSpinnerStore>(LOADING_SPINNER_KEY);

	let applications: IPaginationList<IGetAllApplicationsByOwnerResponse> = $state(
		{} as IPaginationList<IGetAllApplicationsByOwnerResponse>
	);

	let open = $state(false);

	onMount(async () => {
		loadingSpinnerStore.setLoading(true);

		const response = await getAllApplicationsByOwner({
			pageNumber: 1,
			pageSize: 10
		});

		if (!isApiErrorResponse(response)) {
			applications = response;
			console.log(applications);
		}

		loadingSpinnerStore.setLoading(false);
	});
</script>

{#if !applications || applications?.totalCount === 0}
	<div class="flex h-full w-full flex-col items-center justify-center">
		<CircleXIcon size="100" color="red" />
		<h1 class="mt-5 text-2xl font-bold">No personal applications found</h1>
		<span class="mt-2 text-lg font-normal">Get started by creating an application</span>
		<Button
			variant="outline"
			class="mt-6 bg-orange-500 text-white hover:bg-purple-500 hover:text-white"
			onclick={() => (open = true)}
		>
			<CirclePlus class="size-4" />
			<span class="font-normal">Create application</span>
		</Button>
	</div>
{:else}
	<div class="flex h-full w-full flex-col">
		<div class="flex h-[12%] w-full items-center justify-between p-10">
			<Input placeholder="&#128269; Search" class="w-1/3 text-md text-white dark:border-none border-2" />
			<Button class="bg-orange-500 text-white hover:bg-orange-700" onclick={() => (open = true)}>
				<CirclePlus class="size-4" /> New application
			</Button>
		</div>
		<div class="flex h-[76%] w-full items-center justify-center">
			<div class="bg-background w-[94%] rounded-md dark:border-background border-grey-500 border-2 overflow-hidden h-full">
				<Table.Root class="h-full w-full">
					<Table.Header class="dark:border-secondary-background border-500-gray dark:border-b-4 border-b-2">
						<Table.Head class="px-6 py-3 text-center dark:text-white text-md font-bold w-1/5">Name</Table.Head>
						<Table.Head class="px-6 py-3 text-center dark:text-white text-md font-bold w-1/5">Access level</Table.Head>
						<Table.Head class="px-6 py-3 text-center dark:text-white text-md font-bold w-1/5">Type</Table.Head>
						<Table.Head class="px-6 py-3 text-center dark:text-white text-md font-bold w-1/5">Last publication date</Table.Head>
					</Table.Header>
					<Table.Body class="h-full w-full">
						{#each applications.items as application, index}
							<Table.Row class="border-b hover:bg-orange-500 transition w-full h-16 text-center cursor-pointer dark:border-b-white {index % 2 === 0 ? 'bg-background' : 'bg-secondary-background'}">
								<Table.Cell class="px-6 text-md py-4 font-normal w-1/5">{application.name}</Table.Cell>
								<Table.Cell class="px-6 py-4 text-md font-normal w-full flex flex-row justify-center items-center">
									{#if application.accessLevel === ApplicationAccessLevel.Public}
										<LockKeyholeOpenIcon />
									{:else}
										<LockKeyholeIcon />
									{/if}
									<span class="text-sm font-normal ml-2">{application.accessLevelDescription}</span>
								</Table.Cell>
								<Table.Cell class="px-6 py-4 text-md font-normal w-1/5">Personal</Table.Cell>
								<Table.Cell class="px-6 py-4 w-1/5">
									<span class="px-2 py-1 rounded-full bg-purple-500 text-md font-thin text-white">
										{application?.lastPublicationDate ?? 'No published'}
									</span>
								</Table.Cell>
							</Table.Row>
						{/each}
					</Table.Body>
				</Table.Root>
			</div>
		</div>						
		<div class="flex h-[12%] w-full items-center justify-center">
			<Pagination.Root count={applications.totalCount} perPage={applications.totalPages}>
				{#snippet children({ pages, currentPage })}
					<Pagination.Content>
						<Pagination.Item>
							<Pagination.PrevButton />
						</Pagination.Item>
						{#each pages as page (page.key)}
							{#if page.type === 'ellipsis'}
								<Pagination.Item>
									<Pagination.Ellipsis />
								</Pagination.Item>
							{:else}
								<Pagination.Item inlist={currentPage === page.value}>
									<Pagination.Link {page} isActive={currentPage === page.value}>
										{page.value}
									</Pagination.Link>
								</Pagination.Item>
							{/if}
						{/each}
						<Pagination.Item>
							<Pagination.NextButton />
						</Pagination.Item>
					</Pagination.Content>
				{/snippet}
			</Pagination.Root>
		</div>
	</div>
{/if}

<CreatePersonalAppSheet bind:open />
