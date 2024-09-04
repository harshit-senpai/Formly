"use server";

import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";
import { InputType, ReturnType } from "./types";
import { createSafeAction } from "@/lib/CreateSafeAction";
import { LogInSchema } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { email, password } = data;

  try {
    const user = await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });

    return {
      data: user,
    };
  } catch (error) {
    if (error instanceof AuthError) {
        console.log(error)
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid email or password" };
        default:
          return { error: "Something went wrong" };
      }
    }
    throw error;
  }
};

export const loginUser = createSafeAction(LogInSchema, handler);
