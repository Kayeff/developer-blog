import Display from "@/components/Display";
import { getArticles } from "@/lib/api";

export default async function GetArticles() {
  const data = await getArticles();

  return <Display title="My Articles" data={data} />;
}
