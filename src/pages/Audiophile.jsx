import styles from "../styles/Pfa.module.css";
import pfa2 from "../img/pfa2.png";
import login from "../img/login.png";
import Transaction from "../img/Transaction.png";
import githubSvg from "../components/icons/github.svg";
import linkSvg from "../components/icons/link.svg";

function Audiophile() {
    return (
        <div className={styles.pfa}>
            <p className={styles.title}>Personal Financial App</p>

            <div className={styles.linkBox} >
            
            <a href="https://pfa-hugo.netlify.app/" className={styles.link}>
            View Live
              <img src={linkSvg} alt="link logo" className={styles.icon}  />
            </a>
            
            <a href="https://github.com/Hugo8814/PFA"  className={styles.github}>
             Source Code
              <img
                src={githubSvg}
                alt="github logo"
                className={styles.icon}
               
              />
            </a>
            </div>

            <div className={styles.box}>
                <img src={pfa2} alt="Personal Financial App Screenshot" className={styles.img} />
                <ul className={styles.desc}>
                    <h4 className={styles.subtitle}>Overview</h4>
                    <li className={styles.text}>
                        A versatile application designed to help users seamlessly manage and track their personal finances.
                    </li>
                    <li className={styles.text}>
                        Offers features like budgeting, expense tracking, and financial planning through an intuitive interface.
                    </li>
                    <li className={styles.text}>
                        Demonstrates my expertise in front-end development, leveraging modern technologies to deliver a smooth and engaging user experience.
                    </li>
                </ul>
            </div>

            <div className={styles.box}>
                <ul className={styles.desc}>
                    <h4 className={styles.subtitle}>Frontend Development</h4>
                    <li className={styles.text}>
                        Built with React, utilizing advanced concepts like React Hooks, React Router, and Redux for efficient state management.
                    </li>
                    <li className={styles.text}>
                        Designed and styled with Tailwind CSS, implemented based on a Figma.
                    </li>
                </ul>
                <img src={Transaction} alt="Transaction Management Screenshot" className={styles.img} />
            </div>

            <div className={styles.box}>
                <img src={login} alt="Login Page Screenshot" className={styles.img} />
                <ul className={styles.desc}>
                    <h4 className={styles.subtitle}>Backend Development</h4>
                    <li className={styles.text}>
                        The backend is powered by Node.js and Express.js, providing a robust RESTful API for seamless communication with the database.
                    </li>
                    <li className={styles.text}>
                        MongoDB was chosen for its scalability, flexibility, and ability to handle large volumes of semi-structured data effectively.
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Audiophile;
