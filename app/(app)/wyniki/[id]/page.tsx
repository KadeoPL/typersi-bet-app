"use client";
import { getUserStats } from "@/app/lib/api/getUserStats";
import getAvatar from "@/app/lib/getAvatar";
import { getUserRank } from "@/app/lib/getUserRank";
import Loader from "@/components/Loader";
import { User } from "@/utils/types/user";
import {
  ArrowLeft,
  ChartBarBig,
  ChartColumnBig,
  LucideIcon,
  ThumbsUp,
  TrendingUp,
  TrophyIcon,
} from "lucide-react";
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
  const avatar = getAvatar(user);

  const pointsPerMatch =
    user && user.finished_bets_count > 0
      ? (user.total_points / user.finished_bets_count).toFixed(1)
      : "0.0";

  async function loadUser() {
    try {
      setIsLoading(true);
      const data = await getUserStats(id);
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
    <div className="w-full mb-12">
      {isLoading && <Loader />}
      <div className="relative flex items-center">
        <Link href="/wyniki">
          <ArrowLeft className="text-textSecondary" />
        </Link>
        <div className="absolute left-1/2 -translate-x-1/2 text-textPrimary">
          Statystyki gracza
        </div>
      </div>
      <div className="mt-10 flex items-center justify-center gap-5">
        <div
          className="w-28 h-28 rounded-full bg-cover border-2 border-primary"
          style={{
            backgroundImage: `url(${avatar})`,
          }}
        ></div>
        <div className="flex flex-col gap-4">
          <div>
            <div className="text-textPrimary text-left font-bold text-2xl">
              {user?.username}
            </div>
            <div className="text-textSecondary text-left uppercase text-xs mt-1 tracking-widest">
              {rank.name}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <TrophyIcon className="text-primary" />
              <div className="text-primary text-xl font-bold">
                {user?.total_points}
              </div>
              <div className="text-textSecondary text-sm">pkt.</div>
            </div>
            <div className="text-sm text-textSecondary">
              Łączna liczba punktów
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
      <div className="w-full grid grid-cols-2 gap-4 mt-5 p-4">
        <div className="aspect-square bg-surfaceLight rounded-lg p-4 flex flex-col justify-around">
          <TrendingUp className="text-textSecondary" />
          <div className="text-2xl font-bold text-textPrimary">
            {pointsPerMatch}
          </div>
          <div className="text-xs text-textMuted">Średnia punktów na mecz</div>
        </div>
        <div className=" aspect-square bg-surfaceLight rounded-lg p-4 flex flex-col justify-around">
          <ThumbsUp className="text-textSecondary" />
          <div className="text-2xl font-bold text-textPrimary">
            {user?.exact_bets}
          </div>
          <div className="text-xs text-textMuted">Dokładne typy</div>
        </div>
        <div className=" aspect-square bg-surfaceLight rounded-lg p-4 flex flex-col justify-around">
          <ChartBarBig className="text-textSecondary" />
          <div className="text-2xl font-bold text-textPrimary">
            {user?.score_accuracy}
          </div>
          <div className="text-xs text-textMuted">Skuteczność wyniku meczu</div>
        </div>
        <div className=" aspect-square bg-surfaceLight rounded-lg p-4 flex flex-col justify-around">
          <ChartColumnBig className="text-textSecondary" />
          <div className="text-2xl font-bold text-textPrimary">
            {user?.outcome_accuracy}
          </div>
          <div className="text-xs text-textMuted">
            Skuteczność rezultatu meczu
          </div>
        </div>
      </div>
    </div>
  );
}
