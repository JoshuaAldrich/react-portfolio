import Nav from "./Nav";
import About from "./About";
import Home from "./Home";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Nav />

      <div className="pageContainer">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
      <article id="contact" class="contact-me">
        <div class="container">
          <h2>Contact Me</h2>

          <div class="contactme">
            <p>
              <a href="tel:407.670.4797">407-670-4797</a>
            </p>
            <p>
              <a href="mailto:joshuataldrich@gmail.com">
                joshuataldrich@gmail.com
              </a>
            </p>
            <p>
              <a href="https://github.com/JoshuaAldrich" target="blank">
                Github
              </a>
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/joshua-aldrich-4924b323b/"
                target="blank"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </article>
    </>
  );
};

export default App;
