"use client";

import { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  type: "password" | "string";
};

export function Input({ label, error, type, ...props }: Props) {
  return (
    <div className="flex flex-col gap-1 ">
      {label && <label className="text-sm">{label}</label>}

      <input
        {...props}
        className="px-4 py-3 rounded-full bg-foreground text-white"
        type={type}
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
