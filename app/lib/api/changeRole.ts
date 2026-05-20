export async function changeRole(userId: number, role: "admin" | "player") {
  const res = await fetch(
    `/api/users/${userId}/role`,

    {
      method: "PATCH",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        role,
      }),
    },
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.detail);
  }

  return data;
}
