import { User } from "@/utils/types/user";

export default function getAvatar(user?: User | null) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "";

  return user?.avatar_url
    ? `${apiUrl}${user.avatar_url}`
    : "/avatars/avatar_1.jpg";
}
