import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    detail: "owner@flowfrontglobal.com",
    href: "mailto:owner@flowfrontglobal.com",
    sub: "We typically reply within 24 hours",
  },
  {
    icon: MapPin,
    title: "Illinois Warehouse",
    detail: "4711 N Lamon Ave, STE 12",
    sub: "Chicago, IL 60630",
  },
  {
    icon: MapPin,
    title: "Oregon Address",
    detail: "1982 NE 25th Ave, STE 4",
    sub: "Hillsboro, OR 97124",
  },
  {
    icon: Clock,
    title: "Business Hours",
    detail: "Mon – Fri: 9am – 5pm CST",
    sub: "Closed on weekends & holidays",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page header */}
        <div className="border-b border-border bg-card">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-14">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-xs font-bold uppercase tracking-widest text-primary mb-2"
            >
              Get in Touch
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.06 }}
              className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight"
            >
              Contact Us
            </motion.h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid md:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto"
          >
            {/* Form */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-extrabold text-foreground">Send Us a Message</h2>
                <p className="text-sm text-muted-foreground mt-1">We'd love to hear from you. Fill out the form and we'll get back to you soon.</p>
              </div>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-foreground" htmlFor="firstName">First Name</label>
                    <Input id="firstName" placeholder="Angel" className="rounded-xl" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-foreground" htmlFor="lastName">Last Name</label>
                    <Input id="lastName" placeholder="Cardenas" className="rounded-xl" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-foreground" htmlFor="email">Email Address</label>
                  <Input id="email" type="email" placeholder="you@example.com" className="rounded-xl" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-foreground" htmlFor="subject">Subject</label>
                  <Input id="subject" placeholder="How can we help?" className="rounded-xl" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-foreground" htmlFor="message">Message</label>
                  <Textarea id="message" placeholder="Tell us more..." rows={5} className="rounded-xl resize-none" />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-full font-bold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-extrabold text-foreground">Contact Information</h2>
                <p className="text-sm text-muted-foreground mt-1">Reach us through any of the channels below.</p>
              </div>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start gap-4 p-4 bg-card border border-border rounded-2xl">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-primary mb-0.5">{info.title}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-sm font-semibold text-foreground hover:text-primary transition-colors cursor-pointer"
                        >
                          {info.detail}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-foreground">{info.detail}</p>
                      )}
                      <p className="text-xs text-muted-foreground mt-0.5">{info.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
