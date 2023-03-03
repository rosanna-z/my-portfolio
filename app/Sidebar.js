"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  return (
    <aside className="flex flex-col mx-10 h-2/5 absolute bottom-0 left-0 gap-5 fixed tablet:text-xl laptop:text-2xl z-10">
      <a href="mailto: rosannazhang@hotmail.com" className="hover:text-purple">
        <FontAwesomeIcon
          icon={faEnvelope}
          className="cursor-pointer hover:animate-bounce"
        />
      </a>
      <a href="https://github.com/rosanna-z/" className="hover:text-purple">
        <FontAwesomeIcon
          icon={faGithub}
          className="cursor-pointer hover:animate-bounce"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/rosannaz"
        className="hover:text-purple"
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          className="cursor-pointer hover:animate-bounce"
        />
      </a>
      {/* <div className="w-0.5 text-black"></div> */}
      <div className="flex-grow border-l border-gray-400"></div>
    </aside>
  );
}
