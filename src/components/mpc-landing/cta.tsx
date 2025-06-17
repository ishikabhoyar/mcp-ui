import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Cta() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 border-t">
      <div className="w-full max-w-[2000px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Ready to Supercharge Your AI Applications?
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Join thousands of developers building with MCP Server today and see the difference it makes.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button size="lg" asChild>
              <Link href="https://github.com/yourusername/mcp-server">
                Get Started
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#contact">
                Talk to Sales
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
