"use client";

import SingleIcon from "./SingleIcon";
import { navItems } from "@/utils/navigation-items/navItems";

export default function BottomNavbar() {
  return (
    <div className="fixed bottom-0 left-0 w-full h-20 bg-secondary">
      <div className="max-w-md mx-auto h-full grid grid-cols-4 place-items-center">
        {navItems.map((item, index) => (
          <div key={index}>
            <SingleIcon Icon={item.icon} path={item.path} text={item.text} />
          </div>
        ))}
      </div>
    </div>
  );
}
