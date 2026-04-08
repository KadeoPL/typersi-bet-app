export type userType = {
  email: string;
  password: string;
  name: string;
  role: "user" | "admin";
  isPasswordChange: boolean;
};
