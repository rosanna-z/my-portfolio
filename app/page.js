"use client";

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */
import About from "./About";
import NavBar from "./NavBar";

export default function Home() {
  return (
    <main className="text-grey py-2">
      <NavBar />
      <section className="bg-bg-color h-80">
      <h1 className="text-lg m-5 py-2">
        Hello! 
        <div>
          My name is <span className="font-bold"> Rosanna Zhang</span>, a developer based in Vancouver, BC.
        </div>
      </h1>
      </section>
      <About />
    </main>
  )
};
