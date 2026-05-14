import nibbles1 from "@/assets/products/roudybush-nibles-1.jpg";
import nibbles2 from "@/assets/products/roudybush-nibles-2.jpg";
import nibbles3 from "@/assets/products/roudybush-nibles-3.jpg";
import nibbles4 from "@/assets/products/roudybush-nibles-4.jpg";
import nibbles5 from "@/assets/products/roudybush-nibles-5.jpg";
import nibbles6 from "@/assets/products/roudybush-nibles-6.jpg";
import nibbles7 from "@/assets/products/roudybush-nibles-7.jpg";
import nibbles8 from "@/assets/products/roudybush-nibles-8.jpg";
import mini22_1 from "@/assets/products/roudybush-mini22-1.jpg";
import mini22_2 from "@/assets/products/roudybush-mini22-2.jpg";
import mini22_3 from "@/assets/products/roudybush-mini22-3.jpg";
import mini22_4 from "@/assets/products/roudybush-mini22-4.jpg";
import mini22_5 from "@/assets/products/roudybush-mini22-5.jpg";
import mini22_6 from "@/assets/products/roudybush-mini22-6.jpg";
import mini22_7 from "@/assets/products/roudybush-mini22-7.jpg";
import mini22_8 from "@/assets/products/roudybush-mini22-8.jpg";
import mini10_1 from "@/assets/products/roudybush-mini10-1.jpg";
import mini10_2 from "@/assets/products/roudybush-mini10-2.jpg";
import mini10_3 from "@/assets/products/roudybush-mini10-3.jpg";
import mini10_4 from "@/assets/products/roudybush-mini10-4.jpg";
import mini10_5 from "@/assets/products/roudybush-mini10-5.jpg";
import mini10_6 from "@/assets/products/roudybush-mini10-6.jpg";
import mini10_7 from "@/assets/products/roudybush-mini10-7.jpg";
import mini10_8 from "@/assets/products/roudybush-mini10-8.jpg";
import crumbles1 from "@/assets/products/roudybush-crumbles-1.jpg";
import crumbles2 from "@/assets/products/roudybush-crumbles-2.jpg";
import crumbles3 from "@/assets/products/roudybush-crumbles-3.jpg";
import crumbles4 from "@/assets/products/roudybush-crumbles-4.jpg";
import crumbles5 from "@/assets/products/roudybush-crumbles-5.jpg";
import crumbles6 from "@/assets/products/roudybush-crumbles-6.jpg";
import crumbles7 from "@/assets/products/roudybush-crumbles-7.jpg";
import crumbles8 from "@/assets/products/roudybush-crumbles-8.jpg";
import jolly1 from "@/assets/products/jolly-ball-1.jpg";
import jolly2 from "@/assets/products/jolly-ball-2.jpg";
import haPepper1 from "@/assets/products/horse-amour-peppermint-1.jpeg";
import haPepper2 from "@/assets/products/horse-amour-peppermint-2.jpeg";
import haPepper3 from "@/assets/products/horse-amour-peppermint-3.jpeg";
import haPepper4 from "@/assets/products/horse-amour-peppermint-4.jpeg";
import haPepper5 from "@/assets/products/horse-amour-peppermint-5.jpeg";
import haPepper6 from "@/assets/products/horse-amour-peppermint-6.jpeg";
import haPepper7 from "@/assets/products/horse-amour-peppermint-7.jpeg";
import haApple1 from "@/assets/products/horse-amour-apple-1.jpeg";
import haApple2 from "@/assets/products/horse-amour-apple-2.jpeg";
import haApple3 from "@/assets/products/horse-amour-apple-3.jpeg";
import haApple4 from "@/assets/products/horse-amour-apple-4.jpeg";
import haApple5 from "@/assets/products/horse-amour-apple-5.jpeg";
import haApple6 from "@/assets/products/horse-amour-apple-6.jpeg";
import pbChicken1 from "@/assets/products/purebites-chicken-1.jpg";
import pbChicken2 from "@/assets/products/purebites-chicken-2.jpg";
import pbChicken3 from "@/assets/products/purebites-chicken-3.jpg";
import pbChicken4 from "@/assets/products/purebites-chicken-4.jpg";
import pbChicken5 from "@/assets/products/purebites-chicken-5.jpg";

