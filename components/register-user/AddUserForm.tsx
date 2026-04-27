// "use client";
// import * as z from "zod";
// import { useForm } from "react-hook-form";
// import { Input } from "@/components/Input";
// import Button from "../Button";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useState } from "react";
// import { createUser } from "@/app/(app)/ustawienia/dodaj-uzytkownika/actions";
// import { signUp } from "@/utils/sign-up";
// import { authClient } from "@/utils/auth-client";

// export const addUserSchema = z.object({
//   email: z.string().email("Nieprawidłowy email"),
//   password: z.string().min(8, "Hasło musi mieć minimum 8 znaków"),
//   // role: z.enum(["user", "admin"]),
//   username: z
//     .string()
//     .min(3, "Username min. 3 znaki")
//     .max(20, "Username max. 20 znaków"),
// });

// export default function AddUserForm() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({ resolver: zodResolver(addUserSchema) });

//   const [resError, setResError] = useState<string | undefined>("");
//   const [buttonState, setButtonState] = useState<"loading" | "normal">(
//     "normal",
//   );

//   // const onSubmit = handleSubmit(async (data) => {
//   //   const res = await authClient.signUp.email({
//   //     username: data.username,
//   //     email: data.email,
//   //     password: data.password,
//   //   });
//   // });

//   return (
//     <form onSubmit={')} className="flex flex-col gap-3">
//       <Input
//         {...register("email")}
//         placeholder="Wpisz nazwę użytkownika"
//         error={errors.username?.message as string}
//         variant="black"
//       />

//       <Input
//         {...register("username")}
//         placeholder="Wpisz hasło użytkownika"
//         error={errors.password?.message as string}
//         variant="black"
//       />

//       <Input
//         {...register("password")}
//         placeholder="Wpisz hasło użytkownika"
//         error={errors.password?.message as string}
//         type="password"
//         variant="black"
//       />
//       {/*
//       <Input
//         {...register("role")}
//         error={errors.password?.message as string}
//         type="radio"
//         name="role"
//         label="Rola"
//         radioOptions={["user", "admin"]}
//       /> */}

//       {resError && <p>{resError}</p>}

//       <Button text="Zaloguj" type="submit" state={buttonState} />
//     </form>
//   );
// }
