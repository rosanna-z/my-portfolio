"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  return (
      <aside className="flex flex-col mx-10 my-64 gap-5 fixed sm:text-sm md:text-xl lg:text-2xl">
        <a href="https://github.com/rosanna-z/" className="hover:text-purple">
          <FontAwesomeIcon icon={faGithub} className="cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/rosannaz"
          className="hover:text-purple"
        >
          <FontAwesomeIcon icon={faLinkedin} className="cursor-pointer" />
        </a>
        <a
          href="mailto: rosannazhang@hotmail.com"
          className="hover:text-purple"
        >
          <FontAwesomeIcon icon={faEnvelope} className="cursor-pointer" />
        </a>
        {/* <div className="w-0.5 text-black"></div> */}
        <div class="flex-grow border-l border-gray-400"></div>
      </aside>
  );
}
