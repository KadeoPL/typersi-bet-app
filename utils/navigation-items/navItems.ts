import HomeIcon from "@/public/icons/home-icon.svg";
import MatchesIcon from "@/public/icons/matches-icon.svg";
import LeaderboardIcon from "@/public/icons/leaderboard-icon.svg";
import UserIcon from "@/public/icons/user-icon.svg";

export const navItems = [
  {
    path: "/",
    icon: HomeIcon,
    text: "Home",
  },
  {
    path: "/mecze",
    icon: MatchesIcon,
    text: "Mecze",
  },
  {
    path: "/wyniki",
    icon: LeaderboardIcon,
    text: "Wyniki",
  },
  {
    path: "/ustawienia",
    icon: UserIcon,
    text: "Profil",
  },
];
