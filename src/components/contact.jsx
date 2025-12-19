import './contact.css'
import emailjs from "emailjs-com";
import {useRef} from "react";


function Contact() {
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID, // replace with your Service ID
      import.meta.env.VITE_TEMPLATE_ID, // replace with your Template ID
      form.current,
      import.meta.env.VITE_PUBLIC_KEY // replace with your Public Key
    ).then(
      (result) => {
        console.log(result.text);
        alert("Message sent successfully!");
        form.current.reset(); // clear the form
      },
      (error) => {
        console.log(error.text);
        alert("Oops, something went wrong.");
      }
    );
  };


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
          <form className="content" ref={form} onSubmit={handleSubmit}>
            <textarea name="user_email" className="email-content" placeholder={"Your Email"} required={true}></textarea>
            <textarea name="message" className="message-content" placeholder={"Your Message"}
                      required={true}></textarea>
            <button type="submit" className="button2 b-green rot-135">Submit</button>
          </form>
        </div>
    </section>

);
}

export default Contact;