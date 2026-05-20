"use client";

import { User, UserRoleEditType } from "@/utils/types/user";
import UserEditForm from "./UserEditForm";
import Button, { ButtonState } from "../Button";
import { useState } from "react";

type EditModalType = {
  closeModal: () => void;
  user: UserRoleEditType;
};

export default function UserEditModal({ closeModal, user }: EditModalType) {
  const handleSubmit = (data: UserRoleEditType) => {
    console.log(data);
  };

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
        <UserEditForm user={user} onSubmit={handleSubmit} />
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
