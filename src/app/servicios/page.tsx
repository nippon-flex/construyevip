// src/app/servicios/page.tsx

import Link from 'next/link';

// Lista de servicios que ofrecemos
const servicios = [
  {
    id: 1,
    titulo: 'Plomería',
    descripcion: 'Reparaciones de fugas, instalación de tuberías y desatascos.',
    icono: '🔧',
  },
  {
    id: 2,
    titulo: 'Electricidad',
    descripcion: 'Instalaciones, reparaciones y mantenimiento de sistemas eléctricos.',
    icono: '💡',
  },
  {
    id: 3,
    titulo: 'Albañilería',
    descripcion: 'Construcción de paredes, reparación de estructuras y acabados.',
    icono: '🧱',
  },
  {
    id: 4,
    titulo: 'Carpintería',
    descripcion: 'Diseño y fabricación de muebles a medida, instalación de puertas y ventanas.',
    icono: '🔨',
  },
  {
    id: 5,
    titulo: 'Pintura',
    descripcion: 'Pintura interior y exterior, preparación de superficies y acabados de alta calidad.',
    icono: '🎨',
  },
  {
    id: 6,
    titulo: 'Aire Acondicionado',
    descripcion: 'Instalación, mantenimiento y reparación de sistemas de climatización.',
    icono: '❄️',
  },
  {
    id: 7,
    titulo: 'Soluciones Integrales',
    descripcion: '¿Necesitas algo más? Proyectos personalizados que combinan varias especialidades o reparaciones únicas.',
    icono: '🧰',
  },
];

export default function ServiciosPage() {
  return (
    // Contenedor principal de la página
    <section className="min-h-screen bg-gray-900 text-white py-16 px-4">
      <div className="container mx-auto">
        
        {/* Título de la página */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-yellow-400 mb-4">
          Nuestros Servicios VIP
        </h1>
        <p className="text-center text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
          Soluciones integrales y de alta calidad para cada rincón de tu propiedad.
        </p>

        {/* Grid de tarjetas de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicios.map((servicio) => (
            <div key={servicio.id} className="bg-gray-800 rounded-lg shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300 border border-gray-700">
              
              {/* Icono y Título */}
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">{servicio.icono}</span>
                <h3 className="text-2xl font-semibold">{servicio.titulo}</h3>
              </div>
              
              {/* Descripción */}
              <p className="text-gray-300 mb-6">{servicio.descripcion}</p>
              
              {/* Botón de acción */}
              <Link href={`/solicitar?servicio=${servicio.titulo}`} className="block w-full text-center bg-yellow-400 text-gray-900 font-bold py-2 px-4 rounded hover:bg-yellow-300 transition-colors">
                Solicitar Ahora
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}