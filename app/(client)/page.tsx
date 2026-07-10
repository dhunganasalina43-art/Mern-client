import CategorySection from "@/components/landing/category-section";
import Hero from "@/components/landing/hero";
import NewArrivals from "@/components/landing/new_arrival-section";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      {/* nav */}

      {/* hero section */}
      <Hero />
      {/* Our category */}
      <CategorySection />
      {/* featured products */}
      {/* new arrivals */}
      <NewArrivals />


      {/* footer */}
    </main>
  );
}