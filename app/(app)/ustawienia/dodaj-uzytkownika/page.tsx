"use client";

import RegisterForm from "@/components/register-user/RegisterForm";
import SettingsPageHeader from "@/components/SettingsPageHeader";
import { useAuth } from "@/utils/providers/AuthProvider";

import { redirect } from "next/navigation";

export default function AddUser() {
  const { user } = useAuth();

  if (user?.role === "player") {
    redirect("/");
  }

  return (
    <div>
      <SettingsPageHeader url="ustawienia" text="Dodaj użytkownika" />
      <RegisterForm />
    </div>
  );
}
