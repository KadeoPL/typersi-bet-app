"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

import Button, { ButtonState } from "./Button";

import { Input } from "./Input";

import { changePassword } from "@/app/lib/api/changePassword";
import { changePasswordSchema } from "@/utils/schema/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

type ChangePasswordForm = {
  currentPassword: string;
  newPassword: string;
};

export default function ChangePasswordForm() {
  const [buttonState, setButtonState] = useState<ButtonState>("normal");
  const [resError, setResError] = useState("");

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangePasswordForm>({
    resolver: zodResolver(changePasswordSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      setButtonState("loading");

      await changePassword({
        currentPassword: data.currentPassword,
        newPassword: data.newPassword,
      });

      setButtonState("success");

      setTimeout(() => {
        setButtonState("normal");
      }, 1000);
      setTimeout(() => {
        router.push("/");
      }, 1000);
    } catch (err) {
      setButtonState("normal");

      const message = err instanceof Error ? err.message : String(err);

      setResError(message);
    }
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6">
      <Input
        {...register("currentPassword")}
        placeholder="Wpisz aktualne hasło"
        type="password"
        variant="default"
        error={errors.currentPassword?.message}
        onClick={() => setResError("")}
      />

      <Input
        {...register("newPassword")}
        placeholder="Wpisz nowe hasło"
        type="password"
        variant="default"
        error={errors.newPassword?.message}
        onClick={() => setResError("")}
      />

      <Button text="Zmień hasło" type="submit" state={buttonState} />

      {resError && <p className=" text-red-500 ">{resError}</p>}
    </form>
  );
}
