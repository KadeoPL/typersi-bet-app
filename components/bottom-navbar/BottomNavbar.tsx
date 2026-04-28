"use client";

import SingleIcon from "./SingleIcon";
import { navItems } from "@/utils/navItems";

export default function BottomNavbar() {
  return (
    <div className="fixed bottom-0 left-0 w-full h-20 bg-black">
      <div className="max-w-md mx-auto h-full grid grid-cols-4 place-items-center">
        {navItems.map((item, index) => (
          <SingleIcon key={index} Icon={item.icon} path={item.path} />
        ))}
      </div>
    </div>
  );
}
