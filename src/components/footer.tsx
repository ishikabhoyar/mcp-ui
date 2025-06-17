import * as React from "react";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background py-8 mt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg">MCP Server</span>
          <span className="text-muted-foreground text-sm">© {new Date().getFullYear()}</span>
        </div>
        <nav className="flex flex-wrap gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">Solutions</a>
          <a href="#" className="hover:text-primary transition-colors">Features</a>
          <a href="#" className="hover:text-primary transition-colors">Documentation</a>
          <a href="#" className="hover:text-primary transition-colors">Pricing</a>
        </nav>
      </div>
    </footer>
  );
}
