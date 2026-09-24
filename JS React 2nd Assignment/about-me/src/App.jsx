import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  return (
    <>
      <Hero />
      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">Built with React. Fawad, 2026.</footer>
    </>
  );
}
