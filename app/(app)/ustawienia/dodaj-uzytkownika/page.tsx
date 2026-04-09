"use client";

import { signUp } from "@/utils/sign-up";

export default function AddUser() {
  const handleClick = async () => {
    const res = await signUp({
      email: "test@test.com",
      password: "12345678",
      name: "Test",
      role: "user",
      isPasswordChange: false,
    });

    console.log(res);
  };

  return (
    <div>
      <h1>Dodaj użytkownika</h1>
      <button onClick={handleClick}>Dodaj</button>
    </div>
  );
}
