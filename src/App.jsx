import heroPic from "./assets/hero-pic.png";
import LinkedInIcon from "./assets/linkedin.png";
import GitHubIcon from "./assets/github.png";
// import AboutMePic from "./assets/aboutMe-pic.jpeg";
import ExpIcon from "./assets/experience.png";
import EducationIcon from "./assets/education.png";
import ArrowIcon from "./assets/arrow.png";
import CheckMarkIcon from "./assets/checkmark.png";
import Project1 from "./assets/project-1.png";
import Project2 from "./assets/project-2.png";
import Project3 from "./assets/project-3.png";
import EmailIcon from "./assets/email.png";

import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";

function App() {
  return (
    <>
      <NavBar />
      <Hero />

      <section id="profile">
        <div className="section__pic-container">
          <img src={heroPic} alt="David A. Silva" />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello I'm</p>
          <h1 className="title">David Silva</h1>
          <p className="section__text__p2">Software Developer</p>

          <div className="btn-container">
            <button
              className="btn btn-color-2"
              onClick={() =>
                window.open("./assets/my_resume_template.pdf", "_blank")
              }
            >
              Download CV
            </button>
            <button
              className="btn btn-color-1"
              onClick={() => (window.location.href = "./#contact")}
            >
              Contact Info
            </button>
          </div>

          <div id="social-container">
            <a href="https://linkedin.com/in/davidadamsilva" target="_blank">
              <img
                src={LinkedInIcon}
                alt="David A. Silva LinkIn Profile"
                className="icon"
              />
            </a>

            <a href="https://github.com/DavidAdam1323" target="_blank">
              <img
                src={GitHubIcon}
                alt="David A. Silva GitHub Profile"
                className="icon"
              />
            </a>
          </div>
        </div>
      </section>

      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          {/* <div className="section__pic-container">
            <img src={AboutMePic} alt="Profile Picture" className="about-pic" />
          </div> */}
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <img src={ExpIcon} alt="Experience Icon" className="icon" />
                <h3>Experience</h3>
                <p>
                  12+ Weeks
                  <br />
                  Full-Stack Web Development
                </p>
              </div>
              <div className="details-container">
                <img
                  src={EducationIcon}
                  alt="Education Icon"
                  className="icon"
                />
                <h3>Education</h3>
                <p>
                  Secondary Education - Brazil
                  <br />
                  General Certificate - (GCSE) Equivalent
                </p>
              </div>
            </div>
            <div className="text-container">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                atque possimus sunt eaque quos perspiciatis, porro perferendis
                quisquam hic officia exercitationem amet quis consectetur
                dolorum quasi animi nam illo culpa voluptatum delectus esse
                architecto est maxime! Praesentium nam esse ducimus ea natus?
                Odit laudantium nemo numquam sequi pariatur quae iusto.
              </p>
            </div>
          </div>
        </div>
        <img
          src={ArrowIcon}
          alt="Arrow Icon"
          className="icon arrow"
          onClick={() => {
            location.href = "./#experience";
          }}
        />
      </section>

      <section id="experience">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Experience</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container">
              <h2 className="experience-sub-title">Frontend Development</h2>
              <div className="article-container">
                <article>
                  <img
                    src={CheckMarkIcon}
                    alt="Experience Icon"
                    className="icon"
                  />
                  <div>
                    <h3>HTML</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img
                    src={CheckMarkIcon}
                    alt="Experience Icon"
                    className="icon"
                  />
                  <div>
                    <h3>CSS</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img
                    src={CheckMarkIcon}
                    alt="Experience Icon"
                    className="icon"
                  />
                  <div>
                    <h3>SASS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src={CheckMarkIcon}
                    alt="Experience Icon"
                    className="icon"
                  />
                  <div>
                    <h3>JavaScript</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src={CheckMarkIcon}
                    alt="Experience Icon"
                    className="icon"
                  />
                  <div>
                    <h3>TypeScript</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src={CheckMarkIcon}
                    alt="Experience Icon"
                    className="icon"
                  />
                  <div>
                    <h3>UX | UI</h3>
                    <p>Basic</p>
                  </div>
                </article>
              </div>
            </div>
            <div className="details-container">
              <h2 className="experience-sub-title">Backend Development</h2>
              <div className="article-container">
                <article>
                  <img
                    src={CheckMarkIcon}
                    alt="Experience Icon"
                    className="icon"
                  />
                  <div>
                    <h3>PostgreSQL</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src={CheckMarkIcon}
                    alt="Experience Icon"
                    className="icon"
                  />
                  <div>
                    <h3>Node JS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src={CheckMarkIcon}
                    alt="Experience Icon"
                    className="icon"
                  />
                  <div>
                    <h3>Express JS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src={CheckMarkIcon}
                    alt="Experience Icon"
                    className="icon"
                  />
                  <div>
                    <h3>Git</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        <img
          src={ArrowIcon}
          alt="Arrow Icon"
          className="icon arrow"
          onClick={() => {
            location.href = "./#projects";
          }}
        />
      </section>

      <section id="projects">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container color-container">
              <div className="article-container">
                <img src={Project1} alt="Project 1" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">
                Project One
              </h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => {
                    location.href =
                      "https://github.com/DavidAdam1323/First-Project";
                  }}
                >
                  GitHub
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => {
                    location.href = "https://github.com";
                  }}
                >
                  Live Demo
                </button>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img src={Project2} alt="Project 2" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">
                Project Two
              </h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => {
                    location.href = "https://github.com";
                  }}
                >
                  GitHub
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => {
                    location.href = "https://github.com";
                  }}
                >
                  Live Demo
                </button>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img src={Project3} alt="Project 3" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">
                Project Three
              </h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => {
                    location.href = "https://github.com";
                  }}
                >
                  GitHub
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => {
                    location.href = "https://github.com";
                  }}
                >
                  Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>
        <img
          src={ArrowIcon}
          alt="Arrow Icon"
          className="icon arrow"
          onClick={() => {
            location.href = "./#contact";
          }}
        />
      </section>

      <section id="contact">
        <p className="section__text__p1">Get In Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img
              src={EmailIcon}
              alt="E-mail Icon"
              className="icon contact-icon email-icon"
            />
            <p>
              <a href="mailto:examplemail@gmail.com">davidadamgtr@gmail.com</a>
            </p>
          </div>
          <div className="contact-info-container">
            <img
              src={LinkedInIcon}
              alt="LinkIn Icon"
              className="icon contact-icon"
            />
            <p>
              <a href="https://www.linkedin.com/in/davidadamsilva/">LinkedIn</a>
            </p>
          </div>
        </div>
      </section>

      <footer>
        <nav>
          <div className="nav-links-container">
            <ul className="nav-links">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        <p>copyright &#169; 2024 | David Adam Silva - All Rights Reserved</p>
      </footer>
    </>
  );
}

export default App;
