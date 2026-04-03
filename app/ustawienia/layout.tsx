import React from "react";

export default function settingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h1 className="text-xl font-semibold mb-10">Ustawienia</h1>
      {children}
    </div>
  );
}
