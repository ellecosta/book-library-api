import { z } from "zod";

export const CreateBookSchema = z.object({
    title: z.string().trim().min(2, "Title must have at least 2 characters"),
    author: z.string().trim().min(2, "Author must have at least 2 characters"),
    avaliable: z.boolean().default(true)
});