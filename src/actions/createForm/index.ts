"use server";

import { getCurrentUser } from "@/lib/getCurrentUser";
import { InputType, ReturnType } from "./types";
import { db } from "@/lib/db";
import { createSafeAction } from "@/lib/CreateSafeAction";
import { CreateFormSchema } from "./schema";
import { revalidatePath } from "next/cache";

const handler = async (data: InputType): Promise<ReturnType> => {
  const user = await getCurrentUser();

  if (!user || !user.id) {
    return {
      error: "Unauthorized",
    };
  }

  const { title, description } = data;
  let form;
  try {
     form = await db.form.create({
      data: {
        userId: user.id,
        title,
        description,
      },
    });

  } catch (error) {
    return {
      error: "Cannot create form",
    };
  }
  
  revalidatePath("/dashboard");
  return {
    data: form,
  };
};

export const createForm = createSafeAction(CreateFormSchema, handler);
