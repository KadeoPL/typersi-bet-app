export async function changePassword(data: {
  currentPassword: string;

  newPassword: string;
}) {
  const res = await fetch(
    "/api/users/password",

    {
      method: "PATCH",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        currentPassword: data.currentPassword,

        newPassword: data.newPassword,
      }),
    },
  );
}
