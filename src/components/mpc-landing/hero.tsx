import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="w-full max-w-[2000px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Model Context Protocol Server
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                A modern server implementation for handling context protocols in your AI applications.
                Simple, powerful, and extensible.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild className="px-8">
                <Link href="https://github.com/yourusername/mcp-server">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#features">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl opacity-20 blur-xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-background/80 backdrop-blur-sm border rounded-xl p-4 shadow-lg w-[90%] h-[90%] flex items-center justify-center">
                  <pre className="text-xs md:text-sm lg:text-base overflow-auto p-4 font-mono text-foreground/90">
{`// Example MCP Server code
import { createMcpServer } from "mcp-server";

const server = createMcpServer({
  port: 3000,
  handlers: {
    "/weather": async (ctx) => {
      const { lat, lng } = ctx.params;
      return await getWeatherData(lat, lng);
    }
  }
});

server.start();`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
