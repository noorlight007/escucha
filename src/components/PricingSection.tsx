import { Check, X, Gift, Leaf, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const trialFeatures = [
  "Chat completo",
  "Rutas guiadas",
  "Audio, meditaciones y sonidos",
  "Revisión diaria",
  "Cancelación en 1 clic",
];

const rootFeatures = [
  "Prácticas diarias por texto",
  "Seguimiento emocional opcional",
  "Micro-audios",
  "Sin apps, sin distracciones",
];

const ritualFeatures = [
  "Meditaciones por voz (2–6 min)",
  "Sonidos naturales para foco y descanso",
  "Rutas exclusivas para sueño, foco, calma y más",
  "Revisión profunda por audio",
  "Contenido nuevo mensual",
];

const comparisonFeatures = [
  { name: "Acceso completo al chat", trial: true, root: true, ritual: true },
  { name: "Rutas guiadas", trial: true, root: true, ritual: true },
  { name: "Revisión diaria", trial: true, root: true, ritual: true },
  { name: "Micro-audios", trial: true, root: true, ritual: true },
  { name: "Meditaciones por voz", trial: true, root: false, ritual: true },
  { name: "Sonidos naturales", trial: true, root: false, ritual: true },
  { name: "Personalización emocional", trial: true, root: false, ritual: true },
  { name: "Rutas exclusivas mensuales", trial: true, root: false, ritual: true },
  { name: "Revisión emocional por audio", trial: true, root: false, ritual: true },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-gradient-calm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-3 uppercase tracking-wide text-sm">
            Planes y precios
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-4">
            Empieza gratis. Profundiza cuando lo sientas.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Disfruta de todo ESCUCHA durante 7 días, sin pagar nada. Luego, elige si quieres seguir acompañado/a.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-16">
          {/* Free Trial */}
          <div className="relative bg-card rounded-2xl p-6 lg:p-8 border border-border-card card-hover-lg flex flex-col">
            {/* Header pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full accent-tint-bg border border-accent/20 mb-5 w-fit">
              <span className="text-sm font-medium text-primary">Prueba gratuita</span>
            </div>

            {/* Icon + Title */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-secondary">
                <Gift className="w-5 h-5 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">7 días completos</h3>
            </div>

            <p className="text-muted-foreground text-sm mb-6">
              Activa tu acceso total a todas las funciones de ESCUCHA, sin compromiso.
            </p>

            <ul className="space-y-3 mb-8 flex-grow">
              {trialFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <Button className="w-full py-5 text-base bg-primary text-primary-foreground hover:bg-primary/90">
              Probar 7 días gratis
            </Button>
          </div>

          {/* Root Plan */}
          <div className="relative bg-card rounded-2xl p-6 lg:p-8 border border-accent shadow-lg ring-2 ring-accent/20 card-hover-lg flex flex-col">
            {/* Popular badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-accent text-accent-foreground">
                Most Popular
              </span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full accent-tint-bg border border-accent/20 mb-5 w-fit">
              <span className="text-sm font-medium text-leaf">Plan Raíz</span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-secondary">
                <Leaf className="w-5 h-5 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Raíz</h3>
            </div>

            <div className="mb-4">
              <span className="text-4xl font-bold text-foreground">€9.99</span>
              <span className="text-muted-foreground text-sm"> /mes</span>
            </div>

            <p className="text-muted-foreground text-sm mb-6">
              Tu experiencia premium de bienestar guiado:
            </p>

            <ul className="space-y-3 mb-8 flex-grow">
              {rootFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <Button variant="outline" className="w-full py-5 text-base border-primary text-primary hover:bg-primary">
              Continuar con Plan Raíz
            </Button>
          </div>

          {/* Ritual Plan (Popular) */}
          <div className="relative bg-card rounded-2xl p-6 lg:p-8 border border-border-card card-hover-lg flex flex-col">
            

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full accent-tint-bg border border-accent/20 mb-5 w-fit">
              <span className="text-sm font-medium text-foreground">Plan Ritual</span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-accent/10">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Ritual</h3>
            </div>

            <div className="mb-4">
              <span className="text-4xl font-bold text-foreground">€19.99</span>
              <span className="text-muted-foreground text-sm"> /mes</span>
            </div>

            <p className="text-muted-foreground text-sm mb-6">
              Tu experiencia premium de bienestar guiado:
            </p>

            <ul className="space-y-3 mb-8 flex-grow">
              {ritualFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <Button className="w-full py-5 text-base bg-primary text-primary-foreground hover:bg-primary/90">
              Elegir Plan Ritual
            </Button>
          </div>
        </div>


        {/* Comparison Chart */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-xl font-serif font-medium text-foreground text-center mb-8">
            📊 Tabla comparativa
          </h3>
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="text-left py-4 px-4 text-sm font-medium text-foreground">Funcionalidad</th>
                    <th className="text-center py-4 px-4 text-sm font-medium text-foreground">Prueba 7 días</th>
                    <th className="text-center py-4 px-4 text-sm font-medium text-foreground">Plan Raíz</th>
                    <th className="text-center py-4 px-4 text-sm font-medium text-foreground">Plan Ritual</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, index) => (
                    <tr key={index} className="border-b border-border/50 last:border-b-0">
                      <td className="py-3 px-4 text-sm text-foreground/80">{feature.name}</td>
                      <td className="py-3 px-4 text-center">
                        {feature.trial ? (
                          <Check className="w-5 h-5 text-primary mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground/50 mx-auto" />
                        )}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {feature.root ? (
                          <Check className="w-5 h-5 text-primary mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground/50 mx-auto" />
                        )}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {feature.ritual ? (
                          <Check className="w-5 h-5 text-primary mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground/50 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-muted/20">
                    <td className="py-4 px-4 text-sm font-medium text-foreground">Precio mensual</td>
                    <td className="py-4 px-4 text-center text-sm font-medium text-primary">€0</td>
                    <td className="py-4 px-4 text-center text-sm font-medium text-foreground">€9.99</td>
                    <td className="py-4 px-4 text-center text-sm font-medium text-foreground">€19.99</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Legal Note */}
        <p className="text-center text-sm text-muted-foreground max-w-2xl mx-auto">
          ESCUCHA no sustituye terapia ni ofrece soporte clínico. Puedes darte de baja en cualquier momento con solo escribir “STOP” en el chat.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
