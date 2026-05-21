import { CircleCheck, LoaderCircle } from "lucide-react";

export type ButtonProps = {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  state?: ButtonState;
  className?: string;
  url?: string;
};

export type ButtonState = "normal" | "loading" | "success";

export default function Button({
  text,
  onClick,
  type,
  state = "normal",
  className,
  url,
}: ButtonProps) {
  return (
    <button
      className={`
        px-4 py-3 rounded-full
        bg-primary
        text-background
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
    </button>
  );
}
