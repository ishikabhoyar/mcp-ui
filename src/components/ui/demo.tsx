'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import VaporizeTextCycle from "@/components/ui/vapour-text-effect"

export function SplineSceneBasic() {
    return (
        <Card className="w-screen h-screen bg-black/[0.96] relative overflow-hidden border-0 rounded-none shadow-none">
            <Spotlight
                className="top-1/4 left-1/4"
                fill="white"
            />

            <div className="flex flex-col h-full md:flex-row">
                {/* Left content */}
                <div className="flex-1 p-10 relative z-10 flex flex-col justify-center">
                    <div className="text-8xl md:text-6xl font-bold h-[80px]">
                        <VaporizeTextCycle 
                            texts={["MCP Server"]}
                            font={{ 
                                fontFamily: "sans-serif", 
                                fontSize: "100px", 
                                fontWeight: 700 
                            }}
                            color="rgb(255, 255, 255)"
                            spread={5}
                            density={7}
                            animation={{
                                vaporizeDuration: 2.5,
                                fadeInDuration: 1.5,
                                waitDuration: 3
                            }}
                        />
                        <p className="mt-4 text-neutral-300 max-w-lg text-lg pl-15 py-10">
                        A unified backend server that integrates Gmail, Google Calendar, and Google Classroom APIs to streamline
                        academic workflows.
                    </p>
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
    )
}
