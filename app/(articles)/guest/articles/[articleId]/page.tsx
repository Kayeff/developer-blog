import Article from "@/components/Article";
import axios from "axios";

export default async function GetArticle({
  params,
}: {
  params: Promise<{ articleId: string }>;
}) {
  const { articleId } = await params;
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${articleId}`
  );

  return <Article article={data} />;
}
