// Import all components directly from their full paths
import { Hero } from "@/components/mpc-landing/hero";
import { Features } from "@/components/mpc-landing/features";
import { AboutUs } from "@/components/mpc-landing/about-us";
import { Testimonials } from "@/components/mpc-landing/testimonials";
import { Pricing } from "@/components/mpc-landing/pricing";
import { Cta } from "@/components/mpc-landing/cta";
import { Footer } from "@/components/mpc-landing/footer";
import { Navbar } from "@/components/mpc-landing/navbar";

export function MpcLanding() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Navbar />
      <div className="flex-1 w-full">
        <Hero />
        <Features />
        <AboutUs />
        <Testimonials />
        <Pricing />
        <Cta />
      </div>
      <Footer />
    </div>
  );
}
