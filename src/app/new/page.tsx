import { Metadata } from "next";
import { MpcLanding } from "@/components/mpc-landing/mpc-landing";

export const metadata: Metadata = {
  title: "MCP Server | Modern Context Protocol",
  description: "A modern context protocol server for your applications",
};

export default function NewPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <MpcLanding />
    </main>
  );
}
