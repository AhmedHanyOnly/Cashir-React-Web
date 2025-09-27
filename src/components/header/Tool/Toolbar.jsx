import User from "./User";
import DateTime from "./DateTime";
import styles from "../header.module.css";

export function Toolbar() {
  return (
    <div className={styles.toolbar}>
      <DateTime />
      <User />
    </div>
  );
}
