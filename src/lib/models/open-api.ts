interface OpenApiSchema {
    openapi: string;
    info: {
        title: string;
        version: string;
    };
    paths: Record<string, PathItem>;
    components: {
        schemas: Record<string, Schema | Reference>;
        securitySchemes: Record<string, SecurityScheme>;
    };
    security: SecurityRequirement[];
}

interface PathItem {
    [method: string]: Operation;
}

interface Operation {
    tags?: string[];
    parameters?: Parameter[];
    requestBody?: RequestBody;
    responses: Record<string, OpenApiResponse>;
}

interface Parameter {
    name: string;
    in: 'query' | 'path' | 'header' | 'cookie';
    required?: boolean;
    schema: Schema | Reference;
}

interface RequestBody {
    content: {
        [mediaType: string]: {
            schema: Schema | Reference;
            encoding?: Record<string, Encoding>;
        };
    };
    required?: boolean;
}

interface OpenApiResponse {
    description: string;
    headers?: Record<string, Header>;
    content?: Record<string, MediaType>;
}

interface MediaType {
    schema?: Schema | Reference;
    example?: any;
    examples?: Record<string, Example>;
    encoding?: Record<string, Encoding>;
}

interface Encoding {
    contentType?: string;
    headers?: Record<string, Header>;
    style?: string;
    explode?: boolean;
    allowReserved?: boolean;
}

interface Header extends Parameter {}

interface Example {
    summary?: string;
    description?: string;
    value?: any;
    externalValue?: string;
}

interface Schema {
    type?: string;
    format?: string;
    properties?: Record<string, Schema | Reference>;
    required?: string[];
    items?: Schema | Reference;
    enum?: any[];
    additionalProperties?: boolean | Schema | Reference;
    nullable?: boolean;
}

interface SecurityScheme {
    type: string;
    description?: string;
    scheme?: string;
}

interface SecurityRequirement {
    [name: string]: string[];
}

interface Reference {
    $ref: string;
}