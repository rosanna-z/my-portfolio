"use client";

import NavBar from "./NavBar";
import About from "./About";

export default function Home() {
  return (
    <main className="text-grey py-2">
      <NavBar />
      <div className="bg-bg-color">
      <h1 className="text-lg m-5 py-2">
        Hello! 
        <div>
          My name is <span className="font-bold"> Rosanna Zhang</span>, a developer based in Vancouver, BC.
        </div>
      </h1>
      </div>
      <About />
    </main>
  )
};
