import { userType } from "./types/user";
import { authClient } from "./auth-client";

export async function signUp(userData: userType) {
  const { email, password, name } = userData;

  const { data, error } = await authClient.signUp.email({
    email,
    password,
    name,
  });

  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  return {
    success: true,
    data,
  };
}
