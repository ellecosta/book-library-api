import { z } from "zod";

export const CreateBookingSchema = z.object({
    userId: z.uuid("Invalid userId"),
    bookId: z.uuid("Invalid bookId")
});