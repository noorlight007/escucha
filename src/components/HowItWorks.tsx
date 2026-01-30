import { MessageCircle, Heart, Moon } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Start a Conversation",
    description:
      "Message Escucha on WhatsApp whenever you need a moment of reflection. No appointments, no waiting.",
  },
  {
    icon: Heart,
    title: "Express Freely",
    description:
      "Share what's on your mind. Escucha responds with warmth, asking one gentle question to help you explore deeper.",
  },
  {
    icon: Moon,
    title: "Find Your Calm",
    description:
      "Receive personalized mindfulness practices, breathing exercises, or simply feel heard — whatever you need.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Your personal space for conscious reflection, available right in WhatsApp.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="
                group text-center p-8 rounded-2xl
                bg-white
                transition-all duration-300
                hover:bg-[#26592F]
              "
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center transition-colors duration-300 group-hover:bg-white/15">
                <step.icon className="w-8 h-8 text-primary transition-colors duration-300 group-hover:text-white" />
              </div>

              <h3 className="text-xl font-serif font-medium text-foreground mb-3 transition-colors duration-300 group-hover:text-white">
                {step.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed transition-colors duration-300 group-hover:text-white">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
