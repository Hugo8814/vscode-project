import styles from "../styles/Projects.module.css";
import audiophile from "../img/audiophile.png";
import { useState } from "react";

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
                Link 1
              </a>
              <a href="#" className="btn">
                Link 2
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
