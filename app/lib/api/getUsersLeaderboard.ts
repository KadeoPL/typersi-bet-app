export async function getUsersLeaderboard() {
  const res = await fetch("/api/users/leaderboard");

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.detail);
  }

  return data;
}
