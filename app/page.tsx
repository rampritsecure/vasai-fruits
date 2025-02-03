import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Carousel } from '@/components/ui/carousel';
import { Input } from '@/components/ui/input';
import { Apple, Carrot, Coffee } from 'lucide-react';
import Image from 'next/image';
import { ProductCarousel } from '@/components/product-carousel';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full">
        <Carousel className="w-full h-full">
          <div className="relative h-full w-full">
            <Image
              src="https://images.unsplash.com/photo-1610348725531-843dff563e2c"
              alt="Fresh fruits"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4">Fresh & Organic</h1>
                <p className="text-xl mb-6">
                  Discover nature's finest selection
                </p>
                <Button size="lg" variant="default">
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        </Carousel>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Products
        </h2>
        <ProductCarousel />
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <Apple className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fruits</h3>
            <p className="text-muted-foreground">Fresh and seasonal fruits</p>
          </Card>
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <Carrot className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Vegetables</h3>
            <p className="text-muted-foreground">Farm-fresh vegetables</p>
          </Card>
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <Coffee className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Beverages</h3>
            <p className="text-muted-foreground">Refreshing drinks</p>
          </Card>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Stay Updated
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            Subscribe to our newsletter for the latest updates and exclusive
            offers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white"
            />
            <Button variant="secondary">Subscribe</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
