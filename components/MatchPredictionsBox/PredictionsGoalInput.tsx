type PredictionsGoalInputTypes = {
  goals: number | null;
  onChange: (value: number) => void;
};

export default function PredictionsGoalInput({
  goals,
  onChange,
}: PredictionsGoalInputTypes) {
  return (
    <input
      type="text"
      value={goals === null ? "0" : goals}
      maxLength={2}
      onChange={(e) => {
        const value = e.target.value.replace(/\D/g, "");

        if (value.length <= 2) {
          onChange(Number(value));
        }
      }}
      className={`w-14 h-14 text-center rounded-md font-semibold text-2xl  focus-visible:outline-none ${goals === null ? "text-lightGray" : "text-black"}`}
    />
  );
}
