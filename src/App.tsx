import { useState } from "react";
import NavigationBar from "./components/NavigationBar";
import About from "./sections/About";
import Project from "./sections/Project";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Admin from "./sections/Admin";
import './App.css';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <>
      {!isAdmin ? (
        <>
          <NavigationBar />

          <section id="about">
            <About />
          </section>

          <section id="projects">
            <Project />
          </section>

          <section id="contact">
            <Contact />
          </section>

          <Footer onAdminAccess={() => setIsAdmin(true)} />
        </>
      ) : (
        <Admin onBack={() => setIsAdmin(false)} />
      )}
    </>
  );
}

export default App;