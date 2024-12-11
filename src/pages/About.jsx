import { useState, useEffect } from "react";
import styles from "../styles/about.module.css";
import Htmltext from "../components/Htmltext";

function About() {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 1600);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 1600);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const htmlCodeBefore = `
<span class="${styles.doctype}">&lt;!DOCTYPE html&gt;</span>
<span class="${styles.tag}">&lt;html</span> <span class="${styles["attr-name"]}">lang</span>=<span class="${styles["attr-value"]}">&quot;en&quot;</span><span class="${styles.tag}">&gt;</span>
<span class="${styles.tag}">&lt;body&gt;</span>
    <span class="${styles.tag}">&lt;title&gt;</span><span class="${styles.plain}">Hugo Pereira</span><span class="${styles.tag}">&lt;/title&gt;</span>
    <span class="${styles.tag}">&lt;main&gt;</span>
`;

  const htmlCodeAfter = `
    <span class="${styles.tag}">&lt;/main&gt;</span>
<span class="${styles.tag}">&lt;/body&gt;</span>
<span class="${styles.tag}">&lt;/html&gt;</span>
`;

  return (
    <div>
      {isWideScreen ? (
        <Htmltext /> // Display the Htmltext component for screens 1600px and wider
      ) : (
        <pre className={styles.pre}>
          <code>
            {htmlCodeBefore
              .trim()
              .split("\n")
              .map((line, index) => (
                <div key={index} className={styles.lineContainer}>
                  <span className={styles.lineNumber}>{index + 1}</span>
                  <span
                    className={styles.code}
                    dangerouslySetInnerHTML={{ __html: line }}
                  />
                </div>
              ))}
            <div className={styles.lineContainer}>
              <span className={styles.lineNumber}>7</span>
              <span className={styles.tag}>&lt;p&gt;</span>
              <span className={styles.plain}>
                Hello! I’m Hugo Pereira, a 21-year-old self-taught front-end
                developer born in Brazil and raised in the UK, where I’ve been
                living for the past 15 years. I embarked on my web development
                journey in March 2023 and instantly developed a deep passion for
                coding. As a self-taught developer, I’ve built a solid
                foundation in HTML, CSS, JavaScript, React, and SASS.
              </span>
              <span className={styles.tag}>&lt;/p&gt;</span>
            </div>
            <div className={styles.lineContainer}>
              <span className={styles.lineNumber}>8</span>
              <span className={styles.tag}>&lt;p&gt;</span>
              <span className={styles.plain}>
                I specialize in creating responsive user-friendly web
                applications and thrive on taking on new challenges to push my
                boundaries. My dream is to secure a role as a front-end
                developer where I can contribute to real-world projects and
                continue growing in my field. While I’m keen to eventually
                explore backend development, my current focus is on mastering
                front-end technologies. For me, coding isn’t just a career
                aspiration, it’s a passion I’m committed to pursuing for the
                long term.
              </span>
              <span className={styles.tag}>&lt;/p&gt;</span>
            </div>
            {htmlCodeAfter
              .trim()
              .split("\n")
              .map((line, index) => (
                <div key={index + 9} className={styles.lineContainer}>
                  <span className={styles.lineNumber}>{index + 9}</span>
                  <span
                    className={styles.code}
                    dangerouslySetInnerHTML={{ __html: line }}
                  />
                </div>
              ))}
          </code>
        </pre>
      )}
    </div>
  );
}

export default About;
