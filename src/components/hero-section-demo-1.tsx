"use client";

import { motion } from "framer-motion";

export function HeroSectionOne() {
  return (
    <div className="relative w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 to-black z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-500/30 rounded-full blur-[100px] z-0"></div>
      
      <div className="relative mx-auto max-w-7xl px-4 py-20 z-10">
        <Navbar />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16 items-center">
          <div className="lg:col-span-7">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6"
            >
              Your cyber performance <span className="text-violet-400">server partner</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-300 max-w-xl mb-8"
            >
              Enterprise-grade MCP server infrastructure with unparalleled performance,
              security, and scalability for your mission-critical applications.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <button className="px-8 py-3 bg-violet-600 hover:bg-violet-700 rounded-md font-medium transition-all">
                Explore Solutions
              </button>
              <button className="px-8 py-3 bg-transparent border border-gray-700 hover:border-violet-500 rounded-md font-medium transition-all">
                Request Demo
              </button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-8 mt-12"
            >
              <div>
                <p className="text-2xl md:text-3xl font-bold">99.99%</p>
                <p className="text-sm text-gray-400">Uptime SLA</p>
              </div>
              <div className="h-12 w-px bg-gray-800"></div>
              <div>
                <p className="text-2xl md:text-3xl font-bold">24/7</p>
                <p className="text-sm text-gray-400">Expert Support</p>
              </div>
              <div className="h-12 w-px bg-gray-800"></div>
              <div>
                <p className="text-2xl md:text-3xl font-bold">+500</p>
                <p className="text-sm text-gray-400">Enterprise Clients</p>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-blue-500 rounded-lg blur opacity-30"></div>
              <div className="relative aspect-square bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" 
                  alt="MCP Server Infrastructure" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/80 backdrop-blur-sm border border-gray-800 rounded p-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <p className="text-xs text-green-500">Systems Operational</p>
                    </div>
                    <p className="text-sm mt-1 text-gray-300">MCP Server v4.2 - Enterprise Edition</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between py-6">
      <div className="flex items-center gap-3">
        <div className="size-8 rounded-md bg-gradient-to-br from-violet-600 to-blue-600" />
        <h1 className="text-xl font-bold">MCP Server</h1>
      </div>
      <div className="hidden md:flex items-center gap-8">
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Solutions</a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Features</a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Documentation</a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Pricing</a>
      </div>
      <button className="px-5 py-2 rounded-md bg-white/10 hover:bg-white/20 backdrop-blur-sm text-sm font-medium transition-all">
        Login
      </button>
    </nav>
  );
};