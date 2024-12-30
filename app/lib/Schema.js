import { z } from "zod";

export const contactListSchema = z.object({
  contactName: z.string().min(1, "Name is required"),
  contactPhone: z
    .string()
    .regex(/^\d{10}$/, "Please enter a valid 10-digit phone number"),
  contactEmail: z.string().email("Please enter a valid email address"),
});
