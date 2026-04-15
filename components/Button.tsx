type Props = {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export default function Button({ text, onClick, type }: Props) {
  return (
    <button
      className="px-4 py-3 rounded-full bg-white font-semibold"
      onClick={onClick}
      type={type ? type : "button"}
    >
      {text}
    </button>
  );
}
