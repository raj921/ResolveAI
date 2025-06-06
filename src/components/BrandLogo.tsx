import { BrainCircuit } from 'lucide-react';
import Link from 'next/link';

export default function BrandLogo() {
  return (
    <Link href="/" className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
      <BrainCircuit size={32} strokeWidth={1.5} />
      <span className="text-2xl font-bold font-headline">ResolveAI</span>
    </Link>
  );
}
