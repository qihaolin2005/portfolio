import './contact.css'
function Contact() {
  return (
  <section>
    <h1>Contact Me</h1>
    <div className="contact-me">
      <div className="sun"></div>
      <div className="waves-wrapper">
        <div className="wave-01"></div>
        <div className="wave-02"></div>
        <div className="wave-03"></div>
      </div>
      <div className="content">
        <textarea className="email-content" placeholder={"Your Email"}></textarea>
        <textarea className="message-content" placeholder={"Your Message"}></textarea>
        <a href="http://themonkey.co" className="button2 b-green rot-135">Submit</a>
      </div>
    </div>
  </section>

  );
}

export default Contact;