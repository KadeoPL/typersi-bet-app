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

  return responseData;
}

export async function loginUser(data: { username: string; password: string }) {
  const body = new URLSearchParams();

  body.append("username", data.username);
  body.append("password", data.password);

  const res = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: body.toString(),
  });

  const responseData = await res.json();

  if (!res.ok) {
    throw new Error(responseData.detail);
  }

  return responseData;
}
