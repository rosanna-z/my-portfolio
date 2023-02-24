"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
  return (
    <section className="bg-bg-color p-20">
      <h1 className="text-lg mx-36 pb-10 font-semibold">PROJECTS</h1>
      <div className="flex flex-row justify-center mx-36 ">
        <Image
          src="/newProjectgh.gif"
          alt="doable-gif"
          width="500"
          height="500"
        />
        <span className="flex flex-col p-10">
          <p className="text-xl">Doable</p>
          <article className="bg-slate-50 w-500 h-500 p-5 my-5">
            Doable is a project management app that allows users to create
            projects and tasks within a project.
          </article>
          NodeJS, Express, ReactJS, Bootstrap, PostgreSQL
        </span>
        <FontAwesomeIcon icon="fa-brands fa-github" />
      </div>
    </section>
  );
}
