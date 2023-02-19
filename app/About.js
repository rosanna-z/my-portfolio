"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <>
    {/* <div className="flex flex-col justify-center items-center w-1/2"> */}
      <h1 className="text-lg mt-20 mx-40 pl-10 font-semibold">ABOUT ME</h1>
      {/* <section className="flex flex-row"> */}
      <section className="flex flex-row justify-center mx-10 my-5">
        <div className="flex flex-col w-1/2">
        {/* <div className="flex flex-col"> */}
          Hi there! My name is Rosanna Zhang, I am a full-stack developer with
          an interest in front-end development. I have a Bachelor of Management
          from University of British Columbia and more recently, I completed the
          Lighthouse Lab's Web Development Bootcamp program.
          <p className="my-5">
            Transitioning from Human Resources, I hope to utilize my people and
            technical skills to create efficient and effective solutions. I am
            committed to tackling goals to solve real-world issues to make a
            positive impact in the community. Here are some of the technologies I've
            been working on lately:
          </p>
          <ul className="pl-5">
            <li>
              <FontAwesomeIcon icon={faCaretRight} className="text-bg-color" />
              &nbsp;Javascript
            </li>
            <li>
              <FontAwesomeIcon icon={faCaretRight} className="text-bg-color" />
              &nbsp;React.js
            </li>
            <li>
              <FontAwesomeIcon icon={faCaretRight} className="text-bg-color" />
              &nbsp;Node.js
            </li>
            <li>
              <FontAwesomeIcon icon={faCaretRight} className="text-bg-color" />
              &nbsp;Next.js
            </li>
            <li>
              <FontAwesomeIcon icon={faCaretRight} className="text-bg-color" />
              &nbsp;Tailwind
            </li>
          </ul>
        </div>
        <img src="/Rosanna.jpg" alt="profile" className="px-10 h-64 max-w-md rounded-md" />
      </section>
      {/* </div> */}
    </>
  );
}
