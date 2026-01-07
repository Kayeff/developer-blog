import { api } from "./axios";

export async function getArticles() {
  try {
    const response = await api.get("/articles");
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching articles ${error}`);
  }
}

export async function getArticle(slug: string) {
  try {
    const response = await api.get(`/articles/${slug}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching article ${slug}: ${error}`);
  }
}
