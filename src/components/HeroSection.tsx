import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-pets.jpg";

export const HeroSection = () => {
  return (
    <section className="relative bg-accent overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Happy pets" className="w-full h-full object-cover" width={1920} height={768} />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
      </div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-tight tracking-tight">
            Everything Your <span className="text-primary">Pets</span> Need, All in One Place
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg font-semibold">
            Premium supplies for dogs, cats, birds, and small animals. Quality products from trusted brands, delivered to your door.
          </p>
          <div className="flex gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-bold px-8 py-3 text-base">
              <Link to="/shop">
                Shop Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full font-bold px-8 py-3 text-base">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
