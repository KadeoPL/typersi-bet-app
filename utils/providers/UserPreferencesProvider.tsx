"use client";

import { createContext, useEffect, useState } from "react";

type MatchCardView = "full" | "compact";

type UserPreferencesType = {
  matchCardView: MatchCardView;
  setMatchCardView: (view: MatchCardView) => void;
};

const UserPreferencesContext = createContext<UserPreferencesType | null>(null);

export default function UserPreferencesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [matchCardView, setMatchCardView] = useState<MatchCardView>("full");

  useEffect(() => {
    const saved = localStorage.getItem("matchCardView");

    if (saved === "full" || saved === "compact") {
      setMatchCardView(saved as "full" | "compact");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("matchCardView", matchCardView);
  }, [matchCardView]);

  return (
    <UserPreferencesContext.Provider
      value={{ matchCardView, setMatchCardView }}
    >
      {children}
    </UserPreferencesContext.Provider>
  );
}

export { UserPreferencesContext };
