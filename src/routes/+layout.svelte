<script lang="ts">
	import { Toaster } from 'svelte-sonner';
	import '../app.css';
	import { registerAllStores } from '$lib/store-register';
	import { ModeWatcher } from 'mode-watcher';

	let { children } = $props();

	registerAllStores();
</script>

<Toaster />
<ModeWatcher />

{@render children()}
