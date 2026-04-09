import LoginBG from "@/public/login_bg.jpg";
import TypersiLogo from "@/public/typersi_logo_black.png";
import Image from "next/image";
import LoginForm from "@/components/login/LoginForm";

export default function page() {
  return (
    <div className="h-svh bg-primary p-6 relative">
      <Image
        src={LoginBG}
        fill
        alt=""
        className="object-cover opacity-20 bg-blend-multiply"
      />
      <div className="w-full h-full flex flex-col justify-center items-center relative z-10">
        <div className="w-[280px] h-[280px] relative mx-auto">
          <Image
            src={TypersiLogo}
            fill
            alt="Logo aplikacji Typersi"
            className="mix-blend-multiply"
            objectFit="contain"
          />
        </div>
        <div className="text-center my-14">
          <h1 className="font-semibold text-3xl mb-1">Witaj ponownie!</h1>
          <h3>Zaloguj się do konta</h3>
        </div>
        <div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
