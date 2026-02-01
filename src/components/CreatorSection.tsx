import juliaImage from "@/assets/julia-creator.png";

const CreatorSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-12 text-center">
          ¿Quién crea ESCUCHA?
        </h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            {/* Creator Image */}
            <div className="flex-shrink-0">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                <img 
                  src={juliaImage} 
                  alt="Julia, creator of ESCUCHA" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            
            {/* Text Content */}
            <div className="flex-1 text-center md:text-left space-y-5">
              <p className="text-foreground/80 leading-relaxed">
                Hola, soy <span className="font-medium text-foreground">Julia</span>, creadora de ESCUCHA. No soy terapeuta, pero llevo años explorando prácticas de mindfulness, escritura consciente y regulación emocional.
              </p>
              
              <p className="text-foreground/80 leading-relaxed">
                Mi intención es simple: ofrecer un espacio donde puedas pausar, sin juicios ni pantallas, cuando más lo necesites.
              </p>
              
              <p className="text-foreground/80 leading-relaxed">
                Este proyecto nace desde lo personal y lo comparto como un complemento — no como una solución mágica, sino como una presencia cálida, humana y accesible.
              </p>
              
              <p className="text-foreground font-medium italic border-l-4 border-primary/40 pl-4 mt-6">
                ESCUCHA no busca arreglarte. No es terapia. Es un ritual premium en tu bolsillo: te escucha, te guía y respeta tu ritmo.  
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorSection;
