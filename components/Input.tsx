"use client";

import { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  variant?: "default" | "black";
  radioOptions?: string[];
};

export function Input({
  label,
  error,
  type = "text",
  variant = "default",
  radioOptions,
  name,
  id,
  ...props
}: Props) {
  const baseStyles = "px-4 py-3 rounded-full";
  const variantStyles =
    variant === "black"
      ? "bg-foreground text-white"
      : "bg-background text-black";

  if (type === "radio" && radioOptions) {
    return (
      <div className="flex flex-col gap-1">
        {label && <span className="text-sm">{label}</span>}

        <div className="flex gap-4">
          {radioOptions.map((option) => (
            <label key={option} className="flex items-center gap-2">
              <input
                type="radio"
                name={name}
                value={option}
                className="accent-black"
                {...props}
              />
              {option}
            </label>
          ))}
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={id} className="text-sm">
          {label}
        </label>
      )}

      <input
        id={id}
        name={name}
        type={type}
        className={`${baseStyles} ${variantStyles}`}
        {...props}
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
