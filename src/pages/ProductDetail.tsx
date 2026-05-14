import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getStaticProductByHandle } from "@/lib/staticProducts";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowLeft, Truck, Shield, Star } from "lucide-react";
import { motion } from "framer-motion";

const ProductDetail = () => {
  const { handle } = useParams<{ handle: string }>();
  const product = getStaticProductByHandle(handle || "");
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-12 text-center">
          <p className="text-muted-foreground text-lg mb-4">Product not found</p>
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/shop"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Shop</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const images = product.images;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <Button asChild variant="ghost" className="mb-6 rounded-full">
            <Link to="/shop"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Shop</Link>
          </Button>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Images */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="aspect-square rounded-xl overflow-hidden bg-white p-6 border border-border">
                {images[selectedImage] ? (
                  <img
                    src={images[selectedImage].url}
                    alt={imag
