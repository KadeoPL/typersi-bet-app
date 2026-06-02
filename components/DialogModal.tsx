import { Info, X } from "lucide-react";
import { ranks } from "@/utils/ranks";

type Props = {
  closeModal: () => void;
};

export default function DialogModal({ closeModal }: Props) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
      onClick={closeModal}
    >
      <div
        className="w-80 p-6 rounded-2xl bg-secondary border border-border"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <Info className="text-primary" />
            <div className="font-semibold">Zasady Rankingu</div>
          </div>
          <X className="text-textSecondary" onClick={closeModal} />
        </div>
        <div>
          <div className="text-sm font-semibold mt-8">Jak zdobywać punkty?</div>
          <div className="mt-4 text-sm">
            <div className="flex items-center justify-between py-2 ">
              <div>Dokładny wynik</div>
              <div className="text-primary font-semibold">3 pkt</div>
            </div>
            <div className="flex items-center justify-between py-2 ">
              <div>Poprawny rezultat meczu</div>
              <div className="text-primary font-semibold">1 pkt</div>
            </div>
            <div className="flex items-center justify-between py-2 ">
              <div>Błędny typ</div>
              <div className="text-primary font-semibold">0 pkt</div>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-textSecondary my-6"></div>
        <div>
          <div className="text-sm font-semibold">Rangi użytkowników</div>
          <div className="mt-4 text-sm">
            {ranks.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  className="flex items-center justify-between py-2"
                  key={index}
                >
                  <div className="font-semibold flex items-center gap-1">
                    <div>
                      {Icon && <Icon size={20} className="text-primary" />}
                    </div>{" "}
                    <div>{item.name}</div>
                  </div>
                  <div className="text-textSecondary">
                    {item.min} - {item.max} pkt
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
