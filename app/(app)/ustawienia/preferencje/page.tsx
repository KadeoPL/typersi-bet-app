"use client";

import SettingsPageHeader from "@/components/SettingsPageHeader";
import { useUserPreferences } from "@/utils/hooks/useUserPreferences";

export default function UserPreferencesSettings() {
  const { matchCardView, setMatchCardView } = useUserPreferences();

  return (
    <div>
      <SettingsPageHeader url="ustawienia" text="Preferencje konta" />

      <div className="mt-4">
        <div className="mb-2 font-medium">Wyświetlanie meczów</div>
        <div>Wybierz sposób wyświetlania listy meczów w aplikacji</div>

        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="matchCardView"
            value="full"
            checked={matchCardView === "full"}
            onChange={() => setMatchCardView("full")}
          />
          Widok pełny
        </label>

        <label className="flex items-center gap-2 mt-2">
          <input
            type="radio"
            name="matchCardView"
            value="compact"
            checked={matchCardView === "compact"}
            onChange={() => setMatchCardView("compact")}
          />
          Widok skrócony
        </label>
      </div>
    </div>
  );
}
