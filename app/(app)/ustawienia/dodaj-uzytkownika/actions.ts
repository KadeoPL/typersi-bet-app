"use server";

import { signUp } from "@/utils/sign-up";

export async function createUser() {
  return await signUp({
    email: "test2@test.com",
    password: "12345678",
    username: "Testowy2",
    role: "user",
    isPasswordChange: false,
  });
}
