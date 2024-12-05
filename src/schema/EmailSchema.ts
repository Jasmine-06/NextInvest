import z from 'Zod';

export const EmailSchema = z.object({
    email: z.string().email('Email inválid'),
});
