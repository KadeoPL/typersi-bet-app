import { MatchCardView } from "@/utils/providers/UserPreferencesProvider";

type TeamBoxTypes = {
  name: string;
  flag: string;
  view: MatchCardView;
  code?: string;
};

export default function MatchTeam({ name, flag, view, code }: TeamBoxTypes) {
  if (view === "full") {
    return (
      <div className="flex flex-col gap-4 justify-center">
        <div
          className="w-[72px] h-[72px]  rounded-full bg-cover bg-center bg-no-repeat mx-auto"
          style={{
            backgroundImage: `url(/flags/${flag})`,
          }}
        ></div>
        <div className="text-sm font-semibold text-textPrimary text-center w-[100px]">
          {name}
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-4 items-center">
      <div
        className="w-[32px] h-[32px]  rounded-full bg-cover bg-center bg-no-repeat mx-auto"
        style={{
          backgroundImage: `url(/flags/${flag})`,
        }}
      ></div>
      <div className="text-sm font-semibold text-textPrimary ">{code}</div>
    </div>
  );
}
