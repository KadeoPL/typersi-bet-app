import SingleIcon from "./SingleIcon";
import HomeIcon from "@/public/icons/home-icon.svg";

export default function BottomNavbar() {
  return (
    <div className="w-full h-20 absolute bottom-0 flex items-center justify-center bg-foreground px-16 ">
      <SingleIcon Icon={HomeIcon} />
    </div>
  );
}
