"use client";

import RegisterForm from "@/components/register-user/RegisterForm";

export default function AddUser() {
  return (
    <div>
      <h1 className="mb-6 text-textSecondary">Dodaj użytkownika</h1>
      <RegisterForm />
    </div>
  );
}
