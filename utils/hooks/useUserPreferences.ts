import { useContext } from "react";
import { UserPreferencesContext } from "../providers/UserPreferencesProvider";

export function useUserPreferences() {
  const context = useContext(UserPreferencesContext);
  if (!context) {
    throw new Error("useUserPreferences must be used within UISettingProvider");
  }
  return context;
}
