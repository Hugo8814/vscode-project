import styles from "../styles/Projects.module.css";
import audiophile from "../img/audiophile.png";
import { useState } from "react";
import githubSvg from "../components/icons/github.svg";
import linkSvg from "../components/icons/link.svg";

function Projects() {
  const [hover, setHover] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.projects}>
        <div className={styles.title}>Audiophile e-com</div>
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={styles.box}
        >
          <img
            className={`${styles.projectsImg} ${hover ? styles.blur : ""}`}
            src={audiophile}
            alt="project img"
          />
          {hover && (
            <div className={styles.overlay}>
              <a href="#" className="btn">
                <img src={linkSvg} alt="github logo" className={styles.link} />
              </a>
              <a href="#" className="btn">
                <img
                  src={githubSvg}
                  alt="github logo"
                  className={styles.github}
                />
              </a>
            </div>
          )}
        </div>
      </div>

      <div className={styles.projects}>
        <div className={styles.title}>Audiophile e-com</div>
        <img
          className={styles.projectsImg}
          src={audiophile}
          alt="project img"
        />
      </div>
      <div className={styles.projects}>
        <div className={styles.title}>Audiophile e-com</div>
        <img
          className={styles.projectsImg}
          src={audiophile}
          alt="project img"
        />
      </div>
      <div className={styles.projects}>
        <div className={styles.title}>Audiophile e-com</div>
        <img
          className={styles.projectsImg}
          src={audiophile}
          alt="project img"
        />
      </div>
      <div className={styles.projects}>
        <div className={styles.title}>Audiophile e-com</div>
        <img
          className={styles.projectsImg}
          src={audiophile}
          alt="project img"
        />
      </div>
      <div className={styles.projects}>
        <div className={styles.title}>Audiophile e-com</div>
        <img
          className={styles.projectsImg}
          src={audiophile}
          alt="project img"
        />
      </div>
    </div>
  );
}

export default Projects;
