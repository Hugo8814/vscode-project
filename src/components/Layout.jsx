// useLocation from react-router-dom
import Titlebar from "./Titlebar";
import Sidebar from "./SideBar";
import Explorer from "./Explorer";
import Bottombar from "./Bottombar";
import Tabsbar from "./Tabsbar";
import styles from "../styles/Layout.module.css";

const Layout = () => {
  return (
    <>
      <Titlebar />
      <div className={styles.main}>
        <Sidebar />
        <Explorer />
        <div style={{ width: "100%" }}>
          <Tabsbar />
        </div>
      </div>
      <Bottombar />
    </>
  );
};

export default Layout;
