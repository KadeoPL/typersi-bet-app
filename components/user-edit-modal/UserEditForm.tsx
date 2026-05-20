import { useForm } from "react-hook-form";
import { UserRoleEditType } from "@/utils/types/user";
import Button, { ButtonState } from "../Button";
import { changeRole } from "@/app/lib/api/changeRole";
import { useState } from "react";

type UserEditFormType = {
  user: UserRoleEditType;
};

export default function UserEditForm({ user }: UserEditFormType) {
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

  const onSubmit = async (data: UserRoleEditType) => {
    try {
      setButtonState("loading");

      await changeRole(user.id, data.role);

      setButtonState("success");

      setTimeout(() => {
        setButtonState("normal");
      }, 1500);
    } catch (err) {
      console.error(err);

      setButtonState("normal");
    }
  };

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
