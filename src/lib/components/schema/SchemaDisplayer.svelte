<script lang="ts">
	import OpenApiSchemaRenderer from './OpenApiSchemaRenderer.svelte';

	type SchemaDisplayerProps<T> = {
		schemaType: 'open-api' | 'postman-collection' | 'docify-schema' | 'custom-schema';
		schemaContent: T;
	};

	let { schemaType, schemaContent }: SchemaDisplayerProps<any> = $props();
</script>

{#if schemaType === 'open-api'}
	<OpenApiSchemaRenderer schemaContent={schemaContent} />
{:else}
	<span class="text-base font-bold text-red-900">Schema type not supported</span>
{/if}
