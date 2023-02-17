"use client";

export default function About() {
  return (
    <>
      <h1>ABOUT ME</h1>

      <div className="flex justify-center m-5 w-[500px]">
        Hi there! My name is Rosanna Zhang. I am a full-stack developer with an
        interest in front-end development. I have a Bachelor of Management from
        University of British Columbia and more recently, I completed the
        Lighthouse Lab's Web Development Bootcamp program. Transitioning from
        Human Resources, I hope to utilize my people and technical skills to
        create efficient and effective solutions. I am committed to tackling
        goals to solve real-world issues to make a positive impact in the
        community. Here are the technologies I've been working on lately:
        <ul>
          <li>Javascript</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Next.js</li>
          <li>Tailwind</li>
        </ul>
      </div>
      <img src="/Rosanna.jpg" alt="profile" height="500" width="250" />
    </>
  );
}
