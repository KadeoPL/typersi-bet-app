import { LoaderCircle } from "lucide-react";

export default function Loader() {
  return (
    <div className="mt-4 flex gap-2 text-textSecondary">
      <LoaderCircle className="animate-spin text-textSecondary" /> Ładowanie
    </div>
  );
}
