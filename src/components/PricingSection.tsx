import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const basicFeatures = [
  { text: "Access to the Escucha WhatsApp chatbot", included: true },
  { text: "Daily conscious check-in message (optional)", included: true },
  { text: "Conscious journaling via text", included: true },
  { text: "Human, empathetic responses", included: true },
  { text: "Natural use of your name", included: true },
  { text: "Short mindfulness micro-practices (text)", included: true },
  { text: "Calm, non-judgmental tone", included: true },
  { text: "Cancel anytime", included: true },
  { text: "Audio or guided meditations", included: false },
  { text: "Nature sounds", included: false },
  { text: "Advanced personalization", included: false },
];

const premiumFeatures = [
  { text: "Everything in Basic Plan", included: true, highlight: true },
  { text: "Guided meditations with voice (2-6 min)", included: true },
  { text: "Contextual nature sounds", included: true },
  { text: "Higher level of personalization", included: true },
  { text: "Context-aware mindfulness practices", included: true },
  { text: "Night & sleep support", included: true },
  { text: "Deeper conversational context", included: true },
  { text: "User preferences for audio", included: true },
  { text: "Priority access to new features", included: true },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-gradient-calm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-4">
            Choose Your Path
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Start with what feels right. Upgrade anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-serif font-medium text-foreground mb-2">Basic</h3>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl font-semibold text-primary">€9.99</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {basicFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  {feature.included ? (
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  ) : (
                    <X className="w-5 h-5 text-muted-foreground/50 flex-shrink-0 mt-0.5" />
                  )}
                  <span className={feature.included ? "text-foreground/80" : "text-muted-foreground/50"}>
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>

            <Button 
              variant="outline" 
              className="w-full py-6 text-lg border-primary text-primary hover:bg-secondary"
            >
              Start Basic
            </Button>
          </div>

          {/* Premium Plan */}
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 shadow-lg relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-leaf text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
              Most Popular
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-serif font-medium mb-2">Premium</h3>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl font-semibold">€19.99</span>
                <span className="text-primary-foreground/80">/month</span>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {premiumFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${feature.highlight ? "text-leaf" : "text-primary-foreground"}`} />
                  <span className={feature.highlight ? "font-medium text-leaf" : "text-primary-foreground/90"}>
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>

            <Button 
              className="w-full py-6 text-lg bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Start Premium
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
