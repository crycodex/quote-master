const steps = [
  {
    number: "01",
    title: "Elige el servicio",
    description: "Web, App Móvil, Backend, IA, Marketing o Personalizado.",
  },
  {
    number: "02",
    title: "Configura opciones",
    description: "Plataforma, funcionalidades, extras y plan de soporte.",
  },
  {
    number: "03",
    title: "Revisa el desglose",
    description: "Costos únicos, recurrentes, IVA y total calculado automáticamente.",
  },
  {
    number: "04",
    title: "Exporta y comparte",
    description: "Genera un PDF profesional listo para enviar a tu cliente.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-secondary/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block neo-card px-4 py-1.5 text-sm font-semibold font-heading">
            Cómo Funciona
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl">
            De idea a cotización en 4 pasos
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-6 border-t-2 border-dashed border-muted-foreground/30 z-10" />
              )}
              <div className="neo-card p-6 h-full">
                <div className="neo-card-accent w-12 h-12 flex items-center justify-center font-heading font-bold text-lg mb-4">
                  {step.number}
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
