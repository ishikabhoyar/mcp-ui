"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <div className="w-full bg-gradient-to-t from-black to-violet-950/20 py-24">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-violet-950/40 to-blue-950/40 p-12 rounded-2xl border border-violet-500/20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Infrastructure?
          </h2>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto mb-10">
            Join thousands of companies using MCP Server for their mission-critical applications.
            Get started today with a free 30-day trial.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-6 h-auto text-lg">
              Start Free Trial
            </Button>
            <Button variant="outline" className="border-neutral-500 hover:border-violet-500 text-white px-8 py-6 h-auto text-lg">
              Schedule a Demo
            </Button>
          </div>
          
          <p className="text-neutral-400 mt-8 text-sm">
            No credit card required. Cancel anytime.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
