import { z }  from "zod";

export const CreateUserSchema = z.object({
    name: z.string(),
    email: z.email(),
    password: z.string(),
    role: z.enum(["admin", "user"])
});

export type CreateUserDTO = z.infer<typeof CreateUserSchema>;

export const UpdateUserSchema = CreateUserSchema.partial();

export type UpdateUserDTO = z.infer<typeof UpdateUserSchema>;

export const IdParamSchema = z.object({
    id: z.uuid(),
});