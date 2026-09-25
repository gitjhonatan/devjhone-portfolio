import { z } from "zod";

export const contactSchema = z.object({
    firstName: z
        .string()
        .trim()
        .min(3, "First name must have at least 3 characters.")
        .max(50, "First name must have at most 50 characters."),

    lastName: z
        .string()
        .trim()
        .min(3, "Last name must have at least 3 characters.")
        .max(100, "Last name must have at most 100 characters."),

    email: z
        .email("Please provide a valid email address.")
        .max(254, "Email is too long."),

    phone: z
        .string()
        .trim()
        .min(8, "Phone number must have at least 8 characters.")
        .max(20, "Phone number must have at most 20 characters."),

    subject: z
        .string()
        .trim()
        .min(5, "Subject must have at least 5 characters.")
        .max(100, "Subject must have at most 100 characters."),

    message: z
        .string()
        .trim()
        .min(10, "Message must have at least 10 characters.")
        .max(2000, "Message must have at most 2000 characters."),
});

export type ContactEmailData = z.infer<typeof contactSchema>;
