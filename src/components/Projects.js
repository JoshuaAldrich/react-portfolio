import classes from "../styles/projects.module.css";
import reactImg from "../images/React.jpg";
import horiseonImg from "../images/horiseon.png";
import runbuddyImg from "../images/runbuddy.PNG";
import brainyImg from "../images/UpdatedHome.png";
import gameroomImg from "../images/theGameRoom.png";
import ddtenImg from "../images/ddten.png";

function Projects() {
  const projects = [
    {
      name: "Coming Soon",
      description: "New Projects Built with React.js",
      image: reactImg,
      link: "https://github.com/JoshuaAldrich",
    },
    {
      name: "Horiseon",
      description: "SEO website",
      image: horiseonImg,
      link: "https://github.com/JoshuaAldrich/Horiseon-Accessibility-changes",
    },
    {
      name: "Run Buddy",
      description: "Sign up for a personal trainer",
      image: runbuddyImg,
      link: "https://github.com/JoshuaAldrich/run-buddy",
    },
    {
      name: "Brainy Recipes",
      description: "Find Recipes based on ingredients",
      image: brainyImg,
      link: "https://github.com/JoshuaAldrich/brainy-badgers-JA",
    },
    {
      name: "The Game Room",
      description: "Interactive App with Games built in JS",
      image: gameroomImg,
      link: "https://github.com/JoshuaAldrich/The-Game-Room",
    },
    {
      name: "Coming Soon",
      description: "Interactive Webpage for current employer",
      image: ddtenImg,
      link: "https://www.constructionjournal.com/companies/details/pages/DDTEN-LLC-1163821.html",
    },
  ];

  return (
    <>
      <h2 className="text-center p-3">Projects</h2>
      <div className={classes.projects}>
        {projects.map((project) => {
          return (
            <div className={classes.project}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank">
                <img src={project.image} />
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Projects;
