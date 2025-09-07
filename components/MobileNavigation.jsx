"use client";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ThemeToggle from "./ThemeToggle";
import { navItems } from "@/lib/constants";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:hidden flex items-center space-x-4">
      <ThemeToggle />
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <span size="icon">
            <Menu className="h-5 w-5" />
          </span>
        </SheetTrigger>
        <SheetContent>
          <SheetTitle></SheetTitle>
          <div className="flex flex-col space-y-4 mt-8 px-4">
            {navItems.map((item) => (
              <Link
                href={item.href}
                key={item.id}
                className="text-lg font-medium text-foreground hover:text-primary transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
