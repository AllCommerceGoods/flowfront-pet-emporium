export const BrandLogos = () => {
  const brands = ["Roudybush"];

  return (
    <section className="py-10 border-t border-border">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-sm font-medium uppercase tracking-wider text-muted-foreground mb-6">
          Brands We Carry
        </h2>
        <div className="flex items-center justify-center gap-12 flex-wrap">
          {brands.map((brand) => (
            <span key={brand} className="text-xl font-bold text-muted-foreground/60">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
