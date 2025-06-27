import React, { useState, useEffect } from 'react';
import { Waves, MapPin, Phone, Anchor, Wind, Compass } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const FloatingElement = ({
    children,
    delay = 0,
    duration = 3,
  }: {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
  }) => (
    <div
      className="absolute animate-bounce"
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    >
      {children}
    </div>
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fondo dinámico */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 ease-out"
        style={{
          backgroundImage: "url('/images/home_page.jpg')",
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) scale(1.1)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-slate-900/40 animate-pulse"></div>
      </div>

      {/* Elementos flotantes */}
      <FloatingElement delay={0} duration={4}>
        <div className="top-20 left-10 text-blue-300/30">
          <Anchor className="h-12 w-12" />
        </div>
      </FloatingElement>

      <FloatingElement delay={1} duration={5}>
        <div className="top-32 right-20 text-blue-200/20">
          <Wind className="h-16 w-16" />
        </div>
      </FloatingElement>

      <FloatingElement delay={2} duration={3.5}>
        <div className="bottom-40 left-20 text-blue-400/25">
          <Compass className="h-10 w-10" />
        </div>
      </FloatingElement>

      {/* Olas */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-500/20 to-transparent animate-pulse"></div>
        <svg className="absolute bottom-0 w-full h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,60 C300,120 600,0 900,60 C1050,90 1150,30 1200,60 L1200,120 L0,120 Z"
            fill="rgba(59, 130, 246, 0.1)"
            className="animate-pulse"
          />
        </svg>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="relative">
            <Waves className="h-16 w-16 text-blue-300 mx-auto mb-4 animate-spin" style={{ animationDuration: '8s' }} />
            <div className="absolute inset-0 h-16 w-16 mx-auto animate-ping">
              <Waves className="h-16 w-16 text-blue-400/50" />
            </div>
          </div>

          <h1
            className={`text-4xl md:text-6xl font-bold text-white mb-6 leading-tight transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <span className="inline-block hover:scale-110 transition-transform duration-300 cursor-default">
              Aprendé a navegar con
            </span>
            <span className="block text-blue-300 hover:text-blue-200 transition-colors duration-300 cursor-default">
              instructores con experiencia
            </span>
          </h1>

          <p
            className={`text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Comenzá tu aventura náutica con clases personalizadas, barcos modernos e instructores apasionados por el río.
          </p>
        </div>

        {/* Contacto */}
        <div
          className={`grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12 transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="group flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:rotate-1">
            <Phone className="h-6 w-6 text-blue-300 group-hover:animate-bounce" />
            <span className="text-white font-medium">(011) 1234-5678</span>
          </div>
          <div className="group flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:-rotate-1">
            <MapPin className="h-6 w-6 text-blue-300 group-hover:animate-bounce" />
            <span className="text-white font-medium">San Fernando, Buenos Aires</span>
          </div>
        </div>

        {/* Botón CTA */}
        <div
          className={`transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <button className="group relative bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl overflow-hidden">
            <span className="relative z-10 flex items-center space-x-2">
              <span>Empezá tu aventura</span>
              <Anchor className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </button>
        </div>

        {/* Estadísticas */}
        <div
          className={`mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto transition-all duration-1000 delay-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center group cursor-default">
            <div className="text-3xl font-bold text-blue-300 group-hover:scale-110 transition-transform duration-300">100+</div>
            <div className="text-blue-100 text-sm">Alumnos formados</div>
          </div>
          <div className="text-center group cursor-default">
            <div className="text-3xl font-bold text-blue-300 group-hover:scale-110 transition-transform duration-300">15+</div>
            <div className="text-blue-100 text-sm">Años de experiencia</div>
          </div>
          <div className="text-center group cursor-default">
            <div className="text-3xl font-bold text-blue-300 group-hover:scale-110 transition-transform duration-300">98%</div>
            <div className="text-blue-100 text-sm">Tasa de aprobación</div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
