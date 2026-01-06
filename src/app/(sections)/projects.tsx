import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    name: "Kompakt Flex Store",
    tag: "E-commerce",
    desc: "Product system, filtering, admin-ready structure, modern UI.",
  },
  {
    name: "Invoice Tool",
    tag: "SaaS",
    desc: "Invoice creation, PDF export, client management, clean dashboard UI.",
  },
  {
    name: "FCODE Portfolio",
    tag: "Brand",
    desc: "Apple-style layout, performance, SEO, and a premium look.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Projects
          </h2>
          <p className="mt-2 text-muted-foreground">
            A few highlights — polished, production-ready builds.
          </p>
        </div>

        <Button variant="secondary" className="hidden md:inline-flex">
          View all
        </Button>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {projects.map((p) => (
          <Card key={p.name} className="border-white/10 bg-white/5">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{p.name}</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground">
                  {p.tag}
                </span>
              </div>

              <div className="mt-4 h-32 rounded-2xl border border-white/10 bg-white/5" />

              <p className="mt-4 text-sm text-muted-foreground">{p.desc}</p>

              <div className="mt-5 flex gap-2">
                <Button size="sm" asChild>
                  <a href="#contact">Request demo</a>
                </Button>
                <Button size="sm" variant="secondary">
                  Case study
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
