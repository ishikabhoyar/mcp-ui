import Link from "next/link";
import { ModeToggle } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full max-w-[2000px] mx-auto px-4 md:px-8 lg:px-12 flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/new" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">MCP Server</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link
              href="#features"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Features
            </Link>
            <Link
              href="#testimonials"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Testimonials
            </Link>
            <Link
              href="#pricing"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Pricing
            </Link>
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center space-x-2">
            <ModeToggle />
            <Button variant="default" size="sm" asChild className="hidden md:flex">
              <Link href="https://github.com/yourusername/mcp-server" target="_blank">
                Get Started
              </Link>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>MCP Server</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-6">
                  <Link
                    href="#features"
                    className="text-foreground/60 hover:text-foreground transition-colors"
                  >
                    Features
                  </Link>
                  <Link
                    href="#testimonials"
                    className="text-foreground/60 hover:text-foreground transition-colors"
                  >
                    Testimonials
                  </Link>
                  <Link
                    href="#pricing"
                    className="text-foreground/60 hover:text-foreground transition-colors"
                  >
                    Pricing
                  </Link>
                  <Button asChild>
                    <Link href="https://github.com/yourusername/mcp-server" target="_blank">
                      Get Started
                    </Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </div>
    </header>
  );
}
