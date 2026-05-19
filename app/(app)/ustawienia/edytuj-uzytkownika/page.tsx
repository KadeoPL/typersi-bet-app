"use client";

import { getUsers } from "@/app/lib/api/getUsers";
import Button from "@/components/Button";
import { User } from "@/utils/types/user";

import { LoaderCircle, Pencil } from "lucide-react";

import { useEffect, useState } from "react";

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [userToEdit, setUserToEdit] = useState<User | null>(null);

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
  }, []);

  return (
    <div>
      <h1 className="mb-6 text-textSecondary">Edytuj użytkownika</h1>

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
                <div className="text-sm text-textSecondary">Administrator</div>
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
      {isModalOpen && (
        <UserEditModal closeModal={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}

type EditModalType = {
  closeModal: () => void;
};
function UserEditModal({ closeModal }: EditModalType) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
      onClick={closeModal}
    >
      <div
        className="w-80 p-6 rounded-2xl bg-secondary border border-border"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-sm text-textSecondary">
          Edycja użytkownika{" "}
          <span className="font-bold text-textPrimary">Kadeo</span>
        </div>
        <button className="w-full bg-primary py-2 rounded-xl font-bold mt-4">
          Zapisz
        </button>
        <button
          onClick={closeModal}
          className="w-full text-textSecondary text-sm mt-4"
        >
          Zamknij okno
        </button>
      </div>
    </div>
  );
}
