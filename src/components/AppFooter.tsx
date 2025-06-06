export default function AppFooter() {
  return (
    <footer className="border-t border-border/40 py-6 md:py-0">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-16 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {new Date().getFullYear()} ResolveAI. Empowering Recovery Through Technology.
        </p>
      </div>
    </footer>
  );
}
