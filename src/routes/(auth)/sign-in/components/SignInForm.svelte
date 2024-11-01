<script lang="ts">
	import { goto } from '$app/navigation';
	import FormErrorDisplayer from '$lib/components/FormErrorDisplayer.svelte';
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

	export const signInFormSchema = z.object({
		email: z.string().email({ message: 'Invalid email address' }),
		password: z.string().min(8, { message: 'Password must be at least 8 characters long' })
	});

	const { formData, handleSubmit, errors } = useForm(signInFormSchema, {
		email: '',
		password: ''
	});

	const onSubmit = async (data: any) => {
		loadingSpinnerStore.setLoading(true);
		const response = await authStore.signIn(data)

		if (isApiErrorResponse(response)) {
			toast.error(response.message);
			loadingSpinnerStore.setLoading(false);
			return;
		}

		
		toast.success('Successfully signed in');
	
		loadingSpinnerStore.setLoading(false);

		goto("/dashboard");
	};
</script>

<form onsubmit={handleSubmit(onSubmit)} class="mt-16 w-3/4">
	<div class="flex w-full flex-col space-y-4">
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
	</div>

	<div class="mt-6 w-full">
		<Checkbox id="remember-me" aria-labelledby="remember-me" />
		<Label for="remember-me">Remember me</Label>
	</div>

	<div class="mt-8 flex w-full justify-center">
		<Button
			type="submit"
			class="text-md h-12 w-full rounded-3xl bg-purple-700 px-4 py-2 font-bold text-white shadow-lg transition hover:bg-purple-600"
		>
			Sign in
		</Button>
	</div>
</form>
