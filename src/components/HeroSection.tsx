import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-pets.jpg";

export const HeroSection = () => {
  return (
    <section className="relative bg-accent overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Happy pets" className="w-full h-full object-cover" width={1920} height={768} loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-2xl space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-[1.05] tracking-tight"
          >
            Everything Your <span className="text-primary">Pets</span> Need, All in One Place
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="text-lg text-muted-foreground max-w-lg font-semibold"
          >
            Premium supplies for dogs, cats, birds, and small animals. Quality products from trusted brands, delivered to your door.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex gap-4"
          >
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-bold px-8 py-3 text-base shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300">
              <Link to="/shop">
                Shop Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full font-bold px-8 py-3 text-base hover:bg-background/80 transition-all duration-300">
              <Link to="/about">Learn More</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
