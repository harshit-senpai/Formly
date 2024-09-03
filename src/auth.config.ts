import bcrypt from "bcryptjs";
import { NextAuthConfig } from "next-auth";
import { getUserByEmail } from "./data/user";
import credentials from "next-auth/providers/credentials";

export default {
  providers: [
    credentials({
      async authorize(credentials) {
        const { email, password } = credentials;

        const user = await getUserByEmail(email as string);

        if (!user || !user.password) {
          const passwordMatch = await bcrypt.compare(
            password as string,
            user?.password as string
          );

          if (passwordMatch) return user;
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
