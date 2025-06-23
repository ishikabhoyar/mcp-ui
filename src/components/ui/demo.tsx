"use client";

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { DecryptedText } from "@/components/ui/decrypted-text";
import { AnimatedHeading } from "@/components/ui/animated-heading";

export function SplineSceneBasic() {
  return (
    <Card className="w-screen h-screen bg-black/[0.96] relative overflow-hidden border-0 rounded-none shadow-none">
      <Spotlight className="top-1/4 left-1/4" fill="white" />

      <div className="flex flex-col h-full md:flex-row">
        {/* Left content */}
        <div className="flex-1 p-10 relative z-10 flex flex-col justify-center">
          <div className="text-4xl md:text-6xl font-bold">
            <AnimatedHeading
              text="Gmail MCP Server"
              variant="split"
              delay={0.3}
              splitType="chars"
              from={{ opacity: 0, y: 40, rotationX: 90 }}
              to={{ opacity: 1, y: 0, rotationX: 0 }}
              staggerDelay={0.03}
              ease="back.out(1.7)"
              color="emerald-400"
              onAnimationComplete={() =>
                console.log("Heading animation complete")
              }
            />
            <div className="mt-4 text-neutral-300 max-w-lg text-lg pl-1 py-10">
              <DecryptedText
                text="A powerful MCP server that integrates Gmail, Google Calendar, and Google Classroom APIs, providing seamless access to your Google workspace services through a unified interface."
                speed={30}
                delay={1200}
              />
            </div>
          </div>
        </div>

        {/* Right content */}
        <div className="flex-1 relative">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  );
}
