import AiAssistantCard from '@/components/dashboard/AiAssistantCard';
import BehaviorLogCard from '@/components/dashboard/BehaviorLogCard';
import DataSecurityPill from '@/components/dashboard/DataSecurityPill';
import ProgressDashboard from '@/components/dashboard/ProgressDashboard';
import WellnessTipsCard from '@/components/dashboard/WellnessTipsCard';
import { Separator } from '@/components/ui/separator';

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight font-headline text-primary sm:text-5xl lg:text-6xl">
          Welcome to ResolveAI
        </h1>
        <p className="mt-4 text-lg leading-8 text-muted-foreground sm:mt-6">
          Your personalized journey to recovery starts here. Empowering healing through technology.
        </p>
        <div className="mt-6 flex justify-center">
          <DataSecurityPill />
        </div>
      </section>

      <Separator />

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
        <div className="lg:col-span-2 space-y-6">
          <ProgressDashboard />
        </div>
        <div className="space-y-6 lg:space-y-8">
          <AiAssistantCard />
          <BehaviorLogCard />
        </div>
      </section>
      
      <section>
         <WellnessTipsCard />
      </section>

    </div>
  );
}
