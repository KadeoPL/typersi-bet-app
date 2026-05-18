import React from "react";
import BottomNavbar from "@/components/bottom-navbar/BottomNavbar";
import { getMe } from "../lib/api/getMe";
import { AuthProvider } from "@/utils/providers/AuthProvider";

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let user = null;

  try {
    user = await getMe();
  } catch {}

  return (
    <div>
      <AuthProvider user={user}>
        <div className="p-4">{children}</div>
        <BottomNavbar />
      </AuthProvider>
    </div>
  );
}
