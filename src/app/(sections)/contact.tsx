import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <Card className="border-white/10 bg-white/5">
        <CardContent className="p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Let’s build something premium.
              </h2>
              <p className="mt-2 text-muted-foreground">
                Tell us what you need — landing page, dashboard, or a full
                product.
              </p>

              <div className="mt-5 text-sm text-muted-foreground">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  Email:{" "}
                  <span className="text-foreground">
                    hello@fcode-design.com
                  </span>
                </div>
              </div>
            </div>

            <form className="grid gap-3">
              <input
                className="h-11 rounded-xl border border-white/10 bg-white/5 px-4 text-sm outline-none placeholder:text-muted-foreground focus:border-white/20"
                placeholder="Your name"
              />
              <input
                className="h-11 rounded-xl border border-white/10 bg-white/5 px-4 text-sm outline-none placeholder:text-muted-foreground focus:border-white/20"
                placeholder="Email"
              />
              <textarea
                className="`min-h-[120px]` rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-white/20"
                placeholder="Project details"
              />
              <Button type="button">Send message</Button>

              <p className="text-xs text-muted-foreground">
                (Later we can connect this to EmailJS/Resend.)
              </p>
            </form>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
