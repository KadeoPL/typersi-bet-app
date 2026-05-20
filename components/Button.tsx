import { LoaderCircle } from "lucide-react";

export type ButtonProps = {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  state?: ButtonState;
  className?: string;
};

export type ButtonState = "normal" | "loading";

export default function Button({
  text,
  onClick,
  type,
  state,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`px-4 py-3 rounded-full bg-primary text-background font-semibold flex justify-center items-center gap-2  ${className || ""}`}
      onClick={onClick}
      type={type ? type : "button"}
      {...props}
    >
      {state === "loading" ? <LoaderCircle className="animate-spin" /> : ""}
      {state === "loading" ? "Ładowanie..." : text}
    </button>
  );
}
