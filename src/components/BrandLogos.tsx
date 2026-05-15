import roudybushLogo from "@/assets/roudybush-logo.png";
import pureBitesLogo from "@/assets/purebites-logo.png";
import jollyPetsLogo from "@/assets/jolly-pets-logo.png";
import horseAmourLogo from "@/assets/horse-amour-logo.jpeg";
import aqueonLogo from "@/assets/aqueon-logo.png";
import zooMedLogo from "@/assets/zoo-med-logo.jpeg";

const brands = [
  { src: roudybushLogo, alt: "Roudybush" },
  { src: pureBitesLogo, alt: "PureBites" },
  { src: jollyPetsLogo, alt: "Jolly Pets" },
  { src: horseAmourLogo, alt: "Horse Amour" },
  { src: aqueonLogo, alt: "Aqueon" },
  { src: zooMedLogo, alt: "Zoo Med" },
];

const marqueeItems = [...brands, ...brands, ...brands, ...brands, ...brands, ...brands];

export const BrandLogos = () => {
  return (
    <section className="py-12 md:py-16 border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-8">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-muted-foreground">
          Brands We Carry
        </p>
      </div>

      <div className="relative">
        <div className="flex animate-marquee gap-16 md:gap-24 items-center w-max">
          {marqueeItems.map((brand, i) => (
            <div
              key={i}
              className="flex-shrink-0 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default"
            >
              <img
                src={brand.src}
                alt={brand.alt}
                className="h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
