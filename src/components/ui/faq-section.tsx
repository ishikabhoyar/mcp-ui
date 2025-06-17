"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function FAQSection() {
  const faqs = [
    {
      question: "What is MCP Server?",
      answer: "MCP Server is an enterprise-grade infrastructure solution that provides a unified backend for applications with global distribution, high performance, and advanced security features built in."
    },
    {
      question: "How does MCP Server differ from traditional cloud providers?",
      answer: "Unlike traditional cloud providers, MCP Server offers a fully integrated stack with pre-configured security, auto-scaling, and performance optimizations specifically designed for Model Context Protocol applications."
    },
    {
      question: "What programming languages and frameworks are supported?",
      answer: "MCP Server supports all major programming languages including JavaScript/TypeScript, Python, Java, Go, Ruby, and PHP, with framework-specific SDKs for React, Next.js, Django, Spring, and more."
    },
    {
      question: "Can I migrate my existing application to MCP Server?",
      answer: "Yes! We provide migration tools and guides to help you seamlessly transition from your current infrastructure to MCP Server with minimal downtime and code changes."
    },
    {
      question: "What kind of security features does MCP Server offer?",
      answer: "MCP Server includes enterprise-level security with end-to-end encryption, role-based access control, DDoS protection, automated security patching, and compliance with SOC 2, GDPR, HIPAA, and other standards."
    },
    {
      question: "How does pricing work?",
      answer: "MCP Server offers tiered pricing based on usage, with a generous free tier for development and small applications. Enterprise plans include dedicated support, SLAs, and custom integrations. Contact our sales team for a quote tailored to your needs."
    }
  ];

  return (
    <div className="w-full bg-black py-24">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-neutral-400 max-w-3xl mx-auto"
          >
            Everything you need to know about MCP Server
          </motion.p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-black border border-neutral-800 hover:border-violet-500/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-white">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-neutral-400 text-base">{faq.answer}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Still have questions?</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-violet-600 hover:bg-violet-700 text-white">
              Contact Support
            </Button>
            <Button variant="outline" className="border-neutral-700 hover:border-violet-500 text-white">
              View Documentation
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
