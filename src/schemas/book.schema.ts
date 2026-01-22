import { z } from "zod";

export const CreateBookSchema = z.object({
    title: z.string(),
    author: z.string(),
    available: z.boolean()
})

export type CreateBookDTO = z.infer<typeof CreateBookSchema>;

export const UpdateBookSchema = CreateBookSchema.partial();

export type UpdateBookDTO = z.infer<typeof UpdateBookSchema>;

export const IdParamSchema = z.object({
    id: z.uuid(),
});
