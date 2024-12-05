import z from 'Zod';

export const SignupSchemaBackend = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
});