export interface StaticProduct {
  id: string;
  handle: string;
  title: string;
  description: string;
  price: string;
  currencyCode: string;
  category: string;
  brand?: string;
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
      { url: mini22_1, altText: "RoudyBush Mini 22oz bag front" },
      { url: mini22_2, altText: "RoudyBush Mini with macaw" },
      { url: mini22_3, altText: "RoudyBush Mini 1.3 pound with macaw" },
      { url: mini22_4, altText: "RoudyBush Mini nutritional info" },
      { url: mini22_5, altText: "RoudyBush key benefits" },
      { url: mini22_6, altText: "RoudyBush for egg-layers" },
      { url: mini22_7, altText: "RoudyBush feeding tips" },
      { url: mini22_8, altText: "How to switch to RoudyBush" },
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
      { url: mini10_1, altText: "RoudyBush Mini 10lb bag front" },
      { url: mini10_2, altText: "RoudyBush key benefits" },
      { url: mini10_3, altText: "RoudyBush Mini 10 pound with macaw" },
      { url: mini10_4, altText: "RoudyBush Mini with macaw and bag" },
      { url: mini10_5, altText: "RoudyBush nutritional info" },
      { url: mini10_6, altText: "RoudyBush for egg-layers" },
      { url: mini10_7, altText: "RoudyBush feeding tips" },
      { url: mini10_8, altText: "How to switch to RoudyBush" },
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
      { url: crumbles1, altText: "RoudyBush Crumbles 10lb bag front" },
      { url: crumbles2, altText: "RoudyBush Crumbles 10 pound with macaw" },
      { url: crumbles3, altText: "RoudyBush Crumbles with macaw and bag" },
      { url: crumbles4, altText: "RoudyBush Crumbles nutritional info" },
      { url: crumbles5, altText: "RoudyBush key benefits" },
      { url: crumbles6, altText: "RoudyBush for egg-layers" },
      { url: crumbles7, altText: "RoudyBush feeding tips" },
      { url: crumbles8, altText: "How to switch to RoudyBush" },
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
  {
    id: "purebites-chicken-breast",
    handle: "purebites-chicken-breast",
    title: "PureBites Freeze Dried Chicken Breast Dog Treats, 1.75lb",
    description: "Made with only 1 simple human grade ingredient: 100% pure American chicken breast. Proudly sourced and freeze dried RAW in the USA. Delicately freeze dried to help preserve fresh RAW whole food, locking in the taste dogs crave. High in protein with only 3 calories per average treat. 100% natural with no artificial colors, fillers, or sweeteners. Ideal for dogs with allergies or on restricted diets. Feed as a healthy treat, topper, or training aid. Approximately 1000 treats per 1.75lb bag. Packaged in recyclable bags and backed by a 100% satisfaction guarantee.",
    price: "28.99",
    currencyCode: "USD",
    category: "Dogs",
    images: [
      { url: pbChicken1, altText: "PureBites Chicken Breast bag front" },
      { url: pbChicken2, altText: "PureBites Chicken Breast bag back" },
      { url: pbChicken3, altText: "PureBites benefits with French Bulldog" },
      { url: pbChicken4, altText: "PureBites RAW freeze dried process" },
      { url: pbChicken5, altText: "PureBites full product lineup" },
    ],
    availableForSale: false,
  },
  {
    id: "horse-amour-bit-wipes-peppermint",
    handle: "horse-amour-bit-wipes-peppermint",
    title: "Horse Amour Bit Wipes - Peppermint Scent (40 Count)",
    description: "Keep your horse's bit clean and fresh with Horse Amour Bit Wipes. Pre-moistened wipes quickly remove dried saliva, debris and buildup from bits and tack in seconds. Made with a 100% natural, food-grade formula with refreshing peppermint scent. Each canister contains 40 generously sized 7x8 inch wipes. Compact enough to fit in any tack box, trailer or grooming bag.",
    price: "20.99",
    currencyCode: "USD",
    category: "Horses",
    brand: "Horse Amour",
    images: [
      { url: haPepper1, altText: "Horse Amour Peppermint Bit Wipes canister" },
      { url: haPepper2, altText: "Horse Amour Peppermint Bit Wipes in use" },
      { url: haPepper3, altText: "Horse Amour Peppermint Bit Wipes detail" },
      { url: haPepper4, altText: "Horse Amour Peppermint Bit Wipes ingredients" },
      { url: haPepper5, altText: "Horse Amour Peppermint Bit Wipes features" },
      { url: haPepper6, altText: "Horse Amour Peppermint Bit Wipes size reference" },
      { url: haPepper7, altText: "Horse Amour Peppermint Bit Wipes lifestyle" },
    ],
    availableForSale: false,
  },
  {
    id: "horse-amour-bit-wipes-apple",
    handle: "horse-amour-bit-wipes-apple",
    title: "Horse Amour Bit Wipes - Apple Scent (40 Count)",
    description: "Keep your horse's bit clean and fresh with Horse Amour Bit Wipes. Pre-moistened wipes quickly remove dried saliva, debris and buildup from bits and tack in seconds. Made with a 100% natural, food-grade formula with fresh apple scent your horse will love. Each canister contains 40 generously sized 7x8 inch wipes. Compact enough to fit in any tack box, trailer or grooming bag.",
    price: "20.99",
    currencyCode: "USD",
    category: "Horses",
    brand: "Horse Amour",
    images: [
      { url: haApple1, altText: "Horse Amour Apple Bit Wipes canister" },
      { url: haApple2, altText: "Horse Amour Apple Bit Wipes in use" },
      { url: haApple3, altText: "Horse Amour Apple Bit Wipes detail" },
      { url: haApple4, altText: "Horse Amour Apple Bit Wipes ingredients" },
      { url: haApple5, altText: "Horse Amour Apple Bit Wipes features" },
      { url: haApple6, altText: "Horse Amour Apple Bit Wipes lifestyle" },
    ],
    availableForSale: false,
  },
];

export function getStaticProductByHandle(handle: string): StaticProduct | null {
  return staticProducts.find((p) => p.handle === handle) || null;
}
