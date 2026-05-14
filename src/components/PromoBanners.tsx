import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import promoDogImg from "@/assets/promo-dog.jpg";
import promoCatImg from "@/assets/promo-cat.jpg";

export const PromoBanners = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="relative rounded-xl overflow-hidden min-h-[280px] group"
          >
            <img src={promoDogImg} alt="Dog supplies" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" loading="lazy" width={800} height={512} />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
            <div className="relative z-10 flex flex-col justify-end h-full p-8 md:p-10">
              <h3 className="text-2xl font-black text-primary-foreground">Dog Supplies</h3>
              <p className="text-primary-foreground/80 mt-1 font-semibold">Toys, food, accessories, and more for your best friend.</p>
              <Button asChild variant="default" size="sm" className="mt-4 w-fit rounded-full font-bold px-6 shadow-lg">
                <Link to="/shop?category=Dogs">
                  Shop Dogs <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="relative rounded-xl overflow-hidden min-h-[280px] group"
          >
            <img src={promoCatImg} alt="Cat supplies" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" loading="lazy" width={800} height={512} />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
            <div className="relative z-10 flex flex-col justify-end h-full p-8 md:p-10">
              <h3 className="text-2xl font-black text-primary-foreground">Cat Supplies</h3>
              <p className="text-primary-foreground/80 mt-1 font-semibold">Everything your feline friends need to be happy and healthy.</p>
              <Button asChild variant="default" size="sm" className="mt-4 w-fit rounded-full font-bold px-6 shadow-lg">
                <Link to="/shop?category=Cats">
                  Shop Cats <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
