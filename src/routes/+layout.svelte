<script lang="ts">
	import '../app.css';

	import { Toaster } from 'svelte-sonner';
	import { registerAllStores } from '$lib/store-register';
	import LoadingSpinner from '$lib/components/common/LoadingSpinner.svelte';
	import { ModeWatcher } from 'mode-watcher';
	
	let { children } = $props();

	registerAllStores();
</script>

<ModeWatcher />
<Toaster />
<LoadingSpinner />

{@render children()}
