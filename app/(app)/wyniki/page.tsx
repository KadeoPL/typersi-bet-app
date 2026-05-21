"use client";

import { getUsersLeaderboard } from "@/app/lib/api/getUsersLeaderboard";
import PlayerRow from "@/components/leaderboard/PlayerRow";
import { User } from "@/utils/types/user";
import { useEffect, useState } from "react";

export default function Wyniki() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [first, second, third, ...rest] = users;

  async function loadUsers() {
    try {
      setIsLoading(true);

      const data = await getUsersLeaderboard();

      setUsers(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadUsers();
    console.log(users);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-10 text-textPrimary">Wyniki</h1>
      <div className="w-full flex text-textSecondary text-sm bg-surface px-2 py-2 rounded-t-lg border-[1px] border-borderLight">
        <div className="w-1/5 ">Miejsce</div>
        <div className="w-3/5">Użytkownik</div>
        <div className="w-1/5  border-borderLight text-right">Punkty</div>
      </div>
      {first && (
        <PlayerRow
          place={1}
          username={first.username}
          total_points={first.total_points}
          user_id={first.id}
        />
      )}
      {second && (
        <PlayerRow
          place={2}
          username={second.username}
          total_points={second.total_points}
          user_id={second.id}
        />
      )}
      {third && (
        <PlayerRow
          place={3}
          username={third.username}
          total_points={third.total_points}
          user_id={third.id}
        />
      )}
      {rest.map((user, index) => (
        <PlayerRow
          place={index + 4}
          username={user.username}
          total_points={user.total_points}
          key={index}
          user_id={user.id}
        />
      ))}
    </div>
  );
}
