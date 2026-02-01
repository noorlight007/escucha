import { MessageCircle, Clock, Lock } from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "Sin apps nuevas",
    description: "Funciona en WhatsApp. Lo que ya usas cada día."
  },
  {
    icon: Clock,
    title: "Empieza en 10 segundos",
    description: "Clic. Chat. Respirar. Así de fácil."
  },
  {
    icon: Lock,
    title: "Privado y seguro",
    description: "Tus mensajes no se comparten. Puedes darte de baja con “STOP” cuando quieras."
  }
];

const WhyWhatsApp = () => {
  return (
    <section id="why-whatsapp" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-3 uppercase tracking-wide text-sm">
            ¿Por qué WhatsApp?
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-6">
            Bienestar emocional sin fricción
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            A diferencia de otras apps, ESCUCHA vive dentro de WhatsApp. Nada que descargar, ningún perfil que crear.
            Solo tú, tu chat, y una guía clara cuando la necesites.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-2xl bg-card hover:shadow-lg transition-all duration-300 border border-border/50"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-medium text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWhatsApp;
