import { Link, useLocation } from "react-router-dom";
import { Search, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartDrawer } from "@/components/CartDrawer";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@/assets/flowfront-logo-light.png";

const navLinks = [
  { label: "Shop All", to: "/shop" },
  { label: "About Us", to: "/about" },
  { label: "Retail Partners", to: "/retail-partner" },
  { label: "Contact Us", to: "/contact" },
];

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className={`sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? "shadow-sm" : ""}`}>
      {/* Promo bar */}
      <div className="bg-promo text-promo-foreground text-center text-xs py-2.5 px-4 font-semibold tracking-wide">
        Free Shipping on Orders Over $75&nbsp;&nbsp;·&nbsp;&nbsp;Easy Returns&nbsp;&nbsp;·&nbsp;&nbsp;Premium Brands
      </div>

      {/* Main header */}
      <div className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 py-4 px-4 md:px-6">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={logoImg}
              alt="FlowFront Global"
              className="w-[160px] h-auto block"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-semibold tracking-wide transition-colors duration-200 relative group ${
                  location.pathname === link.to
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                    location.pathname === link.to ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="hidden md:flex rounded-full hover:bg-muted cursor-pointer" aria-label="Search">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex rounded-full hover:bg-muted cursor-pointer" aria-label="Account">
              <User className="h-5 w-5" />
            </Button>
            <CartDrawer />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full cursor-pointer"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-3 gap-0.5">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className={`block py-3 px-3 rounded-xl font-semibold text-sm transition-colors cursor-pointer ${
                      location.pathname === link.to
                        ? "text-primary bg-accent"
                        : "text-foreground hover:text-primary hover:bg-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="flex gap-2 pt-3 mt-1 border-t border-border">
                <Button variant="ghost" size="icon" className="rounded-full cursor-pointer" aria-label="Search">
                  <Search className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full cursor-pointer" aria-label="Account">
                  <User className="h-5 w-5" />
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
