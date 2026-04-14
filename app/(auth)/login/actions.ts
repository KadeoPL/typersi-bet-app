"use server";

import { signIn } from "@/utils/sign-in";
import { userSignInType } from "@/utils/types/user";

export async function signInUser(data: userSignInType) {
  return await signIn({
    username: data.username,
    password: data.password,
  });
}
