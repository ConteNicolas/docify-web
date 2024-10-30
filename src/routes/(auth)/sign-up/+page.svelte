<script>
	import { goto } from '$app/navigation';
	import Button from '$lib/components/ui/button/button.svelte';
	import SignUpForm from './components/SignUpForm.svelte';
</script>

<div class="flex h-screen w-full flex-row">
	<div
		class="flex h-screen w-1/2 flex-col items-center justify-center bg-gradient-to-r from-purple-800 via-purple-600 to-orange-600 text-white"
	>
		<h1 class="text-6xl">Welcome to Docify!</h1>
		<span class="mt-8 text-lg">Already have an account?</span>
		<Button onclick={() => goto('sign-in')} class="mt-3 rounded-3xl text-white bg-orange-500">Sign in</Button>
	</div>
	<div class="w-1/2 flex-col">
		<div class="flex h-full w-full flex-col items-center justify-center">
			<h4 class="pacifico-regular text-6xl">Docify</h4>
			<SignUpForm />
		</div>
	</div>
</div>
