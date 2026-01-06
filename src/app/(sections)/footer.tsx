export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} FCODE Design. All rights reserved.
        </p>

        <div className="flex gap-4 text-sm text-muted-foreground">
          <a className="hover:text-foreground" href="#">
            Instagram
          </a>
          <a className="hover:text-foreground" href="#">
            LinkedIn
          </a>
          <a className="hover:text-foreground" href="#">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
