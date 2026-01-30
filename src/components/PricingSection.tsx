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

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          {/* Basic Plan */}
          <div
            className="
              group rounded-2xl p-8 border border-border shadow-sm
              bg-card text-foreground
              transition-all duration-300
              hover:bg-primary hover:text-primary-foreground hover:shadow-lg
              flex flex-col h-full
            "
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-serif font-medium mb-2">Basic</h3>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl font-semibold text-primary transition-colors duration-300 group-hover:text-primary-foreground">
                  €9.99
                </span>
                <span className="text-muted-foreground transition-colors duration-300 group-hover:text-primary-foreground/80">
                  /month
                </span>
              </div>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {basicFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  {feature.included ? (
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                  ) : (
                    <X className="w-5 h-5 flex-shrink-0 mt-0.5 text-muted-foreground/50 transition-colors duration-300 group-hover:text-primary-foreground/40" />
                  )}
                  <span
                    className={
                      feature.included
                        ? "text-foreground/80 transition-colors duration-300 group-hover:text-primary-foreground/90"
                        : "text-muted-foreground/50 transition-colors duration-300 group-hover:text-primary-foreground/40"
                    }
                  >
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>

            <Button
              variant="outline"
              className="
                mt-auto w-full py-6 text-lg
                border-primary text-primary hover:bg-secondary
                transition-colors duration-300
                group-hover:border-primary-foreground group-hover:text-primary group-hover:bg-primary-foreground
                group-hover:hover:bg-primary-foreground/90
              "
            >
              Start Basic
            </Button>
          </div>

          {/* Premium Plan */}
          <div
            className="
              group rounded-2xl p-8 border border-border shadow-sm relative overflow-hidden
              bg-card text-foreground
              transition-all duration-300
              hover:bg-primary hover:text-primary-foreground hover:shadow-lg
              flex flex-col h-full
            "
          >
            <div
              className="
                absolute top-4 right-4 text-xs font-medium px-3 py-1 rounded-full
                bg-secondary text-foreground
                transition-colors duration-300
                group-hover:bg-primary-foreground group-hover:text-primary
              "
            >
              Most Popular
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-serif font-medium mb-2">Premium</h3>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl font-semibold text-primary transition-colors duration-300 group-hover:text-primary-foreground">
                  €19.99
                </span>
                <span className="text-muted-foreground transition-colors duration-300 group-hover:text-primary-foreground/80">
                  /month
                </span>
              </div>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {premiumFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                  <span
                    className={
                      feature.highlight
                        ? "font-medium text-foreground transition-colors duration-300 group-hover:text-primary-foreground"
                        : "text-foreground/80 transition-colors duration-300 group-hover:text-primary-foreground/90"
                    }
                  >
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>

            <Button
              className="
                mt-auto w-full py-6 text-lg
                bg-primary text-primary-foreground
                transition-colors duration-300
                group-hover:bg-primary-foreground group-hover:text-primary
                group-hover:hover:bg-primary-foreground/90
              "
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
