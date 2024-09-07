"use server";

import { getCurrentUser } from "@/lib/getCurrentUser";
import { InputType, ReturnType } from "./types";
import { db } from "@/lib/db";
import { createSafeAction } from "@/lib/CreateSafeAction";
import { CreateFormSchema } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {
  const user = await getCurrentUser();

  if (!user || !user.id) {
    return {
      error: "Unauthorized",
    };
  }

  const { title, description } = data;

  try {
    const form = await db.form.create({
      data: {
        userId: user.id,
        title,
        description,
      },
    });

    return {
      data: form,
    };
  } catch (error) {
    return {
      error: "Cannot create form",
    };
  }
};

export const createForm = createSafeAction(CreateFormSchema, handler);
