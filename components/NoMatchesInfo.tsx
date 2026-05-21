import Image from "next/image";
import NoMatchesImage from "@/public/no-matches-img.png";
import ButtonUrl from "./ButtonUrl";

export default function NoMatchesInfo() {
  return (
    <div className="w-full  text-center flex-col justify-center items-center">
      <div className="relative w-full mx-auto">
        <Image
          src={NoMatchesImage}
          alt="Brak meczy"
          className="
    w-full
    max-w-[280px]
    h-auto
    mx-auto
  "
        />
      </div>
      <div className="w-full mt-8 mb-12 px-4">
        <h1 className="font-semibold text-xl text-textPrimary">
          Brak meczów na żywo.
        </h1>
        <p className="text-sm text-textSecondary">
          Obecnie nie toczą się żadne rozgrywki. Sprawdź terminarz i zobacz
          nadchodzące spotkania.
        </p>
      </div>
      <div className="px-4">
        <ButtonUrl text="Sprawdź terminarz" url="/mecze" />
      </div>
    </div>
  );
}
