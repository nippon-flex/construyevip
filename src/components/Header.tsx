// src/components/Header.tsx

import Link from 'next/link';

export default function Header() {
  return (
    // Contenedor principal del header
    <header className="bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo/Nombre de la App */}
        <Link href="/" className="text-2xl font-bold text-yellow-400 no-underline">
          ConstruyeVIP
        </Link>

        {/* Navegación */}
        <nav>
          <ul className="flex space-x-6 items-center">
            <li>
              <Link href="/servicios" className="text-gray-300 hover:text-white no-underline">
                Servicios
              </Link>
            </li>
            <li>
              <Link href="/nosotros" className="text-gray-300 hover:text-white no-underline">
                Nosotros
              </Link>
            </li>
            <li>
              {/* Botón de Login/Registro */}
              <button className="px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded hover:bg-yellow-300 transition-colors">
                Iniciar Sesión
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}