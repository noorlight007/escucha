import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Esto sustituye una terapia?",
    answer: "No. ESCUCHA no es un servicio clínico. Es un apoyo emocional cotidiano.",
  },
  {
    question: "¿Tengo que escribir mucho?",
    answer: "No. Puedes usar botones y respuestas guiadas. Tú eliges.",
  },
  {
    question: "¿Mis datos están protegidos?",
    answer: "Sí. Tu chat es privado. Cumplimos con RGPD. Puedes escribir “STOP” y salir cuando quieras.",
  },
  {
    question: "¿Hay contenido gratuito?",
    answer: "Sí. Puedes iniciar conversaciones sin pagar. Los planes desbloquean funciones adicionales.",
  },
  {
    question: "¿Puedo usarlo todos los días?",
    answer: "Claro. ESCUCHA está para ti cuando lo necesites, sin límite de uso.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground text-center mb-12">
            Preguntas frecuentes
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
