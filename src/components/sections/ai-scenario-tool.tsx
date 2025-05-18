"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, Lightbulb, Sparkles } from 'lucide-react';
import { suggestScenario, type SuggestScenarioInput, type SuggestScenarioOutput } from '@/ai/flows/scenario-suggestion';
import { SectionWrapper } from '@/components/layout/section-wrapper';

export function AiScenarioTool() {
  const [industry, setIndustry] = useState('');
  const [trainingNeeds, setTrainingNeeds] = useState('');
  const [suggestion, setSuggestion] = useState<SuggestScenarioOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuggestion(null);

    try {
      const input: SuggestScenarioInput = { industry, trainingNeeds };
      const result = await suggestScenario(input);
      setSuggestion(result);
    } catch (err) {
      setError('Failed to get scenario suggestion. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SectionWrapper id="ai-tool" className="bg-background">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Scenario Tool</h2>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Discover how POWER can be tailored to your team. Enter your industry and training needs to get an AI-powered scenario suggestion.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Lightbulb className="mr-2 h-6 w-6 text-primary" />
              Tell Us About Your Needs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="industry">Your Industry</Label>
                <Input
                  id="industry"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  placeholder="e.g., Technology, Healthcare, Finance"
                  required
                />
              </div>
              <div>
                <Label htmlFor="trainingNeeds">Key Training Needs</Label>
                <Textarea
                  id="trainingNeeds"
                  value={trainingNeeds}
                  onChange={(e) => setTrainingNeeds(e.target.value)}
                  placeholder="e.g., Improving agile practices, leadership development, cross-functional collaboration"
                  rows={4}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={isLoading}>
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Sparkles className="mr-2 h-4 w-4" />
                )}
                {isLoading ? 'Generating...' : 'Suggest Scenario'}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-4">
          {isLoading && (
            <div className="flex items-center justify-center p-8 rounded-lg border border-dashed border-border">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <p className="ml-3 text-lg text-foreground/80">Finding the perfect scenario for you...</p>
            </div>
          )}
          {error && (
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          {suggestion && (
            <Card className="shadow-lg bg-secondary">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Sparkles className="mr-2 h-6 w-6 text-accent" />
                  AI Scenario Suggestion
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg text-foreground">Suggested Scenario:</h4>
                  <p className="text-foreground/90">{suggestion.scenarioSuggestion}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-foreground">Reasoning:</h4>
                  <p className="text-foreground/90">{suggestion.reasoning}</p>
                </div>
                 <p className="text-sm text-muted-foreground italic">
                    This is an AI-generated suggestion. Our team will work with you to refine and customize the perfect scenario during your demo and onboarding.
                  </p>
              </CardContent>
            </Card>
          )}
          {!isLoading && !suggestion && !error && (
             <div className="flex flex-col items-center justify-center p-8 rounded-lg border border-dashed border-border h-full min-h-[200px] text-center">
              <Lightbulb className="h-12 w-12 text-muted-foreground mb-4" />
              <p className="text-lg text-muted-foreground">Your personalized scenario suggestion will appear here.</p>
            </div>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
