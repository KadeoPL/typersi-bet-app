import { userType } from "./types/user";
import { auth } from "./auth";

export async function signUp(userData: userType) {
  try {
    await auth.api.signUpEmail({
      body: {
        email: userData.email,
        password: userData.password,
        name: userData.username,
        username: userData.username,
        displayUsername: userData.username,
      },
    });

    return { success: true };
  } catch (error) {
    return { success: false, message: error };
  }
}
