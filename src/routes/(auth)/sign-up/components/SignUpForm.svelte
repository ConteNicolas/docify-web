<script lang="ts">
	import { goto } from '$app/navigation';
	import FormErrorDisplayer from '$lib/components/common/FormErrorDisplayer.svelte';
	import { Button } from '$lib/components/ui/button';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { Input } from '$lib/components/ui/input';
	import Label from '$lib/components/ui/label/label.svelte';
	import { useForm } from '$lib/hooks/useForm.svelte';
	import { useStore } from '$lib/hooks/useStore';
	import { AUTH_KEY, LOADING_SPINNER_KEY } from '$lib/store-keys';
	import { AuthStore } from '$lib/stores/auth-store.svelte';
	import type { LoadingSpinnerStore } from '$lib/stores/loading-spinner-store.svelte';
	import { isApiErrorResponse } from '$lib/utils';
	import { toast } from 'svelte-sonner';
	import { z } from 'zod';

	const authStore = useStore<AuthStore>(AUTH_KEY);
	const loadingSpinnerStore = useStore<LoadingSpinnerStore>(LOADING_SPINNER_KEY);

	export const signUpFormSchema = z.object({
		firstName: z.string().min(2, { message: 'First name must be at least 2 characters long' }),
		lastName: z.string().min(2, { message: 'Last name must be at least 2 characters long' }),
		email: z.string().email({ message: 'Invalid email address' }),
		password: z.string().min(8, { message: 'Password must be at least 8 characters long' }),
		confirmPassword: z
			.string()
			.min(8, { message: 'Password must be at least 8 characters long' })
	})
    .refine((data) => data.password === data.confirmPassword, {
        message: 'Passwords do not match',
        path: ['confirmPassword'],
    });

	const { formData, handleSubmit, errors } = useForm(signUpFormSchema, {
        firstName: '',
        lastName: '',
		email: '',
		password: '',
        confirmPassword: ''
	});

	const onSubmit = async (data: any) => {
		loadingSpinnerStore.setLoading(true);
		const response = await authStore.signUp(data);

		if (isApiErrorResponse(response)) {
			loadingSpinnerStore.setLoading(false);
			toast.error(response.message);
			return;
		}

		loadingSpinnerStore.setLoading(false);

		toast.success('Successfully signed up');

		await goto('/sign-in');
	};
</script>

<form onsubmit={handleSubmit(onSubmit)} class="mt-16 w-3/4">
	<div class="flex w-full flex-col space-y-4">
		<div class="flex w-full flex-col space-y-2">
			<Label class="block">First name</Label>
			<Input
				type="text"
				name="firstName"
				id="firstName"
				placeholder="E.g. John"
				class="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
				bind:value={formData.firstName}
			/>
			<FormErrorDisplayer errors={errors['firstName']} />
		</div>

		<div class="flex w-full flex-col space-y-2">
			<Label class="block">Last name</Label>
			<Input
				type="text"
				name="lastName"
				id="lastName"
				placeholder="Foo"
				class="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
				bind:value={formData.lastName}
			/>
			<FormErrorDisplayer errors={errors['lastName']} />
		</div>        

		<div class="flex w-full flex-col space-y-2">
			<Label class="block">Email</Label>
			<Input
				type="text"
				name="email"
				id="email"
				placeholder="E.g. john@email.com"
				class="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
				bind:value={formData.email}
			/>
			<FormErrorDisplayer errors={errors['email']} />
		</div>

		<div class="flex w-full flex-col space-y-2">
			<Label class="block">Password</Label>
			<Input
				type="password"
				name="password"
				id="password"
				placeholder="Enter your password"
				class="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
				bind:value={formData.password}
			/>
			<FormErrorDisplayer errors={errors['password']} />
		</div>

		<div class="flex w-full flex-col space-y-2">
			<Label class="block">Confirm password</Label>
			<Input
				type="password"
				name="confirmPassword"
				id="confirmPassword"
				placeholder="Confirm your password"
				class="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
				bind:value={formData.confirmPassword}
			/>
			<FormErrorDisplayer errors={errors['confirmPassword']} />
		</div>        
	</div>

	<div class="mt-8 flex w-full justify-center">
		<Button
			type="submit"
			class="text-md h-12 w-full rounded-3xl bg-purple-700 px-4 py-2 font-bold text-white shadow-lg transition hover:bg-purple-600"
		>
			Sign up
		</Button>
	</div>
</form>
