"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/Input";
import Button from "../Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { authClient } from "@/utils/auth-client";
import { useRouter } from "next/navigation";

export const loginSchema = z.object({
  username: z
    .string()
    .nonempty("Nazwa użytkownika jest wymagana")
    .min(3, "Zbyt krótka nazwa użytkownika"),

  password: z
    .string()
    .nonempty("Hasło jest wymagane")
    .min(8, "Minimalna długość hasła to 8 znaków"),
});

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema) });

  const [resError, setResError] = useState<string | undefined>("");
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    try {
      await authClient.signIn.username({
        username: data.username,
        password: data.password,
      });

      setTimeout(() => {
        window.location.href = "/";
      }, 100);
    } catch (err) {
      setResError("Nieprawidłowy login lub hasło");
    }
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3">
      <Input
        {...register("username")}
        placeholder="Wpisz swój login"
        error={errors.username?.message as string}
        variant="black"
      />

      <Input
        {...register("password")}
        placeholder="Wpisz swoje hasło"
        error={errors.password?.message as string}
        type="password"
        variant="black"
      />

      {resError && <p>{resError}</p>}

      <Button text="Zaloguj" type="submit" />
    </form>
  );
}
