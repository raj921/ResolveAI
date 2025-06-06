
"use client"

import { BarChart as BarChartIcon, LineChart as LineChartIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from '@/components/ui/chart';
import { 
  Bar, 
  CartesianGrid, 
  XAxis, 
  YAxis, 
  Line, 
  ResponsiveContainer, 
  Tooltip as RechartsTooltip, 
  Legend as RechartsLegend,
  LineChart as RechartsLineChartComponent, // Import actual LineChart from recharts
  BarChart as RechartsBarChartComponent    // Import actual BarChart from recharts
} from 'recharts';
import type { ChartConfig } from '@/components/ui/chart';

const moodData = [
  { date: 'Mon', moodLevel: 7, stressLevel: 3 },
  { date: 'Tue', moodLevel: 6, stressLevel: 4 },
  { date: 'Wed', moodLevel: 8, stressLevel: 2 },
  { date: 'Thu', moodLevel: 5, stressLevel: 5 },
  { date: 'Fri', moodLevel: 7, stressLevel: 3 },
  { date: 'Sat', moodLevel: 9, stressLevel: 1 },
  { date: 'Sun', moodLevel: 8, stressLevel: 2 },
];

const activityData = [
  { name: 'Meditation', count: 5, target: 7 },
  { name: 'Exercise', count: 3, target: 5 },
  { name: 'Journaling', count: 6, target: 7 },
  { name: 'Social Meetup', count: 1, target: 2 },
];

const moodChartConfig = {
  moodLevel: {
    label: 'Mood Level',
    color: 'hsl(var(--primary))',
  },
  stressLevel: {
    label: 'Stress Level',
    color: 'hsl(var(--destructive))',
  },
} satisfies ChartConfig;

const activityChartConfig = {
  count: {
    label: 'Completed',
    color: 'hsl(var(--accent))',
  },
  target: {
    label: 'Target',
    color: 'hsl(var(--muted-foreground))',
  },
} satisfies ChartConfig;


export default function ProgressDashboard() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="font-headline">Mood & Stress Levels</CardTitle>
            <LineChartIcon className="h-5 w-5 text-primary" />
          </div>
          <CardDescription>Your emotional well-being over the past week.</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={moodChartConfig} className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsLineChartComponent data={moodData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                <XAxis dataKey="date" tickLine={false} axisLine={false} stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis tickLine={false} axisLine={false} stroke="hsl(var(--muted-foreground))" fontSize={12} domain={[0, 10]} />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="line" />}
                />
                <Line type="monotone" dataKey="moodLevel" stroke="var(--color-moodLevel)" strokeWidth={2} dot={{ r: 4, fill: 'var(--color-moodLevel)' }} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="stressLevel" stroke="var(--color-stressLevel)" strokeWidth={2} dot={{ r: 4, fill: 'var(--color-stressLevel)' }} activeDot={{ r: 6 }} />
                <ChartLegend content={<ChartLegendContent />} />
              </RechartsLineChartComponent>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="font-headline">Activity Completion</CardTitle>
            <BarChartIcon className="h-5 w-5 text-accent" />
          </div>
          <CardDescription>Progress on your weekly wellness activities.</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={activityChartConfig} className="h-[250px] w-full">
             <ResponsiveContainer width="100%" height="100%">
              <RechartsBarChartComponent data={activityData} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))"/>
                <XAxis dataKey="name" tickLine={false} axisLine={false} stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis tickLine={false} axisLine={false} stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dot" />}
                />
                <Bar dataKey="count" fill="var(--color-count)" radius={[4, 4, 0, 0]} barSize={20} />
                <Bar dataKey="target" fill="var(--color-target)" radius={[4, 4, 0, 0]} barSize={20} />
                 <ChartLegend content={<ChartLegendContent />} />
              </RechartsBarChartComponent>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
