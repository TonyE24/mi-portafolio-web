export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-100 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 flex justify-center lg:px-8">
        <div className="md:order-1">
          <p className="text-center text-base text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Raul Elias. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
