

<script lang="ts">
	import { Separator } from '$lib/components/ui/separator';


    import * as Sheet from '$lib/components/ui/sheet/index.js';
	import CreatePersonalAppForm from './CreatePersonalAppForm.svelte';

    type CreatePersonalAppSheetProps = {
        open: boolean;
    }

    let { open = $bindable(false) }: CreatePersonalAppSheetProps = $props();

</script>

<Sheet.Root bind:open>
	<Sheet.Content>
		<Sheet.Header>
			<Sheet.Title>Create personal application</Sheet.Title>
			<Separator />
		</Sheet.Header>
		<div class="w-full">
            <CreatePersonalAppForm />
		</div>
	</Sheet.Content>
</Sheet.Root>
