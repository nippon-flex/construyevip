// src/app/page.tsx

export default function HomePage() {
  return (
    // Contenedor principal que ocupa toda la pantalla y centra el contenido
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white p-4">
      <div className="text-center space-y-6">
        {/* Título principal de la app */}
        <h1 className="text-6xl font-bold tracking-tight text-yellow-400">
          ConstruyeVIP
        </h1>

        {/* Subtítulo que explica qué es */}
        <p className="text-xl text-gray-300 max-w-md mx-auto">
          Servicios de construcción y reparación de élite para tu hogar.
        </p>

        {/* Botón de llamada a la acción */}
        <button className="mt-8 px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-yellow-300 transition-colors">
          Próximamente
        </button>
      </div>
    </main>
  );
}