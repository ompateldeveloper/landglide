import { z } from "zod";
const signInSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
});
const signUpSchema = z.object({
    name: z.string().min(2,"Name must be min "),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
});
export { signInSchema ,signUpSchema };
