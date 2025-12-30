import axios from "axios";

export async function getArticles() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return response.data;
}
