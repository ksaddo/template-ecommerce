"use client";

import Categories from "./components/Categories";
import ProductList from "./components/ProductList";
import Services from "./components/Services";
import Collections from "./components/Collections";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <Categories />
      <Collections />
      <ProductList />
      <Services />
    </main>
  );
}
