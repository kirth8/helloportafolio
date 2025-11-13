import { Link } from "react-router-dom";
import styles from "./css/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.container}>
      <Link className={styles.link} to="/">Home</Link>
      <Link className={styles.link} to="/projects">Proyectos</Link>
      <Link className={styles.link} to="/about" >Sobre mí</Link>
      <Link className={styles.link} to="/contact">Contacto</Link>
    </nav>
  );
}