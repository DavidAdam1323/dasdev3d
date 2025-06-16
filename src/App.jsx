import Hero from "./sections/Hero";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";
import Footer from "./sections/Footer";
import Layout from "./layout/Layout";

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </Layout>
  );
}

export default App;
