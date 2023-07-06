import styles from "../styles/contact.module.css";
import Social from "./social";

export default function Contact() {
  return (
    <div className={styles.stack}>
      <h3 className={styles.heading}>contact</h3>
      <Social iconSize="30px"/>
      <address>cube@gmail.com</address>
    </div>
  );
}
