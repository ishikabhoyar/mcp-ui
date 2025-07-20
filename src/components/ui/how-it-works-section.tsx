"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import Image from "next/image";

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Copy Configuration",
      description: "Simply copy the provided JSON configuration - no complex installation required."
    },
    {
      number: "02",
      title: "Add to Any MCP Client",
      description: "Paste the configuration into any MCP-compatible client or application that supports MCP servers."
    },
    {
      number: "03",
      title: "Authenticate with Google",
      description: "Follow the OAuth flow to securely connect your Google account when prompted."
    },
    {
      number: "04",
      title: "Start Using Gmail APIs",
      description: "Immediately access Gmail, Calendar, and Classroom through your MCP client interface."
    }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-black to-violet-950/30 py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-neutral-400 max-w-3xl mx-auto"
          >
            Ready in seconds - just add one JSON config to any MCP client
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="border border-neutral-800 rounded-xl overflow-hidden bg-black">
              <div className="p-1">
                <div className="border-b border-neutral-800 p-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-neutral-400 mx-auto pr-8">MCP Client Configuration</div>
                </div>
                <div className="p-4 text-sm font-mono">
                  <p className="text-violet-400 mb-2">Copy this configuration:</p>
                  <div className="bg-neutral-900 p-3 mt-2 rounded border border-neutral-700">
                    <p className="text-blue-300">{`{`}</p>
                    <p className="text-blue-300 ml-2">{`"gmail-mcp": {`}</p>
                    <p className="text-green-300 ml-4">{`"command": "npx",`}</p>
                    <p className="text-green-300 ml-4">{`"args": [`}</p>
                    <p className="text-yellow-300 ml-6">{`"mcp-remote",`}</p>
                    <p className="text-yellow-300 ml-6">{`"https://gmail-mcp-server.ishikabhoyar2005.workers.dev/sse"`}</p>
                    <p className="text-green-300 ml-4">{`]`}</p>
                    <p className="text-blue-300 ml-2">{`}`}</p>
                    <p className="text-blue-300">{`}`}</p>
                  </div>
                  <p className="text-neutral-400 mt-3">Add to any MCP client's configuration</p>
                  <div className="bg-violet-500/10 border-l-2 border-violet-500 pl-2 py-1 mt-3 animate-pulse">
                    <p className="text-violet-400">✓ Ready to use with any MCP client!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="text-2xl text-violet-400 font-bold">{step.number}</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-neutral-400">{step.description}</p>
                  {index < steps.length - 1 && (
                    <Separator className="bg-neutral-800 my-4 opacity-50" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
