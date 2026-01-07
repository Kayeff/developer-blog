import Display from "@/components/Display";
import { getArticles } from "@/lib/api";

export default async function AdminArticles() {
  const { data } = await getArticles();

  return <Display data={data} />;
}
