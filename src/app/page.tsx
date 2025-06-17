import { Metadata } from "next";
import { SplineSceneBasic } from "@/components/ui/demo";
import WorldMapSection from "@/components/ui/world-map-section";
import { FeaturesSectionDemo } from "@/components/ui/features-section-demo";
import { HowItWorksSection } from "@/components/ui/how-it-works-section";
import { FAQSection } from "@/components/ui/faq-section";
import { CTASection } from "@/components/ui/cta-section";

export const metadata: Metadata = {
  title: "MCP Server | Enterprise Solutions",
  description: "Enterprise-grade MCP Server infrastructure with unparalleled performance",
};

export default function HelloPage() {
  return (
    <>
      <main className="w-screen h-screen overflow-hidden p-0 m-0">
        <SplineSceneBasic />
      </main>
      <section className="py-16">
        <WorldMapSection />
      </section>
      <section>
        <HowItWorksSection />
      </section>
      <section>
        <FeaturesSectionDemo />
      </section>
      <section>
        <FAQSection />
      </section>
      <section>
        <CTASection />
      </section>
    </>
  );
}

