<script lang="ts">
    import { onMount } from 'svelte';

    type OpenApiSchemaRendererProps = {
        schemaContent: OpenApiSchema
    }

    let { schemaContent }: OpenApiSchemaRendererProps = $props();

    let schemaLoaded = $state(false);
    let paths: [string, PathItem][] = $state([]);

    onMount(() => {
        loadSchema();
    });

    function loadSchema() {
        paths = Object.entries(schemaContent.paths) as [string, PathItem][];
        schemaLoaded = true;
    }
    
</script>

{#if schemaLoaded}
    <div>
        <h1>{schemaContent.info.title} - {schemaContent.info.version}</h1>

        {#each paths as [path, methods]}
            <div class="endpoint-container">
                <h3>{path}</h3>

                {#each Object.entries(methods) as [method, details] (method)}
                    {#if details as Operation}
                        <div>
                            <strong>{method.toUpperCase()}</strong> - {details.tags ? details.tags.join(', ') : 'No Tag'}
                            
                            <div class="parameters">
                                <h4>Parameters:</h4>
                                <ul>
                                    {#if details.parameters}
                                        {#each details.parameters as param (param.name)}
                                            <li>
                                                <strong>{param.name}</strong> ({param.in}): 
                                                {param.schema && 'type' in param.schema ? param.schema.type : 'Ref'}
                                            </li>
                                        {/each}
                                    {:else}
                                        <li>No parameters</li>
                                    {/if}
                                </ul>
                            </div>

                            <div class="responses">
                                <h4>Responses:</h4>
                                <ul>
                                    {#each Object.entries(details.responses) as [statusCode, response]}
                                        <li>{statusCode}: {response.description}</li>
                                    {/each}
                                </ul>
                            </div>
                        </div>
                    {/if}
                {/each}
            </div>
        {/each}
    </div>
{:else}
    <p>Loading API schema...</p>
{/if}

<style>
    .endpoint-container {
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;
        margin-bottom: 10px;
    }
    .endpoint-container h3 {
        margin: 0;
        font-size: 1.1em;
    }
    .parameters,
    .responses {
        margin-left: 10px;
        font-size: 0.9em;
    }
</style>