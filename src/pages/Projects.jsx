import styles from "../styles/Projects.module.css";
import audiophile from "../img/audiophile.png";
import githubSvg from "../components/icons/github.svg";
import linkSvg from "../components/icons/link.svg";
import countryApi from "../img/countryApi.png";

function Projects() {
  return (
    <div className={styles.container}>
      <div className={styles.projects}>
        <div className={styles.title}>Audiophile e-com</div>
        <div className={styles.box}>
          <img
            className={styles.projectsImg}
            src={audiophile}
            alt="project img"
          />
          <div className={styles.overlay}>
            <a href="#" className="btn">
              <img src={linkSvg} alt="link logo" className={styles.link} />
            </a>
            <a href="#" className="btn">
              <img
                src={githubSvg}
                alt="github logo"
                className={styles.github}
              />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.projects}>
        <div className={styles.title}>Countries Api</div>
        <div className={styles.box}>
          <img
            className={styles.projectsImg}
            src={countryApi}
            alt="project img"
          />
          <div className={styles.overlay}>
            <a href="#" className="btn">
              <img src={linkSvg} alt="link logo" className={styles.link} />
            </a>
            <a href="#" className="btn">
              <img
                src={githubSvg}
                alt="github logo"
                className={styles.github}
              />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.projects}>
        <div className={styles.title}>Countries Api</div>
        <div className={styles.box}>
          <img
            className={styles.projectsImg}
            src={countryApi}
            alt="project img"
          />
          <div className={styles.overlay}>
            <a href="#" className="btn">
              <img src={linkSvg} alt="link logo" className={styles.link} />
            </a>
            <a href="#" className="btn">
              <img
                src={githubSvg}
                alt="github logo"
                className={styles.github}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
