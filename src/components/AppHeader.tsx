import Link from 'next/link';
import BrandLogo from './BrandLogo';
import { Button } from './ui/button';

export default function AppHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <BrandLogo />
        <nav className="flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/">Dashboard</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/dynamic-pathing">Dynamic Pathing</Link>
          </Button>
          {/* Add more navigation items here if needed */}
        </nav>
      </div>
    </header>
  );
}
