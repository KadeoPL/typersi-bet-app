"use client";

import { MatchType } from "@/utils/types/match";
import SetResultForm from "./SetResultForm";

type EditModalType = {
  closeModal: () => void;
  match: MatchType;
};

export default function SetResultModal({ closeModal, match }: EditModalType) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
      onClick={closeModal}
    >
      <div
        className="w-80 p-6 rounded-2xl bg-secondary border border-border"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-sm text-textSecondary mb-4">Ustaw wynik meczu</div>
        {<SetResultForm match={match}></SetResultForm>}
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
