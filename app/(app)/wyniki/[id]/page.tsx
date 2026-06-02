"use client";
import { getUser } from "@/app/lib/api/getUser";
import { getUserRank } from "@/app/lib/getUserRank";
import Loader from "@/components/Loader";
import { User } from "@/utils/types/user";
import { ArrowLeft, BookCheck, LucideIcon, TrophyIcon } from "lucide-react";
import Link from "next/link";
import { use, useEffect, useState } from "react";

type Rank = {
  name: string;
  min: number;
  max: number;
  icon: LucideIcon;
};

export default function UserProfile({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = use(params);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const rank: Rank = getUserRank(user?.total_points ?? 0);
  const Icon = rank.icon;

  async function loadUser() {
    try {
      setIsLoading(true);
      const data = await getUser(id);
      setUser(data);
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
        <div
          className="w-32 h-32 rounded-full bg-cover border-2 border-primary mx-auto mb-4"
          style={{
            backgroundImage: "url('/avatars/avatar_1.jpg')",
          }}
        ></div>
        <div className="text-textPrimary text-center font-bold text-3xl">
          {user?.username}
        </div>
        <div className="text-primary text-center uppercase text-xs mt-2 tracking-widest">
          {rank.name}
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
      <div className="mt-10 px-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <div className="w-14 h-14 bg-surfaceLight grid place-content-center rounded-full">
              <Icon />
            </div>
            <div>
              <div className="text-textSecondary text-sm">Obecna ranga</div>
              <div className="font-semibold">{rank.name}</div>
            </div>
          </div>
          <div>
            <div className="text-primary font-bold">
              {user?.total_points} / {rank.max} pkt
            </div>
          </div>
        </div>
        <div className="w-full h-4 bg-surfaceLight rounded-lg mt-4">
          <div
            className="h-3 bg-primary rounded-lg"
            style={{
              width: `${Math.min(
                ((user?.total_points ?? 0) / rank.max) * 100,
                100,
              )}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
