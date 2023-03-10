"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <section id="contact" className="p-5 py-20 laptop-w-3/4 ">
      <div className="flex flex-col text-center gap-5 laptop-h-96">
        <h1 className="text-lg font-bold uppercase mb-6">Contact</h1>
        <p className="max-w-xl place-self-center">
          Interested in reaching out? Let's talk! I love meeting new people and
          I will get back to you as soon as I can.
        </p>
        <ul className="flex flex-col justify-center place-items-center list-none gap-3 whitespace-nowrap tablet:whitespace-normal laptop:flex-row pb-10">
          <li className="rounded-md border p-2 hover:shadow cursor-pointer hover:text-purple max-w-fit">
            <a href="mailto: rosannazhang@hotmail.com">
              <FontAwesomeIcon icon={faEnvelope} className="cursor-pointer" />
              &nbsp;Say hello!
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
