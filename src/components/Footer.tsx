import React from 'react';
import {
  Anchor,
  Facebook,
  Instagram,
  Mail,
  MessageSquare,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Anchor className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Vientos-Franco</span>
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              Escuela náutica con cursos completos para todos los niveles. Viví
              la libertad de navegar acompañado por instructores con experiencia
              y embarcaciones listas para zarpar.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=100063646565996"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-2 rounded-lg hover:bg-slate-700 transition-colors duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/vientofranco/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-2 rounded-lg hover:bg-slate-700 transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/5491158242389?text=Hola%2C%20quiero%20más%20información"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-2 rounded-lg hover:bg-slate-700 transition-colors duration-200"
              >
                <MessageSquare className="h-5 w-5" />
              </a>
              <a
                href="mailto:mpachiani@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-2 rounded-lg hover:bg-slate-700 transition-colors duration-200"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Cursos</h3>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Iniciación a la vela
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Navegación costera
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Charter sin patrón
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Crucero avanzado
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Navegación en mar abierto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-slate-300">
              <li>(+54 9) 11 28542389</li>
              <li>info@vientofranco.com</li>
              <li>Camino de la Ribera 3314</li>
              <li>Club Náutico San Martín Punta Chica</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2025 Vientos-Franco. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
            >
              Política de privacidad
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
            >
              Términos y condiciones
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
            >
              Exención de responsabilidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;