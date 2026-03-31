import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import logoImg from "@/assets/flowfront-logo-dark.png";

export const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <img
              src={logoImg}
              alt="FlowFront Global"
              className="w-[180px] h-auto block"
            />
            <p className="text-sm opacity-80">
              Your trusted source for quality pet supplies. From dogs to birds and everything in between.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-extrabold mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-sm opacity-80 font-semibold">
              <li><Link to="/shop" className="hover:opacity-100 transition-opacity">Shop All</Link></li>
              <li><Link to="/about" className="hover:opacity-100 transition-opacity">About Us</Link></li>
              <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-extrabold mb-4 text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:owner@flowfrontglobal.com" className="hover:opacity-100 font-semibold">owner@flowfrontglobal.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-bold block">Illinois Warehouse</span>
                  <span>4711 N Lamon Ave, STE 12<br />Chicago, IL 60630</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-bold block">Oregon Address</span>
                  <span>1982 NE 25th Ave, STE 4<br />Hillsboro, OR 97124</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-extrabold mb-4 text-sm uppercase tracking-wider">Newsletter</h3>
            <p className="text-sm opacity-80 mb-3">Stay updated on new products and deals.</p>
            <div className="flex gap-2">
              <Input placeholder="Your email" className="bg-background/10 border-footer-foreground/20 text-footer-foreground placeholder:text-footer-foreground/50 rounded-full" />
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 flex-shrink-0 rounded-full font-bold px-5">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-footer-foreground/20 mt-10 pt-6 text-center text-sm opacity-60">
          <p>© {new Date().getFullYear()} FlowFront Global LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
