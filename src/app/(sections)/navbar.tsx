import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/40 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl border border-white/10 bg-white/5" />
          <span className="text-sm font-semibold tracking-wide">FCODE</span>
          <span className="text-xs text-muted-foreground">Design</span>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <a className="hover:text-foreground" href="#services">
            Services
          </a>
          <a className="hover:text-foreground" href="#projects">
            Projects
          </a>
          <a className="hover:text-foreground" href="#contact">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="secondary" className="hidden md:inline-flex">
            View Work
          </Button>
          <Button asChild>
            <a href="#contact">Let’s talk</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
