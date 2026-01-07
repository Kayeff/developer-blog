import { logout } from "@/lib/auth";
import { ShieldUser } from "lucide-react";
import Link from "next/link";

export default function AuthButton() {
  async function handleClick() {
    const { authenticated } = await logout();
    // handleAuthenticated(authenticated);
    // router.push("/");
  }

  return (
    <Link
      href={"/login"}
      // onClick={isAuthenticated ? handleClick : () => {}}
      className="p-1.5 px-3 border border-foreground/40 rounded-full cursor-pointer flex items-center gap-1 font-medium bg-foreground text-background text-sm tracking-tight"
    >
      <ShieldUser size={20} />
      <span>{false ? "Logout" : "Administrator"}</span>
    </Link>
  );
}
