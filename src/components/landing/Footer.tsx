import { Zap } from "lucide-react"; 
import logo from "@/assets/icon.png";

const Footer = () => {
  return (
    <footer className="py-10 neo-border border-b-0 border-l-0 border-r-0">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <a href="/" className="flex items-center gap-2 font-heading font-bold text-foreground text-base hover:opacity-80 transition-opacity">
          <img src={logo} alt="Logo" className="h-12  rounded-lg bg-primary flex items-center justify-center neo-border neo-shadow" />
          Scope IT
        </a>
        <div className="flex items-center gap-6 font-heading">
          <a href="/#features" className="hover:text-foreground transition-colors">Características</a>
          <a href="/#how-it-works" className="hover:text-foreground transition-colors">Cómo Funciona</a>
          <a href="/#pricing" className="hover:text-foreground transition-colors">Precios</a>
          <a href="/policy" className="hover:text-foreground transition-colors">Políticas</a>
          <a href="/privacy" className="hover:text-foreground transition-colors">Privacidad</a>
        </div>
        <div>© 2026 Scope IT. Todos los derechos reservados.</div>
      </div>
    </footer>
  );
};

export default Footer;
