"use client";

import { uploadAvatar } from "@/app/lib/api/uploadAvatar";
import getAvatar from "@/app/lib/getAvatar";
import Button, { ButtonState } from "@/components/Button";
import SettingsPageHeader from "@/components/SettingsPageHeader";
import { useAuth } from "@/utils/providers/AuthProvider";
import { CloudUpload } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function page() {
  const [preview, setPreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string>("");
  const [buttonState, setButtonState] = useState<ButtonState>("normal");
  const buttonText = () => {
    switch (buttonState) {
      case "normal":
        return "Zapisz zdjęcie";
      case "success":
        return "Zdjęcie zapisane";
      case "loading":
        return "Zapisywanie...";
      case "error":
        return "Błąd zapisywania, spróbuj ponownie";
    }
  };

  const { user } = useAuth();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;
    setFile(selectedFile);
    const imageUrl = URL.createObjectURL(selectedFile);
    setPreview(imageUrl);
  };

  const handleSubmit = async () => {
    if (!file) return;

    try {
      setButtonState("loading");
      await uploadAvatar(file);
      setButtonState("success");
      setTimeout(() => {
        setButtonState("normal");
      }, 2000);
    } catch (err) {
      console.error(err);
      const message = err instanceof Error ? err.message : String(err);
      console.log(message);
      setButtonState("error");
      setTimeout(() => {
        setButtonState("normal");
      }, 3000);
    }
  };

  const avatarSrc = preview || getAvatar(user);

  return (
    <div className="mb-12">
      <div className="px-4">
        <div>
          <SettingsPageHeader url="ustawienia" text="Zdjęcie profilowe" />

          <p className="text-textSecondary text-sm">
            Wgraj swoje zdjęcie profilowe. Będzie widoczne dla innych
            użytkowników.
          </p>
        </div>

        <div className="w-24 h-24 rounded-full bg-cover bg-center border-2 border-primary mx-auto my-4 relative overflow-hidden">
          <Image
            src={avatarSrc}
            fill
            alt="Zdjęcie profilowe użytkownika"
            className="object-cover"
          />
        </div>

        <input
          id="avatar"
          type="file"
          accept="image/png,image/jpeg,image/webp"
          onChange={handleFileChange}
          className="hidden"
        />
        <label
          htmlFor="avatar"
          className="block w-full bg-surface my-8 rounded-xl p-4 text-sm font-bold"
        >
          <div className="mb-4">Wybierz zdjęcie</div>
          <div className="w-full flex flex-col items-center justify-center mt-4 bg-surfaceLight rounded-xl py-8">
            <CloudUpload size={40} className="text-textSecondary" />
            <div className="text-sm text-textSecondary font-normal mt-4">
              Kliknij tutaj, aby{" "}
              <span className="text-primary font-semibold">wybrać zdjęcie</span>
            </div>
          </div>
          <div className="text-xs text-textMuted mt-2 font-normal">
            Obsługiwane formaty: .jpg, .png. Maksymalny rozmiar: 5 MB.
          </div>
        </label>

        <Button
          text={buttonText()}
          className="w-full"
          onClick={handleSubmit}
          state={buttonState}
          disabled={buttonState === "loading"}
        />
      </div>
    </div>
  );
}
