import styles from "../styles/Projects.module.css";
import audiophile from "../img/audiophile.png";
import githubSvg from "../components/icons/github.svg";
import linkSvg from "../components/icons/link.svg";
//import countryApi from "../img/countryApi.png";
import img from "../img/img.png";
import img2 from "../img/im2.png";

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
            <a href="https://audiophile-hugo.netlify.app/" className="btn">
              <img src={linkSvg} alt="link logo" className={styles.link} />
            </a>
            <a
              href="https://github.com/Hugo8814/vscode-project"
              className="btn"
            >
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
          <img className={styles.projectsImg} src={img2} alt="project img" />
          <div className={styles.overlay}>
            <a href="" className="btn">
              <img src={linkSvg} alt="link logo" className={styles.link} />
            </a>
            <a
              href="https://github.com/Hugo8814/rest-countries-api-with-color-theme-switcher-master"
              className="btn"
            >
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
        <div className={styles.title}>Coming soon</div>
        <div className={styles.box}>
          <img
            className={`${styles.projectsImg} ${styles.bulr}`}
            src={img}
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
