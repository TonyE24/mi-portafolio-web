interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: "Descubre El Salvador",
    description: "Plataforma web turística diseñada para promover los destinos más emblemáticos y la cultura de El Salvador.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/TonyE24/DescubreElSalvador"
  },
  {
    title: "NotiMedi",
    description: "Aplicación web enfocada en el sector salud, proporcionando herramientas o noticias médicas importantes.",
    tech: ["React", "JavaScript", "CSS"],
    link: "https://github.com/TonyE24/NotiMedi"
  },
  {
    title: "Siman Landing Page",
    description: "Clon de la página de aterrizaje de Siman, demostrando habilidades de maquetación y diseño pixel-perfect.",
    tech: ["HTML", "CSS"],
    link: "https://github.com/TonyE24/siman_landingpage"
  },
  {
    title: "Kodigo Music",
    description: "Reproductor de música moderno construido con React, que consume una API para listar y reproducir canciones.",
    tech: ["React", "API Rest", "Tailwind"],
    link: "https://github.com/TonyE24/kodigo-music"
  },
  {
    title: "Medi-House",
    description: "Solución tecnológica enfocada en servicios médicos o gestión hospitalaria eficiente.",
    tech: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/TonyE24/Medi-House"
  },
  {
    title: "HomeHorizon",
    description: "Plataforma inmobiliaria moderna para la visualización y búsqueda de propiedades.",
    tech: ["Web Development", "UI/UX"],
    link: "https://github.com/TonyE24/HomeHorizon"
  },
  {
    title: "Restaurante La Molienda",
    description: "Sitio web para restaurante con menú digital y presentación de servicios gastronómicos.",
    tech: ["HTML", "CSS", "Responsive Design"],
    link: "https://github.com/TonyE24/restaurante_la_molienda_"
  },
  {
    title: "Sistema de Biblioteca",
    description: "Aplicación para la gestión de inventario de libros y control de préstamos.",
    tech: ["PHP", "Database", "Web"],
    link: "https://github.com/TonyE24/Biblioteca"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">Portafolio</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Mis Proyectos Recientes
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.map((project, index) => (
            <article key={index} className="flex max-w-xl flex-col items-start justify-between p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300">
                  <a href={project.link}>
                    <span className="absolute inset-0" />
                    {project.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="inline-flex items-center rounded-md bg-blue-50 dark:bg-blue-900/30 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-300 ring-1 ring-inset ring-blue-700/10">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
