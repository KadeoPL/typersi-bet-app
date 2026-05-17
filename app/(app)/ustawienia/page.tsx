"use client";

import Avatar from "@/components/avatar/Avatar";
import { logout } from "@/utils/logout";
import { settingsAdminItems } from "@/utils/navigation-items/settingsAdminItems";
import { settingsUserItems } from "@/utils/navigation-items/settingsUserItems";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <div className="mb-10">
        <Avatar />
      </div>
      <div className="flex flex-col gap-12 p-4 text-lg">
        <div>
          <h3 className="text-darkGray mb-6">Zarządzaj</h3>
          <ul className="flex flex-col gap-3 text-black ml-3">
            {settingsUserItems.map((item, index) => (
              <li key={index}>
                <Link href={item.url}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-darkGray mb-6">Panel admina</h3>
          <ul className="flex flex-col gap-3 text-black ml-3">
            {settingsAdminItems.map((item, index) => (
              <li key={index}>
                <Link href={item.url}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div onClick={logout} className="cursor-pointer">
          Wyloguj
        </div>
      </div>
    </div>
  );
}
