"use client";

import { createContext, useContext } from "react";

type User = {
  id: number;
  username: string;
  role: string;
  total_points: number;
  exact_bets: number;
  must_change_password: boolean;
};

type AuthContextType = {
  user: User | null;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
});

export function AuthProvider({
  children,
  user,
}: {
  children: React.ReactNode;
  user: User | null;
}) {
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
