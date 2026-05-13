import Avatar from "@/components/avatar/Avatar";
import NoMatchesInfo from "@/components/NoMatchesInfo";
import MatchPredictionsBox from "@/components/MatchPredictionsBox/MatchPredictionsBox";

export default async function Page() {
  return (
    <main className="mb-20">
      <Avatar />
      <NoMatchesInfo />
      <MatchPredictionsBox isMatchStart={false} />
      <MatchPredictionsBox isMatchStart={true} />
    </main>
  );
}
