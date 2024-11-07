import styles from "../styles/skills.module.css";
import jsimg from "../img/js.png";
import jsUdemy from "../img/jsUdemy.jpg";

import jsSVG from "../components/icons/js.svg";
import sassSVG from "../components/icons/sass.svg";
import htmlSVG from "../components/icons/html-5.svg";
import cssSVG from "../components/icons/css-3.svg";
import reactSVG from "../components/icons/react.svg";
import gitSVG from "../components/icons/git.svg";
import sassCert from "../img/sassCert.jpg";
import reduxSVG from "../components/icons/redux.svg";
import tailwindSVG from "../components/icons/tailwind.svg";
function Skills() {
  return (
    <div className={styles.skillsPage}>
      <div className={styles.skillsTitle}>Skills</div>
      <div className={styles.skillsGrid}>
        <div className={styles.skills}>
          <img className={styles.skillsimg} src={htmlSVG} alt="" />
        </div>
        <div className={styles.skills}>
          <img className={styles.skillsimg} src={cssSVG} alt="" />
        </div>
        <div className={styles.skills}>
          <img className={styles.skillsimg} src={sassSVG} alt="" />
        </div>
        <div className={styles.skills}>
          <img className={styles.skillsimg} src={jsSVG} alt="" />
        </div>

        <div className={styles.skills}>
          <img className={styles.skillsimg} src={reactSVG} alt="" />
        </div>

        <div className={styles.skills}>
          <img className={styles.skillsimg} src={reduxSVG} alt="" />
        </div>
        <div className={styles.skills}>
          <img className={styles.skillsimg} src={tailwindSVG} alt="" />
        </div>
        <div className={styles.skills}>
          <img className={styles.skillsimg} src={gitSVG} alt="" />
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
          <img className={styles.certsimg} src={sassCert} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
