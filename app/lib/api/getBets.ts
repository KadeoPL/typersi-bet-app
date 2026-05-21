export async function getBets(id: number) {
  const res = await fetch(`/api/bet/match/${id}`);

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.detail);
  }

  return data;
}
