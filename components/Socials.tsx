import React from "react";
import { SiGithub, SiLinkedin, SiPolywork } from "react-icons/si";
import { FaEnvelope } from "react-icons/fa";

const Socials = () => (
  <nav className="flex flex-row items-center justify-center mt-5 space-x-6 lg:justify-start lg:items-start">
    <a
      href="https://github.com/arashnrim"
      target="_blank"
      rel="noreferrer"
      className="w-8 h-8 md:w-10 sm:h-10"
      title="Go to GitHub profile"
      aria-label="Go to GitHub profile"
    >
      <SiGithub className="w-full h-full transition-opacity hover:opacity-75" />
    </a>
    <a
      href="https://timeline.arash.codes"
      target="_blank"
      rel="noreferrer"
      className="w-8 h-8 md:w-10 sm:h-10"
      title="Go to Polywork profile"
      aria-label="Go to Polywork profile"
    >
      <SiPolywork className="w-full h-full transition-opacity hover:opacity-75" />
    </a>
    <a
      href="https://www.linkedin.com/in/arashnrim/"
      target="_blank"
      rel="noreferrer"
      className="w-8 h-8 md:w-10 sm:h-10"
      title="Go to LinkedIn profile"
      aria-label="Go to LinkedIn profile"
    >
      <SiLinkedin className="w-full h-full transition-opacity hover:opacity-75" />
    </a>

    <a
      href="mailto:hello@arashnrim.me"
      className="w-8 h-8 md:w-10 sm:h-10"
      title="Contact via email"
      aria-label="Contact via email"
    >
      <FaEnvelope className="w-full h-full transition-opacity hover:opacity-75" />
    </a>
  </nav>
);

export default Socials;
