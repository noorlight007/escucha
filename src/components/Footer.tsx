import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-muted/50 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <img src={logo} alt="Escucha" className="h-12" />
          
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Escucha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
