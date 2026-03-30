"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type IconProps = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  path: string;
};

export default function SingleIcon({ Icon, path }: IconProps) {
  const pathname = usePathname();

  const isActive = pathname === path;

  return (
    <div className="cursor-pointer group">
      <Link href={path}>
        <Icon
          className={`w-7 h-7  ${isActive ? "text-primary" : "text-darkGray"} group-hover:text-background `}
        />
      </Link>
    </div>
  );
}
