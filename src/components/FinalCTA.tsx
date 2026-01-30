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
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-medium text-white mb-6">
              Your inner world deserves attention.
            </h2>

            <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-10">
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
      </div>
    </section>
  );
};

export default FinalCTA;
