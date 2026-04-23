import { LoaderCircle } from "lucide-react";

type Props = {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  state?: "normal" | "loading";
};

export default function Button({ text, onClick, type, state }: Props) {
  return (
    <button
      className="px-4 py-3 rounded-full bg-white font-semibold flex justify-center items-center gap-2"
      onClick={onClick}
      type={type ? type : "button"}
    >
      {state === "loading" ? <LoaderCircle className="animate-spin" /> : ""}
      {text}
    </button>
  );
}
