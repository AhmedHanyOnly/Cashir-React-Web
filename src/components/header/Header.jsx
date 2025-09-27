import { Toolbar } from "./Tool/Toolbar";
import { NavBar } from "./Nav/Navbar";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Toolbar />
      <NavBar />
    </header>
  );
}
