import { z } from "zod";

export const registerSchema = z.object({
    fullName: z.string().min(4),
    username: z.string().min(4),
    email: z.email("Invalid email address"),
    password: z.string().min(8)
})

export type RegisterSchema = z.infer<typeof registerSchema>