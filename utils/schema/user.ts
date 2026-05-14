import { z } from "zod";

export const registerSchema = z.object({
  username: z
    .string()
    .min(1, "Nazwa użytkownika jest wymagana.")
    .min(3, "Minimum 3 znaki."),

  password: z
    .string()
    .min(1, "Hasło jest wymagane.")
    .min(8, "Minimum 8 znaków."),
});
