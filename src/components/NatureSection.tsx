import natureBackground from "@/assets/nature-background.png";

const NatureSection = () => {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${natureBackground})` }}
      />
      <div className="absolute inset-0 bg-foreground/20" />
      
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-primary-foreground mb-6 drop-shadow-lg">
          Find stillness in the noise.
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/90 drop-shadow-md">
          In a world that constantly demands your attention, Escucha offers a quiet refuge — 
          a space to reconnect with yourself.
        </p>
      </div>
    </section>
  );
};

export default NatureSection;
