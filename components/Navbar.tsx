import { ShieldUser } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-4 sticky top-0 left-0 z-50 bg-background">
      <div className="">
        <Link
          href="/guest/articles"
          className="text-2xl tracking-tight font-medium"
        >
          Develog
        </Link>
      </div>
      <div>
        <Link
          href="/login"
          className="p-1.5 px-3 border border-foreground/40 rounded-full cursor-pointer flex items-center gap-1 font-sans text-sm tracking-tight"
        >
          <ShieldUser size={20} />
          <span>Administrator</span>
        </Link>
      </div>
    </nav>
  );
}
