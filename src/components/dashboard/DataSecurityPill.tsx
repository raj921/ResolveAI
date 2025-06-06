import { ShieldCheck } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function DataSecurityPill() {
  return (
    <Badge variant="secondary" className="py-2 px-3 shadow-md">
      <ShieldCheck className="h-4 w-4 mr-2 text-accent" />
      <span className="text-xs font-medium text-foreground">Secure & Private Environment</span>
    </Badge>
  );
}
