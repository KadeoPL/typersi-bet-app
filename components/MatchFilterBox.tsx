type MatchFilterType = {
  text: string;
  isActive: boolean;
  onClick: () => void;
};

export default function MatchFilterBox({
  text,
  isActive,
  onClick,
}: MatchFilterType) {
  return (
    <div
      className={`text-xs px-3 py-2 rounded-full cursor-pointer ${isActive ? "bg-primary" : "bg-background"} ${isActive ? "font-bold" : "font-semibold"} transition-all ease-in-out duration-150`}
      onClick={onClick}
    >
      {text}
    </div>
  );
}
