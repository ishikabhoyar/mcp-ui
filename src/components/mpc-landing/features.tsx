import { Cloud, Zap, Lock, CircuitBoard, RefreshCcw, Layers } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <Cloud className="h-10 w-10" />,
      title: "Cloud Compatible",
      description: "Deploy anywhere with cloud-native architecture that scales with your needs."
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Blazing Fast",
      description: "Built with performance in mind, handling thousands of requests per second."
    },
    {
      icon: <Lock className="h-10 w-10" />,
      title: "Secure by Default",
      description: "Enterprise-grade security with authentication and encryption built-in."
    },
    {
      icon: <CircuitBoard className="h-10 w-10" />,
      title: "Extensible",
      description: "Easily extend functionality with a powerful plugin system."
    },
    {
      icon: <RefreshCcw className="h-10 w-10" />,
      title: "Auto-Scaling",
      description: "Intelligent load balancing and auto-scaling to handle any workload."
    },
    {
      icon: <Layers className="h-10 w-10" />,
      title: "Multi-Model Support",
      description: "Connect to any AI model provider with a unified API interface."
    },
  ];

  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
      <div className="w-full max-w-[2000px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Features</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Powerful Capabilities</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Everything you need to build, deploy, and scale your context protocol server.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {features.map((feature, i) => (
            <div 
              key={i} 
              className="flex flex-col items-center space-y-2 rounded-lg border p-4 transition-all hover:bg-muted/50"
            >
              <div className="text-primary">{feature.icon}</div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-center text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
