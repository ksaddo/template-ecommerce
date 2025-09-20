"use client";

import Categories from "./components/Categories";
import ProductList from "./components/ProductList";
import Services from "./components/Services";
import Collections from "./components/Collections";
import HeroSection from "./components/HeroSection";
import NewCategory from "./components/NewCategory";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <NewCategory />
      <Collections />

      <ProductList />
      <Services />
    </main>
  );
}
