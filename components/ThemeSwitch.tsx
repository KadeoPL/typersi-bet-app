import { useTheme } from "next-themes";
import React from "react";

type Props = {
  text: string;
};

export default function ThemeSwitch({ text }: Props) {
  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="bg-secondary p-4 rounded-lgw-full flex justify-between items-center "
    >
      <span>{text}</span>

      <div
        className={`w-12 h-6 rounded-full transition-all relative ${theme === "dark" ? "bg-primary" : "bg-textPrimary"}`}
      >
        <div
          className={`w-5 h-5 rounded-full bg-background absolute top-0.5 transition-all ${theme === "dark" ? "left-6" : "left-0.5"}`}
        />
      </div>
    </button>
  );
}
