import { Bot, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function AiAssistantCard() {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 animate-float">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-medium font-headline">Your AI Companion</CardTitle>
        <Sparkles className="h-6 w-6 text-primary" />
      </CardHeader>
      <CardContent>
        <div className="text-lg font-bold text-primary">Hello! I'm here to support you.</div>
        <p className="text-sm text-muted-foreground mt-1">
          Let's navigate your recovery journey together. I can provide real-time feedback, encouragement, and insights.
        </p>
        <div className="mt-4 flex items-center space-x-2">
          <Bot className="h-5 w-5 text-accent" />
          <span className="text-xs text-muted-foreground">Ready to assist 24/7</span>
        </div>
      </CardContent>
    </Card>
  );
}
