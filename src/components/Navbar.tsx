import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const linkClass =
    "relative text-white/90 text-sm font-medium transition-colors hover:text-white " +
    "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-white " +
    "after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[hsl(130,45%,22%)] via-[hsl(120,40%,30%)] to-[hsl(95,45%,35%)] backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <img src={logo} alt="Escucha" className="h-10 md:h-12 brightness-0 invert" />

          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection("why-whatsapp")} className={linkClass}>
              Por qué WhatsApp
            </button>
            <button onClick={() => scrollToSection("how-it-works")} className={linkClass}>
              Cómo funciona
            </button>
            <button onClick={() => scrollToSection("pricing")} className={linkClass}>
              Pricing
            </button>
          </div>

          <div className="flex items-center gap-2">
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
