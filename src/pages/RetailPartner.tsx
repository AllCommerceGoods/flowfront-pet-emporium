import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Globe, Store, Users, Handshake, CheckCircle2, Mail, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: Globe,
    title: "Featured on Our Website",
    description:
      "Your store gets its own listing on our Retail Partners page — name, location, and a link so customers can find you easily.",
  },
  {
    icon: Handshake,
    title: "Listed on Brand Applications",
    description:
      "When we apply for new wholesale brands, we name you as our official brick-and-mortar retail partner. That credibility helps us — and it puts your name in front of major brands.",
  },
  {
    icon: Users,
    title: "We Send Customers Your Way",
    description:
      "When local shoppers reach out looking for a store nearby, we point them to you. Real foot traffic, no ad spend required.",
  },
  {
    icon: Store,
    title: "Zero Cost. Zero Commitment.",
    description:
      "No fees. No contracts. No minimums. This is a genuine partnership built on mutual benefit — not a sales pitch.",
  },
];

const steps = [
  {
    number: "01",
    title: "Reach Out",
    description: "Send us a quick email with your store name, location, and a little about what you carry. That's it.",
  },
  {
    number: "02",
    title: "We Make It Official",
    description:
      "We add you to our Retail Partners page and begin listing you on our wholesale brand applications as our brick-and-mortar partner.",
  },
  {
    number: "03",
    title: "Customers Find You",
    description:
      "We start referring local shoppers to your store and highlighting you wherever it makes sense. You focus on what you do best.",
  },
];

const RetailPartner = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <div className="border-b border-border bg-card">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-14">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-xs font-bold uppercase tracking-widest text-primary mb-2"
            >
              Retail Partner Program
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.06 }}
              className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight"
            >
              Become a Retail Partner
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="text-muted-foreground mt-3 text-base max-w-xl leading-relaxed"
            >
              A simple, no-cost partnership built for local pet and feed stores that want more visibility — and a brand that wants to grow with great local partners.
            </motion.p>
          </div>
        </div>

        {/* What This Is */}
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-14 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center"
          >
            <div className="space-y-5">
              <p className="text-xs font-bold uppercase tracking-widest text-primary">What It Is</p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground leading-tight">
                A partnership that works both ways
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  FlowFront Global is a pet supply distributor that works with independent retailers across the country. When we apply for wholesale accounts with premium pet brands, having established brick-and-mortar partners strengthens our application — and helps us unlock better brands and pricing for everyone.
                </p>
                <p>
                  In exchange, we feature our retail partners on our website and actively send local customers their way. You get visibility and referrals; we get a stronger brand story. No money changes hands. No commitments required.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a href="mailto:owner@flowfrontglobal.com">
                  <Button
                    size="lg"
                    className="rounded-full font-bold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer gap-2"
                  >
                    <Mail className="h-4 w-4" />
                    Partner With Us
                  </Button>
                </a>
              </div>
            </div>

            {/* Highlight box */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-border rounded-2xl p-7 space-y-4"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-primary">Perfect For</p>
              <p className="font-extrabold text-foreground text-lg leading-snug">
                Independent pet stores and feed stores who want more exposure without any extra overhead.
              </p>
              <ul className="space-y-3 pt-2">
                {[
                  "Locally owned pet boutiques",
                  "Feed & supply stores that carry pet products",
                  "Small chains looking for brand credibility",
                  "New stores building their presence",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>

        {/* Benefits */}
        <div className="border-t border-border bg-muted/40">
          <div className="max-w-5xl mx-auto px-4 md:px-6 py-14 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-center mb-12"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">What You Get</p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">Built to benefit your store</h2>
              <p className="text-muted-foreground mt-3 max-w-md mx-auto text-sm leading-relaxed">
                We designed this program to be genuinely useful — not just a logo badge with no substance.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-5">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-card border border-border rounded-2xl p-6 space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <benefit.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-extrabold text-foreground">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-14 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-12"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">The Process</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">Simple as it sounds</h2>
            <p className="text-muted-foreground mt-3 max-w-md mx-auto text-sm leading-relaxed">
              Three steps. One email. No paperwork.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative"
              >
                <div className="bg-card border border-border rounded-2xl p-6 h-full space-y-3">
                  <span className="text-4xl font-extrabold text-primary/20 leading-none">{step.number}</span>
                  <h3 className="font-extrabold text-foreground text-lg">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                    <ArrowRight className="h-5 w-5 text-border" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="border-t border-border bg-card">
          <div className="max-w-3xl mx-auto px-4 md:px-6 py-14 md:py-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                <Handshake className="h-7 w-7 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">
                Ready to partner up?
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
                Send us a short email with your store name and location. We'll get back to you quickly and handle everything from there. No forms, no fuss.
              </p>
              <div className="pt-2">
                <a href="mailto:owner@flowfrontglobal.com">
                  <Button
                    size="lg"
                    className="rounded-full font-bold text-base px-8 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer gap-2"
                  >
                    <Mail className="h-4 w-4" />
                    owner@flowfrontglobal.com
                  </Button>
                </a>
              </div>
              <p className="text-xs text-muted-foreground">
                We typically reply within 24 hours.
              </p>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RetailPartner;
