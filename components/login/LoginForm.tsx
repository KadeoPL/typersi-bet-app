"use client";

import { useForm, Resolver } from "react-hook-form";
import { userType } from "@/utils/types/user";
import { Input } from "@/components/Input";

const resolver: Resolver<userType> = async (values) => {
  return {
    values: values.name ? values : {},
    errors: !values.name
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

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3">
      <Input
        {...register("name")}
        placeholder="Wpisz swój login"
        error={errors.name?.message as string}
        variant="black"
      />

      <Input
        {...register("password")}
        placeholder="Wpisz swoje hasło"
        error={errors.name?.message as string}
        type="password"
        variant="black"
      />

      <input type="submit" />
    </form>
  );
}
