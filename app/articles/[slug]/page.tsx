import Article from "@/components/Article";
import { getArticle } from "@/lib/api";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { data } = await getArticle(slug);

  return <Article article={data} />;
}
