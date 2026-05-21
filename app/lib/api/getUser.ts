export async function getUser(id: number) {
  const res = await fetch(`/api/users/${id}`);

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.detail);
  }

  return data;
}
