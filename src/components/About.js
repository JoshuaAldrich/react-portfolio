import classes from "../styles/about.module.css";
import profilePic from "../images/ProfilePicture.jpg";

const About = () => {
  return (
    <div className={classes.about}>
      <div>
        <img src={profilePic} alt="Hello, I'm Josh" />
      </div>
      <p>
        Hello my name is Joshua Aldrich. I have had a passion for coding ever
        since I started my college degree. I ended up taking a break to focus on
        working for a couple years but decided to get back into it once I saved
        enough to join the UCF coding bootcamp. I have constantly watched videos
        on youtube and the passion for coding hasn't left so I'm glad to take
        this opportunity to make coding a career path.
      </p>
    </div>
  );
};

export default About;
