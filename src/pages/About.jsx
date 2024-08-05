import styles from "../styles/about.module.css";

function About() {
  const htmlCode = `
<span class="${styles.doctype}">&lt;!DOCTYPE html&gt;</span>
<span class="${styles.tag}">&lt;html</span> <span class="${styles["attr-name"]}">lang</span>=<span class="${styles["attr-value"]}">&quot;en&quot;</span><span class="${styles.tag}">&gt;</span>
<span class="${styles.tag}">&lt;body&gt;</span>
    <span class="${styles.tag}">&lt;title&gt;</span><span class="${styles.plain}">Hugo Pereira</span><span class="${styles.tag}">&lt;/title&gt;</span>
    <span class="${styles.tag}">&lt;main&gt;</span>
        <span class="${styles.tag}">&lt;p&gt;</span><span class="${styles.plain}">
           Hello! I’m Hugo Pereira, a 20-year-old self-taught front-end developer
           born in Brazil and raised in the UK, where I’ve been living for the past
           14 years. I embarked on my web development journey in March 2023 and 
           instantly developed a deep passion for coding. As a self-taught developer,
           I’ve built a solid foundation in HTML, CSS, JavaScript, React, and SASS.</span>
        <span class="${styles.tag}">&lt;/p&gt;</span>
        <span class="${styles.tag}">&lt;p&gt;</span><span class="${styles.plain}">
           I specialize in creating responsive user-friendly web applications and
           thrive on taking on new challenges to push my boundaries. My dream is 
           to secure a role as a front-end developer where I can contribute to 
           real-world projects and continue growing in my field. While I’m keen
           to eventually explore backend development, my current focus is on mastering
           front-end technologies. For me, coding isn’t just a career aspiration,
           it’s a passion I’m committed to pursuing for the long term.</span>
        <span class="${styles.tag}">&lt;/p&gt;</span>
    <span class="${styles.tag}">&lt;/main&gt;</span>
<span class="${styles.tag}">&lt;/body&gt;</span>
<span class="${styles.tag}">&lt;/html&gt;</span>
`;

  return (
    <div>
      <pre className={styles.pre}>
        <code>
          {htmlCode
            .trim()
            .split("\n")
            .map((line, index) => (
              <div key={index} className={styles.lineContainer}>
                <span className={styles.lineNumber}>{index + 1}</span>
                <span dangerouslySetInnerHTML={{ __html: line }} />
              </div>
            ))}
        </code>
      </pre>
    </div>
  );
}

export default About;
