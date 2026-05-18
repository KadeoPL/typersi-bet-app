"use client";

import { useAuth } from "@/utils/providers/AuthProvider";
import Link from "next/link";

export default function Avatar() {
  const { user } = useAuth();
  console.log(user);

  return (
    <div className="w-full flex gap-4 items-center mb-10 bg-secondary p-4 rounded-lg">
      <div className="w-12 h-12 bg-white rounded-full drop-shadow-md"></div>
      <div>
        <div className="font-semibold text-textPrimary">
          Witaj, <span className="font-bold">{user?.username}!</span>
        </div>

        <div className="text-textSecondary">
          <Link href={"/wyniki"}>{user?.total_points} pkt</Link>
        </div>
      </div>
    </div>
  );
}
