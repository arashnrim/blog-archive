import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import profilePicture from "../public/arash.jpg";

const About = () => {
  return (
    <Layout className="text-lg sm:text-xl">
      <Hero />
      <section className="px-10 py-10 lg:pt-20 md:px-20 lg:px-40">
        <div className="prose prose-lg text-white prose-invert sm:prose-xl md:prose-2xl">
          <object className="float-left w-1/3 max-w-xs pb-2 pr-10 lg:pb-8 lg:pr-20">
            <Image
              src={profilePicture}
              alt="Arash Nur Iman"
              className="rounded-xl"
            />
          </object>
          <p>
            Hello there! My name is Arash Nur Iman. I&apos;m a student developer
            from Singapore ardent about creating designed, intuitive, and
            practical products using technology.
          </p>
          <small>
            (psst, read more about me in my{" "}
            <a href="https://arash.codes" target="_blank" rel="noreferrer">
              website
            </a>
            !)
          </small>
          <p>
            I created <code>function()</code> as an avenue to share my code,
            experiences, and other fascinating stories to the world. I admit
            that I still have a long way to go to be just <i>somebody</i> in
            this fast-paced world, but I figured: why not create a blog just to
            document my journey along the way at the same time?
          </p>
          <p>
            Since starting my journey as a developer, I had the opportunity to
            come across many blogs by different developers out there. I was
            inspired and intrigued at how each had its own style, as if an
            extension of the developer behind the blog. I wanted to make a blog
            of my own (that had actual meaning and direction) for a long time; I
            had many failed attempts at blogging, and realised only later on
            that a purpose was key.
          </p>
          <p>
            I&apos;m still embarking on the journey of learning something new
            (maybe not) everyday. There&apos;s still a lot for me to learn and
            grow, but I hope that sharing what&apos;s going on through a simple
            blog might help others who come across this blog!
          </p>
          <p>
            To get started, take a look at my first blog post —{" "}
            <Link href="/hello-world">Hello, world!</Link>. I can&apos;t thank
            you enough for being here. I hope that you might learn a thing or
            two, or maybe the other round of me learning from you too. I&apos;m
            free for <a href="mailto:hello@arashnrim.me">a chat on email</a>{" "}
            anytime, if you&apos;d like to leave a comment, give some feedback,
            or simply say hi! Thank you for visiting; go forth and create
            awesome things!
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default About;
