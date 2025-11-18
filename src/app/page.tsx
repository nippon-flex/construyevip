// src/app/page.tsx

import Link from 'next/link';

export default function HomePage() {
  return (
    // Sección Hero: La primera impresión VIP
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fondo con un toque de elegancia */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black z-0"></div>
      
      {/* Contenido principal */}
      <div className="relative z-10 text-center px-4 space-y-8 max-w-4xl mx-auto">
        
        {/* Título con más impacto */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          <span className="block text-yellow-400">ConstruyeVIP</span>
          <span className="block text-white text-3xl md:text-5xl mt-2 font-light">
            Eleva tu Espacio
          </span>
        </h1>

        {/* Descripción más persuasiva */}
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          Expertos en construcción, remodelación y reparaciones de élite. 
          Calidad, discreción y profesionalismo para el hogar que mereces.
        </p>

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Link href="/solicitar" className="px-8 py-4 bg-yellow-400 text-gray-900 font-bold text-lg rounded-lg shadow-xl hover:bg-yellow-300 transition-all transform hover:scale-105">
            Solicitar Servicio
          </Link>
          <Link href="/servicios" className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-gray-900 transition-all">
            Ver Servicios
          </Link>
        </div>
      </div>
    </section>
  );
}