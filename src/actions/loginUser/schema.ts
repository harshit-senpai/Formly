import { z } from "zod";

export const LogInSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Invalid Email",
    })
    .email(),
  password: z.string().min(1, {
    message: "Password is Too short",
  }),
});
