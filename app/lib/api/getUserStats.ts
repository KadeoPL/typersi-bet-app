export async function getUserStats(id: number) {
  const res = await fetch(`/api/users/${id}/stats`);

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.detail);
  }

  return data;
}
