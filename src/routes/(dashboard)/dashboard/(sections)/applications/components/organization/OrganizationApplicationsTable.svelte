<script>
	import { Button } from "$lib/components/ui/button";


	import { CirclePlus, CircleXIcon } from "lucide-svelte";

</script>
<div class="flex h-full w-full flex-col items-center justify-center">
	<CircleXIcon size="100" color="red" />
	<h1 class="mt-5 text-2xl font-bold">No organization applications found</h1>
	<span class="mt-2 text-lg font-normal">Be the first to create an application</span>
	<Button
		variant="outline"
		class="mt-6 bg-orange-500 text-white hover:bg-purple-500 hover:text-white"
	>
		<CirclePlus class="size-4" />
		<span>Create application</span>
	</Button>
</div>
