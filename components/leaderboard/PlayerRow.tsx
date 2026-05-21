import { User } from "@/utils/types/user";
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
  return (
    <div
      className={`w-full flex text-textPrimary text-base ${place % 2 === 0 ? "bg-surface" : "bg-surfaceLight"} px-4 py-2`}
    >
      <div className="w-1/5 ">
        <Place place={place} />
      </div>
      <div className="w-3/5 cursor-pointer hover:font-bold">
        <Link href={`/wyniki/${user_id}`}>{username}</Link>
      </div>
      <div className="w-1/5  font-bold text-right text-primary text-base">
        {total_points}
      </div>
    </div>
  );
}

function Place({ place }: { place: number }) {
  switch (place) {
    case 1:
      return <div className="text-yellow-300">{place}</div>;
    case 2:
      return <div className="text-gray-300">{place}</div>;
    case 3:
      return <div className="text-red-950">{place}</div>;
    default:
      return place;
  }
}
