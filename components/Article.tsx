import { BackendDataObj } from "@/types/types";

export default function Article({ article }: { article: BackendDataObj }) {
  return (
    <section className="w-full flex flex-col">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-[5vw] tracking-tight font-medium">
          Article {article.id}
        </h1>
        <p className="text-2xl">{article.userId}</p>
      </div>
      <p className="text-xl">{article.title}</p>
      <p className="text-xl">{article.body}</p>
    </section>
  );
}
