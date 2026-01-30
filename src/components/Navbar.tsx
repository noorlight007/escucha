import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[hsl(130,45%,22%)] via-[hsl(120,40%,30%)] to-[hsl(95,45%,35%)] backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <img src={logo} alt="Escucha" className="h-10 md:h-12 brightness-0 invert" />
          
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("how-it-works")}
              className="text-white/80 hover:text-white transition-colors font-medium"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection("pricing")}
              className="text-white/80 hover:text-white transition-colors font-medium"
            >
              Pricing
            </button>
          </div>

          <div className="flex items-center gap-3">
            <Button 
              variant="ghost"
              className="text-white/90 hover:text-white hover:bg-white/10 font-medium"
            >
              Login
            </Button>
            <Button 
              onClick={() => scrollToSection("pricing")}
              className="bg-white/95 hover:bg-white text-[hsl(130,45%,22%)] font-semibold px-6 shadow-md"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
