import { useState } from "react";
import { Link } from "react-router-dom";

import ChevronRight from "../components/icons/ChevronRight";
import styles from "../styles/Folder.module.css";
import folder from "../components/icons/folder.svg";

const projects = [
  {
    name: "OverviewProjects.js",
    path: "/projects",
    icon: "js_icon.svg",
  },
  {
    name: "PersonalFinanceApp.jsx",
    path: "/PersonalFinance",
    icon: "react_icon.svg",
  },
  {
    name: "Audiophile.jsx",
    path: "/Audiophile",
    icon: "react_icon.svg",
  },
  {
    name: "WalfareMC.jsx",
    path: "/WelfareMC",
    icon: "react_icon.svg",
  },
  {
    name: "QuidTracker.jsx",
    path: "/quidtracker",
    icon: "react_icon.svg",
  },
];

const ProjectFolder = () => {
  const [portfolioOpen2, setPortfolioOpen2] = useState(true);

  return (
    <div className={styles.Folder}>
      <div className="styles.Foldericon">
        <input
          type="checkbox"
          className={styles.checkbox}
          id="portfolio-checkbox2"
          checked={portfolioOpen2}
          onChange={() => setPortfolioOpen2(!portfolioOpen2)}
        />

        <label htmlFor="portfolio-checkbox2" className={styles.heading}>
          <ChevronRight
            className={styles.chevron}
            style={portfolioOpen2 ? { transform: "rotate(90deg)" } : {}}
          />
          <div className={styles.Foldericon}>
            <img src={folder} />
          </div>
          Projects
        </label>
        <div
          className={styles.files}
          style={portfolioOpen2 ? { display: "block" } : { display: "none" }}
        >
          {projects.map((item) => (
            <Link to={item.path} key={item.name} className={styles.file}>
              <img
                src={`/${item.icon}`}
                alt={item.name}
                height={18}
                width={18}
              />{" "}
              <p className={styles.filename}>{item.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectFolder;
