import React from "react";

type PredictionsTeamRadioInputTypes = {
  selectedOption: string | null;
  onChange: (value: string) => void;
};

export default function PredictionsTeamRadioInput({
  selectedOption,
  onChange,
}: PredictionsTeamRadioInputTypes) {
  const options: string[] = ["1", "X", "2"];

  return (
    <div className="flex gap-3">
      {options.map((option) => (
        <label
          key={option}
          className={` cursor-pointer w-12 h-12 rounded-xl border-2 transition text-xl font-bold flex items-center justify-center ${selectedOption === option ? "bg-primary text-black border-primary" : "bg-none text-darkGray border-darkGray"}`}
        >
          <input
            type="radio"
            name="prediction"
            value={option}
            checked={selectedOption === option}
            onChange={() => onChange(option)}
            className="hidden"
          />

          {option}
        </label>
      ))}
    </div>
  );
}
