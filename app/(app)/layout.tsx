import React from "react";
import BottomNavbar from "@/components/bottom-navbar/BottomNavbar";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="w-svw p-8 ">{children}</div>
      <BottomNavbar />
    </div>
  );
}
