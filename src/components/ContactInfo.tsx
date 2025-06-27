import React from 'react';
import { MapPin, Phone, Mail, Clock, Anchor, Wind } from 'lucide-react';

const ContactInfo = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Visitá Argentina
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Encontranos en las aguas más hermosas de Argentina, nuestro curso de navegación ofrece la mejor preparación para tu próxima aventura.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="text-center group">
            <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors duration-300">
              <MapPin className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Ubicación</h3>
            <p className="text-slate-600">
              Club Náutico San Martín Punta Chica<br />
              Camino de la Ribera 3314<br />
              Buenos Aires, Argentina 1644
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors duration-300">
              <Phone className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Teléfono & Correo</h3>
            <p className="text-slate-600">
              (+54 9) 11 2854-2389<br />
              mpachiani@gmail.com
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors duration-300">
              <Clock className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Horario</h3>
            <p className="text-slate-600">
              Lunes a Viernes: 8:00 - 20:00<br />
              Sábados y Domingos: 7:00 - 21:00<br />
              Emergencias: 24/7
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-3xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                ¡El clima perfecto para vos!
              </h3>
              <p className="text-slate-700 mb-6 text-lg leading-relaxed">
                Nuestra aventura comienza desde el momento en que soltamos amarras y el velero queda a merced de los elementos. De nuestra pericia depende la maniobra del barco, y de la experiencia y conocimiento del capitán, la planificación de la travesía. Sin embargo, las variables son infinitas y a cada momento pueden presentarse situaciones distintas por resolver, haciendo más sabrosa nuestra aventura. Si ya sos navegante, en Viento Franco podés ampliar tus conocimientos mediante la experiencia práctica. Y si te gustaría aprender o simplemente salir por placer, ¡comunicate con nosotros y no te pierdas la aventura de navegar!
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Wind className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-700">Vientos ideales: entre 28 y 37 km/h</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Anchor className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-700">Puerto protegido</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/vista-altamar.jpg"
                alt="Velero en navegación"
                className="rounded-2xl shadow-2xl w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-blue-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            ¿Listo para zarpar en esta aventura?
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            No lo pienses más: ¡el mejor momento para aprender a navegar es ahora! Te esperamos con instructores con mucha experiencia y buena onda, para que vivas el río como nunca antes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300">
              Agendá una visita
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              Descargá el folleto
            </button>
          </div>
        </div>
      </div> {/* <- ESTA línea cierra el div principal que faltaba */}
    </section>
  );
};

export default ContactInfo;
