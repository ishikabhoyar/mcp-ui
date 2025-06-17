import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Users, Award, BarChart4 } from "lucide-react";

export function AboutUs() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
      <div className="w-full max-w-[2000px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">About Us</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              We're Building the Future of AI Infrastructure
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed">
              MCP Server was founded in 2023 with a simple mission: make context handling in AI applications easy, efficient, and reliable.
            </p>
            <div className="space-y-3">
              <div className="flex gap-2">
                <Users className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-bold">Team of Experts</h3>
                  <p className="text-muted-foreground">
                    Our team combines decades of experience in ML, distributed systems, and cloud infrastructure.
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Award className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-bold">Award-Winning Technology</h3>
                  <p className="text-muted-foreground">
                    Recognized for innovation and performance in the AI infrastructure space.
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <BarChart4 className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-bold">Rapid Growth</h3>
                  <p className="text-muted-foreground">
                    Powering over 1,000+ applications with reliable context protocol handling.
                  </p>
                </div>
              </div>
            </div>
            <Button asChild>
              <Link href="/about">
                Learn More About Our Story
              </Link>
            </Button>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-full w-full max-w-[500px] overflow-hidden rounded-xl border bg-muted p-2">
              <div className="grid grid-cols-2 gap-2">
                <div className="overflow-hidden rounded-lg">
                  <div className="bg-primary h-full w-full aspect-square"></div>
                </div>
                <div className="overflow-hidden rounded-lg">
                  <div className="bg-muted-foreground/20 h-full w-full aspect-square"></div>
                </div>
                <div className="overflow-hidden rounded-lg">
                  <div className="bg-muted-foreground/20 h-full w-full aspect-square"></div>
                </div>
                <div className="overflow-hidden rounded-lg">
                  <div className="bg-primary h-full w-full aspect-square"></div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
