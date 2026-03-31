import { Link } from "react-router-dom";
import { Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartDrawer } from "@/components/CartDrawer";
import logoImg from "@/assets/flowfront-logo-light.png";

const navLinks = [
  { label: "Shop All", to: "/shop" },
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
];

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background">
      {/* Promo bar */}
      <div className="bg-promo text-promo-foreground text-center text-sm py-2 px-4 font-medium">
        Free Shipping on Orders Over $75 🐾
      </div>

      {/* Main header */}
      <div className="border-b border-border">
        <div className="container mx-auto flex items-center justify-between py-3 px-4">
          <Link to="/" className="flex-shrink-0">
            <img
              src={logoImg}
              alt="FlowFront Global"
              className="w-[180px] h-auto object-contain"
            />
          </Link>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <CartDrawer />
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <nav className="bg-nav border-b border-border">
        <div className="container mx-auto flex items-center justify-center gap-8 py-3 px-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-nav-foreground font-medium text-sm hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};
