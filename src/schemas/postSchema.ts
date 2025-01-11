import { z } from 'zod';

export const postSchema = z.object({
  title: z.string()
    .min(3, 'O título deve ter pelo menos 3 caracteres')
    .max(10, 'O título deve ter no máximo 10 caracteres'),
  content: z.string()
    .min(5, 'O conteúdo deve ter pelo menos 5 caracteres')
    .max(100, 'O conteúdo deve ter no máximo 100 caracteres')
});

export type PostFormData = z.infer<typeof postSchema>;