import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 md:py-16 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">About FlowFront Global</h1>

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
              We partner with brands like Roudybush and are continuously expanding our selection to bring you
              the very best for your furry, feathered, and scaly friends.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10">Our Distribution</h2>
            <p>
              With our distribution center located at 2020 NE Aloclek Dr #118, Hillsboro, OR 97124, we're equipped to
              efficiently serve customers across the country, ensuring your orders arrive quickly and in perfect condition.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10">Why Choose Us</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Wide selection of products for dogs, cats, birds, and small animals</li>
              <li>Trusted brands and quality-verified products</li>
              <li>Competitive pricing</li>
              <li>Fast and reliable shipping from our Oregon distribution center</li>
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
