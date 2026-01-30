import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-6">
            Your inner world deserves attention.
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Start listening to yourself today. No judgment, no fixing — just a calm, 
            supportive presence whenever you need it.
          </p>
          <Button 
            size="lg"
            onClick={() => scrollToSection("pricing")}
            className="bg-primary hover:bg-forest-light text-primary-foreground px-10 py-6 text-lg"
          >
            Begin Your Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
