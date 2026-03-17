import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.png";

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-accent neo-border opacity-60 animate-float" />
      <div className="absolute bottom-32 right-20 w-14 h-14 rounded-lg bg-primary/20 neo-border opacity-40 animate-float" style={{ animationDelay: "1.5s" }} />
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="inline-flex items-center gap-2 neo-card-accent px-4 py-2 text-sm font-semibold font-heading">
              <Smartphone className="w-4 h-4" />
              Para freelancers y agencias
            </div>

            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight">
              Cotiza proyectos en{" "}
              <span className="relative inline-block">
                <span className="relative z-10">minutos</span>
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-accent/70 -z-0 rounded-sm" />
              </span>
              , no en horas.
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Genera cotizaciones profesionales para desarrollo de software y marketing digital. 
              Sin cálculos manuales, con PDF listo para tu cliente.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button variant="default" size="xl">
                Descargar Gratis
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="xl">
                Ver Demo
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                100% Offline
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                Android & iOS
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                Exporta PDF
              </div>
            </div>
          </div>

          {/* Right: Phone Mockup */}
          <div className="flex justify-center md:justify-end m-12">
            <div className="relative">
              <img
                src={heroMockup}
                alt="Scope IT app mostrando el constructor de cotizaciones"
                className="w-52 md:w-60 lg:w-72 animate-float drop-shadow-2xl rounded-lg"
              />
              {/* Floating stat cards */}
              <div className="absolute -left-8 top-1/3 neo-card p-3 text-center animate-float" style={{ animationDelay: "0.5s" }}>
                <div className="font-heading font-bold text-2xl text-primary">7</div>
                <div className="text-xs text-muted-foreground">Pasos</div>
              </div>
              <div className="absolute -right-4 bottom-1/4 neo-card-accent p-3 text-center animate-float" style={{ animationDelay: "1s" }}>
                <div className="font-heading font-bold text-2xl">PDF</div>
                <div className="text-xs">Al instante</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
