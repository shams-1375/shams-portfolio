import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Education from "./components/Education.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Experience />
        <Skills />
        <Projects />
        <Education/>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
