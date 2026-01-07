export default function DisplayHeader({
  title,
  para,
}: {
  title: string;
  para: string;
}) {
  return (
    <header className="w-full flex items-center justify-center flex-col gap-5 pt-10 ">
      <div className="w-full flex items-center justify-center flex-col gap-1">
        <h1 className="text-[7vw] leading-[7vw] tracking-tight uppercase font-tanker">
          {title}
        </h1>
        <p className="font-tanker">{para}</p>
      </div>
    </header>
  );
}
