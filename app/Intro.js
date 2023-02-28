"use client";

import Typewriter from "typewriter-effect";

export default function Intro() {
  return (
    <section className="bg-bg-color">
      <div className="flex justify-evenly p-20 py-14 mx-36">
        <div className="flex flex-col text-5xl py-14 gap-y-5">
          Hello! This is
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString(" <span class='font-bold'>Rosanna Zhang,</span>").pauseFor(500).start();
              }}
            />
          <p className="text-3xl">
            I am a full-stack developer based in Vancouver, BC. 👋
          </p>
        </div>
      </div>
    </section>
  );
}
