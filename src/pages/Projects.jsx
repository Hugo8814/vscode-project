import styles from "../styles/Projects.module.css";

import audiophile from "../img/audiophile.png";
import githubSvg from "../components/icons/github.svg";
import linkSvg from "../components/icons/link.svg";
//import countryApi from "../img/countryApi.png";
import jsSVG from "../components/icons/js.svg";
import sassSVG from "../components/icons/sass.svg";
import htmlSVG from "../components/icons/html-5.svg";
import cssSVG from "../components/icons/css-3.svg";
import reactSVG from "../components/icons/react.svg";
import reduxSVG from "../components/icons/redux.svg";
import tailwindSVG from "../components/icons/tailwind.svg";
import nodejsSVG from "../components/icons/nodejs.svg";
import expressSVG from "../components/icons/express.svg";
import mongoSVG from "../components/icons/mongo.svg";

import img2 from "../img/im2.png";
import wmc from "../img/wmc.png";
import pfa from "../img/pfa.png";

function Projects() {
  return (
    <div className={styles.container}>
      <div className={styles.projects}>
        <div className={styles.title}>Personal finance app 🏆</div>

        <div className={styles.box}>
          <img
            className={`${styles.projectsImg} `}
            src={pfa}
            alt="project img"
          />

          <div className={styles.overlay}>
            <a href="https://pfa-hugo.netlify.app/" className="btn">
              <img src={linkSvg} alt="link logo" className={styles.link} />
            </a>
            <a href="https://github.com/Hugo8814/WMC" className="btn">
              <img
                src={githubSvg}
                alt="github logo"
                className={styles.github}
              />
            </a>
          </div>
        </div>
        <div className={styles.skillsGrid}>
          <div className={styles.skills}>
            <img className={styles.skillsimg} src={htmlSVG} alt="" />
          </div>
          <div className={styles.skills}>
            <img className={styles.skillsimg} src={cssSVG} alt="" />
          </div>
          <div className={styles.skills}>
            <img className={styles.skillsimg} src={tailwindSVG} alt="" />
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
            <img className={styles.skillsimg} src={nodejsSVG} alt="" />
          </div>
          <div className={styles.skills}>
            <img className={styles.skillsimg} src={expressSVG} alt="" />
          </div>

          <div className={styles.skills}>
            <img className={styles.skillsimg} src={mongoSVG} alt="" />
          </div>
         
        </div>
      </div>

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
            <a href="https://github.com/Hugo8814/audiophile" className="btn">
              <img
                src={githubSvg}
                alt="github logo"
                className={styles.github}
              />
            </a>
          </div>
        </div>
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
        </div>
      </div>
      <div className={styles.projects}>
        <div className={styles.title}>Walfare MC</div>
        <div className={styles.box}>
          <img
            className={`${styles.projectsImg} `}
            src={wmc}
            alt="project img"
          />
          <div className={styles.overlay}>
            <a href="https://www.welfaremc.co.uk/" className="btn">
              <img src={linkSvg} alt="link logo" className={styles.link} />
            </a>
            <a href="https://github.com/Hugo8814/WMC" className="btn">
              <img
                src={githubSvg}
                alt="github logo"
                className={styles.github}
              />
            </a>
          </div>
        </div>
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
        </div>
      </div>
      <div className={styles.projects}>
        <div className={styles.title}>Countries Api</div>
        <div className={styles.box}>
          <img className={styles.projectsImg} src={img2} alt="project img" />
          <div className={styles.overlay}>
            <a href="https://countries-api-hugo.netlify.app/" className="btn">
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
        <div className={styles.skillsGrid}>
          <div className={styles.skills}>
            <img className={styles.skillsimg} src={htmlSVG} alt="" />
          </div>
          <div className={styles.skills}>
            <img className={styles.skillsimg} src={cssSVG} alt="" />
          </div>

          <div className={styles.skills}>
            <img className={styles.skillsimg} src={jsSVG} alt="" />
          </div>
          <div className={styles.skills}>
            <img className={styles.skillsimg} src={sassSVG} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
