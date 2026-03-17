import {
  Globe,
  Smartphone,
  Server,
  Brain,
  Megaphone,
  FileText,
  Calculator,
  Palette,
} from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Desarrollo Web",
    description: "Cotiza sitios web con tiers Basic, Professional y Enterprise.",
    accent: false,
  },
  {
    icon: Smartphone,
    title: "Apps Móviles",
    description: "Play Store, App Store o ambas. Calcula el costo exacto.",
    accent: true,
  },
  {
    icon: Server,
    title: "Backend & APIs",
    description: "APIs REST, microservicios y arquitecturas cloud.",
    accent: false,
  },
  {
    icon: Brain,
    title: "Automatización IA",
    description: "Proyectos de inteligencia artificial y machine learning.",
    accent: false,
  },
  {
    icon: Megaphone,
    title: "Marketing Digital",
    description: "Redes sociales, ads, email marketing y contenido.",
    accent: true,
  },
  {
    icon: FileText,
    title: "PDF Profesional",
    description: "Nota de venta con desglose completo, IVA y total.",
    accent: false,
  },
  {
    icon: Calculator,
    title: "Cálculo Automático",
    description: "Multiplicadores, features, extras y costos recurrentes.",
    accent: true,
  },
  {
    icon: Palette,
    title: "Personalizable",
    description: "Configura servicios, precios y datos de tu negocio.",
    accent: false,
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block neo-card-accent px-4 py-1.5 text-sm font-semibold font-heading">
            Características
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl">
            Todo lo que necesitas para cotizar
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Desde desarrollo de software hasta marketing digital, Scope IT cubre todos los servicios que ofreces.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`p-6 rounded-lg neo-hover ${
                feature.accent ? "neo-card-accent" : "neo-card"
              }`}
            >
              <feature.icon className="w-8 h-8 mb-4 text-primary" />
              <h3 className="font-heading font-semibold text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
