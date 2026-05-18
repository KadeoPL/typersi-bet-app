type MatchDateType = {
  matchDate: Date;
  isMatchStart: boolean;
};

export default function MatchDate({ matchDate, isMatchStart }: MatchDateType) {
  const date = new Date(matchDate);
  const hour = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const day = date.getDate();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");

  return (
    <div className="flex flex-col items-center pt-5">
      <div className="text-primary text-xl font-bold text-center">
        {isMatchStart ? ":" : `${hour}:${minutes}`}
      </div>
      <div className="text-textSecondary text-sm text-center">
        {isMatchStart ? "" : `${day}.${month}`}
      </div>
    </div>
  );
}
