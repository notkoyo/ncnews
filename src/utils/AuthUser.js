import axios from "axios";

const getUsers = async () => {
  const data = await axios.get("https://nc-news-api-8ppx.onrender.com/api/users");
  const { users } = data.data;
  return users;
}

export { getUsers };