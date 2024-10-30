
export function useForm<T>(schema: any, initialValues: T) {
    let formData = $state(initialValues);
    let errors = $state({} as { [key: string]: string[] });

    async function validate() {
        return schema.safeParse(formData);
    }

    function handleSubmit(onValid: (values: T) => void) {
        return async (e: Event) => {
            e.preventDefault();
            const result = await validate();;
            if (result.success) {                

                Object.keys(errors).forEach(key => {
                    delete errors[key];
                });

                onValid(result?.data as T);
            } else {
                const formattedErrors: any = result.error.format();

                Object.keys(formattedErrors).filter(key => key != "_errors").forEach(key => {
                    const errorsFromKey = formattedErrors[key]._errors?.map((e: any) => e);

                    if ( key in errors ) {
                        Object.assign(errors, errorsFromKey);
                    } else {
                        errors[key] = errorsFromKey;
                    }
                });

                Object.keys(errors).forEach(errorKey => {
                    if (!formattedErrors[errorKey]) {
                        delete errors[errorKey];
                    }
                })
            }
        }
    }


    return { handleSubmit, errors, formData }
}