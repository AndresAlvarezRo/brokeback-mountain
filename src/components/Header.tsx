import React from 'react';
import { Anchor, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Anchor className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-slate-900">Vientos-Franco</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-slate-700 hover:text-blue-600 transition-colors duration-200">Inicio</a>
            <a href="#courses" className="text-slate-700 hover:text-blue-600 transition-colors duration-200">Cursos</a>
            <a href="#about" className="text-slate-700 hover:text-blue-600 transition-colors duration-200">Nosotros</a>
            <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors duration-200">Contacto</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
              Reservá tu lugar
            </button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-slate-700 hover:text-blue-600 transition-colors duration-200">Inicio</a>
              <a href="#courses" className="text-slate-700 hover:text-blue-600 transition-colors duration-200">Cursos</a>
              <a href="#about" className="text-slate-700 hover:text-blue-600 transition-colors duration-200">Nosotros</a>
              <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors duration-200">Contacto</a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 self-start">
                Reservá tu lugar
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
