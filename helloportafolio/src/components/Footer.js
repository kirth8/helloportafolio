import React from "react";
import styles from "./css/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      
      <div className={styles.footerLeft}>
        © {new Date().getFullYear()} Keyner Manchay
      </div>

      <div className={styles.footerCenter}>
        <a href="https://github.com/kirth8" target="_blank" rel="noopener noreferrer">
          <img src={`${process.env.PUBLIC_URL}/icons/GitHub.png`} alt="GitHub" />
        </a>

        <a href="https://linkedin.com/in/keyner-alexis-manchay-montoya-319aa9211" target="_blank" rel="noopener noreferrer">
          <img src={`${process.env.PUBLIC_URL}/icons/linkedin.png`} alt="LinkedIn" />
        </a>

        <a href="https://www.facebook.com/profile.php?id=100087275829274" target="_blank" rel="noopener noreferrer">
          <img src={`${process.env.PUBLIC_URL}/icons/Facebook.png`} alt="Facebook" />
        </a>

        <a href="mailto:alexnirth@gmail.com">
          <img src={`${process.env.PUBLIC_URL}/icons/Gmail.png`} alt="Email" />
        </a>
      </div>

      <div className={styles.footerRight}>
        <a href={`${process.env.PUBLIC_URL}/CV-KeynerManchay-H.pdf`} download className={styles.cvButton}>
          <img src={`${process.env.PUBLIC_URL}/icons/PDF.png`} alt="PDF" className={styles.pdfIcon} />
          Descargar CV
        </a>
      </div>

    </footer>
  );
}
