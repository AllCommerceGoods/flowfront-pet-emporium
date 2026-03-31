import roudybushLogo from "@/assets/roudybush-logo.png";

export const BrandLogos = () => {
  return (
    <section className="py-10 border-t border-border">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-sm font-medium uppercase tracking-wider text-muted-foreground mb-6">
          Brands We Carry
        </h2>
        <div className="flex items-center justify-center gap-12 flex-wrap">
          <img
            src={roudybushLogo}
            alt="Roudybush"
            className="w-[160px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};
