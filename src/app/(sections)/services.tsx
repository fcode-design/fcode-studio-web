import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Reveal from "@/components/reveal";

const items = [
  {
    title: "Landing Pages",
    desc: "High-converting, Apple-style landing pages with fast load and clean UX.",
  },
  {
    title: "SaaS Dashboards",
    desc: "Admin panels, analytics, CRUD, auth — built scalable and maintainable.",
  },
  {
    title: "E-commerce & Integrations",
    desc: "Payments, APIs, product systems, content management, and automation.",
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Services
        </h2>
        <p className="mt-2 text-muted-foreground">
          Focused on clarity, performance, and scalable architecture.
        </p>
      </div>

      <Separator className="mb-6 opacity-30" />

      <div className="grid gap-4 md:grid-cols-3">
        {items.map((x, i) => (
          <Reveal key={x.title} delay={i * 0.06}>
            <Card key={x.title} className="border-white/10 bg-white/5">
              <CardContent className="p-6">
                <div className="mb-3 h-10 w-10 rounded-2xl border border-white/10 bg-white/5" />
                <h3 className="text-lg font-semibold">{x.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{x.desc}</p>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
