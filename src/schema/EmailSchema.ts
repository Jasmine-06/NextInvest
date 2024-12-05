import z from 'Zod';

export const RegisterSchema = z.object({
    email: z.string().email('Email inválid'),
});
