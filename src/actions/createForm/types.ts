import { z } from "zod";
import { CreateFormSchema } from "./schema";
import { ActionState } from "@/types";
import { Form } from "@prisma/client";

export type InputType = z.infer<typeof CreateFormSchema>;
export type ReturnType = ActionState<InputType, Form>;
