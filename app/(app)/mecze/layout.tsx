import React from "react";

export default function matchesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-textPrimary">Ustawienia</h1>
      {children}
    </div>
  );
}
