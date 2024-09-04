import bcrypt from "bcryptjs";
import { NextAuthConfig } from "next-auth";
import { getUserByEmail } from "./data/user";
import credentials from "next-auth/providers/credentials";
import { LogInSchema } from "./actions/loginUser/schema";

export default {
  providers: [
    credentials({
      async authorize(credentials) {
        const validatedFields = LogInSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await getUserByEmail(email);
          if (!user || !user.password) return null;

          const passwordMatch = await bcrypt.compare(password, user.password);

          if (passwordMatch) return user;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
