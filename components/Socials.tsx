import { FaEnvelope, FaBlog } from "react-icons/fa";
import { SiFigma, SiGithub, SiLinkedin } from "react-icons/si";

const socials = [
  {
    name: "GitHub",
    icon: (
      <SiGithub className="w-full h-full transition-opacity hover:opacity-75" />
    ),
    link: "https://github.com/arashnrim",
  },
  {
    name: "blog",
    icon: (
      <FaBlog className="w-full h-full transition-opacity hover:opacity-75" />
    ),
    link: "https://blog.arash.codes",
  },
  {
    name: "LinkedIn",
    icon: (
      <SiLinkedin className="w-full h-full transition-opacity hover:opacity-75" />
    ),
    link: "https://linkedin.com/in/arashnrim",
  },
  {
    name: "Figma",
    icon: (
      <SiFigma className="w-full h-full transition-opacity hover:opacity-75" />
    ),
    link: "https://figma.com/@arashnrim",
  },
  {
    name: "email",
    icon: (
      <FaEnvelope className="w-full h-full transition-opacity hover:opacity-75" />
    ),
    link: "mailto:hello@arashnrim.me",
  },
];

const Socials = () => (
  <ul className="flex flex-row flex-wrap items-center justify-center mt-5 space-x-6 lg:justify-start lg:items-start">
    {socials.map((social) => (
      <a
        href={social.link}
        target="_blank"
        rel="noreferrer"
        title={
          social.name === "email"
            ? "Contact via email"
            : social.name === "blog"
            ? "Go to blog"
            : `Go to ${social.name} profile`
        }
        aria-label={
          social.name === "email"
            ? "Contact via email"
            : social.name === "blog"
            ? "Go to blog"
            : `Go to ${social.name} profile`
        }
        key={social.name}
      >
        <p>{social.name.toLowerCase()}</p>
      </a>
    ))}
  </ul>
);

export default Socials;
