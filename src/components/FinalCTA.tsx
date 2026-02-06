import generatedVideo from "@/assets/generated_video.mp4";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* Responsive video background */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          src={generatedVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        {/* Brightness/90 + optional darkening for readability */}
        <div className="absolute inset-0 brightness-90 bg-black/25" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-[70vh] md:min-h-screen flex items-center justify-center py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-medium text-white mb-6">
              Tu calma empieza hoy.
            </h1>

            <p className="text-lg md:text-xl lg:text-xl text-white/90 mb-3">
              No necesitas apps, ni registros, ni compromisos. Solo clic y escucha.
            </p>
            <p className="text-lg md:text-xl lg:text-xl text-white/90 mb-10">
              ESCUCHA te guía en menos de 2 minutos. Y puedes parar cuando quieras.
            </p>
            <Button
              size="lg"
              onClick={() => scrollToSection("pricing")}
              className="bg-primary hover:bg-forest-light text-primary-foreground px-5 py-8 text-lg"
            >
              <img width="48" height="48" src="https://img.icons8.com/color/144/whatsapp--v1.png" alt="whatsapp--v1"/> Abrir ESCUCHA en WhatsApp
            </Button>
            <p className="text-sm text-white animate-fade-in-up opacity-0 animation-delay-600 py-3">Gratis. Priv</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
