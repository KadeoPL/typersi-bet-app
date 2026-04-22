import { betterAuth } from "better-auth";
import { Pool } from "pg";
import { username } from "better-auth/plugins";

export const auth = betterAuth({
  database: new Pool({
    connectionString: process.env.DATABASE_URL,
  }),

  secret: process.env.BETTER_AUTH_SECRET,
  cookies: {
    secure: true,
    sameSite: "lax",
  },

  baseURL: process.env.BETTER_AUTH_URL,

  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
  },

  plugins: [username()],

  user: {
    additionalFields: {
      role: {
        type: "string",
        defaultValue: "user",
      },
      is_password_changed: {
        type: "boolean",
        defaultValue: false,
      },
    },
  },
});
