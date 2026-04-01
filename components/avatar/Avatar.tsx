export default function Avatar() {
  const username: string = "Kadeo";
  return (
    <div className="w-full px-8 py-8 flex gap-4 items-center">
      <div className="w-12 h-12 bg-white rounded-full drop-shadow-md"></div>
      <div className="font-semibold">
        Witaj, <span className="font-bold">{username}!</span>
      </div>
    </div>
  );
}
