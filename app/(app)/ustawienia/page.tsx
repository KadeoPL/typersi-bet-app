"use client";

import Avatar from "@/components/avatar/Avatar";
import { logout } from "@/utils/logout";
import { settingsAdminItems } from "@/utils/navigation-items/settingsAdminItems";
import { settingsUserItems } from "@/utils/navigation-items/settingsUserItems";
import Link from "next/link";
import { Settings2, LogOut, UserStar } from "lucide-react";

export default function page() {
  return (
    <div>
      <div className="mb-10">
        <Avatar />
      </div>
      <div className="flex flex-col gap-12 p-4 text-lg">
        <div>
          <h3 className="text-textSecondary mb-6 text-sm flex gap-2 items-center">
            <Settings2 className="text-primary" size={20} />
            Zarządzaj
          </h3>
          <ul className="flex flex-col gap-3 text-textPrimary ">
            {settingsUserItems.map((item, index) => (
              <li key={index} className="bg-secondary p-4 text-base rounded-lg">
                <Link href={item.url}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-textSecondary mb-6 text-sm flex gap-2 items-center">
            <UserStar className="text-primary" size={20} />
            Panel admina
          </h3>
          <ul className="flex flex-col gap-3 text-textPrimary ">
            {settingsAdminItems.map((item, index) => (
              <li key={index} className="bg-secondary p-4 text-base rounded-lg">
                <Link href={item.url}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={logout}
          className="cursor-pointer text-danger text-base flex gap-2  items-center"
        >
          <LogOut size={20} />
          Wyloguj
        </div>
      </div>
    </div>
  );
}
