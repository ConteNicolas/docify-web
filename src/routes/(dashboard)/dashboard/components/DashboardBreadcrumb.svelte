<script lang="ts">
	import { page } from '$app/stores';

    import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';

    function uppercaseFirstLetter(string: string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
</script>

<Breadcrumb.Root class="ml-3 mt-3">
	<Breadcrumb.List>
        {#each $page.url.pathname.split('/').slice(1) as path, index}
            <Breadcrumb.Item class="font-medium text-base">
                <Breadcrumb.Link class="dark:text-white dark:hover:text-orange-500 hover:text-orange-500 cursor-pointer">{uppercaseFirstLetter(path)}</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
        {/each}
	</Breadcrumb.List>
</Breadcrumb.Root>
