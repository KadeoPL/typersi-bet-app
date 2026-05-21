import Link from "next/link";
import Button from "./Button";

type Props = {
  text: string;
  url?: string;
};

export default function ButtonUrl({ text, url }: Props) {
  return (
    <Link href={url ? url : "#"}>
      <Button text={text} className="w-full" />
    </Link>
  );
}
