"use server";

import { auth } from "./auth";
import { userSignInType } from "./types/user";

export async function signIn(userData: userSignInType) {
  const data = await auth.api.signInUsername({
    body: {
      username: userData.username,
      password: userData.password,
    },
  });

  console.log(data);
}
