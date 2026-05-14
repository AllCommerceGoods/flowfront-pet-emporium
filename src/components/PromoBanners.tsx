import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import promoDogImg from "@/assets/promo-dog.jpg";
import promoCatImg from "@/assets/promo-cat.jpg";

const banners = [
  {
    img: promoDogImg,
    alt: "Dog supplies",
    eyebrow: "Best Friends",
    title: "Dog Supplies",
    desc: "Toys, food, accessories, and more for your best friend.",
    cta: "Shop Dogs",
    link: "/shop?category=Dogs",
  },
  {
    img: promoCatImg,
    alt: "Cat supplies",
    eyebrow: "Feline Favorites",
    title: "Cat Supplies",
    desc: "Everything your cats need to stay happy and healthy.",
    cta: "Shop Cats",
    link: "/shop?category=Cats",
  },
];

export const PromoBanners = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-5">
          {banners.map((banner, i) => (
            <motion.div
              key={banner.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl overflow-hidden min-h-[360px] group cursor-pointer"
            >
              <img
                src={banner.img}
                alt={banner.alt}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
                width={800}
                height={512}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />
              <div className="relative z-10 flex flex-col justify-end h-full p-8 md:p-10">
                <p className="text-white/55 text-xs font-bold uppercase tracking-widest mb-2">{banner.eyebrow}</p>
                <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">{banner.title}</h3>
                <p className="text-white/75 mt-2 font-medium text-sm max-w-xs leading-relaxed">{banner.desc}</p>
                <Button
                  asChild
                  size="sm"
                  className="mt-6 w-fit rounded-full font-bold px-6 bg-white text-slate-900 hover:bg-white/90 transition-colors cursor-pointer border-0 shadow-none"
                >
                  <Link to={banner.link}>
                    {banner.cta} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
