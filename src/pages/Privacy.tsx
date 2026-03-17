import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12 lg:py-24">
        <div className="max-w-4xl mx-auto neo-card p-8">
          <h1 className="text-4xl font-heading font-black mb-6">Política de Privacidad</h1>
          
          <div className="space-y-6 text-muted-foreground prose prose-slate">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Introducción</h2>
              <p>
                Bienvenido a Scope IT. Respetamos su privacidad y estamos comprometidos a proteger sus datos personales. Esta política de privacidad le informará sobre cómo cuidamos sus datos personales cuando visita nuestro sitio web y utiliza nuestra aplicación móvil de cotizaciones.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Los datos que recopilamos sobre usted</h2>
              <p>
                Podemos recopilar, usar, almacenar y transferir diferentes tipos de datos personales sobre usted, que hemos agrupado de la siguiente manera:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><strong>Datos de identidad:</strong> incluye nombre, apellido, o identificadores similares.</li>
                <li><strong>Datos de contacto:</strong> incluye dirección de facturación, dirección de correo electrónico y números de teléfono.</li>
                <li><strong>Datos técnicos:</strong> incluye dirección de protocolo de internet (IP), sus datos de inicio de sesión, tipo y versión del navegador, configuración de zona horaria y ubicación.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Cómo usamos sus datos personales</h2>
              <p>
                Solo usaremos sus datos personales cuando la ley nos lo permita. Más comúnmente, usaremos sus datos personales para gestionar su cuenta, procesar sus cotizaciones y brindarle el servicio que ha solicitado.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Seguridad de los datos</h2>
              <p>
                Hemos implementado medidas de seguridad apropiadas para evitar que sus datos personales se pierdan accidentalmente, se usen o se acceda a ellos de manera no autorizada, se alteren o se divulguen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Contacto</h2>
              <p>
                Si tiene alguna pregunta sobre esta política de privacidad, contáctenos directamente a través de los enlaces disponibles.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
