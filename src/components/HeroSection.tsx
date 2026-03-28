import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative bg-accent overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Everything Your <span className="text-primary">Pets</span> Need, All in One Place
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg">
            Premium supplies for dogs, cats, birds, and small animals. Quality products from trusted brands, delivered to your door.
          </p>
          <div className="flex gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/shop">
                Shop Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
