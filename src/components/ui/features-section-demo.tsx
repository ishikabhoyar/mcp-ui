"use client";

import React from "react";
import { useId } from "react";

export function FeaturesSectionDemo() {
  return (
    <div className="py-20 lg:py-40 bg-black">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Powerful Features
        </h2>
        <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
          Everything you need for enterprise-grade MCP infrastructure
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-2 max-w-7xl mx-auto">
        {grid.map((feature) => (
          <div
            key={feature.title}
            className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden"
          >
            <Grid size={20} />
            <p className="text-base font-bold text-neutral-800 dark:text-white relative z-20">
              {feature.title}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 mt-4 text-base font-normal relative z-20">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const grid = [
  {
    title: "Global Infrastructure",
    description:
      "Deploy across 37 data centers worldwide with 99.99% uptime guarantees and enterprise-grade reliability.",
  },
  {
    title: "High Performance Computing",
    description:
      "Access compute resources with dedicated GPUs and optimized networking for AI/ML workloads and real-time processing.",
  },
  {
    title: "Secure by Design",
    description:
      "HIPAA, SOC2, and GDPR compliant architecture with end-to-end encryption and advanced threat protection.",
  },
  {
    title: "Serverless Architecture",
    description:
      "Build and deploy applications without managing infrastructure, with automatic scaling based on demand.",
  },
  {
    title: "Multi-cloud Support",
    description:
      "Seamlessly operate across AWS, Azure, and Google Cloud with unified management and consistent performance.",
  },
  {
    title: "Real-time Analytics",
    description:
      "Monitor system metrics, application performance, and user behavior with customizable dashboards.",
  },
  {
    title: "API Integration",
    description:
      "Connect with your existing tools through comprehensive API and SDK support for all major platforms.",
  },
  {
    title: "Developer-first Tools",
    description:
      "Accelerate development with CLI tools, SDKs, and comprehensive documentation designed for developer productivity.",
  },
];

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  // Use fixed values to avoid hydration mismatch between server and client
  const p = pattern ?? [
    [8, 1],
    [9, 2],
    [10, 3],
    [9, 4],
    [8, 5],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([squareX, squareY]: any, index: number) => {
            // Convert all values to strings to avoid hydration errors
            const validX = (squareX * width).toString();
            const validY = (squareY * height).toString();
            
            return (
              <rect
                strokeWidth="0"
                key={`square-${index}`}
                width={(width + 1).toString()}
                height={(height + 1).toString()}
                x={validX}
                y={validY}
              />
            );
          })}
        </svg>
      )}
    </svg>
  );
}
