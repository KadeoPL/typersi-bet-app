"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/Input";
import Button from "../Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginSchema } from "@/utils/schema/user";
import { loginUser } from "@/app/lib/api/auth";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema) });

  const [resError, setResError] = useState<string>("");
  const router = useRouter();
  const [buttonState, setButtonState] = useState<"loading" | "normal">(
    "normal",
  );

  const onSubmit = handleSubmit(async (data) => {
    try {
      setButtonState("loading");

      const user = await loginUser({
        username: data.username,
        password: data.password,
      });
      router.push("/");

      setButtonState("normal");
    } catch (err) {
      setButtonState("normal");
      const message = err instanceof Error ? err.message : String(err);
      setResError(message);
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

      <Button text="Zaloguj" type="submit" state={buttonState} />
    </form>
  );
}
