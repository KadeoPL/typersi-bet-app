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

    await auth.api.updateUser({
      body: {
        role: userData.role,
      },
    });

    return { success: true };
  } catch (error) {
    return { success: false, message: error };
  }
}
