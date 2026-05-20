"use client";

import { UserRoleEditType } from "@/utils/types/user";
import UserEditForm from "./UserEditForm";

type EditModalType = {
  closeModal: () => void;
  user: UserRoleEditType;
};

export default function UserEditModal({ closeModal, user }: EditModalType) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
      onClick={closeModal}
    >
      <div
        className="w-80 p-6 rounded-2xl bg-secondary border border-border"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-sm text-textSecondary mb-4">
          Edycja użytkownika{" "}
          <span className="font-bold text-textPrimary">Kadeo</span>
        </div>
        <UserEditForm user={user} />
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
