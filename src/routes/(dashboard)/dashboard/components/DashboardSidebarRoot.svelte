

<script lang="ts">
    import * as Sidebar from '$lib/components/ui/sidebar/index.js';

    let { children }: any = $props();
</script>

<Sidebar.Root collapsible="offcanvas" class="dark:border-transparent">
    {@render children?.()}
</Sidebar.Root>