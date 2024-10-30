<script lang="ts">
	import { Toaster } from 'svelte-sonner';
	import '../app.css';
	import { registerAllStores } from '$lib/store-register';

	let { children } = $props();

	registerAllStores();
</script>

<Toaster />

{@render children()}
