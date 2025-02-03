"use client";

import { ShoppingCart, Heart, User, Menu } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useCartStore } from "@/lib/store/cart";
import Link from "next/link";
import { useState } from "react";
import { CartPreview } from "./cart-preview";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = useCartStore((state) => state.items);

  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold">
              Fresh Market
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/products" className="text-sm font-medium">
              Products
            </Link>
            <Link href="/categories" className="text-sm font-medium">
              Categories
            </Link>
            <Link href="/about" className="text-sm font-medium">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium">
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
            <CartPreview />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link href="/login">Login</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/register">Register</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/products"
              className="block px-3 py-2 text-base font-medium"
            >
              Products
            </Link>
            <Link
              href="/categories"
              className="block px-3 py-2 text-base font-medium"
            >
              Categories
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-base font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-base font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}