"use client";

import NavBar from "./navBar";
import About from "./About";

export default function Home() {
  return (
    <main>
      <NavBar />
      <h1 className="text-lg py-2 m-5">
        Hello! 
        <div className="text-{rgb(192, 214, 223)}">
          My name is Rosanna, a developer based in Vancouver, BC.
        </div>
      </h1>
      <About />
    </main>
  )
}
