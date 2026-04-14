"use client";

import { useForm, Resolver } from "react-hook-form";
import { userType } from "@/utils/types/user";
import { Input } from "@/components/Input";
import Button from "../Button";
import { signIn } from "@/utils/sign-in";

const resolver: Resolver<userType> = async (values) => {
  return {
    values: values.username ? values : {},
    errors: !values.username
      ? {
          name: {
            type: "required",
            message: "To pole jest wymagane",
          },
        }
      : {},
  };
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userType>({ resolver });

  const onSubmit = handleSubmit(async (data) => {
    const res = await signIn(data);
    console.log(res);
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
        error={errors.username?.message as string}
        type="password"
        variant="black"
      />

      <Button text="Zaloguj" onClick={onSubmit} />
    </form>
  );
}
