// src/app/solicitar/page.tsx

'use client';

import { useState, useEffect, ChangeEvent } from 'react';
import { useSearchParams } from 'next/navigation';

export default function SolicitarPage() {
  const searchParams = useSearchParams();
  const servicioInicial = searchParams.get('servicio') || '';

  const [formData, setFormData] = useState({
    servicio: servicioInicial,
    descripcion: '',
    direccion: '',
    nombre: '',
    telefono: '',
    urgencia: 'normal',
  });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false); // Nuevo estado para el botón

  useEffect(() => {
    setFormData(prev => ({ ...prev, servicio: servicioInicial }));
  }, [servicioInicial]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const imageFile = e.target.files[0];
      const imageUrl = URL.createObjectURL(imageFile);
      setSelectedImage(imageUrl);
    }
  };

  // Función actualizada para enviar datos a la API
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true); // Mostrar estado de carga

    try {
      const response = await fetch('/api/solicitudes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Enviamos los datos del formulario
      });

      if (!response.ok) {
        throw new Error('Error al enviar la solicitud');
      }

      const result = await response.json();
      alert('¡Solicitud enviada con éxito! Un profesional VIP te contactará pronto.');
      console.log('Respuesta del servidor:', result);

      // Limpiar el formulario después de enviar
      setFormData({
        servicio: '',
        descripcion: '',
        direccion: '',
        nombre: '',
        telefono: '',
        urgencia: 'normal',
      });
      setSelectedImage(null);

    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un problema al enviar tu solicitud. Por favor, intenta de nuevo.');
    } finally {
      setIsLoading(false); // Ocultar estado de carga
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black py-16 px-4">
      <div className="container mx-auto max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-yellow-400 mb-4">
          Solicita tu Servicio VIP
        </h1>
        <p className="text-center text-gray-300 text-lg mb-12">
          Servicios de élite en Quito y todo Ecuador. Adjunta una foto para mayor claridad.
        </p>

        <form onSubmit={handleSubmit} className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg shadow-2xl p-8 space-y-6 border border-gray-700">
          
          <div>
            <label htmlFor="servicio" className="block text-sm font-medium text-gray-300 mb-2">Tipo de Servicio</label>
            <select id="servicio" name="servicio" value={formData.servicio} onChange={handleChange} required className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all">
              <option value="">Selecciona un servicio</option>
              <option value="Plomería">Plomería</option>
              <option value="Electricidad">Electricidad</option>
              <option value="Albañilería">Albañilería</option>
              <option value="Carpintería">Carpintería</option>
              <option value="Pintura">Pintura</option>
              <option value="Aire Acondicionado">Aire Acondicionado</option>
              <option value="Soluciones Integrales">Soluciones Integrales</option>
            </select>
          </div>

          <div>
            <label htmlFor="descripcion" className="block text-sm font-medium text-gray-300 mb-2">Describe lo que necesitas</label>
            <textarea id="descripcion" name="descripcion" rows={4} value={formData.descripcion} onChange={handleChange} required className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all" placeholder="Ej: Tengo una fuga de agua bajo el fregadero de la cocina..." />
          </div>

          <div>
            <label htmlFor="imagen" className="block text-sm font-medium text-gray-300 mb-2">Adjunta una foto (opcional)</label>
            <input type="file" id="imagen" name="imagen" accept="image/*" onChange={handleImageChange} className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-yellow-400 file:text-gray-900 hover:file:bg-yellow-300 cursor-pointer" />
            {selectedImage && (
              <div className="mt-4">
                <p className="text-sm text-gray-400 mb-2">Vista previa:</p>
                <img src={selectedImage} alt="Vista previa" className="h-48 w-auto object-cover rounded-lg border border-gray-600" />
              </div>
            )}
          </div>

          <div>
            <label htmlFor="direccion" className="block text-sm font-medium text-gray-300 mb-2">Dirección del Servicio</label>
            <input type="text" id="direccion" name="direccion" value={formData.direccion} onChange={handleChange} required className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all" placeholder="Ej: Av. Amazonas N34-456 y La Niña, Quito" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-300 mb-2">Tu Nombre</label>
              <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all" placeholder="Carlos Pérez" />
            </div>
            <div>
              <label htmlFor="telefono" className="block text-sm font-medium text-gray-300 mb-2">Tu Teléfono</label>
              <input type="tel" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} required className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all" placeholder="+593 2 234 5678" />
            </div>
          </div>
          
          <div>
            <label htmlFor="urgencia" className="block text-sm font-medium text-gray-300 mb-2">¿Con qué urgencia lo necesitas?</label>
            <select id="urgencia" name="urgencia" value={formData.urgencia} onChange={handleChange} className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all">
              <option value="normal">Cuando sea posible</option>
              <option value="esta_semana">Esta semana</option>
              <option value="urgente">¡Es urgente!</option>
            </select>
          </div>

          {/* Botón de Envío con estado de carga */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 px-4 bg-yellow-400 text-gray-900 font-bold text-lg rounded-lg shadow-xl hover:bg-yellow-300 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Enviando...' : 'Solicitar Servicio Ahora'}
          </button>
        </form>
      </div>
    </section>
  );
}