import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-pets.jpg";

const trustSignals = [
  "Free Shipping Over $75",
  "30-Day Returns",
  "Premium Brands",
];

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden min-h-[88vh] flex items-center">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Happy pets"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/97 via-background/75 to-background/5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-24 md:py-36 relative z-10 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-7"
          >
            Premium Pet Supplies
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.04] tracking-tight"
          >
            Everything Your{" "}
            <span className="text-primary">Pets</span>{" "}
            Need
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22, ease: "easeOut" }}
            className="text-lg md:text-xl text-muted-foreground mt-6 mb-9 max-w-lg leading-relaxed"
          >
            Discover premium supplies for dogs, cats, birds, and small animals. Quality products from trusted brands, delivered fast to your door.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34 }}
            className="flex flex-wrap gap-3"
          >
            <Button
              asChild
              size="lg"
              className="rounded-full font-bold px-9 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              <Link to="/shop">
                Shop Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full font-bold px-8 bg-background/80 backdrop-blur-sm hover:bg-background transition-all duration-200 cursor-pointer"
            >
              <Link to="/about">Our Story</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.52 }}
            className="flex flex-wrap gap-5 mt-10"
          >
            {trustSignals.map((signal) => (
              <div key={signal} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="font-semibold">{signal}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
