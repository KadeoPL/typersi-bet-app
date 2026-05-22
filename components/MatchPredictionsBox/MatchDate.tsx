type MatchDateType = {
  matchDate: Date;
  isMatchStart: boolean;
};

export default function MatchDate({ matchDate, isMatchStart }: MatchDateType) {
  const date = new Date(`${matchDate}Z`);

  const formattedTime = date.toLocaleTimeString("pl-PL", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Warsaw",
  });

  const formattedDate = date.toLocaleDateString("pl-PL", {
    day: "2-digit",
    month: "2-digit",
    timeZone: "Europe/Warsaw",
  });

  return (
    <div className="flex flex-col items-center pt-5 ">
      <div className="text-primary text-xl font-bold">
        {isMatchStart ? ":" : formattedTime}
      </div>

      <div className="text-textSecondary text-sm">
        {isMatchStart ? "" : formattedDate}
      </div>
    </div>
  );
}
