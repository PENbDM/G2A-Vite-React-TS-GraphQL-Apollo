import { z } from "zod";

export const AuthSchema = z.object({
    email: z
        .string()
        .min(1, { message: "Email is required" })
        .email({ message: "Must be a valid email address" }),

    password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters" })
        .regex(/[A-Z]/, { message: "Password must contain at least one capital letter" })
        .regex(/[a-z]/, { message: "Password must contain at least one small letter" })
        .regex(/[0-9!@#$%^&*(),.?":{}|<>]/, {
            message: "Password must contain at least one digit or special character"
        }),
});

// This line allows you to get those code completion hints in your components
export type AuthCredentials = z.infer<typeof AuthSchema>;