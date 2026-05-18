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
      className={`text-xs px-3 py-2 rounded-full cursor-pointer border-[1px] border-border ${isActive ? "bg-primary" : "bg-secondary"} ${isActive ? "text-background" : "text-textSecondary"} transition-all ease-in-out duration-150`}
      onClick={onClick}
    >
      {text}
    </div>
  );
}
