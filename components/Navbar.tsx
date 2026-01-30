import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-gray-100 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="shrink-0">
            <Link href="/" className="font-bold text-xl text-gray-900 dark:text-white">
              Mi Portafolio
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="#about" className="hover:bg-gray-100 dark:hover:bg-neutral-800 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Sobre Mí
              </Link>
              <Link href="#projects" className="hover:bg-gray-100 dark:hover:bg-neutral-800 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Proyectos
              </Link>
              <Link href="#contact" className="bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 px-4 py-2 rounded-full text-sm font-medium transition-colors">
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
