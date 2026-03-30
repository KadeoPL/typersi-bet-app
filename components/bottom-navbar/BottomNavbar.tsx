"use client";

import SingleIcon from "./SingleIcon";
import { navItems } from "@/utils/navItems";

export default function BottomNavbar() {
  return (
    <div className="w-full h-20 absolute bottom-0 flex gap-16 items-center justify-center bg-foreground px-16 ">
      {navItems.map((item, index) => (
        <SingleIcon key={index} Icon={item.icon} path={item.path} />
      ))}
    </div>
  );
}
