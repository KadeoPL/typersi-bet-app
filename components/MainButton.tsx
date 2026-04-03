import Link from "next/link";

type Props = {
  text: string;
  url?: string;
};

export default function MainButton({ text, url }: Props) {
  if (url) {
    return (
      <div className="w-full bg-primary text-black font-semibold py-3 rounded-full border-2 border-white hover:border-black transition-all ease-in-out cursor-pointer">
        <Link href={url}>{text}</Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-primary text-black font-semibold py-3 rounded-full border-2 border-white hover:border-black transition-all ease-in-out cursor-pointer">
      {text}
    </div>
  );
}
