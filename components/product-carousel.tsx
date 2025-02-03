"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProductCard } from "./ui/product-card";
import { useInView } from "react-intersection-observer";
import Autoplay from "embla-carousel-autoplay";
import { type CarouselApi } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const products = [
  {
    id: "1",
    name: "Fresh Organic Apples",
    price: 4.99,
    description: "Sweet and crispy organic apples from local farms. Perfect for healthy snacking or baking.",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6",
  },
  {
    id: "2",
    name: "Premium Orange Juice",
    price: 6.99,
    description: "Freshly squeezed orange juice with no added sugars. Rich in vitamin C.",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba",
  },
  {
    id: "3",
    name: "Organic Bananas",
    price: 3.99,
    description: "Perfectly ripened organic bananas. Rich in potassium and naturally sweet.",
    image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224",
  },
  {
    id: "4",
    name: "Fresh Strawberries",
    price: 5.99,
    description: "Sweet and juicy strawberries, perfect for desserts or healthy snacking.",
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6",
  },
];

export function ProductCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const autoplayPlugin = Autoplay({
    delay: 5000,
    stopOnInteraction: true,
    stopOnMouseEnter: true,
  }) as any;
  
  return (
    <div ref={ref} className="w-full py-8">
      <Carousel
        setApi={setApi}
        className="w-full"
        plugins={[autoplayPlugin]}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="h-[300px]">
          {products.map((product) => (
            <CarouselItem key={product.id} className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <ProductCard {...product} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              className={cn(
                "h-2 w-2 rounded-full transition-all",
                current === index ? "bg-primary w-4" : "bg-muted"
              )}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
}