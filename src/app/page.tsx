import { HeroSectionOne } from "@/components/hero-section-demo-1";
import { AboutUs } from "@/components/about-us";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div>
      <HeroSectionOne />
      <AboutUs />
      <Footer />
    </div>
  );
}