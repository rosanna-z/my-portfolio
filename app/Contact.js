"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <section id="contact" className="p-40 mb-16">
      <div className="flex flex-col justify-center text-center gap-5">
        <h1 className="text-lg font-bold mb-10">CONTACT</h1>
        <p className="flex flex-col">Interested in reaching out? Let's talk! 😊</p>
        <ul className="flex flex-row justify-center list-none gap-3">
          <li className="rounded-md border p-2 hover:shadow cursor-pointer hover:text-purple max-w-fit">
            <a href="mailto: rosannazhang@hotmail.com">
              <FontAwesomeIcon icon={faEnvelope} className="cursor-pointer" />
              &nbsp;Send email
            </a>
          </li>
          <li className="rounded-md border p-2 hover:shadow cursor-pointer hover:text-purple max-w-fit">
            <a
              href="https://www.linkedin.com/in/rosannaz"
              className="hover:text-purple"
            >
              <FontAwesomeIcon icon={faLinkedin} className="cursor-pointer" />
              &nbsp;Connect with me
            </a>
          </li>
          <li className="rounded-md border p-2 hover:shadow cursor-pointer hover:text-purple max-w-fit">
            <a
              href="https://github.com/rosanna-z/"
              className="hover:text-purple"
            >
              <FontAwesomeIcon icon={faGithub} className="cursor-pointer" />
              &nbsp;Check out my work
            </a>
          </li>
          <li className="rounded-md border p-2 hover:shadow cursor-pointer hover:text-purple max-w-fit">
            <a href="Resume.pdf" className="hover:text-purple">
              <FontAwesomeIcon icon={faFile} className="cursor-pointer" />
              &nbsp;View my resume
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
