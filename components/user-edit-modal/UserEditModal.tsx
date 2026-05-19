type EditModalType = {
  closeModal: () => void;
};
export default function UserEditModal({ closeModal }: EditModalType) {
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
