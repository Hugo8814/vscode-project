import styles from "../styles/Pfa.module.css";
import countriesScreenshot from "../img/countryApi.png";
import countryInfoScreenshot from "../img/im2.png";
import countryInfo from "../img/coninfo.png";
import githubSvg from "../components/icons/github.svg";
import linkSvg from "../components/icons/link.svg";

function Countries() {
    return (
        <div className={styles.pfa}>
            <p className={styles.title}>Personal Financial App</p>

            <div className={styles.linkBox}>
                <a
                    href="https://countries-api-hugo.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                >
                    View Live
                    <img src={linkSvg} alt="link icon" className={styles.icon} />
                </a>
                <a
                    href="https://github.com/Hugo8814/rest-countries-api-with-color-theme-switcher-master"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.github}
                >
                    Source Code
                    <img
                        src={githubSvg}
                        alt="GitHub icon"
                        className={styles.icon}
                    />
                </a>
            </div>

            <div className={styles.box}>
                <img
                    src={countriesScreenshot}
                    alt="Countries API project screenshot"
                    className={styles.img}
                />
                <ul className={styles.desc}>
                    <h4 className={styles.subtitle}>Project Overview</h4>
                    <li className={styles.text}>
                        This is a front-end mentor project built with Vanilla JS.
                    </li>
                    <li className={styles.text}>
                        The app utilizes a country information API to fetch data and display it to users.
                    </li>
                    <li className={styles.text}>
                        It's designed to be simple, showcasing my ability to build with Vanilla JavaScript and manage API data.
                    </li>
                </ul>
            </div>

            <div className={styles.box}>
                <ul className={styles.desc}>
                    <h4 className={styles.subtitle}>Frontend Development</h4>
                    <li className={styles.text}>
                        Built using Vanilla JavaScript following the MVC architecture pattern.
                    </li>
                    <li className={styles.text}>
                        Styled using SASS, CSS Grid, and Flexbox for responsive layout.
                    </li>
                </ul>
                <img
                    src={countryInfoScreenshot}
                    alt="Country information display"
                    className={styles.img}
                />
            </div>

            <div className={styles.box}>
            <img
                    src={countryInfo}
                    alt="Country information "
                    className={styles.img}
                />

                <ul className={styles.desc}>
                    <h4 className={styles.subtitle}>Key Features</h4>
                    <li className={styles.text}>
                        Simple API integration to display country data in a clean, responsive interface.
                    </li>
                    <li className={styles.text}>
                        Fully responsive design, optimized for both desktop and mobile views.
                    </li>
                    <li className={styles.text}>
                        Technologies used: HTML5, CSS3, SASS, Vanilla JavaScript, Flexbox, CSS Grid.
                    </li>
                    <li className={styles.text}>
                        Focus on a desktop-first workflow with a mobile-friendly layout.
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Countries;
