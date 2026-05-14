import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold text-foreground mb-8 text-center tracking-tight"
          >
            Contact Us
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto"
          >
            {/* Contact Form */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-foreground">Send Us a Message</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="First Name" className="rounded-lg" />
                  <Input placeholder="Last Name" className="rounded-lg" />
                </div>
                <Input type="email" placeholder="Email Address" className="rounded-lg" />
                <Input placeholder="Subject" className="rounded-lg" />
                <Textarea placeholder="Your message..." rows={5} className="rounded-lg" />
                <Button type="submit" className="w-full rounded-full font-bold shadow-lg shadow-primary/20 hover:shadow-xl transition-all duration-300">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="text-xl font-bold text-foreground">Get in Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Email</h3>
                    <a href="mailto:owner@flowfrontglobal.com" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                      owner@flowfrontglobal.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Illinois Warehouse</h3>
                    <p className="text-muted-foreground">4711 N Lamon Ave, STE 12<br />Chicago, IL 60630</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Oregon Address</h3>
                    <p className="text-muted-foreground">1982 NE 25th Ave, STE 4<br />Hillsboro, OR 97124</p>
                  </div>
                </div>
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
