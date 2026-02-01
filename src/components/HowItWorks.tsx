import { MessageCircle, Heart, Moon } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Haz clic y abre el chat",
    description:
      "Elige cómo te sientes: estrés, sueño, bloqueo, o simplemente pausa.",
  },
  {
    icon: Heart,
    title: "Recibe guía inmediata",
    description:
      "ESCUCHA responde con prácticas breves adaptadas a lo que necesitas.",
  },
  {
    icon: Moon,
    title: "Vuelve cada día, si quieres",
    description:
      "Puedes crear una rutina diaria o usarlo cuando lo necesites.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-3 uppercase tracking-wide text-sm">
            Cómo funciona
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-4">
            ¿Cómo funciona ESCUCHA?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Un espacio personal de regulación emocional, directo a tu bolsillo. Solo haz clic y empieza.
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
