import { ZodError, ZodIssue } from 'Zod'; 

export function formatValidationErrors(error: ZodError): string[] {
    return error.errors.map((zodError: ZodIssue) => {
        const path = zodError.path.map((p) => String(p)); 
        return `${path.join('.')} : { ${zodError.message} }`;
    });
}