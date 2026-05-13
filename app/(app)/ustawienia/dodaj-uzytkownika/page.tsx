"use client";

import { registerUser } from "@/app/lib/api/auth";

export default function AddUser() {
  const handleClick = async () => {
    try {
      const user = await registerUser({
        username: "Krzysiek",
        password: "Testowy",
      });

      console.log(user);
      alert("Użytkownik utworzony");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Dodaj użytkownika</h1>
      <button onClick={handleClick}>Dodaj</button>
    </div>
  );
}
