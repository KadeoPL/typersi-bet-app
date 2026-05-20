"use client";

import { getUsersLeaderboard } from "@/app/lib/api/getUsersLeaderboard";
import { User } from "@/utils/types/user";
import { useEffect, useState } from "react";

export default function Wyniki() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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
    console.log(users);
  }, []);

  return <div>Wyniki</div>;
}
