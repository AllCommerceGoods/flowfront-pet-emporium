import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const PromoBanners = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative rounded-xl bg-primary/10 p-8 md:p-10 overflow-hidden">
            <div className="relative z-10 space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Dog Supplies</h3>
              <p className="text-muted-foreground">Toys, food, accessories, and more for your best friend.</p>
              <Button asChild variant="default" size="sm">
                <Link to="/shop">
                  Shop Dogs <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="absolute right-0 bottom-0 text-[8rem] leading-none opacity-10">🐕</div>
          </div>

          <div className="relative rounded-xl bg-accent p-8 md:p-10 overflow-hidden">
            <div className="relative z-10 space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Cat Supplies</h3>
              <p className="text-muted-foreground">Everything your feline friends need to be happy and healthy.</p>
              <Button asChild variant="default" size="sm">
                <Link to="/shop">
                  Shop Cats <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="absolute right-0 bottom-0 text-[8rem] leading-none opacity-10">🐈</div>
          </div>
        </div>
      </div>
    </section>
  );
};
