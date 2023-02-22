"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <>
      <div className="flex flex-row mx-36 p-20">
        <section className="flex flex-col">
          <h1 className="text-lg font-semibold">ABOUT ME</h1>
          <div className="flex flex-col mb-20 mt-5">
            Hi there! My name is Rosanna Zhang, I am a full-stack developer with
            an interest in front-end development. I have a Bachelor of
            Management from University of British Columbia and more recently, I
            completed the Lighthouse Lab's Web Development Bootcamp program.
            <p className="my-5">
              Transitioning from Human Resources, I hope to utilize my people
              and technical skills to create efficient and effective solutions.
              I am committed to tackling goals to solve real-world issues to
              make a positive impact in the community. Here are some of the
              technologies I've been working on lately:
            </p>
            <ul className="pl-5 grid grid-cols-2">
              <li>
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className="text-bg-color"
                />
                &nbsp;Javascript
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className="text-bg-color"
                />
                &nbsp;React.js
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className="text-bg-color"
                />
                &nbsp;Node.js
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className="text-bg-color"
                />
                &nbsp;Redux
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className="text-bg-color"
                />
                &nbsp;Next.js
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className="text-bg-color"
                />
                &nbsp;Tailwind
              </li>
            </ul>
          </div>
        </section>
        <img
          src="/Rosanna.jpg"
          alt="profile"
          className="rounded-full px-10 h-64 mt-10"
        />
      </div>
    </>
  );
}
