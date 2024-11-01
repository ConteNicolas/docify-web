

export const openApiSchemaMock: OpenApiSchema = {
    openapi: '3.0.1',
    info: {
        title: 'Docify API',
        version: 'v1'
    },
    paths: {
        '/api/applications': {
            post: {
                tags: ['CreateApplicationEndpoint'],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CreateApplicationRequest'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            }
        },
        '/api/organizations': {
            post: {
                tags: ['CreateOrganizationEndpoint'],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CreateOrganizationRequest'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            },
            get: {
                tags: ['GetAllOrganizationsEndpoint'],
                parameters: [
                    {
                        name: 'Name',
                        in: 'query',
                        schema: {
                            type: 'string'
                        }
                    },
                    {
                        name: 'PageNumber',
                        in: 'query',
                        required: true,
                        schema: {
                            type: 'integer',
                            format: 'int32'
                        }
                    },
                    {
                        name: 'PageSize',
                        in: 'query',
                        required: true,
                        schema: {
                            type: 'integer',
                            format: 'int32'
                        }
                    }
                ],
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            }
        },
        '/api/users/me': {
            get: {
                tags: ['Docify.API'],
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            }
        },
        '/api/organizations/{id}': {
            delete: {
                tags: ['Docify.API'],
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        schema: {
                            type: 'string',
                            format: 'uuid'
                        }
                    }
                ],
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            },
            put: {
                tags: ['UpdateOrganizationEndpoint'],
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        schema: {
                            type: 'string',
                            format: 'uuid'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/UpdateOrganizationRequest'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            }
        },
        '/api/organizations/{organizationId}/members/{userId}': {
            post: {
                tags: ['Docify.API'],
                parameters: [
                    {
                        name: 'organizationId',
                        in: 'path',
                        required: true,
                        schema: {
                            type: 'string',
                            format: 'uuid'
                        }
                    },
                    {
                        name: 'userId',
                        in: 'path',
                        required: true,
                        schema: {
                            type: 'string',
                            format: 'uuid'
                        }
                    }
                ],
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            }
        },
        '/api/applications/{id}': {
            get: {
                tags: ['Docify.API'],
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        schema: {
                            type: 'string',
                            format: 'uuid'
                        }
                    }
                ],
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            },
            delete: {
                tags: ['Docify.API'],
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        schema: {
                            type: 'string',
                            format: 'uuid'
                        }
                    }
                ],
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            },
            put: {
                tags: ['UpdateApplicationEndpoint'],
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        schema: {
                            type: 'string',
                            format: 'uuid'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/UpdateApplicationRequest'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            }
        },
        '/api/applications/{applicationId}/api-specifications/{apiSpecificationId}/publish': {
            post: {
                tags: ['Docify.API'],
                parameters: [
                    {
                        name: 'applicationId',
                        in: 'path',
                        required: true,
                        schema: {
                            type: 'string',
                            format: 'uuid'
                        }
                    },
                    {
                        name: 'apiSpecificationId',
                        in: 'path',
                        required: true,
                        schema: {
                            type: 'string',
                            format: 'uuid'
                        }
                    }
                ],
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            }
        },
        '/api/applications/{applicationId}/api-specifications/{apiSpecificationId}': {
            delete: {
                tags: ['Docify.API'],
                parameters: [
                    {
                        name: 'applicationId',
                        in: 'path',
                        required: true,
                        schema: {
                            type: 'string',
                            format: 'uuid'
                        }
                    },
                    {
                        name: 'apiSpecificationId',
                        in: 'path',
                        required: true,
                        schema: {
                            type: 'string',
                            format: 'uuid'
                        }
                    }
                ],
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            }
        },
        '/api/applications/{applicationId}/api-specifications/{apiSpecificationId}/status': {
            post: {
                tags: ['Docify.API'],
                parameters: [
                    {
                        name: 'applicationId',
                        in: 'path',
                        required: true,
                        schema: {
                            type: 'string',
                            format: 'uuid'
                        }
                    },
                    {
                        name: 'apiSpecificationId',
                        in: 'path',
                        required: true,
                        schema: {
                            type: 'string',
                            format: 'uuid'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/ChangeApiSpecificationStatusRequest'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            }
        },
        '/api/applications/api-explorer': {
            get: {
                tags: ['GetAllApplicationsApiExplorerEndpoint'],
                parameters: [
                    {
                        name: 'Name',
                        in: 'query',
                        schema: {
                            type: 'string'
                        }
                    },
                    {
                        name: 'Tag',
                        in: 'query',
                        schema: {
                            type: 'string'
                        }
                    },
                    {
                        name: 'AccessLevel',
                        in: 'query',
                        schema: {
                            $ref: '#/components/schemas/ApplicationAccessLevel'
                        }
                    },
                    {
                        name: 'PageNumber',
                        in: 'query',
                        required: true,
                        schema: {
                            type: 'integer',
                            format: 'int32'
                        }
                    },
                    {
                        name: 'PageSize',
                        in: 'query',
                        required: true,
                        schema: {
                            type: 'integer',
                            format: 'int32'
                        }
                    }
                ],
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            }
        },
        '/api/applications/owns': {
            get: {
                tags: ['GetAllApplicationsByOwnerEndpoint'],
                parameters: [
                    {
                        name: 'Name',
                        in: 'query',
                        schema: {
                            type: 'string'
                        }
                    },
                    {
                        name: 'Tag',
                        in: 'query',
                        schema: {
                            type: 'string'
                        }
                    },
                    {
                        name: 'AccessLevel',
                        in: 'query',
                        schema: {
                            $ref: '#/components/schemas/ApplicationAccessLevel'
                        }
                    },
                    {
                        name: 'PageNumber',
                        in: 'query',
                        required: true,
                        schema: {
                            type: 'integer',
                            format: 'int32'
                        }
                    },
                    {
                        name: 'PageSize',
                        in: 'query',
                        required: true,
                        schema: {
                            type: 'integer',
                            format: 'int32'
                        }
                    }
                ],
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            }
        },
        '/api/organizations/owns': {
            get: {
                tags: ['GetAllOrganizationsByOwnerEndpoint'],
                parameters: [
                    {
                        name: 'Name',
                        in: 'query',
                        required: true,
                        schema: {
                            type: 'string'
                        }
                    },
                    {
                        name: 'PageNumber',
                        in: 'query',
                        required: true,
                        schema: {
                            type: 'integer',
                            format: 'int32'
                        }
                    },
                    {
                        name: 'PageSize',
                        in: 'query',
                        required: true,
                        schema: {
                            type: 'integer',
                            format: 'int32'
                        }
                    }
                ],
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            }
        },
        '/api/users/search': {
            get: {
                tags: ['SearchUserEndpoint'],
                parameters: [
                    {
                        name: 'Name',
                        in: 'query',
                        schema: {
                            type: 'string'
                        }
                    }
                ],
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            }
        },
        '/api/users/sign-in': {
            post: {
                tags: ['SignInEndpoint'],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/SignInRequest'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            }
        },
        '/api/users/sign-up': {
            post: {
                tags: ['SignUpEndpoint'],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/SignUpRequest'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            }
        },
        '/api/applications/{applicationId}/api-specifications/upload': {
            post: {
                tags: ['UploadApiSpecificationEndpoint'],
                parameters: [
                    {
                        name: 'applicationId',
                        in: 'path',
                        required: true,
                        schema: {
                            type: 'string',
                            format: 'uuid'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'multipart/form-data': {
                            schema: {
                                required: ['request'],
                                type: 'object',
                                properties: {
                                    request: {
                                        type: 'string',
                                        format: 'binary'
                                    }
                                }
                            },
                            encoding: {
                                request: {
                                    style: 'form'
                                }
                            }
                        }
                    }
                },
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            }
        }
    },
    components: {
        schemas: {
            "ApiSpecificationStatus": {
                "enum": [
                    1,
                    2,
                    3,
                    4
                ],
                "type": "integer",
                "format": "int32"
            },
            "ApplicationAccessLevel": {
                "enum": [
                    1,
                    2
                ],
                "type": "integer",
                "format": "int32"
            },
            "ChangeApiSpecificationStatusRequest": {
                "type": "object",
                "properties": {
                    "status": {
                        "$ref": "#/components/schemas/ApiSpecificationStatus"
                    }
                },
                "additionalProperties": false
            },
            "CreateApplicationRequest": {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string",
                        "nullable": true
                    },
                    "description": {
                        "type": "string",
                        "nullable": true
                    },
                    "userId": {
                        "type": "string",
                        "format": "uuid"
                    },
                    "accessLevel": {
                        "$ref": "#/components/schemas/ApplicationAccessLevel"
                    },
                    "tags": {
                        "type": "array",
                        "items": {
                            "type": "string"
                        },
                        "nullable": true
                    }
                },
                "additionalProperties": false
            },
            "CreateOrganizationRequest": {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string",
                        "nullable": true
                    }
                },
                "additionalProperties": false
            },
            "SignInRequest": {
                "type": "object",
                "properties": {
                    "email": {
                        "type": "string",
                        "nullable": true
                    },
                    "password": {
                        "type": "string",
                        "nullable": true
                    }
                },
                "additionalProperties": false
            },
            "SignUpRequest": {
                "type": "object",
                "properties": {
                    "email": {
                        "type": "string",
                        "nullable": true
                    },
                    "password": {
                        "type": "string",
                        "nullable": true
                    },
                    "firstName": {
                        "type": "string",
                        "nullable": true
                    },
                    "lastName": {
                        "type": "string",
                        "nullable": true
                    }
                },
                "additionalProperties": false
            },
            "UpdateApplicationRequest": {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string",
                        "nullable": true
                    },
                    "description": {
                        "type": "string",
                        "nullable": true
                    },
                    "accessLevel": {
                        "$ref": "#/components/schemas/ApplicationAccessLevel"
                    },
                    "userId": {
                        "type": "string",
                        "format": "uuid"
                    }
                },
                "additionalProperties": false
            },
            "UpdateOrganizationRequest": {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string",
                        "nullable": true
                    }
                },
                "additionalProperties": false
            }
        },
        securitySchemes: {
            "Bearer": {
                "type": "http",
                "description": "JWT Authorization header using the Bearer scheme.",
                "scheme": "bearer"
            }
        }
    },
    security: [
        {
            "Bearer": [
                "Bearer"
            ]
        }
    ]
};