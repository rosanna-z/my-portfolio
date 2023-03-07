"use client";

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
    <section
      id="projects"
      className="flex justify-center bg-bg-color py-20 p-5"
    >
      <div className="flex flex-col laptop:w-2/3 gap-5">
        <h1 className="text-lg font-bold my-5 uppercase">Projects</h1>
        {/* Project 1 */}
        <div className="flex flex-col laptop:flex-row m-5 laptop:w-full">
          <span className="flex flex-col place-content-center laptop:min-w-1/2">
            <p className="text-lg font-semibold">
              My Portfolio&nbsp;
              <a href="https://github.com/rosanna-z/my-portfolio">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="cursor-pointer hover:text-purple"
                />
              </a>
            </p>
            <article className="bg-slate-50 max-w-lg p-5 my-3 drop-shadow">
              My portfolio is a client-sided application with a responsive
              design to display my past projects. Using React and Tailwind to
              showcase my front-end development skills.
              <p
                className={`${SourceCode.className} text-sm mt-5 text-purple font-semibold`}
              >
                Javascript React NextJS Tailwind
              </p>
            </article>
          </span>
          <img
            src="/portfolio.gif"
            alt="doable-gif"
            className="drop-shadow rounded-2xl m-3 tablet:max-w-lg laptop:w-1/2"
          />
        </div>
        {/* this is a line */}
        <div className="flex-grow border-t border-gray-400"></div>
        {/* Project 2 */}
        <div className="flex flex-col laptop:flex-row m-5 laptop:w-full">
          <span className="flex flex-col place-content-center laptop:min-w-1/2">
            <p className="text-lg font-semibold">
              Doable&nbsp;
              <a href="https://github.com/rosanna-z/Doable">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="cursor-pointer hover:text-purple"
                />
              </a>
            </p>
            <article className="bg-slate-50 max-w-lg h-auto p-5 my-3 drop-shadow">
              A RESTful project management app that allows users to create,
              edit, and delete projects and tasks within a project. React
              Context was used for the state management and a drag and drop
              feature to update the status of each task. A chat feature using
              Socket.io to allow team members to collaborate with each other.
              <p
                className={`${SourceCode.className} text-sm mt-5 text-purple font-semibold`}
              >
                Node Express Javascript React Bootstrap PostgreSQL Socket.IO
              </p>
            </article>
          </span>
          <img
            src="/doable.gif"
            alt="doable-gif"
            className="drop-shadow rounded-2xl m-3 tablet:max-w-lg laptop:w-1/2"
          />
        </div>
        {/* this is a line */}
        <div className="flex-grow border-t border-gray-400"></div>
        {/* Project 3 */}
        <div className="flex flex-col laptop:flex-row m-5 laptop:w-full">
          <span className="flex flex-col place-content-center laptop:min-w-1/2">
            <p className="text-lg font-semibold">
              Scheduler&nbsp;
              <a href="https://github.com/rosanna-z/FoodOrderApp_MidTermProject">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="cursor-pointer hover:text-purple"
                />
              </a>
            </p>
            <article className="bg-slate-50 max-w-lg h-auto p-5 my-3 drop-shadow">
              A single page client application that uses React where a user can
              book, edit, or cancel interview appointments.
              <p
                className={`${SourceCode.className} text-sm mt-5 text-purple font-semibold`}
              >
                React, Axios, Classnames, Normalize, Storybook
              </p>
            </article>
          </span>
          <img
            src="/scheduler.gif"
            alt="doable-gif"
            className="drop-shadow rounded-2xl m-3 tablet:max-w-lg laptop:w-1/2"
          />
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
