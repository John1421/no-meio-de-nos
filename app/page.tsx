import Image from "next/image";
import logo from "../public/logo.jpeg";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { CategoriesSection } from "@/components/categories-section";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <CategoriesSection />
      </main>
      <Footer />
    </div>

  );
}
