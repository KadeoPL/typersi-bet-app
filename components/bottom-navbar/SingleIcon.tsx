"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type IconProps = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  path: string;
  text: string;
};

export default function SingleIcon({ Icon, path, text }: IconProps) {
  const pathname = usePathname();

  const isActive = pathname === path;

  return (
    <div className="cursor-pointer group">
      <Link href={path}>
        <Icon
          className={`w-7 h-7 mx-auto ${isActive ? "text-primary" : "text-textSecondary"} `}
        />
        <div
          className={`text-xs mt-2 ${isActive ? "text-primary" : "text-textSecondary"}`}
        >
          {text}
        </div>
      </Link>
    </div>
  );
}
