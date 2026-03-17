import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Basic",
    multiplier: "1.0x",
    hosting: "$29/mes",
    features: ["Cotizaciones ilimitadas", "Exportar PDF", "Modo offline", "Catálogo base"],
    accent: false,
  },
  {
    name: "Professional",
    multiplier: "1.8x",
    hosting: "$79/mes",
    features: ["Todo en Basic", "Marketing digital", "Gestión de proyectos", "Catálogo personalizable"],
    accent: true,
  },
  {
    name: "Enterprise",
    multiplier: "3.0x",
    hosting: "$199/mes",
    features: ["Todo en Professional", "Multiplicadores avanzados", "Soporte prioritario", "Branding completo"],
    accent: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block neo-card-accent px-4 py-1.5 text-sm font-semibold font-heading">
            Tiers de Plataforma
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl">
            Escala según tu cliente
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Cada tier ajusta el multiplicador y el hosting para reflejar la complejidad real del proyecto.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`p-6 rounded-lg flex flex-col ${
                tier.accent ? "neo-card-accent" : "neo-card"
              }`}
            >
              {tier.accent && (
                <div className="neo-card px-3 py-1 text-xs font-semibold font-heading self-start mb-3">
                  Más popular
                </div>
              )}
              <h3 className="font-heading font-bold text-2xl">{tier.name}</h3>
              <div className="mt-2 mb-1 font-heading text-3xl font-bold text-primary">
                {tier.multiplier}
              </div>
              <div className="text-sm text-muted-foreground mb-6">
                Hosting desde {tier.hosting}
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button variant={tier.accent ? "default" : "outline"} className="w-full">
                Seleccionar
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
