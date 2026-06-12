"use client";

import { getUsersLeaderboard } from "@/app/lib/api/getUsersLeaderboard";
import DialogModal from "@/components/DialogModal";
import PlayerRow from "@/components/leaderboard/PlayerRow";
import { User } from "@/utils/types/user";
import { Info } from "lucide-react";
import { useEffect, useState } from "react";

export default function Wyniki() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [first, second, third, ...rest] = users;
  const [isModalOpen, setIsModalOpen] = useState(false);

  async function loadUsers() {
    try {
      setIsLoading(true);

      const data = await getUsersLeaderboard();
      console.log(data);
      setUsers(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div>
      {isModalOpen && (
        <DialogModal
          closeModal={() => {
            setIsModalOpen(!isModalOpen);
          }}
        />
      )}

      <div className="flex justify-between items-center text-textSecondary">
        <h1 className="text-2xl font-bold  text-textPrimary">Wyniki</h1>
        <Info
          onClick={() => {
            setIsModalOpen(!isModalOpen);
          }}
        />
      </div>
      <p className="text-textSecondary text-sm mb-10 mt-2">
        Ranking typerów Mistrzostw Świata 2026
      </p>
      {/* <div className="w-full flex gap-4 text-textSecondary text-sm bg-surface px-4 py-4 ">
        <div className="w-2/12 ">Miejsce</div>
        <div className="w-7/12">Użytkownik</div>
        <div className="w-2/12  border-borderLight">Punkty</div>
        <div className="w-1/12"></div>
      </div> */}
      {first && (
        <PlayerRow
          place={1}
          username={first.username}
          total_points={first.total_points}
          user_id={first.id}
          avatar_url={first.avatar_url}
        />
      )}
      {second && (
        <PlayerRow
          place={2}
          username={second.username}
          total_points={second.total_points}
          user_id={second.id}
          avatar_url={second.avatar_url}
        />
      )}
      {third && (
        <PlayerRow
          place={3}
          username={third.username}
          total_points={third.total_points}
          user_id={third.id}
          avatar_url={third.avatar_url}
        />
      )}
      {rest.map((user, index) => (
        <PlayerRow
          place={index + 4}
          username={user.username}
          total_points={user.total_points}
          key={index}
          user_id={user.id}
          avatar_url={user.avatar_url}
        />
      ))}
    </div>
  );
}
