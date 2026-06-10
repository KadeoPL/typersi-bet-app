export async function uploadAvatar(file: File) {
  const formData = new FormData();

  formData.append("avatar", file);

  const res = await fetch("/api/users/avatar", {
    method: "POST",
    body: formData,
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.detail || "Błąd przesyłania zdjęcia");
  }

  return data;
}
