import { DisplayArticles } from "@/types/types";
import Link from "next/link";

export default function Display({ data, title }: DisplayArticles) {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-col gap-5">
        <div className="w-full flex items-center justify-center">
          <h1 className="text-[10vw] tracking-tighter font-medium">{title}</h1>
        </div>
        <ul className="w-full flex flex-col gap-2">
          {data && data?.length > 0
            ? data?.map((item) => (
                <li
                  className="w-full border border-foreground/20 p-1 rounded-lg flex items-center justify-between px-2.5 cursor-pointer hover:bg-foreground/5 duration-200 relative"
                  key={item.id}
                >
                  <Link
                    className="absolute inset-0"
                    href={`/guest/articles/${item.id}`}
                  />
                  <p className="text-lg tracking-tight font-medium text-foreground">
                    {item.title}
                  </p>
                  <p>{item.userId}</p>
                </li>
              ))
            : ""}
        </ul>
      </div>
    </div>
  );
}
