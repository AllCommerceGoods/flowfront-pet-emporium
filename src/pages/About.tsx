import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { MapPin, Package, Users, Star } from "lucide-react";
import heroImg from "@/assets/hero-pets.jpg";
import warehouseExterior from "@/assets/warehouse-exterior.jpg";
import warehouseInterior from "@/assets/warehouse-interior.jpg";

const stats = [
  { label: "Products", value: "500+", icon: Package },
  { label: "Happy Customers", value: "2,000+", icon: Users },
  { label: "Average Rating", value: "4.8", icon: Star },
  { label: "Locations", value: "2", icon: MapPin },
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <div className="w-full h-[320px] md:h-[440px] overflow-hidden relative">
          <img
            src={heroImg}
            alt="Happy pets"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute bottom-10 left-0 right-0 text-center px-4"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Our Story</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight">
              About FlowFront Global
            </h1>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="border-b border-border bg-card">
          <div className="max-w-5xl mx-auto px-4 md:px-6 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="text-center"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-3xl font-extrabold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground font-medium mt-0.5">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-4 md:px-6 py-14 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8 text-muted-foreground leading-relaxed"
          >
            <div className="space-y-4">
              <h2 className="text-2xl font-extrabold text-foreground">Who We Are</h2>
              <p>
                FlowFront Global LLC is a pet supply company founded by{" "}
                <strong className="text-foreground font-bold">Angel Cardenas</strong> and{" "}
                <strong className="text-foreground font-bold">Sebastian Fletes</strong>. What started as a shared
                passion for animals and entrepreneurship has grown into a business dedicated to delivering premium
                pet products to customers across the country.
              </p>
              <p>
                We carry a wide range of products for dogs, cats, birds, and small animals — from trusted brands
                like Roudybush, PureBites, and Jolly Pets — and we are continuously expanding our selection to
                bring you the very best for your furry, feathered, and scaly friends.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-extrabold text-foreground">Our Mission</h2>
              <p>
                Our mission is simple: provide pet owners with high-quality products from trusted brands at
                competitive prices. We believe every pet deserves the best care, and we are committed to making
                that accessible to all pet families.
              </p>
            </div>

            {/* Warehouse Photos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-5"
            >
              <h2 className="text-2xl font-extrabold text-foreground">Our Warehouse</h2>
              <p>
                We operate our own warehouse and fulfillment center, allowing us to store inventory, process orders
                quickly, and ship directly to our customers with care and efficiency.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="rounded-2xl overflow-hidden border border-border group"
                >
                  <div className="overflow-hidden aspect-[4/3]">
                    <img
                      src={warehouseExterior}
                      alt="FlowFront Global warehouse exterior"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="bg-card p-3 text-center border-t border-border">
                    <p className="text-sm font-semibold text-card-foreground">Warehouse Exterior</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="rounded-2xl overflow-hidden border border-border group"
                >
                  <div className="overflow-hidden aspect-[4/3]">
                    <img
                      src={warehouseInterior}
                      alt="FlowFront Global warehouse interior"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="bg-card p-3 text-center border-t border-border">
                    <p className="text-sm font-semibold text-card-foreground">Warehouse Interior</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-extrabold text-foreground">Our Locations</h2>
              <p>We operate from two locations to efficiently serve customers across the country:</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-card border border-border rounded-2xl p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground">Illinois Warehouse</p>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                        4711 N Lamon Ave, STE 12<br />Chicago, IL 60630
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-card border border-border rounded-2xl p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground">Oregon Address</p>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                        1982 NE 25th Ave, STE 4<br />Hillsboro, OR 97124
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-extrabold text-foreground">Why Choose Us</h2>
              <p>
                We offer a wide selection of products for dogs, cats, birds, and small animals from trusted,
                quality-verified brands. Our pricing is competitive, our shipping is fast and reliable, and our
                customer support team is always here to help. When you shop with FlowFront Global, you are
                supporting a small business that truly cares about pets and their owners.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
