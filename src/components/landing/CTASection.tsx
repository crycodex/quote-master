import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/40">
      <div className="container mx-auto px-4">
        <div className="neo-card-accent p-10 md:p-16 text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary neo-border neo-shadow">
            <Zap className="w-6 h-6 text-primary-foreground" />
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl">
            Deja de calcular a mano
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-lg">
            Descarga Scope IT y genera tu primera cotización profesional en menos de 5 minutos.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Button variant="default" size="xl">
              Google Play
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="xl">
              App Store
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
