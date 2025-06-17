import Image from "next/image";

export function Testimonials() {
  const testimonials = [
    {
      name: "Alex Johnson",
      role: "CTO at TechCorp",
      content: "MCP Server revolutionized how we handle context in our AI applications. It's fast, reliable, and incredibly easy to work with.",
      avatar: "https://i.pravatar.cc/100?img=1"
    },
    {
      name: "Sarah Chen",
      role: "ML Engineer at DataFusion",
      content: "We switched to MCP Server and saw an immediate 40% reduction in latency. The plugin ecosystem is also fantastic.",
      avatar: "https://i.pravatar.cc/100?img=5"
    },
    {
      name: "Michael Rivera",
      role: "Lead Developer at BuildAI",
      content: "The documentation is excellent, and the community support is unmatched. It's become our go-to solution for all context protocol needs.",
      avatar: "https://i.pravatar.cc/100?img=3"
    }
  ];

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="w-full max-w-[2000px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Trusted by Developers
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              See what others are saying about MCP Server and how it's helped their teams.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="flex flex-col justify-between rounded-xl border p-6 shadow-sm"
            >
              <div className="space-y-4">
                <p className="text-muted-foreground">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
