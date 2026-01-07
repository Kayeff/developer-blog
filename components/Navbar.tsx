import Link from "next/link";
import AuthButton from "./AuthButton";
import Container from "./Container";

export default function Navbar() {
  return (
    <nav className="w-full py-4 sticky top-0 left-0 z-50 bg-background">
      <Container className="flex items-center justify-between">
        <div>
          <Link
            href="/articles"
            className="text-2xl tracking-tighter font-medium"
          >
            Develog
          </Link>
        </div>
        <div>{/* <AuthButton /> */}</div>
      </Container>
    </nav>
  );
}
