import { Truck, RotateCcw, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";

const trustItems = [
  {
    icon: Truck,
    title: "Free Shipping",
    desc: "On all orders over $75",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    desc: "30-day hassle-free returns",
  },
  {
    icon: ShieldCheck,
    title: "Premium Brands",
    desc: "Vet-approved, quality-verified",
  },
  {
    icon: Zap,
    title: "Fast Fulfillment",
    desc: "Ships in 1–2 business days",
  },
];

export const TrustBar = () => {
  return (
    <section className="border-y border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-start gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-bold text-foreground text-sm">{item.title}</p>
                <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
