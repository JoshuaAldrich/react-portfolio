import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
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
      <article>
        <div className="mx-auto text-center">
          <h3 className="fs-3">Contact Me</h3>

          <div className="fs-6 text-decoration-none">
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
