import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-calm pt-20">
      <div className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-foreground mb-6 animate-fade-in-up opacity-0">
            
            <span className="block text-primary">Tu calma está a un mensaje de distancia.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in-up opacity-0 animation-delay-200">
            ESCUCHA te guía con presencia cálida y sin fricción. Solo respira, escribe y siente la diferencia.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0 animation-delay-400">
            <Button 
              size="lg"
              onClick={() => scrollToSection("pricing")}
              className="bg-primary hover:bg-forest-light text-primary-foreground px-8 py-6 text-lg"
            >
              Abrir en WhatsApp
            </Button>
          </div>
          <p className="text-sm animate-fade-in-up opacity-0 animation-delay-600 py-3">Gratis. Sin apps. Sin registros. Empieza en 10 segundos.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
