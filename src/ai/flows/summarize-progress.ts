'use server';

/**
 * @fileOverview Summarizes the user's weekly progress in recovery.
 *
 * - summarizeProgress - A function that summarizes the progress.
 * - SummarizeProgressInput - The input type for the summarizeProgress function.
 * - SummarizeProgressOutput - The return type for the summarizeProgress function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeProgressInputSchema = z.object({
  weeklyMetrics: z
    .string()
    .describe('The user metrics for the week in JSON format.'),
  pastSummary: z
    .string()
    .optional()
    .describe('A summary of the previous weeks progress.'),
});
export type SummarizeProgressInput = z.infer<typeof SummarizeProgressInputSchema>;

const SummarizeProgressOutputSchema = z.object({
  summary: z.string().describe('The summary of the progress.'),
});
export type SummarizeProgressOutput = z.infer<typeof SummarizeProgressOutputSchema>;

export async function summarizeProgress(input: SummarizeProgressInput): Promise<SummarizeProgressOutput> {
  return summarizeProgressFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeProgressPrompt',
  input: {schema: SummarizeProgressInputSchema},
  output: {schema: SummarizeProgressOutputSchema},
  prompt: `You are an AI assistant specializing in addiction recovery.

  You will summarize the user's progress based on the metrics provided, and the previous summary. Be brief and motivational.

  Metrics: {{{weeklyMetrics}}}
  Previous Summary: {{{pastSummary}}}
  `,
});

const summarizeProgressFlow = ai.defineFlow(
  {
    name: 'summarizeProgressFlow',
    inputSchema: SummarizeProgressInputSchema,
    outputSchema: SummarizeProgressOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
