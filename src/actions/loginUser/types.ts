import { z } from "zod";
import { LogInSchema } from "./schema";
import { ActionState } from "@/types";
import { User } from "@prisma/client";

export type InputType = z.infer<typeof LogInSchema>;
export type ReturnType = ActionState<InputType, User>;
