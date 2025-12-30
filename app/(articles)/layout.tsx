import Navbar from "../../components/Navbar";
import Container from "../../components/Container";
import { ReactNode } from "react";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full min-h-screen relative font-serif">
      <Container>
        <Navbar />
        {children}
      </Container>
    </div>
  );
}
