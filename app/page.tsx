import CategorySection from "@/components/CategorySection";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <CategorySection />
      </main>
      <footer className="mt-auto bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          © 2025 TikTok Shop. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
