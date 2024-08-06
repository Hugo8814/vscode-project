import styles from "../styles/skills.module.css";
import jsimg from "../img/js.png";
import jsUdemy from "../img/jsUdemy.jpg";
import jsicon from "../img/jsicon.png";

function Skills() {
  return (
    <div className={styles.skillsPage}>
      <div className={styles.skillsTitle}>Skills</div>
      <div className={styles.skillsGrid}>
        <div className={styles.skills}>
          <img className={styles.skillsimg} src={jsicon} alt="" />
        </div>
      </div>

      <div className={styles.skillsTitle}>Certs</div>
      <div className={styles.certsGrid}>
        <div className={styles.certs}>
          <img className={styles.certsimg} src={jsimg} alt="" />
        </div>
        <div className={styles.certs}>
          <img className={styles.certsimg} src={jsUdemy} alt="" />
        </div>
        <div className={styles.certs}>
          <img className={styles.certsimg} src={jsimg} alt="" />
        </div>
        <div className={styles.certs}>
          <img className={styles.certsimg} src={jsimg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
