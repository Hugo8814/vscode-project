import styles from "../styles/Titlebar.module.css";

const Titlebar = () => {
  return (
    <section className={styles.titlebar}>
      <img
        src="/vscode_icon.svg"
        alt="VSCode Icon"
        height={15}
        width={15}
        className={styles.icon}
      />
      <div className={styles.items}>
        <p>File</p>
        <p>Edit</p>
        <p>View</p>
        <p>Go</p>
        <p>Run</p>
        <p>Terminal</p>
        <p>Help</p>
      </div>
      <p className={styles.title}>Hugo8814 - Visual Studio Code</p>
      <div className={styles.windowButtons}>
        <span className={styles.minimize}></span>
        <span className={styles.maximize}></span>
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          className={styles.close}
        ></a>
      </div>
    </section>
  );
};

export default Titlebar;
