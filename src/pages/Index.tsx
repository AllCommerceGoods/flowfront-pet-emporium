import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { CollectionsGrid } from "@/components/CollectionsGrid";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { PromoBanners } from "@/components/PromoBanners";
import { BrandLogos } from "@/components/BrandLogos";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <CollectionsGrid />
        <FeaturedProducts />
        <PromoBanners />
        <BrandLogos />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
