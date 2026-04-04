import nibbles1 from "@/assets/products/roudybush-nibles-1.jpg";
import nibbles2 from "@/assets/products/roudybush-nibles-2.jpg";
import nibbles3 from "@/assets/products/roudybush-nibles-3.jpg";
import nibbles4 from "@/assets/products/roudybush-nibles-4.jpg";
import nibbles5 from "@/assets/products/roudybush-nibles-5.jpg";
import nibbles6 from "@/assets/products/roudybush-nibles-6.jpg";
import nibbles7 from "@/assets/products/roudybush-nibles-7.jpg";
import nibbles8 from "@/assets/products/roudybush-nibles-8.jpg";
import jolly1 from "@/assets/products/jolly-ball-1.jpg";
import jolly2 from "@/assets/products/jolly-ball-2.jpg";

export interface StaticProduct {
  id: string;
  handle: string;
  title: string;
  description: string;
  price: string;
  currencyCode: string;
  category: string;
  images: Array<{ url: string; altText: string | null }>;
  availableForSale: boolean;
}

export const staticProducts: StaticProduct[] = [
  {
    id: "roudybush-nibles-44oz",
    handle: "roudybush-nibles-44oz",
    title: "RoudyBush Daily Maintenance - Nibles, 44oz",
    description: "Scientifically formulated bird feed pellets with corn, wheat, soy & more. Healthy bird food with 11% protein, 9% fat, and essential vitamins and minerals. Perfect for birds 3 inches or smaller including lovebirds, canaries, and finches. No additional vitamin or mineral supplements needed.",
    price: "18.95",
    currencyCode: "USD",
    category: "Birds",
    images: [
      { url: nibbles1, altText: "RoudyBush Nibles 44oz bag front" },
      { url: nibbles2, altText: "RoudyBush Nibles with macaw" },
      { url: nibbles3, altText: "RoudyBush Nibles 2.75 pound" },
      { url: nibbles4, altText: "RoudyBush Nibles nutritional info" },
      { url: nibbles5, altText: "RoudyBush for egg-layers" },
      { url: nibbles6, altText: "RoudyBush key benefits" },
      { url: nibbles7, altText: "RoudyBush feeding tips" },
      { url: nibbles8, altText: "How to switch to RoudyBush" },
    ],
    availableForSale: false,
  },
  {
    id: "roudybush-mini-22oz",
    handle: "roudybush-mini-22oz",
    title: "RoudyBush Daily Maintenance - Mini, 22oz",
    description: "Scientifically formulated bird feed with mini pellets. Reduces waste, provides optimal nutrition, suitable for various birds. Ideal for daily feeding of adult birds and transitioning birds from old diet to Roudybush. For cockatiels, quakers, lovebirds, budgerigars, conures, ringnecks, parrotlets, canaries and neophemas.",
    price: "14.05",
    currencyCode: "USD",
    category: "Birds",
    images: [
      { url: nibbles1, altText: "RoudyBush Mini 22oz bag front" },
      { url: nibbles2, altText: "RoudyBush Mini with macaw" },
      { url: nibbles3, altText: "RoudyBush Mini product info" },
      { url: nibbles6, altText: "RoudyBush key benefits" },
    ],
    availableForSale: false,
  },
  {
    id: "roudybush-mini-10lb",
    handle: "roudybush-mini-10lb",
    title: "RoudyBush Daily Maintenance - Mini, 10lb",
    description: "Bulk size daily maintenance bird food with mini pellets. All life stages formula in pellet form. Scientifically formulated since 1985 for optimal bird nutrition.",
    price: "39.95",
    currencyCode: "USD",
    category: "Birds",
    images: [
      { url: nibbles1, altText: "RoudyBush Mini 10lb bag front" },
      { url: nibbles4, altText: "RoudyBush nutritional info" },
      { url: nibbles7, altText: "RoudyBush feeding tips" },
      { url: nibbles8, altText: "How to switch to RoudyBush" },
    ],
    availableForSale: false,
  },
  {
    id: "roudybush-crumbles-10lb",
    handle: "roudybush-crumbles-10lb",
    title: "RoudyBush Daily Maintenance - Crumbles, 10lb",
    description: "Daily maintenance bird food in crumble form. Made with ground corn, ground wheat, soy meal, soy oil, alfalfa, and essential vitamins and minerals. Perfect for birds that prefer a crumble texture over pellets.",
    price: "38.27",
    currencyCode: "USD",
    category: "Birds",
    images: [
      { url: nibbles1, altText: "RoudyBush Crumbles 10lb bag front" },
      { url: nibbles5, altText: "RoudyBush for egg-layers" },
      { url: nibbles6, altText: "RoudyBush key benefits" },
      { url: nibbles4, altText: "RoudyBush nutritional info" },
    ],
    availableForSale: false,
  },
  {
    id: "jolly-pets-push-n-play-ball",
    handle: "jolly-pets-push-n-play-ball",
    title: "Jolly Pets Push-n-Play Ball - Medium, Blue, 6 inches",
    description: "Durable push-and-play ball designed for medium-sized dogs (20-60 lbs). Made of hard plastic for constant motion play — perfect for dogs that love chasing, pushing, and herding. Floats on water for land and water play.",
    price: "19.98",
    currencyCode: "USD",
    category: "Dogs",
    images: [
      { url: jolly1, altText: "Jolly Pets Push-n-Play Ball blue" },
      { url: jolly2, altText: "Jolly Pets Push-n-Play Ball size reference" },
    ],
    availableForSale: false,
  },
];

export function getStaticProductByHandle(handle: string): StaticProduct | null {
  return staticProducts.find((p) => p.handle === handle) || null;
}
