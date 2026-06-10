import { getUserRank } from "@/app/lib/getUserRank";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

type PlayerRowProps = {
  place: number;
  username: string;
  total_points: number;
  user_id: number;
};

export default function PlayerRow({
  username,
  total_points,
  place,
  user_id,
}: PlayerRowProps) {
  const rank = getUserRank(total_points);

  const placeColor = (place: number) => {
    switch (place) {
      case 1:
        return "bg-primary text-background";

      case 2:
        return "bg-[#C7D2E5] text-background";

      case 3:
        return "bg-[#C67A3D] text-background";

      default:
        return "bg-transparent text-textSecondary";
    }
  };
  return (
    <div
      className={`w-full flex gap-4 text-textPrimary text-base ${place % 2 === 0 ? "bg-surface" : "bg-surfaceLight"} px-4 py-4`}
    >
      <div className="w-2/12 flex items-center text-xl font-bold">
        <div
          className={`w-10 h-10 flex items-center justify-center rounded-full ${placeColor(place)} `}
        >
          {place}
        </div>
      </div>
      <div className="w-7/12 cursor-pointer hover:font-bold flex gap-2 items-center">
        <div className="w-8 h-8 rounded-full"></div>
        <div>
          <Link className="font-bold text-lg" href={`/wyniki/${user_id}`}>
            {username}
          </Link>
          <div className="text-xs text-textSecondary mt-1">{rank.name}</div>
        </div>
      </div>
      <div className="w-2/12 flex items-center justify-center font-bold text-xl text-primary">
        {total_points}
      </div>
      <div className="w-1/12 flex items-center">
        <Link href={`/wyniki/${user_id}`}>
          <ChevronRight className="text-textSecondary" size={20} />
        </Link>
      </div>
    </div>
  );
}

function Place({ place }: { place: number }) {
  switch (place) {
    case 1:
      return (
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-background">
          {place}
        </div>
      );
    case 2:
      return (
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#C7D2E5] text-background">
          {place}
        </div>
      );
    case 3:
      return (
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#B56A35] text-background">
          {place}
        </div>
      );
    default:
      return (
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-background">
          {place}
        </div>
      );
  }
}
