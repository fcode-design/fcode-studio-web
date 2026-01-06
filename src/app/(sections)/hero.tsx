import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Reveal from "@/components/reveal";

export default function Hero() {
  return (
    <Reveal>
      <section className="mx-auto max-w-6xl px-4 pt-14 pb-10 md:pt-20">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          </div>

          <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <Badge className="mb-4 bg-white/10 text-foreground hover:bg-white/10">
                Clean UI • Fast Performance • Scalable Builds
              </Badge>

              <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                Designing modern web & SaaS experiences —
                <span className="text-muted-foreground"> with clean code.</span>
              </h1>

              <p className="mt-4 max-w-xl text-base text-muted-foreground md:text-lg">
                FCODE Design builds landing pages, dashboards, and scalable web
                products that look premium and ship fast.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild>
                  <a href="#projects">See projects</a>
                </Button>
                <Button variant="secondary" asChild>
                  <a href="#services">Explore services</a>
                </Button>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 text-xs text-muted-foreground">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  Next.js
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  TypeScript
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  Tailwind
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  shadcn/ui
                </span>
              </div>
            </div>

            {/* Right glass card / mock preview */}
            <div className="relative">
              <div className="rounded-3xl border border-white/10 `bg-gradient-to-b` from-white/10 to-white/5 p-5 shadow-2xl">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">FCODE / Preview</div>
                  <div className="flex gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  </div>
                </div>

                <div className="mt-5 grid gap-3">
                  <div className="h-10 rounded-2xl border border-white/10 bg-white/5" />
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-28 rounded-2xl border border-white/10 bg-white/5" />
                    <div className="h-28 rounded-2xl border border-white/10 bg-white/5" />
                  </div>
                  <div className="h-24 rounded-2xl border border-white/10 bg-white/5" />
                </div>

                <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                  <span>Premium glass UI</span>
                  <span>SEO-ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
