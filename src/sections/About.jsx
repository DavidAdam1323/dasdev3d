import Button from "../components/Button";
import TitleHeader from "../components/TitleHeader";

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden md:pt-40 pt-10">
      <TitleHeader
        eyebrowText="Get to Know Me"
        titleText="A Little About My Journey"
      />

      <div className="mx-auto xl:px-20 px-5">
        <div className="mt-10 grid grid-cols-1 md:grid-cols-[1fr_2fr] items-center bg-black-100 border border-black-200 rounded-lg relative">
          {/* LEFT SIDE - IMAGE CONTAINER */}
          <div className="order-1 md:order-2 flex justify-start md:p-7 p-5">
            <img
              src="src/assets/AboutMePic.jpeg"
              alt="Profile Picture"
              className="rounded-lg w-full max-w-sm md:max-w-md lg:max-w-xl object-cover"
            />
          </div>

          {/* RIGHT SIDE - TEXT CONTENT */}
          <div className="order-2 md:order-3 w-full space-y-6 text-[20px] md:text-xl text-justify text-white-50 lg:pl-0 lg:pr-7 p-5 z-10">
            <p>
              My journey into tech began on an unexpected stage — the music
              industry. For 21 years, I worked as a session guitarist,
              collaborating with artists, tutoring students, and performing
              across countless venues. It was a career that demanded quick
              thinking, strong communication, and the ability to adapt under
              pressure — qualities that became second nature to me. Those years
              taught me how to connect with people, solve problems creatively,
              and stay calm in high-stakes environments.
            </p>

            <p>
              When I transitioned into tech, I discovered that many of the same
              principles applied. Writing clean, efficient code reminded me of
              composing music — deliberate, layered, and collaborative. I found
              that my strengths in communication, teamwork, and attention to
              detail translated naturally into development. Whether I’m building
              user interfaces or tackling complex bugs, I approach my work with
              focus, empathy, and a commitment to excellence.
            </p>

            <p>
              I’m someone who thrives in collaborative environments, takes
              initiative, and is always looking at how my contributions fit into
              the bigger picture. I'm passionate about creating meaningful
              digital experiences and working with teams that value clarity,
              creativity, and continuous improvement. Tech may be a different
              stage, but the performance — showing up, adapting, and delivering
              with purpose — is what still drives me every day.
            </p>

            {/* CV - BUTTON */}
            <div className="w-full md:w-[350px] h-auto">
              <Button id="" href="" className="" text="Download My CV" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
