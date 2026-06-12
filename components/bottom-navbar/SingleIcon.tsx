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
    <div className="cursor-pointer w-full ">
      <Link
        href={path}
        className="flex flex-col  items-center gap-1 w-full text-center"
      >
        <Icon
          className={`w-7 h-7  ${
            isActive
              ? "text-primary drop-shadow-[0_0_8px_var(--primary)]"
              : "text-textSecondary"
          }`}
        />

        <span
          className={`text-xs w-full text-center ${
            isActive ? "text-primary" : "text-textSecondary"
          }`}
        >
          {text}
        </span>
      </Link>
    </div>
  );
}
