"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import BottomNavbar from "@/components/bottom-navbar/BottomNavbar";

export default function Page() {
  const router = useRouter();
  const isLogged = true;

  useEffect(() => {
    if (!isLogged) router.push("/login");
  }, [isLogged, router]);

  if (!isLogged) return null;

  return (
    <main>
      <BottomNavbar />
    </main>
  );
}
