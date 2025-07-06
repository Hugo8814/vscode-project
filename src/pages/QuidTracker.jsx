import styles from "../styles/Pfa.module.css";

import darkMode from "../img/darkMode.png";
import overview from "../img/overview.png";
import transactionPage from "../img/transactionPage.png";
import githubSvg from "../components/icons/github.svg";
import linkSvg from "../components/icons/link.svg";

function QuidTracker() {
  const handleClick = () => {
    alert("This project is currently private and not available on GitHub.");
  };
  return (
    <div className={styles.pfa}>
      <p className={styles.title}>Quid Tracker</p>

      <div className={styles.linkBox}>
        <a
          href="https://quidtracker.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          View Live
          <img src={linkSvg} alt="link icon" className={styles.icon} />
        </a>
        <a
          onClick={handleClick}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.github}
        >
          Source Code
          <img src={githubSvg} alt="GitHub icon" className={styles.icon} />
        </a>
      </div>

      <div className={styles.box}>
        <div className={styles.imgContainer}>
          <img
            src={overview}
            alt="QuidTracker dashboard overview"
            className={styles.img}
          />
        </div>
        <ul className={styles.desc}>
          <h4 className={styles.subtitle}>Project Overview</h4>
          <li className={styles.text}>
            QuidTracker is a comprehensive financial management application
            designed to help users track their recurring bills and expenses.
          </li>
          <li className={styles.text}>
            check it out ive implemented a demo mode so you can see it in action
            with out having the hassle of signing up and connecting your bank.
          </li>
          <li className={styles.text}>
            Full-stack (11k lines) application built with React, Node.js
            Express, MongoDB, and integrates TrueLayer&apos;s third-party API
            for secure open banking data.
          </li>
        </ul>
      </div>

      <div className={styles.box}>
        <ul className={styles.desc}>
          <h4 className={styles.subtitle}>Frontend Development</h4>
          <li className={styles.text}>
            Built using React with modern hooks and state management for a
            dynamic user interface.
          </li>
          <li className={styles.text}>
            Responsive design implemented with CSS Grid and Flexbox for optimal
            viewing across all devices.
          </li>
          <li className={styles.text}>
            Clean, intuitive user interface focused on ease of use and
            accessibility.
          </li>
        </ul>
        <img
          src={transactionPage}
          alt="Transaction page display"
          className={styles.img}
        />
      </div>

      <div className={styles.box}>
        <img
          src={darkMode}
          alt="Dark mode feature display"
          className={styles.img}
        />

        <ul className={styles.desc}>
          <h4 className={styles.subtitle}>Key Features</h4>
          <li className={styles.text}>
            Real-time transaction tracking with category-based organization for
            better expense management.
          </li>
          <li className={styles.text}>
            Interactive dashboard with visual charts and financial summaries for
            quick insights.
          </li>
          <li className={styles.text}>
            Dark and light mode support for enhanced user experience and
            accessibility.
          </li>
          <li className={styles.text}>
            Responsive design optimized for desktop, tablet, and mobile devices.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default QuidTracker;
