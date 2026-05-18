type TeamBoxTypes = {
  name: string;
  flag: string;
};

export default function TeamBox({ name, flag }: TeamBoxTypes) {
  return (
    <div className="flex flex-col gap-4 justify-center">
      <div
        className="w-[72px] h-[72px] bg-lightGray rounded-full bg-cover bg-center bg-no-repeat mx-auto"
        style={{
          backgroundImage: `url(/flags/${flag})`,
        }}
      ></div>
      <div className="text-sm font-semibold text-lightGray text-center w-[100px]">
        {name}
      </div>
    </div>
  );
}
