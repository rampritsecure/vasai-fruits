"use client";

import { Button } from "./button";
import { Card } from "./card";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useCartStore } from "@/lib/store/cart";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

export function ProductCard({ id, name, price, description, image }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({
      id,
      name,
      price,
      image,
      quantity: 1,
    });
  };

  return (
    <Card className="relative h-full">
      <div className="relative h-40 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-muted-foreground line-clamp-2 text-sm mb-2">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">${price.toFixed(2)}</span>
          <Button
            onClick={handleAddToCart}
            className="group transition-all duration-300 hover:scale-105"
          >
            <ShoppingCart className="w-4 h-4 mr-2 group-hover:scale-110" />
            Add to Cart
          </Button>
        </div>
      </div>
    </Card>
  );
}