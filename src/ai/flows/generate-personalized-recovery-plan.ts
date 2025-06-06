// This file is machine-generated - edit with care!

'use server';

/**
 * @fileOverview Generates a personalized addiction recovery plan based on the user's initial assessment and tracked data.
 *
 * - generatePersonalizedRecoveryPlan - A function that generates a personalized recovery plan.
 * - GeneratePersonalizedRecoveryPlanInput - The input type for the generatePersonalizedRecoveryPlan function.
 * - GeneratePersonalizedRecoveryPlanOutput - The return type for the generatePersonalizedRecoveryPlan function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePersonalizedRecoveryPlanInputSchema = z.object({
  assessmentSummary: z
    .string()
    .describe(
      'A summary of the user\u2019s initial assessment, including their addiction type, severity, and any co-occurring mental health conditions.'
    ),
  trackedDataSummary: z
    .string()
    .describe(
      'A summary of the user\u2019s tracked data, including behavior patterns, triggers, and progress towards recovery goals.'
    ),
});
export type GeneratePersonalizedRecoveryPlanInput = z.infer<
  typeof GeneratePersonalizedRecoveryPlanInputSchema
>;

const GeneratePersonalizedRecoveryPlanOutputSchema = z.object({
  recoveryPlan: z.string().describe('A detailed, personalized recovery plan.'),
});
export type GeneratePersonalizedRecoveryPlanOutput = z.infer<
  typeof GeneratePersonalizedRecoveryPlanOutputSchema
>;

export async function generatePersonalizedRecoveryPlan(
  input: GeneratePersonalizedRecoveryPlanInput
): Promise<GeneratePersonalizedRecoveryPlanOutput> {
  return generatePersonalizedRecoveryPlanFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePersonalizedRecoveryPlanPrompt',
  input: {schema: GeneratePersonalizedRecoveryPlanInputSchema},
  output: {schema: GeneratePersonalizedRecoveryPlanOutputSchema},
  prompt: `You are an AI-powered addiction recovery platform. Generate a personalized recovery plan for the user based on the following information:

Initial Assessment Summary: {{{assessmentSummary}}}
Tracked Data Summary: {{{trackedDataSummary}}}

The recovery plan should include specific, measurable, achievable, relevant, and time-bound (SMART) goals. It should also include strategies for managing triggers, coping with cravings, and preventing relapse. Consider behavior tracking, mental health, and wellness metrics when generating the plan. Provide the plan in a structured and easy-to-follow format.`,
});

const generatePersonalizedRecoveryPlanFlow = ai.defineFlow(
  {
    name: 'generatePersonalizedRecoveryPlanFlow',
    inputSchema: GeneratePersonalizedRecoveryPlanInputSchema,
    outputSchema: GeneratePersonalizedRecoveryPlanOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
