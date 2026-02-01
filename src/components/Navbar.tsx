import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  // Close on escape
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const linkClass =
    "relative text-white/90 text-sm font-medium transition-colors hover:text-white " +
    "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-white " +
    "after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100";

  const mobileLinkClass =
    "w-full text-left text-white/90 text-sm font-medium py-3 px-3 rounded-xl " +
    "hover:bg-white/10 hover:text-white transition";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[hsl(130,45%,22%)] via-[hsl(120,40%,30%)] to-[hsl(95,45%,35%)] backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <img src={logo} alt="Escucha" className="h-10 md:h-12 brightness-0 invert" />

          {/* Desktop / Large screens */}
          <div className="hidden lg:flex items-center gap-6">
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

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            {/* Desktop buttons */}
            <div className="hidden lg:flex items-center gap-2">
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

            {/* Mobile/Tablet hamburger */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white/90 hover:text-white hover:bg-white/10"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile/Tablet menu panel */}
        <div
          className={
            "lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out " +
            (open ? "max-h-96 opacity-100" : "max-h-0 opacity-0")
          }
        >
          <div className="mt-4 rounded-2xl border border-white/10 bg-black/10 backdrop-blur-md p-2">
            <button onClick={() => scrollToSection("why-whatsapp")} className={mobileLinkClass}>
              Por qué WhatsApp
            </button>
            <button onClick={() => scrollToSection("how-it-works")} className={mobileLinkClass}>
              Cómo funciona
            </button>
            <button onClick={() => scrollToSection("pricing")} className={mobileLinkClass}>
              Pricing
            </button>

            <div className="mt-2 grid grid-cols-2 gap-2 p-1">
              <Button
                variant="ghost"
                className="w-full text-white/90 hover:text-white hover:bg-white/10 font-medium"
              >
                Login
              </Button>
              <Button
                onClick={() => scrollToSection("pricing")}
                className="w-full bg-white/95 hover:bg-white text-[hsl(130,45%,22%)] font-semibold shadow-md"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Optional overlay close on outside click */}
      {open ? (
        <button
          aria-label="Cerrar"
          className="lg:hidden fixed inset-0 -z-10 cursor-default"
          onClick={() => setOpen(false)}
        />
      ) : null}
    </nav>
  );
};

export default Navbar;
