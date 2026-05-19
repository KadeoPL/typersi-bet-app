export async function getUsers() {
  const res = await fetch("/api/users");

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.detail);
  }

  return data;
}
