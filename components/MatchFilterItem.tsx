import React from "react";

type Props = {
  text: string;
  isActive: boolean;
  onClick: () => void;
};

export default function MatchFilterItem({ text, isActive, onClick }: Props) {
  return (
    <div className="flex gap-1 items-center cursor-pointer" onClick={onClick}>
      <div
        className={`w-3 h-3 rounded-full flex items-center justify-center ${isActive ? "border-primary" : "border-textSecondary"} border-[2px]`}
      >
        {isActive && <div className="w-1 h-1 rounded-full bg-primary"></div>}
      </div>
      <div
        className={`text-xs ${isActive ? "text-primary" : "text-textSecondary"}`}
      >
        {text}
      </div>
    </div>
  );
}
