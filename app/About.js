'use client';

import photo from "../public/Rosanna.jpg"
import Image from "next/image";

export default function About() {
  return (
    <>
    <h1>About Me</h1>
    <div className="flex justify-center m-5" >
      Hi there!
      My name is Rosanna Zhang. I am a full-stack developer with an interest in front-end development. 
      I have a Bachelor of Management from University of British Columbia and more recently, 
      I completed the Lighthouse Lab's Web Development Bootcamp program. 

      Transitioning from Human Resources, I hope to utilize my people and technical skills to create efficient and effective solutions. 
      I am committed to tackling goals to solve real-world issues to make a positive impact in the community.

      Here are the technologies I've been working on lately:
      <p>
        - Javascript
        - React.js
        - Node.js
        - Next.js
      </p>
      {/* <img src={process.env.PUBLIC_URL + "/Rosanna.jpg"} alt="profile" /> */}
    </div>
      <Image src={photo} alt="profile" height="500" width="250" />
    </>
  )
}