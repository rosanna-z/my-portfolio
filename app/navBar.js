"use client";

export default function NavBar() {
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3">
        <div className="container px-4 mx-auto flex items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-grey"
              href="/"
            >
              Rosanna Zhang
            </a>
          </div>
          <ul className="flex lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-grey hover:opacity-75"
                href="#about"
              >
                <span className="ml-2">About</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-grey hover:opacity-75"
                href="#projects"
              >
                <span className="ml-2">Projects</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-grey hover:opacity-75"
                href="#contact"
              >
                <span className="ml-2">Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
