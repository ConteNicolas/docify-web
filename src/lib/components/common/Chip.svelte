<script lang="ts">
	import { XIcon } from 'lucide-svelte';
	import Button from '../ui/button/button.svelte';

	type ChipProps = {
		label: string;
		onDelete: () => void;
	};

	let { label, onDelete }: ChipProps = $props();
</script>

<div class="m-1 inline-flex items-center rounded-full bg-gray-200 dark:bg-secondary-background dark:text-white px-2 py-0.5 text-xs font-medium">
	{label}
	<Button
		onclick={onDelete}
		class="ml-1 rounded-full p-0.5 text-gray-500 hover:text-gray-700  dark:text-white bg-orange-500 hover:bg-orange-700 focus:outline-none"
		style="height:18px; width:18px;"
	>
		<XIcon style="width:8px; height:8px;" class="text-white" />
	</Button>
</div>
