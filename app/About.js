"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <>
      <section id="about" className="flex flex-row mx-36">
        <div className="flex flex-col laptop:flex-row tablet:w-full p-20">
          <section className="flex flex-col">
            <h1 className="text-lg font-bold">ABOUT ME</h1>
            <div className="flex flex-col mb-20 mt-5">
              <span>
              Hi there! My name is Rosanna Zhang, I am a full-stack developer
              with an interest in front-end development. I have a Bachelor of
              Management from{" "}
              <a href="https://ubc.ca" className="text-purple hover:cursor-pointer">
                University of British Columbia
              </a>{" "}
              and more recently, I completed the{" "}
              <a
                href="https://lighthouselabs.ca"
                className="text-purple hover:cursor-pointer"
              >
                Lighthouse Lab
              </a>
              's Web Development Bootcamp program.
              <p className="my-5">
                Transitioning from Human Resources, I hope to utilize my people
                and technical skills to create efficient and effective
                solutions. I enjoy collaborating and tackling goals to solve real-world
                issues to make a positive impact in the community. Here are some
                of the technologies I've been learning lately:
              </p>
              </span>
              <ul className="pl-5 grid grid-cols-2">
                <li>
                  <FontAwesomeIcon
                    icon={faCaretRight}
                    className="text-purple"
                  />
                  &nbsp;Javascript
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCaretRight}
                    className="text-purple"
                  />
                  &nbsp;React
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCaretRight}
                    className="text-purple"
                  />
                  &nbsp;Node
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCaretRight}
                    className="text-purple"
                  />
                  &nbsp;Redux
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCaretRight}
                    className="text-purple"
                  />
                  &nbsp;Next.js
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCaretRight}
                    className="text-purple"
                  />
                  &nbsp;Tailwind
                </li>
              </ul>
              <p className="my-5">
                You can also view my resume{" "}
                <a
                  href="Resume.pdf"
                  className="text-purple hover:cursor-pointer"
                >
                  here
                </a>
                . I am currently open to new opportunities. Interested in reaching out? Let's talk!
              </p>
            </div>
          </section>
          <img
            src="/Rosanna.jpg"
            alt="profile"
            className="rounded-full px-10 h-64 mt-10"
          />
        </div>
      </section>
    </>
  );
}
