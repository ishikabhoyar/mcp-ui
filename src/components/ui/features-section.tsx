"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export function FeaturesSection() {
  const features = [
    {
      icon: "🚀",
      title: "Enterprise Performance",
      description: "Optimized for high-throughput applications with 99.99% uptime SLA and global low-latency access."
    },
    {
      icon: "🔒",
      title: "Advanced Security",
      description: "End-to-end encryption with GDPR and SOC 2 compliance built into every layer of the infrastructure."
    },
    {
      icon: "🔌",
      title: "Seamless Integration",
      description: "Connect with your existing tools through comprehensive API and SDK support for all major platforms."
    },
    {
      icon: "📊",
      title: "Real-time Analytics",
      description: "Monitor system health, performance metrics, and user behavior with powerful dashboards."
    },
    {
      icon: "🧠",
      title: "AI-Powered Infrastructure",
      description: "Intelligent resource allocation and predictive scaling based on your application's usage patterns."
    },
    {
      icon: "☁️",
      title: "Multi-Cloud Support",
      description: "Deploy across AWS, Azure, and Google Cloud with unified management and consistent performance."
    }
  ];

  return (
    <div className="w-full bg-black py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Powerful Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-neutral-400 max-w-3xl mx-auto"
          >
            Everything you need for enterprise-grade infrastructure
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <Card key={index} className="bg-black border border-neutral-800 hover:border-violet-500/50 transition-all duration-300">
              <CardHeader>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-neutral-400">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
