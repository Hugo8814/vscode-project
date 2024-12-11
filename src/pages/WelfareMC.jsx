import styles from "../styles/Pfa.module.css";
import wmc from "../img/wmc.png";
import reviews from "../img/reviews.png";
import map from "../img/map.png";

import githubSvg from "../components/icons/github.svg";
import linkSvg from "../components/icons/link.svg";

function WelfareMC() {
    return (
        <div className={styles.pfa}>
            <h1 className={styles.title}>Welfare Massage Centre</h1>

            <div className={styles.linkBox}>
                <a href="https://www.welfaremc.co.uk/" className={styles.link} target="_blank" rel="noopener noreferrer">
                    View Live
                    <img src={linkSvg} alt="Live site link" className={styles.icon} />
                </a>
                <a href="https://github.com/Hugo8814/audiophile" className={styles.github} target="_blank" rel="noopener noreferrer">
                    Source Code
                    <img src={githubSvg} alt="GitHub repository link" className={styles.icon} />
                </a>
            </div>

            <section className={styles.box}>
                <img src={wmc} alt="Welfare Massage Centre homepage" className={styles.img} />
                <div>
                    <h2 className={styles.subtitle}>Overview</h2>
                    <ul className={styles.desc}>
                        <li className={styles.text}>
                            A clean, visually appealing website designed by me using Figma, aimed at providing essential information for the business.
                        </li>
                        <li className={styles.text}>
                            Guides users to book appointments via Fresha while highlighting services, opening hours, and contact details.
                        </li>
                        <li className={styles.text}>
                            Fully responsive design, ensuring a seamless experience on all devices, from desktops to smartphones.
                        </li>
                        
                        
                    </ul>
                </div>
            </section>

            <section className={styles.box}>
                <div>
                    <h2 className={styles.subtitle}>Frontend Development</h2>
                    <ul className={styles.desc}>
                        <li className={styles.text}>
                            Built using React and styled with SASS for a scalable and maintainable design system.
                        </li>
                        <li className={styles.text}>
                            Reviews were initially intended to use Google Reviews API, but due to limitations in the free plan, data was hosted in a JSON file and fetched as a simulated API.
                        </li>
                        <li className={styles.text}>
                            Designed to provide a straightforward and informative experience for potential customers.
                        </li>
                        <li className={styles.text}>
                            The website is fully responsive, ensuring smooth navigation and readability across all screen sizes.
                        </li>
                    </ul>
                </div>
                <img src={reviews} alt="Welfare Massage Centre reviews section" className={styles.img} />
            </section>

            <section className={styles.box}>
                <img src={map} alt="Google Maps integration on Welfare Massage Centre" className={styles.img} />
                <div>
                    <h2 className={styles.subtitle}>User Interaction</h2>
                    <ul className={styles.desc}>
                        <li className={styles.text}>
                            Integrated Google Maps API to provide an interactive map, helping users locate the business easily.
                        </li>
                        <li className={styles.text}>
                            Ensures visitors have quick access to directions and other location-based details.
                        </li>
                        <li className={styles.text}>
                            The site focuses on simplicity and ease of use to enhance user experience.
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default WelfareMC;
