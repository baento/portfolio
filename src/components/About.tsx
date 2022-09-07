import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faDownload } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Stack } from "react-bootstrap";

import "./About.scss";
import Divider from "./Divider";

const About = (): JSX.Element => (
  <Stack className="about-bar">
    <div className="about-header">
      <div className="about-avatar">
        <img src="avatar.png" alt="Antoine Balieu" />
      </div>
      <h5 className="name">Antoine Balieu</h5>
      <span>
        Software Engineer<br/>
        AXA France
      </span>
    </div>
    <div className="scroll-frame">
      <div className="info">
        <ul>
          <li>
            <h6>Niveau d'études :</h6>
            <span>Bac +5</span>
          </li>
          <li>
            <h6>Localisation :</h6>
            <span>Lille / Valenciennes</span>
          </li>
          <li>
            <h6>Permis B</h6>
          </li>
        </ul>
      </div>
      <Divider />
      <div className="list">
        <h5 className="title">Langages</h5>
        <ul>
          <li>
            <FontAwesomeIcon icon={faCheck} />
            Java
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} />
            C/C++
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} />
            HTML / Javascript / CSS
          </li>
        </ul>
      </div>
      <Divider />
      <div className="list">
        <h5 className="title">Frameworks et outils</h5>
        <ul>
          <li>
            <FontAwesomeIcon icon={faCheck} />
            Git
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} />
            Spring Boot
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} />
            Angular, Vue, React
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} />
            C# .NET
          </li>
        </ul>
      </div>
      <Divider />
      <div className="downloadcv">
        <a href="cv.pdf">
          <h6>
            <FontAwesomeIcon icon={faDownload} />
            Télécharger le CV
          </h6>
        </a>
      </div>
    </div>
    <div className="about-socials">
      <a href="https://www.linkedin.com/in/antoine-balieu">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://github.com/baento">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  </Stack>
);

export default About;
