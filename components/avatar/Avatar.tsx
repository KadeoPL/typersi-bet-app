export default function Avatar() {
  const username: string = "Kadeo";
  return (
    <div className="w-full flex gap-4 items-center mb-10">
      <div className="w-12 h-12 bg-white rounded-full drop-shadow-md"></div>
      <div className="font-semibold">
        Witaj, <span className="font-bold">{username}!</span>
      </div>
    </div>
  );
}
