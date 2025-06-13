import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Contact />

      {/* <footer>
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
      </footer> */}
    </>
  );
}

export default App;
