<script lang="ts">
	import { PlusCircle } from 'lucide-svelte';
import Input from '../ui/input/input.svelte';
	import Chip from './Chip.svelte';
	import { Button } from '../ui/button';

	type ChipInputProps = {
		chips: string[];
		placeholder?: string | undefined;
		disabled?: boolean;
	};

	let { chips = $bindable([]), placeholder, disabled }: ChipInputProps = $props();

	let inputValue = $state('');

	function addChip() {
		if (inputValue.trim() && !chips.includes(inputValue.trim())) {
			chips = [...chips, inputValue.trim()];
			inputValue = '';
		}
	}

	function removeChip(chipToRemove: string) {
		chips = chips.filter((chip) => chip !== chipToRemove);
	}
</script>

<div class="w-full flex justify-between">
	<Input
		type="text"
		bind:value={inputValue}
		placeholder={placeholder}
		onkeydown={(e) => e.key === 'Enter' && addChip()}
		class="w-10/12 mb-3 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
		disabled={disabled}
	/>
	<Button variant="ghost" size="icon" class="w-1/6 hover:bg-transparent hover:text-orange-500" onclick={addChip}>
		<PlusCircle style="width: 22px; height: 22px;" />
	</Button>
</div>

<div class="flex flex-wrap">
	{#each chips as chip}
		<Chip label={chip} onDelete={() => removeChip(chip)} />
	{/each}
</div>
