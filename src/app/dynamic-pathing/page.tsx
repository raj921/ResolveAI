import DynamicPathingClient from '@/components/features/DynamicPathingClient';
import { Separator } from '@/components/ui/separator';

export default function DynamicPathingPage() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight font-headline text-primary sm:text-5xl">
          Dynamic Recovery Pathing
        </h1>
        <p className="mt-4 text-lg leading-8 text-muted-foreground sm:mt-6">
          Our AI dynamically adjusts your recovery strategies based on real-time behavior tracking and mental health metrics.
        </p>
      </section>

      <Separator />
      
      <DynamicPathingClient />
    </div>
  );
}
