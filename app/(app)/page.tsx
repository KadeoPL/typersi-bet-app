import Avatar from "@/components/avatar/Avatar";
import NoMatchesInfo from "@/components/NoMatchesInfo";
import MatchPredictionsBox from "@/components/MatchPredictionsBox/MatchCard";
import { getMatches } from "../lib/api/getMatches";
import { MatchType } from "@/utils/types/match";

export default async function Page() {
  const lockedMatchesData = await getMatches({
    status: "locked",
    limit: 10,
    skip: 0,
    filter: "all",
  });

  return (
    <main className="pb-20">
      <Avatar />
      {lockedMatchesData.length === 0 ? (
        <NoMatchesInfo />
      ) : (
        lockedMatchesData.map((match: MatchType, index: number) => (
          <MatchPredictionsBox matchData={match} key={index} />
        ))
      )}
    </main>
  );
}
