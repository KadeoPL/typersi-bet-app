import { ranks } from "@/utils/ranks";

export function getUserRank(points: number) {
  return (
    ranks.find((rank) => points >= rank.min && points <= rank.max)?.name ||
    "Brak rangi"
  );
}
