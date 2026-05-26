import { registerSchema } from "@/utils/schema/user";
import { UserRegisterSchema } from "@/utils/types/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Button, { ButtonState } from "../Button";
import { useState } from "react";
import { Input } from "../Input";
import { registerUser } from "@/app/lib/api/auth";
import { Check, Copy } from "lucide-react";

export default function RegisterForm() {
  const [buttonState, setButtonState] = useState<ButtonState>("normal");
  const [resError, setResError] = useState<string>("");
  const [tempPassword, setTempPassword] = useState<string>("");
  const [copied, setCopied] = useState(false);

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
      });

      if (user) setTempPassword(user.temporary_password);

      setButtonState("success");

      setTimeout(() => {
        setButtonState("normal");
      }, 1500);
    } catch (err) {
      setButtonState("normal");
      const message = err instanceof Error ? err.message : String(err);
      setResError(message);
    }
  });

  return (
    <>
      <form onSubmit={onSubmit} className="flex flex-col gap-6">
        <Input
          {...register("username")}
          placeholder="Wpisz nazwę użytkownika"
          error={errors.username?.message as string}
          variant="default"
          onClick={() => setResError("")}
        />

        <Button text="Dodaj użytkownika" type="submit" state={buttonState} />
        {resError && <p className="text-red-500">{resError}</p>}
      </form>

      {tempPassword && (
        <div className="mt-6 bg-secondary p-4 rounded-xl flex justify-between items-center">
          <div>
            <div className="text-sm text-textSecondary">Hasło tymczasowe</div>

            <div className="font-bold text-xl">{tempPassword}</div>
          </div>

          <button
            onClick={async () => {
              await navigator.clipboard.writeText(tempPassword);

              setCopied(true);

              setTimeout(() => setCopied(false), 1500);
            }}
            className=" bg-surface p-2 rounded-lg hover:bg-surfaceLight"
          >
            {copied ? (
              <Check className="text-success" />
            ) : (
              <Copy className="text-textSecondary" />
            )}
          </button>
        </div>
      )}
    </>
  );
}
