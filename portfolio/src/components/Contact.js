import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className="footer">
      <h3 className="mx-2">Contact Me</h3>
      <section id="contact">
     
        <p>
          <a href="mailto:karunapawar150@gmail.com">
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ color: "#78909C", marginRight: "5px" }}
            />
          </a>
        </p>
        <p >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/karuna-pawar-268a65237/"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ color: "#78909C", marginRight: "5px" }}
            />
          </a>
        </p>
        <p>
          <a target="_blank" href="https://www.instagram.com/karunapawar8050/">
            <FontAwesomeIcon icon={faInstagram} style={{ color: "#78909C" }} />
          </a>
        </p>
        <p>
          <a target="_blank" href="https://www.facebook.com/karuna.pawar.2022/">
          <FontAwesomeIcon icon={faFacebook} style={{ color: "#78909C" }} />
          </a>
        </p>
        <p>
          <a target="_blank" href="https://github.com/Karunapawar">
          <FontAwesomeIcon icon={faGithub} style={{ color: "#78909C" }} />
          </a>
        </p>
      </section>
      <footer className="mx-2">
         <p >© 2024 Karuna Pawar. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
