import styles from "../styles/Pfa.module.css";
import AudiophileHome from "../img/audiophile.png";
import Cart from "../img/cart.png";
import payment from "../img/payment.png";
import githubSvg from "../components/icons/github.svg";
import linkSvg from "../components/icons/link.svg";

function Audiophile() {
    return (
        <div className={styles.pfa}>
            <h1 className={styles.title}>Audiophile</h1>

            <div className={styles.linkBox}>
                <a href="https://audiophile-hugo.netlify.app/" className={styles.link} target="_blank" rel="noopener noreferrer">
                    View Live
                    <img src={linkSvg} alt="Live site link" className={styles.icon} />
                </a>
                <a href="https://github.com/Hugo8814/audiophile" className={styles.github} target="_blank" rel="noopener noreferrer">
                    Source Code
                    <img src={githubSvg} alt="GitHub repository link" className={styles.icon} />
                </a>
            </div>

            <section className={styles.box}>
                <img src={AudiophileHome} alt="Audiophile homepage" className={styles.img} />
                <div>
                    <h2 className={styles.subtitle}>Overview</h2>
                    <ul className={styles.desc}>
                        <li className={styles.text}>
                            Audiophile is an e-commerce frontend mentor challenge designed for buying and selling audio equipment.
                        </li>
                        <li className={styles.text}>
                            Features include a functional shopping cart and detailed product pages showcasing high-quality audio equipment.
                        </li>
                        <li className={styles.text}>
                            The platform dynamically renders images based on screen size to ensure an optimized experience across devices.
                        </li>
                    </ul>
                </div>
            </section>

            <section className={styles.box}>
                <div>
                    <h2 className={styles.subtitle}>Frontend Development</h2>
                    <ul className={styles.desc}>
                        <li className={styles.text}>
                            Built using React with modern tools like React Router for navigation and the Context API for state management.
                        </li>
                        <li className={styles.text}>
                            Designed with SASS to ensure maintainable, scalable, and visually appealing styles, based on a Figma design.
                        </li>
                        <li className={styles.text}>
                            Includes a responsive layout with optimized image rendering for different screen sizes.
                        </li>
                    </ul>
                </div>
                <img src={Cart} alt="Audiophile shopping cart interface" className={styles.img} />
            </section>

            <section className={styles.box}>
                <img src={payment} alt="Audiophile form validation example" className={styles.img} />
                <div>
                    <h2 className={styles.subtitle}>User Interaction</h2>
                    <ul className={styles.desc}>
                        <li className={styles.text}>
                            The platform includes interactive features such as form validation to enhance the user experience.
                        </li>
                        <li className={styles.text}>
                            The checkout process is designed to demonstrate the flow of an e-commerce payment system, showcasing a clean and intuitive design.
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default Audiophile;
