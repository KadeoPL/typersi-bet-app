import React from "react";

import MatchPredictionsBox from "@/components/MatchPredictionsBox/MatchPredictionsBox";

export default function page() {
  return (
    <div>
      <MatchPredictionsBox isMatchStart={false} />
      <MatchPredictionsBox isMatchStart={false} />
      <MatchPredictionsBox isMatchStart={false} />
      <MatchPredictionsBox isMatchStart={false} />
      <MatchPredictionsBox isMatchStart={false} />
    </div>
  );
}
