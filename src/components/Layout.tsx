import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};
