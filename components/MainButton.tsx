import React from "react";

type Props = {
  text: string;
};

export default function MainButton({ text }: Props) {
  return (
    <div className="w-full bg-primary text-black font-semibold py-3 rounded-full border-2 border-white hover:border-black transition-all ease-in-out cursor-pointer">
      {text}
    </div>
  );
}
