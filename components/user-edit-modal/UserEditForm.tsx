import { useForm } from "react-hook-form";
import { UserRoleEditType } from "@/utils/types/user";
import { useState } from "react";
import Button, { ButtonState } from "../Button";

type UserEditFormType = {
  user: UserRoleEditType;
  onSubmit: (data: UserRoleEditType) => void;
};

export default function UserEditForm({ user, onSubmit }: UserEditFormType) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRoleEditType>({
    defaultValues: {
      role: user.role,
    },
  });
  const [buttonState, setButtonState] = useState<ButtonState>("normal");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <select
        {...register("role")}
        className="w-full mt-4 bg-surface border-[1px] border-borderLight text-textPrimary px-2 py-2 focus:border-primary focus:outline-primary"
      >
        <option value={"admin"}>Administrator</option>
        <option value={"player"}>Użytkownik</option>
      </select>
      <Button
        text="Zapisz"
        state={buttonState}
        className="w-full bg-primary py-2 rounded-xl font-bold my-8"
        type="submit"
      />
    </form>
  );
}
