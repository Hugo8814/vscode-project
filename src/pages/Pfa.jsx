
import styles from "../styles/Pfa.module.css";
import pfa2 from "../img/pfa2.png";

import login from "../img/login.png";
import Transaction from "../img/Transaction.png";
function Pfa() {
    return (
        <div className={styles.pfa}>

            <p className={styles.title}>Personal Financial App</p>
            <div className={styles.box}>
                <img src={pfa2} alt="" className={styles.img} />
                <ul className={styles.desc}>
                    <h4 className={styles.subtitle}>What is it?</h4>
                    <li className={styles.text}>Comprehensive tool designed to help users manage and track their personal finances efficiently</li>
                    <li className={styles.text}>User-friendly interface allows for easy budgeting, expense tracking, and financial planning</li>
                    <li className={styles.text}>Project showcases  my front-end development skills, utilizing modern technologies to create a seamless and intuitive user experience</li>
                </ul>
            </div>


            <div className={styles.box}>
                
                <ul className={styles.desc}>
                    <h4 className={styles.subtitle}>Frontend</h4>
                    <li className={styles.text}>The frontend is built with React, utilizing React Hooks , React Router and Redux for state management.</li>
                    <li className={styles.text}>The UI/UX is styled with Tailwind CSS, and was built from a figma design.</li>
                </ul>
                <img src={Transaction} alt="" className={styles.img} />
            </div>





            <div className={styles.box}>
            <img src={login} alt="" className={styles.img} />
                
                <ul className={styles.desc}>
                    <h4 className={styles.subtitle}>Backend</h4>
                    <li className={styles.text}>The server-side of the application is built with Node.js and Express.js, providing a RESTful API to interact with the MongoDB database.</li>
                    <li className={styles.text}>MongoDB was chosen as the database due to its scalability, ease of use, and ability to store large amounts of semi-structured data.</li>
                </ul>
             
            </div>

            
        </div>
    )
}

export default Pfa
