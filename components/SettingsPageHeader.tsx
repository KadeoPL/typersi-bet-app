import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type Props = {
  url: string;
  text: string;
};

export default function SettingsPageHeader({ url, text }: Props) {
  return (
    <div className="relative flex items-center mb-6">
      <Link href={`/${url}`}>
        <ArrowLeft className="text-textSecondary" />
      </Link>
      <div className="absolute left-1/2 -translate-x-1/2 text-textPrimary">
        {text}
      </div>
    </div>
  );
}
