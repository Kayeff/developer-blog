import moment from "moment";
import { BackendDataObj } from "@/types/types";
import Link from "next/link";
import { Trash2 } from "lucide-react";

export default function ArticleList({ article }: { article: BackendDataObj }) {
  const date = moment(article.metadata.date);
  const formatted = date.format("MMMM Do, YYYY");

  return (
    <li className="w-full border-b border-foreground/15 p-4 py-5 flex flex-col gap-2 hover:bg-accent duration-200 relative">
      <div className="flex items-center justify-between">
        <Link href={`/articles/${article.metadata.slug}`}>
          <h3 className="text-4xl font-medium tracking-tight font-tanker">
            {article.metadata.title}
          </h3>
        </Link>
        <button
          className="p-2 rounded-full cursor-pointer hover:text-red-500 hover:bg-red-50"
          aria-label="Delete Article"
        >
          <Trash2 size={20} />
        </button>
      </div>
      <p className="font-medium tracking-tight">{formatted}</p>
    </li>
  );
}
