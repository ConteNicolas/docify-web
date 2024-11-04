<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { useApplication } from '$lib/hooks/useApplication';
	import { useStore } from '$lib/hooks/useStore';
	import {
		ApplicationAccessLevel,
		ApplicationAccessLevelList,
		type IGetAllApplicationsByOwnerResponse
	} from '$lib/models/applications';
	import type { IPaginationList } from '$lib/models/pagination';
	import { LOADING_SPINNER_KEY } from '$lib/store-keys';
	import type { LoadingSpinnerStore } from '$lib/stores/loading-spinner-store.svelte';
	import { isApiErrorResponse } from '$lib/utils';
	import { CircleXIcon, CirclePlus, SaveIcon } from 'lucide-svelte';
	import { onMount } from 'svelte';

	import * as Select from '$lib/components/ui/select/index.js';
	import * as Sheet from '$lib/components/ui/sheet/index.js';

	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { z } from 'zod';
	import { useForm } from '$lib/hooks/useForm.svelte';
	import Label from '$lib/components/ui/label/label.svelte';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import FormErrorDisplayer from '$lib/components/common/FormErrorDisplayer.svelte';
	import ChipInput from '$lib/components/common/ChipInput.svelte';

	const createApplicationSchema = z
		.object({
			name: z.string().min(1, { message: 'Name is required' }),
			description: z.string().min(1, { message: 'Description is required' }),
			applicationAccessLevel: z.string().min(1, { message: 'Application access level is required' })
		})
		.refine(
			(data) => !Object.values(ApplicationAccessLevel).includes(data.applicationAccessLevel),
			{
				message: 'Application access level is invalid',
				path: ['applicationAccessLevel']
			}
		);

	const { formData, handleSubmit, errors } = useForm(createApplicationSchema, {
		name: '',
		description: '',
		applicationAccessLevel: ''
	});

	const { getAllApplicationsByOwner } = useApplication();

	const loadingSpinnerStore = useStore<LoadingSpinnerStore>(LOADING_SPINNER_KEY);

	let applications: IPaginationList<IGetAllApplicationsByOwnerResponse> | undefined =
		$state(undefined);

	let open = $state(false);

	let chipTags = $state<string[]>([]);

	const selectedLevel = $derived(
		ApplicationAccessLevelList.find((f) => f.value.toString() === formData.applicationAccessLevel)
			?.label ?? 'Select a level of access'
	);

	const onSubmit = async (data: any) => {
		console.log('data ', data);
	};

	onMount(async () => {
		loadingSpinnerStore.setLoading(true);

		const response = await getAllApplicationsByOwner({
			pageNumber: 1,
			pageSize: 10
		});

		if (!isApiErrorResponse(response)) {
			applications = response;
		}

		loadingSpinnerStore.setLoading(false);
	});
</script>

{#if applications?.items.length === 0}
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
			<span>Create application</span>
		</Button>
	</div>
{/if}

<Sheet.Root bind:open>
	<Sheet.Content>
		<Sheet.Header>
			<Sheet.Title>Create personal application</Sheet.Title>
			<Separator />
		</Sheet.Header>
		<div class="w-full">
			<form onsubmit={handleSubmit(onSubmit)} class="mt-9">
				<div class="flex h-auto w-full flex-col space-y-4">
					<div class="flex w-full flex-col space-y-2">
						<Label class="block">Name <span class="text-red-500">*</span></Label>
						<Input
							type="text"
							name="name"
							id="name"
							placeholder="E.g. The best app in the world"
							class="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
							bind:value={formData.name}
						/>
						<FormErrorDisplayer errors={errors['name']} />
					</div>

					<div class="flex w-full flex-col space-y-2">
						<Label class="block">Description <span class="text-red-500">*</span></Label>
						<Textarea
							name="name"
							id="name"
							placeholder="Tell us a bit about your application"
							class="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
							bind:value={formData.description}
						/>
						<FormErrorDisplayer errors={errors['description']} />
					</div>

					<div class="flex w-full flex-col space-y-2">
						<Label class="block">Access level <span class="text-red-500">*</span></Label>
						<Select.Root type="single" bind:value={formData.applicationAccessLevel}>
							<Select.Trigger class="w-full border-gray-300">{selectedLevel}</Select.Trigger>
							<Select.Content>
								{#each ApplicationAccessLevelList as accessLevel}
									<Select.Item value={accessLevel.value.toString()}>{accessLevel.label}</Select.Item
									>
								{/each}
							</Select.Content>
						</Select.Root>
						<FormErrorDisplayer errors={errors['applicationAccessLevel']} />
					</div>

					<div class="flex w-full flex-col space-y-2">
						<Label class="block">Tags (Optional)</Label>
						<ChipInput bind:chips={chipTags} placeholder="Add additional tags" />
					</div>
				</div>

				<div class="mt-6 flex w-full justify-center">
					<Button type="submit" class="w-full bg-orange-500 text-white hover:bg-purple-500 hover:text-white">
						<SaveIcon /> Save changes
					</Button>
				</div>
			</form>
		</div>
	</Sheet.Content>
</Sheet.Root>
