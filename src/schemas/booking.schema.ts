import { z } from "zod";

export const CreateBookingSchema = z.object({
    userId: z.uuid(),
    bookId: z.uuid(),
});