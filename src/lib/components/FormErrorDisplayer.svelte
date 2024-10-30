<script lang="ts">
    type FormErrorDisplayerProps = {
        errors: string[] | string | undefined
    }

    let { errors }: FormErrorDisplayerProps = $props();

</script>

{#if errors}
    <div class="text-destructive text-sm font-medium">
        {#each errors as error}
            {error}
        {/each}
    </div>
{/if}