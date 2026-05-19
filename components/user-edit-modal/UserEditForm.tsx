import { useForm } from "react-hook-form";
import { User } from "@/utils/types/user";

export default function UserEditForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "Kadeo",
      role: "Administrator",
    },
  });

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register} />
    </form>
  );
}
