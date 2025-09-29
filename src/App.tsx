import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/common/footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <section id="home" aria-label="Home" className="min-h-screen">
          <Home />
        </section>

        <section id="about" aria-label="About">
          <About />
        </section>

        <section id="skills" aria-label="Skills">
          <Skills />
        </section>

        <section id="projects" aria-label="Projects">
          <Projects />
        </section>

        <section id="contact" aria-label="Contact">
          <Contact />
        </section>
        <section id="contact" aria-label="Contact"></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
