"use client";

import WorldMap from "@/components/ui/world-map";

export default function WorldMapSection() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Gmail MCP Server Global Network
        </h1>
        <p className="text-center max-w-3xl mx-auto mb-10 text-neutral-500">
          Gmail MCP Server's infrastructure spans continents, ensuring reliable Google Workspace 
          API access and minimal latency for your Gmail, Calendar, and Classroom integrations.
        </p>
      </div>
      
      <WorldMap
        dots={[
          {
            start: { lat: 40.7128, lng: -74.006 }, // New York
            end: { lat: 51.5074, lng: -0.1278 }, // London
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 35.6762, lng: 139.6503 }, // Tokyo
          },
          {
            start: { lat: 35.6762, lng: 139.6503 }, // Tokyo
            end: { lat: -33.8688, lng: 151.2093 }, // Sydney
          },
          {
            start: { lat: 37.7749, lng: -122.4194 }, // San Francisco
            end: { lat: -33.8688, lng: 151.2093 }, // Sydney
          },
          {
            start: { lat: 40.7128, lng: -74.006 }, // New York
            end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
          },
        ]}
        lineColor="#8b5cf6" // Violet color to match your MCP theme
      />
      
      <div className="py-8">
        <h3 className="text-2xl font-bold text-center mb-6">Supported Clients</h3>
        <div className="flex justify-center gap-12 py-4 flex-wrap">
          <div className="text-center">
            <p className="text-xl font-bold">VSCode</p>
            <p className="text-sm text-neutral-500">Code Editor</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold">Cline</p>
            <p className="text-sm text-neutral-500">AI Assistant</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold">Claude</p>
            <p className="text-sm text-neutral-500">Desktop & Web</p>
          </div>
        </div>
      </div>
    </div>
  );
}
