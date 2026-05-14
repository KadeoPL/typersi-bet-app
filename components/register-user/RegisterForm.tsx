import { registerSchema } from "@/utils/schema/user";
import { UserRegisterSchema } from "@/utils/types/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Button from "../Button";
import { useState } from "react";
import { Input } from "../Input";
import { registerUser } from "@/app/lib/api/auth";

export default function RegisterForm() {
  const [buttonState, setButtonState] = useState<"loading" | "normal">(
    "normal",
  );
  const [resError, setResError] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      setButtonState("loading");

      const user = await registerUser({
        username: data.username,
        password: data.password,
      });

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
        placeholder="Wpisz nazwę użytkownika"
        error={errors.username?.message as string}
        variant="black"
        onClick={() => setResError("")}
      />

      <Input
        {...register("password")}
        placeholder="Wpisz hasło dla użytkownika"
        error={errors.password?.message as string}
        type="password"
        variant="black"
        onClick={() => setResError("")}
      />
      <Button text="Dodaj użytkownika" type="submit" state={buttonState} />
      {resError && <p className="text-red-500">{resError}</p>}
    </form>
  );
}
