<script lang="ts">
	import FormErrorDisplayer from '$lib/components/common/FormErrorDisplayer.svelte';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';
	import { useApplication } from '$lib/hooks/useApplication';
	import { useForm } from '$lib/hooks/useForm.svelte';
	import { useStore } from '$lib/hooks/useStore';
	import {
		ApplicationAccessLevel,
		ApplicationAccessLevelList,
		ApplicationType,
		type IGetAllApplicationsByOwnerResponse
	} from '$lib/models/applications';
	import * as Select from '$lib/components/ui/select/index.js';
	import { z } from 'zod';
	import { Button } from '$lib/components/ui/button';
	import ChipInput from '$lib/components/common/ChipInput.svelte';
	import { SaveIcon } from 'lucide-svelte';
	import { isApiErrorResponse } from '$lib/utils';
	import { toast } from 'svelte-sonner';
	import { LOADING_SPINNER_KEY } from '$lib/store-keys';
	import type { LoadingSpinnerStore } from '$lib/stores/loading-spinner-store.svelte';

	
	const loadingSpinnerStore = useStore<LoadingSpinnerStore>(LOADING_SPINNER_KEY);

	const { createApplication } = useApplication();

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

	let chipTags = $state<string[]>([]);

	const selectedLevel = $derived(
		ApplicationAccessLevelList.find((f) => f.value.toString() === formData.applicationAccessLevel)
			?.label ?? 'Select a level of access'
	);

	const onSubmit = async (data: any) => {
		loadingSpinnerStore.setLoading(true);

		var result = await createApplication({
			name: data.name,
			description: data.description,
			userId: data.userId,
			accessLevel: parseInt(data.applicationAccessLevel),
			tags: chipTags,
			applicationType: ApplicationType.Personal
		});

		if (isApiErrorResponse(result)) {
			loadingSpinnerStore.setLoading(false);
			toast.error(result.message);
			return;
		}

		loadingSpinnerStore.setLoading(false);
		toast.success('Application created successfully');
	};
</script>

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
						<Select.Item value={accessLevel.value.toString()}>{accessLevel.label}</Select.Item>
					{/each}
				</Select.Content>
			</Select.Root>
			<FormErrorDisplayer errors={errors['applicationAccessLevel']} />
		</div>

		<div class="flex w-full flex-col space-y-2">
			<Label class="block">Tags (Optional)</Label>
			<ChipInput bind:chips={chipTags} placeholder="Add additional tags" disabled={chipTags.length > 5} />
		</div>
	</div>

	<div class="mt-6 flex w-full justify-center">
		<Button
			type="submit"
			class="w-full bg-orange-500 text-white hover:bg-purple-500 hover:text-white"
		>
			<SaveIcon /> Save changes
		</Button>
	</div>
</form>
