import React from "react";

type PredictionsTeamRadioInputTypes = {
  selectedOption: string | null;
  onChange: (value: string) => void;
  isEdit: boolean;
};

export default function PredictionsTeamRadioInput({
  selectedOption,
  onChange,
  isEdit,
}: PredictionsTeamRadioInputTypes) {
  const options: string[] = ["1", "X", "2"];

  return (
    <div className="flex gap-3">
      {options.map((option) => (
        <label
          key={option}
          className={`cursor-pointer w-16 h-10 rounded-lg border-[1px] transition text-xl flex items-center justify-center ${
            selectedOption === option
              ? isEdit
                ? "bg-primary text-black border-primary"
                : "bg-surfaceLight text-textMuted border-borderLight"
              : "bg-surface text-textMuted border-borderLight"
          }`}
        >
          <input
            type="radio"
            name="prediction"
            value={option}
            checked={selectedOption === option}
            onChange={() => onChange(option)}
            className="hidden"
            disabled={!isEdit}
          />

          {option}
        </label>
      ))}
    </div>
  );
}
