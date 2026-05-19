import { usePathname } from "next/navigation";
import React from "react";

export default function settingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-10 text-textPrimary">Ustawienia</h1>
      {children}
    </div>
  );
}
