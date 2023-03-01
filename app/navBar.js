"use client";

export default function NavBar() {
  return (
    <nav className="fixed top-0 z-50 flex flex-wrap items-center justify-between px-2 py-3 w-full shadow-lg bg-white">
      <div className="container px-4 mx-auto flex items-center justify-between font-bold text-sm hover:underline-offset-4">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className="leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-grey hover:underline"
            href="/"
          >
            Rosanna Zhang
          </a>
        </div>
        <ul className="flex lg:flex-row justify-center list-none lg:ml-auto gap-8">
          <li className="py-2 uppercase leading-snug text-grey hover:opacity-75">
            <a href="#about" className="hover:underline">
              About
            </a>
          </li>
          <li className="py-2 uppercase leading-snug text-grey hover:opacity-75">
            <a href="#projects" className="hover:underline">
              Projects
            </a>
          </li>
          <li className="py-2 uppercase leading-snug text-grey hover:opacity-75">
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
