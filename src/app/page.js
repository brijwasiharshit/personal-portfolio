
import About from "./components/About";
import Branding from "./components/Branding";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main>
     <Header />
     <Branding />
     <About />
     <Projects />
     <Contact />
     <Footer />
    </main>
  );
}
