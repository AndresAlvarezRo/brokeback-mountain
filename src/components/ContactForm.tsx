import React, { useState } from 'react';
import { Send, User, Mail, MessageSquare, Calendar } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', phone: '', course: '', message: '' });
    alert('Gracias por tu mensaje! Nos comunicaremos con vos en la mayor brevedad');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            ¡Contactanos!
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            ¿Querés empezar a navegar? Mandanos un mensaje y vemos juntos qué curso es el mejor para vos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulario */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nombre Completo"
                    required
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Correo Electrónico"
                    required
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Número de Teléfono"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none bg-white"
                  >
                    <option value="">Seleccioná el Curso para vos!</option>
                    <option value="basic-sailing">Conductor Náutico</option>
                    <option value="coastal-cruising">Timonel de Yate</option>
                    <option value="bareboat-charter">Patrón de Yate</option>
                    <option value="advanced-cruising">Conductor Avanzado</option>
                    <option value="offshore-passage">Curso de Navegación Offshore</option>
                  </select>
                </div>
              </div>

              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Contanos más sobre lo que buscás aprender..."
                  rows={5}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-[1.02] shadow-lg"
              >
                <Send className="h-5 w-5" />
                <span>Enviar mensaje</span>
              </button>
            </form>
          </div>

          {/* Info adicional */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">¿Por qué elegir Vientos-Franco?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-300 rounded-full mt-2"></div>
                  <p>Instructores certificados y con amplia experiencia en navegación a vela</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-300 rounded-full mt-2"></div>
                  <p>Flota moderna y en excelente estado, lista para zarpar</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-300 rounded-full mt-2"></div>
                  <p>Clases reducidas para una atención personalizada</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-300 rounded-full mt-2"></div>
                  <p>Horarios flexibles, incluso fines de semana</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Respuesta rápida</h3>
              <p className="text-slate-600 mb-6">
                Respondemos a todas las consultas dentro de las 24 horas. Si es algo urgente, no dudes en llamarnos directamente.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-slate-700">Atención los 7 días de la semana</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-slate-700">Contacto de emergencia disponible</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
