"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faChevronCircleRight,
  faChevronCircleLeft,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Source_Code_Pro } from "@next/font/google";

const SourceCode = Source_Code_Pro({
  subsets: ["latin"],
});

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
            <p className="text-lg font-semibold">
              My Portfolio&nbsp;
              <a href="https://github.com/rosanna-z/my-portfolio">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="justify-self-start cursor-pointer"
                />
              </a>
            </p>
            <article className="bg-slate-50 w-500 h-500 p-5 my-5 drop-shadow">
              My portfolio is a client-sided application to showcase my past
              projects.
            </article>
            <div className={`${SourceCode.className} text-sm`}>
              Javascript, React, NextJS, Tailwind
            </div>
            {/* <span className="inline-block">
              <a href="https://github.com/rosanna-z/my-portfolio">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="justify-self-start my-3 cursor-pointer"
                />
              </a>
            </span> */}
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
              A RESTful project management app that allows users to create,
              edit, and delete projects and tasks within a project. A drag and
              drop feature to update the statuses of each task, as well as a
              chat feature using Websocket.io to allow team members to
              collaborate with each other.
            </article>
            <div className={`${SourceCode.className} text-sm`}>
              Node, Express, React, Bootstrap, PostgreSQL, Websocket.io
            </div>
            <span className="inline-block">
              <a href="https://github.com/rosanna-z/Doable">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="justify-self-start my-3 cursor-pointer"
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
              A single page ordering app for a fictitious bubble tea shop where
              users can select one or more beverages and place an order for
              pick-up. Users will receive notifications when their order is
              sent, when it is confirmed (with estimated pick up time) and when
              it is ready for pick-up.
            </article>
            <div className={`${SourceCode.className} text-sm`}>
              Node, Express, Javscript, jQuery, Twilio, PostgreSQL
            </div>
            <span className="inline-block">
              <a href="https://github.com/rosanna-z/FoodOrderApp_MidTermProject">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="justify-self-start my-3 cursor-pointer"
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
