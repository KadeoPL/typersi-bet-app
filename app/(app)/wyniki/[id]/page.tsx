"use client";
import { getUser } from "@/app/lib/api/getUser";
import Loader from "@/components/Loader";
import { User } from "@/utils/types/user";
import { ArrowLeft, BookCheck, TrophyIcon } from "lucide-react";
import Link from "next/link";
import { use, useEffect, useState } from "react";

export default function UserProfile({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = use(params);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  async function loadUser() {
    try {
      setIsLoading(true);
      const data = await getUser(id);
      setUser(data);
      console.log(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div className="w-full">
      {isLoading && <Loader />}
      <div className="relative flex items-center">
        <Link href="/wyniki">
          <ArrowLeft className="text-textSecondary" />
        </Link>
        <div className="absolute left-1/2 -translate-x-1/2 text-textPrimary">
          Profil
        </div>
      </div>
      <div className="mt-10">
        <div className="w-32 h-32 rounded-full bg-primary mx-auto mb-4"></div>
        <div className="text-textPrimary text-center font-bold text-3xl">
          {user?.username}
        </div>
        <div className="text-primary text-center uppercase text-xs mt-2 tracking-widest">
          Aktywny Typer
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-10">
        <div className="flex bg-surface rounded-lg py-4">
          <div className="w-1/3 flex items-center justify-center">
            <TrophyIcon className="text-primary" size={50} />
          </div>
          <div>
            <div className="text-textSecondary">Punkty</div>
            <div className="text-2xl text-textPrimary font-bold">
              {user?.total_points}
            </div>
          </div>
        </div>
        <div className="flex bg-surface rounded-lg py-4">
          <div className="w-1/3 flex items-center justify-center">
            <BookCheck className="text-primary" size={50} />
          </div>
          <div>
            <div className="text-textSecondary">Poprawne typy</div>
            <div className="text-2xl text-textPrimary font-bold">
              {user?.exact_bets}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
