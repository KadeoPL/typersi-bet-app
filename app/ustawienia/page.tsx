import Avatar from "@/components/avatar/Avatar";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <div className="mb-10">
        <Avatar />
      </div>
      <div className="flex flex-col gap-12 p-4 text-lg">
        <div>
          <h3 className="text-darkGray mb-6">Zarządzaj</h3>
          <ul className="flex flex-col gap-3 text-black ml-3">
            <li>Wybierz zdjęcie profilowe</li>
            <li>Zmień hasło</li>
            <li>Wyloguj</li>
          </ul>
        </div>
        <div>
          <h3 className="text-darkGray mb-6">Panel admina</h3>
          <ul className="flex flex-col gap-3 text-black ml-3">
            <li>
              <Link href="ustawienia/dodaj-uzytkownika">Dodaj użytkownika</Link>
            </li>
            <li>Edytuj użytkownika</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
