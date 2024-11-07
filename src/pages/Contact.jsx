import styles from "../styles/ContactCode.module.css";

const contactItems = [
  {
    social: "email",
    link: "hugopereira8814@gmail.com",
    href: "mailto:hugopereira8814@gmail.com",
  },
  {
    social: "github",
    link: "Hugo8814",
    href: "https://github.com/Hugo8814",
  },
  {
    social: "linkedin",
    link: "Hugo Pereira",
    href: "https://www.linkedin.com/in/hugo-pereira-4800322b5/",
  },

  {
    social: "LeetCode",
    link: "hugopereira8814",
    href: "https://leetcode.com/u/hugopereira8814/",
  },
  {
    social: "HackerRank",
    link: "@hugopereira8814",
    href: "https://www.hackerrank.com/profile/hugopereira8814",
  },
];

function Contact() {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
}

export default Contact;


/////