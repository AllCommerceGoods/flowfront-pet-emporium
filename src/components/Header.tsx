import { Link } from "react-router-dom";
import { Search, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartDrawer } from "@/components/CartDrawer";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@/assets/flowfront-logo-light.png";

const navLinks = [
  { label: "Shop All", to: "/shop" },
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
];

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background">
      {/* Promo bar */}
      <div className="bg-promo text-promo-foreground text-center text-sm py-2 px-4 font-bold tracking-wide">
        Free Shipping on Orders Over $75 🐾
      </div>

      {/* Main header */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4">
          <Link to="/" className="flex-shrink-0">
            <img
              src={logoImg}
              alt="FlowFront Global"
              className="w-[180px] h-auto block"
            />
          </Link>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="h-5 w-5" />
            </Button>
            <CartDrawer />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:block bg-nav border-b border-border">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-10 py-3 px-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-nav-foreground font-bold text-sm uppercase tracking-widest hover:text-primary transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-nav border-b border-border overflow-hidden"
          >
            <div className="flex flex-col items-center gap-1 py-4 px-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className="text-nav-foreground font-bold text-sm uppercase tracking-widest hover:text-primary transition-colors py-2 px-4 block"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="flex gap-2 pt-2 border-t border-border/50 mt-2">
                <Button variant="ghost" size="icon">
                  <Search className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
