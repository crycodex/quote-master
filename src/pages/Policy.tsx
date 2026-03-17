import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const Policy = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12 lg:py-24">
        <div className="max-w-4xl mx-auto neo-card p-8">
          <h1 className="text-4xl font-heading font-black mb-6">Términos y Políticas de Uso</h1>
          
          <div className="space-y-6 text-muted-foreground prose prose-slate">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Aceptación de los Términos</h2>
              <p>
                Al acceder y utilizar Scope IT, usted acepta estar sujeto a estos términos y políticas de uso. Si no está de acuerdo con alguna parte de los términos, no podrá utilizar nuestro servicio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Uso del Servicio</h2>
              <p>
                Scope IT proporciona una plataforma para la generación de cotizaciones. Usted es responsable de la exactitud de la información que introduce en la plataforma y de las cotizaciones que genera y envía a sus clientes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Propiedad Intelectual</h2>
              <p>
                El servicio y su contenido original, características y funcionalidad son y seguirán siendo propiedad exclusiva de Scope IT y sus licenciantes. El servicio está protegido por derechos de autor, marcas comerciales y otras leyes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Restricciones</h2>
              <p>
                Usted se compromete a no reproducir, duplicar, copiar, vender, revender o explotar ninguna parte del Servicio, el uso del Servicio o el acceso al Servicio sin nuestro permiso expreso por escrito.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Modificación de los Términos</h2>
              <p>
                Nos reservamos el derecho, a nuestra sola discreción, de modificar o reemplazar estos términos en cualquier momento. Al continuar accediendo o utilizando nuestro Servicio después de que esas revisiones se hagan efectivas, usted acepta estar sujeto a los términos revisados.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Policy;
