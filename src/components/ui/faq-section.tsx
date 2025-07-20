"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function FAQSection() {
  const faqs = [
    {
      question: "What is Gmail MCP Server?",
      answer: "Gmail MCP Server is a Model Context Protocol server that provides unified API access to Gmail, Google Calendar, and Google Classroom services through a single, easy-to-use interface."
    },
    {
      question: "How do I authenticate with Google services?",
      answer: "Authentication is handled through OAuth 2.0. Simply configure your Google Cloud Console credentials, and the MCP server will handle the complete OAuth flow, including token refresh and management."
    },
    {
      question: "What Google APIs are supported?",
      answer: "Gmail MCP Server supports Gmail API (for email management), Google Calendar API (for calendar events), and Google Classroom API (for course and assignment management). All major features of these APIs are accessible."
    },
    {
      question: "Can I use this in production applications?",
      answer: "Yes! Gmail MCP Server is production-ready with built-in rate limiting, error handling, and security features. It handles Google API quotas and provides reliable access to your Google Workspace data."
    },
    {
      question: "What security measures are in place?",
      answer: "The server implements OAuth 2.0 best practices, secure token storage, HTTPS encryption, and follows Google's security guidelines. All API requests are authenticated and authorized properly."
    },
    {
      question: "How do I get started?",
      answer: "Simply copy the JSON configuration shown above and add it to your MCP client settings. The server will handle authentication and provide access to Gmail, Calendar, and Classroom APIs immediately."
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
            Everything you need to know about Gmail MCP Server
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
            <Button 
              className="bg-violet-600 hover:bg-violet-700 text-white"
              onClick={() => window.open('https://github.com/ishikabhoyar/gmail-mcp-server', '_blank')}
            >
              View on GitHub
            </Button>
            <Button 
              variant="outline" 
              className="border-neutral-700 hover:border-violet-500 text-white"
              onClick={() => window.open('https://github.com/ishikabhoyar/gmail-mcp-server/issues', '_blank')}
            >
              Report Issue
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
