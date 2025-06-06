import { Leaf, Sun, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const tips = [
  { id: 1, text: "Connect with nature: Spend 15 minutes outdoors today.", icon: <Leaf className="h-5 w-5 text-accent" /> },
  { id: 2, text: "Mindful moments: Practice 5 minutes of deep breathing.", icon: <Zap className="h-5 w-5 text-primary" /> },
  { id: 3, text: "Hydration boost: Drink a full glass of water upon waking.", icon: <Sun className="h-5 w-5 text-sky-500" /> },
];

export default function WellnessTipsCard() {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <div className="flex items-center justify-between">
            <CardTitle className="font-headline">Wellness Corner</CardTitle>
            <Leaf className="h-5 w-5 text-accent" />
        </div>
        <CardDescription>Personalized tips for your well-being.</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {tips.map((tip) => (
            <li key={tip.id} className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-1">{tip.icon}</div>
              <p className="text-sm text-foreground">{tip.text}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
