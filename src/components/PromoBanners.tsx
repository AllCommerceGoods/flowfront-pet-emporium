import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import promoDogImg from "@/assets/promo-dog.jpg";
import promoCatImg from "@/assets/promo-cat.jpg";

export const PromoBanners = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative rounded-xl overflow-hidden min-h-[280px]">
            <img src={promoDogImg} alt="Dog supplies" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={800} height={512} />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
            <div className="relative z-10 flex flex-col justify-end h-full p-8 md:p-10">
              <h3 className="text-2xl font-bold text-primary-foreground">Dog Supplies</h3>
              <p className="text-primary-foreground/80 mt-1">Toys, food, accessories, and more for your best friend.</p>
              <Button asChild variant="default" size="sm" className="mt-4 w-fit">
                <Link to="/shop">
                  Shop Dogs <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden min-h-[280px]">
            <img src={promoCatImg} alt="Cat supplies" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={800} height={512} />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
            <div className="relative z-10 flex flex-col justify-end h-full p-8 md:p-10">
              <h3 className="text-2xl font-bold text-primary-foreground">Cat Supplies</h3>
              <p className="text-primary-foreground/80 mt-1">Everything your feline friends need to be happy and healthy.</p>
              <Button asChild variant="default" size="sm" className="mt-4 w-fit">
                <Link to="/shop">
                  Shop Cats <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
