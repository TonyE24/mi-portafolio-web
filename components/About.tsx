export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">Sobre Mí</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Desarrollador Full Stack & Diseñador UI/UX
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Tengo experiencia trabajando con tecnologías modernas como React, Next.js, Node.js y TypeScript, ademas 
            me encanta resolver problemas complejos y transformar ideas en productos funcionales. 
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                   <span className="text-white text-xl">💻</span>
                </div>
                Frontend Development
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">
                Creo interfaces de usuario hermosas y responsivas utilizando React, Tailwind CSS y componentes modernos.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                   <span className="text-white text-xl">⚙️</span>
                </div>
                Backend Integration
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">
                Diseño APIs robustas y gestiono bases de datos para asegurar que las aplicaciones sean rápidas y seguras.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
