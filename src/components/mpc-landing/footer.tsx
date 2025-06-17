import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full border-t py-12">
      <div className="w-full max-w-[2000px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href="/new" className="flex items-center gap-2">
              <span className="font-bold text-xl">MCP Server</span>
            </Link>
            <p className="text-muted-foreground">
              An open-source server for handling context protocols in AI applications.
            </p>
            <div className="flex gap-4">
              <Link href="https://github.com/yourusername/mcp-server" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://twitter.com/yourusername" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="mailto:info@mcpserver.com" className="text-muted-foreground hover:text-foreground">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-medium text-base">Product</h4>
            <Link href="#features" className="text-muted-foreground hover:text-foreground">Features</Link>
            <Link href="#pricing" className="text-muted-foreground hover:text-foreground">Pricing</Link>
            <Link href="/docs" className="text-muted-foreground hover:text-foreground">Documentation</Link>
            <Link href="/changelog" className="text-muted-foreground hover:text-foreground">Changelog</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-medium text-base">Resources</h4>
            <Link href="/blog" className="text-muted-foreground hover:text-foreground">Blog</Link>
            <Link href="/tutorials" className="text-muted-foreground hover:text-foreground">Tutorials</Link>
            <Link href="/community" className="text-muted-foreground hover:text-foreground">Community</Link>
            <Link href="/showcase" className="text-muted-foreground hover:text-foreground">Showcase</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-medium text-base">Company</h4>
            <Link href="/about" className="text-muted-foreground hover:text-foreground">About Us</Link>
            <Link href="/careers" className="text-muted-foreground hover:text-foreground">Careers</Link>
            <Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link>
            <Link href="/legal" className="text-muted-foreground hover:text-foreground">Legal</Link>
          </div>
        </div>
        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-muted-foreground md:text-left">
              © {currentYear} MCP Server. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-foreground">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
