import { z }  from "zod";

export const CreateUserSchema = z.object({
    name: z.string().trim().min(2, "Name must have at least 2 characters"),
    email: z.email("Invalid email format"),
    password: z.string().min(8, "Password must have at least 8 characters"),
    role: z.enum(["admin", "user"])
});
