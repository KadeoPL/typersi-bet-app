import Image from "next/image";
import NoMatchesImage from "@/public/no-matches-img.png";
import MainButton from "./MainButton";

export default function NoMatchesInfo() {
  return (
    <div className="w-full px-8 text-center flex-col justify-center">
      <div className="w-full">
        <Image
          src={NoMatchesImage}
          width={280}
          height={280}
          alt="Brak meczy, grafika piłki"
          className="h-auto w-[280px] mx-auto"
        />
      </div>
      <div className="w-full mt-8 mb-12">
        <h1 className="font-semibold text-xl">Brak aktualnych meczów</h1>
        <p>Obecnie brak rozgrywek</p>
      </div>
      <div>
        <MainButton text="Sprawdź terminarz" />
      </div>
    </div>
  );
}
