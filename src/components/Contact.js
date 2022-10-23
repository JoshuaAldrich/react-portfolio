import classes from "../styles/contact.module.css";

function Contact() {
  return (
    <div>
      <form className={classes.form}>
        <label>Name</label>
        <input />
        <label>Email Address:</label>
        <input />
        <label>Message</label>
        <textarea rows={10}></textarea>
      </form>
    </div>
  );
}

export default Contact;
