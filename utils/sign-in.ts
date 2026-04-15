"use server";

import { auth } from "./auth";
import { userSignInType } from "./types/user";

export async function signIn(userData: userSignInType) {
  try {
    await auth.api.signInUsername({
      body: {
        username: userData.username,
        password: userData.password,
      },
    });

    return { success: true };
  } catch (err) {
    return {
      success: false,
      message: "Nieprawidłowy login lub hasło",
    };
  }
}
