"use client";

import SettingsPageHeader from "@/components/SettingsPageHeader";
import { useUserPreferences } from "@/utils/hooks/useUserPreferences";

export default function UserPreferencesSettings() {
  const { matchCardView, setMatchCardView } = useUserPreferences();

  return (
    <div>
      <SettingsPageHeader url="ustawienia" text="Preferencje konta" />

      <div className="mt-4">
        <div className="mb-1 font-medium">Wyświetlanie meczów</div>
        <div className="text-xs text-textSecondary">
          Wybierz sposób wyświetlania listy meczów w aplikacji
        </div>

        <div className="mt-4">
          <label className="flexitems-center gap-2">
            <input
              type="radio"
              name="matchCardView"
              value="full"
              checked={matchCardView === "full"}
              onChange={() => setMatchCardView("full")}
              className="hidden"
            />
            <div className="flex gap-2 items-center">
              <div className="w-5 h-5 border-2 border-textPrimary rounded-full flex items-center justify-center">
                {matchCardView === "full" && (
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                )}
              </div>
              <div className="text-md">Widok pełny</div>
            </div>
            <div className="text-xs text-textSecondary ml-7">
              Pokaż wszystkie informacje o meczech - nazwy drużyn, rozgrywki,
              godziny i inne szczegóły.
            </div>
          </label>
          <label className="block flexitems-center gap-2 mt-4">
            <input
              type="radio"
              name="matchCardView"
              value="compact"
              checked={matchCardView === "compact"}
              onChange={() => setMatchCardView("compact")}
              className="hidden"
            />
            <div className="flex gap-2 items-center">
              <div className="w-5 h-5 border-2 border-textPrimary rounded-full flex items-center justify-center">
                {matchCardView === "compact" && (
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                )}
              </div>
              <div className="text-md">Widok skrócony</div>
            </div>
            <div className="text-xs text-textSecondary ml-7">
              Pokaż tylko najważniejsze informacje - skróty drużyn, flaga,
              godzina.
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}
