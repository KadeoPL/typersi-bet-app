import ChangePasswordForm from "@/components/ChangePasswordForm";
import SettingsPageHeader from "@/components/SettingsPageHeader";

export default function AddUser() {
  return (
    <div>
      <SettingsPageHeader url="ustawienia" text="Zmień hasło" />
      <ChangePasswordForm />
    </div>
  );
}
