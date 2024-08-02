/* eslint-disable react/prop-types */
// useLocation from react-router-dom
import Titlebar from "./Titlebar";
import Sidebar from "./SideBar";
import Explorer from "./Explorer";
import Bottombar from "./Bottombar";
import Tabsbar from "./Tabsbar";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Titlebar />
      <div className={styles.main}>
        <Sidebar />
        <Explorer />
        <div style={{ width: "100%" }} className={styles.box}>
          <Tabsbar />
          <main id="main-editor" className={styles.content}>
            {children}
          </main>
        </div>
      </div>
      <Bottombar />
    </>
  );
};

export default Layout;
