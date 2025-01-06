import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Toaster />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
