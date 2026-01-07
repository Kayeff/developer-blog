import { DisplayArticles } from "@/types/types";
import DisplayHeader from "./DisplayHeader";
import ArticleList from "./ArticleList";
import moment from "moment";
import { Plus } from "lucide-react";

export default function Display({ data }: DisplayArticles) {
  return (
    <section className="w-full flex flex-col gap-20">
      <DisplayHeader
        title={`${false ? "My" : "Kaif's"} Articles`}
        para="Welcome to my blog — a space where I share practical insights,
            lessons learned, and modern approaches to web development."
      />
      <div className="w-full flex flex-col gap-5">
        <div className="w-full flex items-center justify-between">
          <p className="tracking-tight font-semibold text-lg">
            {moment().format("MMMM Do, YYYY")}
          </p>
          <button className="cursor-pointer" aria-label="Add Article">
            <Plus />
          </button>
        </div>
        <ul className="w-full grid grid-cols-1">
          {data && data?.length > 0 ? (
            data?.map((article) => (
              <ArticleList key={article.metadata.date} article={article} />
            ))
          ) : (
            <p>No Articles Found</p>
          )}
        </ul>
      </div>
    </section>
  );
}
