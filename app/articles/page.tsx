import Display from "@/components/Display";
import { getArticles } from "@/lib/api";

export default async function Home() {
  const { data } = await getArticles();
  
  return <Display data={data} />;
}
