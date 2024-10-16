export const getUsers = async () => {
  const url = "backendUrl";
  const options = { method: "GET" };
  try {
    const response = await fetch(url, options);
    const json = await response.json();
    return json;
  } catch (err) {
    console.log("ERROR:" + err);
  }
};

export const addUser = async (newUser: object) => {
  const url = "backendUrl";
  const data = JSON.stringify(newUser);
  const options = {
    method: "POST",
    headers: { accept: "application/json", "content-type": "application/json" },
    body: data,
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    return json;
  } catch (err) {
    console.log("ERROR:" + err);
  }
};
