import Navbar from "./(sections)/navbar";
import Hero from "./(sections)/hero";
import Services from "./(sections)/services";
import Projects from "./(sections)/projects";
import Contact from "./(sections)/contact";
import Footer from "./(sections)/footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {/* soft gradients */}
        <div className="absolute -top-40 left-1/2 `h-[520px] w-[520px]` -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute top-40 left-10` `h-[420px]` w-[420px]` rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 right-10 `h-[420px] w-[420px]` rounded-full bg-white/5 blur-3xl" />
        {/* subtle grid */}
        <div className="absolute inset-0 opacity-[0.06] `[background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:48px_48px]`" />
        {/* vignette */}
        <div className="absolute inset-0 `bg-gradient-to-b` from-black/30 via-transparent to-black/50" />
      </div>

      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
