"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { adjustRecoveryStrategies, type AdjustRecoveryStrategiesOutput } from '@/ai/flows/dynamically-adjust-recovery-strategies';
import { Loader2, Wand2, ArrowRight } from 'lucide-react';

const formSchema = z.object({
  behaviorData: z.string().min(10, "Please provide more detailed behavior data (e.g., JSON format of activities, mood scores, sleep patterns)."),
  mentalHealthMetrics: z.string().min(10, "Please describe mental health metrics (e.g., anxiety levels, motivation scores, coping mechanisms used)."),
  currentStrategy: z.string().min(5, "Briefly describe your current recovery strategy."),
});

type FormData = z.infer<typeof formSchema>;

export default function DynamicPathingClient() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AdjustRecoveryStrategiesOutput | null>(null);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      behaviorData: '{"last_check_in_mood": 7, "sleep_hours": 6.5, "cravings_reported": 2, "activities_completed": ["meditation", "walk"]}',
      mentalHealthMetrics: '{"anxiety_level": "moderate", "motivation": "medium", "coping_skills_used": ["deep_breathing"]}',
      currentStrategy: 'Focusing on mindfulness and daily walks, avoiding known triggers like social media in evenings.',
    }
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setResult(null);
    try {
      const aiResponse = await adjustRecoveryStrategies(data);
      setResult(aiResponse);
      toast({
        title: "Recovery Plan Adjusted",
        description: "Your personalized recovery path has been updated.",
        variant: "default",
      });
    } catch (error) {
      console.error("Error adjusting recovery strategies:", error);
      toast({
        title: "Error",
        description: "Could not adjust recovery strategies. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Adjust Your Path</CardTitle>
          <CardDescription>
            Provide your latest data for the AI to tailor your recovery strategy.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="currentStrategy">Current Strategy</Label>
              <Input
                id="currentStrategy"
                {...register("currentStrategy")}
                placeholder="e.g., Daily meditation, weekly therapy"
                className={errors.currentStrategy ? "border-destructive" : ""}
              />
              {errors.currentStrategy && <p className="text-sm text-destructive">{errors.currentStrategy.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="behaviorData">Behavior Data (JSON recommended)</Label>
              <Textarea
                id="behaviorData"
                {...register("behaviorData")}
                placeholder='e.g., {"mood": 7, "sleep_hours": 8, "triggers_encountered": 1}'
                rows={4}
                className={errors.behaviorData ? "border-destructive" : ""}
              />
              {errors.behaviorData && <p className="text-sm text-destructive">{errors.behaviorData.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="mentalHealthMetrics">Mental Health Metrics (JSON recommended)</Label>
              <Textarea
                id="mentalHealthMetrics"
                {...register("mentalHealthMetrics")}
                placeholder='e.g., {"anxiety_level": "low", "motivation": "high"}'
                rows={4}
                className={errors.mentalHealthMetrics ? "border-destructive" : ""}
              />
              {errors.mentalHealthMetrics && <p className="text-sm text-destructive">{errors.mentalHealthMetrics.message}</p>}
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Wand2 className="mr-2 h-4 w-4" />
              )}
              Adjust Strategy
            </Button>
          </CardFooter>
        </form>
      </Card>

      {isLoading && (
        <Card className="shadow-lg flex flex-col items-center justify-center min-h-[300px] animate-pulse">
            <Loader2 className="h-12 w-12 text-primary animate-spin mb-4" />
            <CardTitle className="font-headline text-xl">Crafting Your Path...</CardTitle>
            <CardDescription>Our AI is analyzing your data.</CardDescription>
        </Card>
      )}

      {result && !isLoading && (
        <Card className="shadow-lg bg-card border-primary/50">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-primary">Your Adjusted Recovery Plan</CardTitle>
            <CardDescription>Here's your new personalized strategy.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg text-foreground mb-1">New Strategy:</h3>
              <p className="text-muted-foreground whitespace-pre-wrap">{result.adjustedStrategy}</p>
            </div>
             <div className="border-t border-border pt-4">
              <h3 className="font-semibold text-lg text-foreground mb-1">Reasoning:</h3>
              <p className="text-muted-foreground whitespace-pre-wrap">{result.reasoning}</p>
            </div>
          </CardContent>
           <CardFooter>
            <Button variant="outline" onClick={() => { setResult(null); reset(); }} className="w-full">
              <ArrowRight className="mr-2 h-4 w-4" /> Start New Adjustment
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
