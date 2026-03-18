import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/icon.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm neo-border border-t-0 border-l-0 border-r-0">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2 font-heading font-bold text-xl hover:opacity-80 transition-opacity">
          <img src={logo} alt="Logo" className="h-12  rounded-lg bg-primary flex items-center justify-center neo-border neo-shadow" />
          Scope IT
        </Link>
        <div className="hidden md:flex items-center gap-8 font-heading text-sm font-medium">
          <Link to="/#features" className="hover:text-primary transition-colors">Características</Link>
          <Link to="/#how-it-works" className="hover:text-primary transition-colors">Cómo Funciona</Link>
          <Link to="/#pricing" className="hover:text-primary transition-colors">Precios</Link>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="hero" size="sm">
            Descargar App
          </Button>
          <a href="https://github.com/crycodex/scope_it" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="neo-border">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
