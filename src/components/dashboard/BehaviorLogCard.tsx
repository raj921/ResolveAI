import { Activity, Edit3 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function BehaviorLogCard() {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <div className="flex items-center justify-between">
           <CardTitle className="font-headline">Behavior Tracking</CardTitle>
           <Activity className="h-5 w-5 text-sky-500" />
        </div>
        <CardDescription>Log your activities, mood, and triggers to gain insights.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          Regularly logging your experiences helps identify patterns and supports your personalized recovery path.
        </p>
        <Button className="w-full animate-subtle-pulse">
          <Edit3 className="mr-2 h-4 w-4" /> Log New Entry
        </Button>
        <p className="text-xs text-muted-foreground mt-3 text-center">
          (Note: Full logging form coming soon!)
        </p>
      </CardContent>
    </Card>
  );
}
