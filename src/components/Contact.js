import classes from "../styles/contact.module.css";

function Contact() {
  return (
    <div>
      <h3 className="fs-3">Contact Form:</h3>
      <form className={classes.form}>
        <label>Name:</label>
        <input />
        <label>Email Address:</label>
        <input />
        <label>Message:</label>
        <textarea rows={10}></textarea>
        <button type="button" class="btn btn-secondary">
          Submit Form
        </button>
      </form>
    </div>
  );
}

export default Contact;
