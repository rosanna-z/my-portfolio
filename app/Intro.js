"use client";

import Typewriter from "typewriter-effect";

export default function Intro() {
  return (
    <section id="intro" className="bg-bg-color h-5/6 my-5 relative">
        <div className="w-2/3 h-full absolute inset-y-0 right-0 flex flex-col justify-center text-2xl tablet:text-4xl laptop:text-5xl gap-y-5">
          Hello! This is
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(" <span class='font-bold'>Rosanna Zhang,</span>")
                .pauseFor(500)
                .start();
            }}
          />
          <p className="text-lg tablet:text-2xl laptop:text-3xl">
            I am a full-stack developer based in Vancouver, BC. 🏔
          </p>
        </div>
    </section>
  );
}
