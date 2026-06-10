import { CircleCheck, LoaderCircle } from "lucide-react";
import { error } from "next/dist/build/output/log";

export type ButtonProps = {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  state?: ButtonState;
  className?: string;
  url?: string;
  disabled?: boolean;
};

export type ButtonState = "normal" | "loading" | "success" | "error";

export default function Button({
  text,
  onClick,
  type,
  state = "normal",
  className,
  url,
  disabled,
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className={`
        px-4 py-3 rounded-full
        ${state === "error" ? "bg-danger text-textPrimary" : "bg-primary text-background"}
        font-semibold
        flex
        justify-center
        items-center
        gap-2
        ${className || ""}
      `}
      onClick={onClick}
      type={type || "button"}
    >
      {state === "loading" && (
        <>
          <LoaderCircle className="animate-spin" />
          Ładowanie...
        </>
      )}

      {state === "success" && (
        <div className="flex items-center gap-2">
          <CircleCheck />
          Wysłano
        </div>
      )}

      {state === "normal" && text}
      {state === "error" && text}
    </button>
  );
}
