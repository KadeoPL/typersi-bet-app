"use client";

import { createUser } from "./actions";

export default function AddUser() {
  const handleClick = async () => {
    const res = await createUser();
    if (res.success) {
      console.log("User dodany");
    } else {
      console.error(res.message);
    }
  };

  return (
    <div>
      <h1>Dodaj użytkownika</h1>
      <button onClick={handleClick}>Dodaj</button>
    </div>
  );
}
