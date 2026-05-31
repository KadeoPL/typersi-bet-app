import { z } from "zod";

export const registerSchema = z.object({
  username: z
    .string()
    .min(1, "Nazwa użytkownika jest wymagana.")
    .min(3, "Minimum 3 znaki."),
});

export const loginSchema = z.object({
  username: z
    .string()
    .min(1, "Nazwa użytkownika jest wymagana.")
    .min(3, "Minimum 3 znaki."),

  password: z
    .string()
    .min(1, "Nowe hasło jest wymagane.")
    .min(8, "Hasło musi mieć minimum 8 znaków."),
});

export const changePasswordSchema = z
  .object({
    currentPassword: z
      .string()
      .min(1, "Aktualne hasło jest wymagane.")
      .min(3, "Hasło musi mieć minimum 3 znaki."),

    newPassword: z
      .string()
      .min(1, "Nowe hasło jest wymagane.")
      .min(8, "Hasło musi mieć minimum 8 znaków.")
      .regex(/[A-Z]/, "Hasło musi zawierać wielką literę.")
      .regex(/[0-9]/, "Hasło musi zawierać cyfrę."),
  })
  .refine((data) => data.currentPassword !== data.newPassword, {
    message: "Nowe hasło musi być inne niż aktualne.",
    path: ["newPassword"],
  });
