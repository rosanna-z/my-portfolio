"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <section id="about" className="p-5 py-16 laptop:h-screen flex justify-center">
      <div className="laptop:w-2/3">
        <h1 className="text-lg font-bold my-5">ABOUT</h1>
        <article className="flex flex-col laptop:flex-row items-center">
          <span className="laptop:w-2/3 mr-5">
            Hi there! My name is Rosanna Zhang, I am a full-stack developer with
            an interest in front-end development. I have a Bachelor of
            Management from{" "}
            <a
              href="https://ubc.ca"
              className="text-purple hover:cursor-pointer"
            >
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
              and technical skills to create efficient and effective solutions.
              I enjoy collaborating and tackling goals together to solve
              real-world issues to make a positive impact in the community. Here
              are some of the technologies I've been learning lately:
            </p>
            <ul className="pl-5 grid grid-cols-2">
              <li>
                <FontAwesomeIcon icon={faCaretRight} className="text-purple" />
                &nbsp;Javascript
              </li>
              <li>
                <FontAwesomeIcon icon={faCaretRight} className="text-purple" />
                &nbsp;React
              </li>
              <li>
                <FontAwesomeIcon icon={faCaretRight} className="text-purple" />
                &nbsp;Node
              </li>
              <li>
                <FontAwesomeIcon icon={faCaretRight} className="text-purple" />
                &nbsp;Redux
              </li>
              <li>
                <FontAwesomeIcon icon={faCaretRight} className="text-purple" />
                &nbsp;Next.js
              </li>
              <li>
                <FontAwesomeIcon icon={faCaretRight} className="text-purple" />
                &nbsp;Tailwind
              </li>
            </ul>
            <p className="my-5">
              You can also view my resume{" "}
              <a href="Resume.pdf" className="text-purple hover:cursor-pointer">
                here
              </a>
              . I am currently open to new opportunities. If you are interested
              in a chat or collaborating in a project, feel free to reach out.
            </p>
          </span>
            <img
              src="/Rosanna.jpg"
              alt="profile"
              className="rounded-full max-h-48 w-fit flex-shrink-0"
            />
        </article>
      </div>
    </section>
  );
}
