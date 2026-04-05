import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import heroImg from "@/assets/hero-pets.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero image */}
        <div className="w-full h-[300px] md:h-[400px] overflow-hidden relative">
          <img
            src={heroImg}
            alt="Happy pets"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          <div className="absolute bottom-8 left-0 right-0 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">About FlowFront Global</h1>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 md:py-16 max-w-3xl">
          <div className="prose prose-lg text-muted-foreground space-y-6">
            <p>
              FlowFront Global LLC is a pet supply retailer based in Lancaster, California. We carry a wide range of
              premium pet products — everything from dog toys and cat supplies to bird food and small animal essentials.
            </p>

            <p>
              Our mission is to provide pet owners with high-quality products from trusted brands at competitive prices.
              We believe that every pet deserves the best care, and we're committed to making that accessible to all pet families.
            </p>

            <p>
              We partner with brands like Roudybush, PureBites, and Jolly Pets and are continuously expanding our selection to bring you
              the very best for your furry, feathered, and scaly friends.
            </p>

            <h2 className="text-2xl font-extrabold text-foreground mt-10">Our Locations</h2>
            <p>
              We operate from two locations to efficiently serve customers across the country:
            </p>
            <p>
              <strong>Illinois Warehouse</strong><br />
              4711 N Lamon Ave, STE 12<br />
              Chicago, IL 60630
            </p>
            <p>
              <strong>Oregon Address</strong><br />
              1982 NE 25th Ave, STE 4<br />
              Hillsboro, OR 97124
            </p>

            <h2 className="text-2xl font-extrabold text-foreground mt-10">Why Choose Us</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Wide selection of products for dogs, cats, birds, and small animals</li>
              <li>Trusted brands and quality-verified products</li>
              <li>Competitive pricing</li>
              <li>Fast and reliable shipping</li>
              <li>Dedicated customer support</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
