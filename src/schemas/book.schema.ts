import { z } from "zod";

export const CreateBookSchema = z.object({
    title: z.string(),
    author: z.string(),
    avaliable: z.boolean()
});