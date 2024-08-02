import styles from "../styles/Projects.module.css";
import audiophile from "../img/audiophile.png";

function Projects() {
  return (
    <div className={styles.container}>
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
