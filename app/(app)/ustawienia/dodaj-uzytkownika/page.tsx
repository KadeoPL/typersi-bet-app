"use client";

import RegisterForm from "@/components/register-user/RegisterForm";
import { useAuth } from "@/utils/providers/AuthProvider";
import { redirect } from "next/navigation";

export default function AddUser() {
  const { user } = useAuth();

  if (user?.role === "player") {
    redirect("/");
  }

  return (
    <div>
      <h1 className="mb-6 text-textSecondary">Dodaj użytkownika</h1>
      <RegisterForm />
    </div>
  );
}
