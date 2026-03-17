import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm neo-border border-t-0 border-l-0 border-r-0">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-2 font-heading font-bold text-xl">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center neo-border neo-shadow">
            <Zap className="w-4 h-4 text-primary-foreground" />
          </div>
          Scope IT
        </div>
        <div className="hidden md:flex items-center gap-8 font-heading text-sm font-medium">
          <a href="#features" className="hover:text-primary transition-colors">Características</a>
          <a href="#how-it-works" className="hover:text-primary transition-colors">Cómo Funciona</a>
          <a href="#pricing" className="hover:text-primary transition-colors">Precios</a>
        </div>
        <Button variant="hero" size="sm">
          Descargar App
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
