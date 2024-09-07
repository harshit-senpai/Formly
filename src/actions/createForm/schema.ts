import { z } from "zod";

export const CreateFormSchema = z.object({
  title: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    })
    .min(4, {
      message: "Name must be at least 4 characters long",
    }),
  description: z.optional(z.string()),
});
