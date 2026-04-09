"use client";

import { useForm, Resolver } from "react-hook-form";
import { userType } from "@/utils/types/user";

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
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <input {...register("name")} placeholder="Wpisz swój login" />
      {errors?.name && <p>{errors.name.message}</p>}

      <input {...register("password")} placeholder="Wpisz swoje hasło" />

      <input type="submit" />
    </form>
  );
}
