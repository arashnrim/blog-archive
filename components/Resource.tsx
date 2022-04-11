import Prompt from "./Prompt";

interface Link {
  title: string;
  link: string;
}

interface ResourceProps {
  links: Link[];
  customBody?: string;
}

const Resource = ({ links, customBody }: ResourceProps) => {
  return (
    <Prompt
      status="resource"
      title={links.length == 1 ? "Resource" : "Resources"}
    >
      {customBody
        ? customBody
        : "The resources below were mentioned and may serve to help:"}
      <section className="grid grid-cols-1 gap-5 pt-5 md:grid-cols-2">
        {links.map((link) => (
          <a
            href={link.link}
            target="_blank"
            rel="noreferrer"
            className="!no-underline hover:!bg-transparent !text-white"
            key={link.title}
          >
            <div className="h-full p-5 border rounded-2xl hover:!border-blue-400">
              <p className="!my-0 break-words">{link.title}</p>
            </div>
          </a>
        ))}
      </section>
    </Prompt>
  );
};

export default Resource;
