import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/">Joshua Aldrich</Link>
      <Link to="/about">About Me</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/resume">Resume</Link>
    </nav>
  );
};

export default Nav;
