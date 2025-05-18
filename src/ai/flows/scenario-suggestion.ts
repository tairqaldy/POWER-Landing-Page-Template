'use server';
/**
 * @fileOverview Provides scenario suggestions based on the user's industry and training needs.
 *
 * - suggestScenario - A function that suggests relevant project scenarios.
 * - SuggestScenarioInput - The input type for the suggestScenario function.
 * - SuggestScenarioOutput - The return type for the suggestScenario function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestScenarioInputSchema = z.object({
  industry: z.string().describe('The industry of the client.'),
  trainingNeeds: z.string().describe('The specific training needs of the client.'),
});
export type SuggestScenarioInput = z.infer<typeof SuggestScenarioInputSchema>;

const SuggestScenarioOutputSchema = z.object({
  scenarioSuggestion: z.string().describe('A relevant project scenario suggestion for the POWER simulation.'),
  reasoning: z.string().describe('Explanation of why the scenario is a good fit for the client.'),
});
export type SuggestScenarioOutput = z.infer<typeof SuggestScenarioOutputSchema>;

export async function suggestScenario(input: SuggestScenarioInput): Promise<SuggestScenarioOutput> {
  return suggestScenarioFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestScenarioPrompt',
  input: {schema: SuggestScenarioInputSchema},
  output: {schema: SuggestScenarioOutputSchema},
  prompt: `You are an expert in project management simulations. A potential client is interested in using the POWER simulation for their team.

Based on their industry and training needs, suggest a relevant project scenario that would be a good fit for them. Explain your reasoning for why this scenario is appropriate.

Industry: {{{industry}}}
Training Needs: {{{trainingNeeds}}}
`,
});

const suggestScenarioFlow = ai.defineFlow(
  {
    name: 'suggestScenarioFlow',
    inputSchema: SuggestScenarioInputSchema,
    outputSchema: SuggestScenarioOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
