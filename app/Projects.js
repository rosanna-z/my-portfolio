"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faChevronCircleRight,
  faChevronCircleLeft,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
  return (
    <section className="bg-bg-color p-20">
      <h1 className="text-lg mx-36 pb-10 font-semibold">PROJECTS</h1>
      <div className="flex flex-col ">
        <div className="flex flex-row justify-center mx-36 mb-20 rounded-2xl">
          <Image
            src="/newProjectgh.gif"
            alt="doable-gif"
            width="500"
            height="500"
            className="drop-shadow rounded-2xl"
          />
          <div className="flex flex-col p-10">
            <p className="text-lg font-semibold">My Portfolio</p>
            <article className="bg-slate-50 w-500 h-500 p-5 my-5 drop-shadow">
              My portfolio is a client-sided application to showcase my past
              projects.
            </article>
            Javascript, ReactJS, NextJS, Tailwind
            <span className="inline-block">
              <a href="https://github.com/rosanna-z/Doable">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="justify-self-start m-1 cursor-pointer"
                />
              </a>
            </span>
          </div>
        </div>
        <div className="flex flex-row justify-center mx-36 mb-20">
          <Image
            src="/newProjectgh.gif"
            alt="doable-gif"
            width="500"
            height="500"
            className="drop-shadow rounded-2xl"
          />
          <div className="flex flex-col p-10">
            <p className="text-lg font-semibold">Doable</p>
            <article className="bg-slate-50 w-500 h-500 p-5 my-5 drop-shadow">
              Doable is a RESTful project management app that allows users to
              create, edit, and delete projects and tasks within a project.
            </article>
            NodeJS, Express, ReactJS, Bootstrap, PostgreSQL
            <span className="inline-block">
              <a href="https://github.com/rosanna-z/Doable">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="justify-self-start m-1 cursor-pointer"
                />
              </a>
            </span>
          </div>
        </div>
        <div className="flex flex-row justify-center mx-36 mb-20">
          <Image
            src="/newProjectgh.gif"
            alt="doable-gif"
            width="500"
            height="500"
            className="drop-shadow rounded-2xl"
          />
          <div className="flex flex-col p-10">
            <p className="text-lg font-semibold">Double Bubble Trouble</p>
            <article className="bg-slate-50 w-500 h-500 p-5 my-5 drop-shadow">
              A single page ordering app for a fictitious bubble tea
              shop where users can select one or more beverages and place an
              order for pick-up. Users will receive notifications when their
              order is sent, when it is confirmed (with estimated pick up time)
              and when it is ready for pick-up.
            </article>
            NodeJS, Express, Javscript, jQuery, Twilio, PostgreSQL
            <span className="inline-block">
              <a href="https://github.com/rosanna-z/Doable">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="justify-self-start m-1 cursor-pointer"
                />
              </a>
            </span>
          </div>
        </div>
      </div>
      {/* <div className='max-w-500 h-500 w-full relative group' >
        <div
          style={{ backgroundImage: `url('/newProjectgh.gif')` }}
          className="w-full h-full"
        ></div>
      </div> */}
    </section>
  );
}
