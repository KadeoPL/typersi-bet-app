export async function registerUser(data: {
  username: string;
  password: string;
}) {
  const res = await fetch(`/api/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const responseData = await res.json();

  if (!res.ok) {
    throw new Error(responseData.detail);
  }

  return res.json;
}
