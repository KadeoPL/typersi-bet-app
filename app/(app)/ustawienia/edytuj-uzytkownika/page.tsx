"use client";

import { getUsers } from "@/app/lib/api/getUsers";
import SettingsPageHeader from "@/components/SettingsPageHeader";
import UserEditModal from "@/components/user-edit-modal/UserEditModal";
import { useAuth } from "@/utils/providers/AuthProvider";
import { User } from "@/utils/types/user";

import { LoaderCircle, Pencil } from "lucide-react";
import { redirect } from "next/navigation";

import { useEffect, useState } from "react";

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [userToEdit, setUserToEdit] = useState<User | null>(null);
  const { user } = useAuth();

  if (user?.role === "player") {
    redirect("/");
  }

  async function loadUsers() {
    try {
      setIsLoading(true);

      const data = await getUsers();
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
  }, [isModalOpen]);

  return (
    <div>
      <SettingsPageHeader url="ustawienia" text="Edytuj użytkownika" />

      {isLoading && (
        <div className="mt-4 flex gap-2">
          <LoaderCircle className="animate-spin" />
          Ładowanie
        </div>
      )}

      {!isLoading && (
        <div className="flex flex-col gap-4">
          {users.map((user: any) => (
            <div
              key={user.id}
              className="bg-surface text-textPrimary rounded-lg p-4 flex justify-between items-center"
            >
              <div>
                <div className="text-sm font-bold"> {user.username}</div>
                <div className="text-sm text-textSecondary">
                  {user.role === "admin" ? "Administrator" : "Użytkownik"}
                </div>
              </div>
              <div
                onClick={() => {
                  setIsModalOpen(!isModalOpen);
                  setUserToEdit(user);
                }}
                className="text-primary border-[1px] border-primary rounded-md px-4 py-2 text-sm flex gap-2 items-center hover:bg-primary hover:text-background cursor-pointer"
              >
                <Pencil size={16} />
                Edytuj
              </div>
            </div>
          ))}
        </div>
      )}
      {isModalOpen && userToEdit && (
        <UserEditModal
          user={userToEdit}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}
