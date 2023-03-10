"use client";

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */
import NavBar from "./NavBar";
import Intro from './Intro';
import About from "./About";
import Projects from './Projects';
import Sidebar from './Sidebar';
import Contact from './Contact';
import Footer from './Footer';


export default function Home() {
  return (
    <main className="h-screen">
      <NavBar />
      <Sidebar />
      <Intro />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
};
