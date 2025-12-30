"use client";
import { Lock } from "lucide-react";
import { useRouter } from "next/navigation";
import { MouseEvent } from "react";

export default function Login() {
  const router = useRouter();

  function onclickguest(event: MouseEvent) {
    event.preventDefault();
    router.push("/guest/articles");
  }

  return (
    <div className="w-full flex items-center justify-center h-screen bg-[radial-gradient(circle_at_center,#1A1919_20%,#000_100%)] font-sans">
      <div className="border border-foreground/20 p-4 rounded-lg bg-foreground/2">
        <form action="" className="w-full flex flex-col gap-4">
          <div className="flex items-center justify-center flex-col gap-2">
            <Lock />
            <p className="text-sm text-foreground text-center">
              Enter password <br /> or continue as a guest
            </p>
          </div>
          <div className="w-full flex flex-col gap-1.5">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="border border-foreground/20 px-2 py-1 rounded-lg"
            />
          </div>
          <div className="w-full grid grid-cols-2 gap-2">
            <button
              onClick={onclickguest}
              className="px-3 py-2 bg-transparent border border-foreground/20 text-foreground hover:bg-foreground/90 hover:text-background rounded-lg cursor-pointer text-sm"
            >
              Continue as guest
            </button>
            <button
              className="px-3 py-2 bg-background text-foreground border border-foreground/20 rounded-lg cursor-pointer text-sm disabled:cursor-not-allowed disabled:opacity-50"
              disabled
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
