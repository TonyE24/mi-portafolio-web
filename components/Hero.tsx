import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col items-center justify-center min-h-[90vh] px-4 text-center">
      <div className="relative w-32 h-32 mb-8 overflow-hidden rounded-full border-4 border-gray-200 dark:border-gray-800">
        {/* Placeholder for profile image - using Next.js logo for now */}
        <Image
          src="/profile.png"
          alt="Foto de perfil de Raul Elias"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
        Hola, soy <span className="text-blue-600 dark:text-blue-400">Raul Elias</span>
      </h1>
      
      <p className="max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300 mb-10">
        Soy un desarrollador web apasionado por crear experiencias digitales increíbles y
        me especializo en construir aplicaciones modernas, rápidas y accesibles.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Link 
          href="#projects"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-colors"
        >
          Ver Mis Proyectos
        </Link>
        <Link 
          href="#contact"
          className="bg-transparent border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-zinc-800 px-6 py-3 rounded-full font-semibold transition-colors"
        >
          Contáctame
        </Link>
      </div>
    </section>
  );
}
