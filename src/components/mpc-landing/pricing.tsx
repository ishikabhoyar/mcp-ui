import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Pricing() {
  const tiers = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for getting started and small projects.",
      features: [
        "Up to 1,000 requests per day",
        "Basic authentication",
        "Community support",
        "Standard plugins",
        "Public API access"
      ],
      cta: "Start Free",
      link: "#"
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      description: "Ideal for growing teams and applications.",
      features: [
        "Unlimited requests",
        "Advanced authentication",
        "Priority support",
        "All plugins",
        "Custom integrations",
        "Analytics dashboard"
      ],
      cta: "Get Pro",
      link: "#",
      highlight: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale deployments and special requirements.",
      features: [
        "Custom request limits",
        "Dedicated infrastructure",
        "24/7 phone & email support",
        "Custom plugins & features",
        "On-premise deployment",
        "SLA guarantees",
        "Dedicated success team"
      ],
      cta: "Contact Sales",
      link: "#"
    }
  ];

  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
      <div className="w-full max-w-[2000px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Pricing
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Simple, Transparent Pricing
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Choose the plan that's right for your needs, with no hidden fees or surprises.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`flex flex-col rounded-xl border p-6 shadow-sm ${
                tier.highlight ? "border-primary shadow-md" : ""
              }`}
            >
              <div className="space-y-2">
                <h3 className="text-xl font-bold">{tier.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">{tier.price}</span>
                  {tier.period && <span className="text-muted-foreground">{tier.period}</span>}
                </div>
                <p className="text-muted-foreground">{tier.description}</p>
              </div>
              <div className="mt-6 space-y-4">
                <ul className="space-y-2">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 pt-4">
                <Button asChild className={`w-full ${tier.highlight ? "" : "variant-outline"}`}>
                  <Link href={tier.link}>{tier.cta}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
