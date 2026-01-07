import moment from "moment";
import { BackendDataObj } from "@/types/types";
import DisplayHeader from "./DisplayHeader";

export default function Article({ article }: { article: BackendDataObj }) {
  const date = moment(article.metadata.date);

  return (
    <article className="w-full flex flex-col gap-5">
      <DisplayHeader title={article.metadata.title} para="" />
      <p className="text-lg tracking-tight font-medium">
        {date.format("Do MMMM YYYY")}
      </p>

      {/* <div className=" rounded-lg flex flex-col gap-4">
        {parts.map((part) => (
          <div key={`${part?.title}${part?.body}`}>
            <h2 className="text-2xl tracking-tight font-semibold">
              {part?.title}
            </h2>
            <p className="text-lg text-gray-500">{part?.body}</p>
          </div>
        ))}
      </div> */}
    </article>
  );
}
