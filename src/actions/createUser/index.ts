"use server";

import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { InputType, ReturnType } from "./types";
import { getUserByEmail } from "@/data/user";
import { createSafeAction } from "@/lib/CreateSafeAction";
import { CreateUserSchema } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { email, name, password } = data;

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return {
      error: "Email already in use",
    };
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  try {
    const user = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return {
      data: user,
    };
  } catch (error) {
    return {
      error: "failed to Register",
    };
  }
};

export const createUser = createSafeAction(CreateUserSchema, handler);
