import { Back } from "../../back/Back";
import "./contact.css";

export default function Contact() {
  return (
    <>
      <Back title="Contact Me" />
      <div className="contact">
        <div className="conimg"></div>
        <div className="left">
          <a href="https://www.linkedin.com/in/palak-gupta-90674b238">
            <i className="contacticon fa-brands fa-linkedin"></i>
          </a>
          <i className="contacticon fa-brands fa-instagram"></i>
          <a href="">
            <i className="contacticon fa-solid fa-envelope"></i>
          </a>
          <a href="https://github.com/plkgupta">
            <i className="contacticon fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </>
  );
}
