type Props = {
  text: string;
  onClick?: () => void;
};

export default function Button({ text, onClick }: Props) {
  return (
    <button
      className="px-4 py-3 rounded-full bg-white font-semibold"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
