"use client";

import NavBar from "./NavBar";
import About from "./About";

export default function Home() {
  return (
    <main className="py-2 m-5">
      <NavBar />
      <h1 className="text-lg">
        Hello! 
        <div>
          My name is <p className="text-purple"> Rosanna</p>, a developer based in Vancouver, BC.
        </div>
      </h1>
      <About />
    </main>
  )
};
