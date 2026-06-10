export async function uploadAvatar(file: File) {
  const formData = new FormData();

  formData.append("file", file);

  const res = await fetch("/api/users/avatar", {
    method: "POST",
    body: formData,
  });

  const data = await res.json();
  console.log("Zdjęciw wysłane" + data);

  if (!res.ok) {
    throw new Error(data.detail || "Błąd przesyłania zdjęcia");
  }

  return data;
}
