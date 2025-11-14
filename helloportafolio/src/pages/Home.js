import React from "react";
import styles from "../components/css/Home.module.css"
import miFoto from "../assets/perfil.png"

export default function Home() {
  return (
    
    <div className= {styles.container}>

      <section className= {styles.hero}>
          <h1 className= {styles.title}>¡Hello!, I'm Keyner Manchay</h1>
        
          <img src={miFoto} alt="Mi foto" className={styles.fotoPerfil} />
        
      </section>
      
      

      <section className= {styles.content}>
          <p>Programador full stack junior con dos años de experiencia en el desarrollo 
            y diseño de aplicaciones web dinámicas y escalables. Conocimiento en 
            tecnologías como React, Node.js, Flask, Django y bases de datos 
            SQL/NoSQL. En constante aprendizaje y comprometido con seguir las
             mejores prácticas de desarrollo. </p>
      </section>
      <section className={styles.habilidades}>
        <h2>Tecnologías Utilizadas</h2>

        <div className={styles.gridHabilidades}>
          <div className={styles.skill}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
            <p>React</p>
          </div>
          <div className={styles.skill}>
             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
            <p>Node.js</p>
          </div>
          <div className={styles.skill}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
            <p>MongoDB</p>
          </div>
          <div className={styles.skill}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" alt="Flask" />
            <p>Flask</p>
          </div>
          <div className={styles.skill}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt="Django" />
            <p>Django</p>
          </div>
          <div className={styles.skill}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" />
            <p>Docker</p>
          </div>
          <div className={styles.skill}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
            <p>GitHub</p>
          </div>
          <div className={styles.skill}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" alt="Azure" />
            <p>Azure</p>
          </div>
          <div className={styles.skill}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
            <p>MySQL</p>
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
  <div className={styles.footerLeft}>
    © {new Date().getFullYear()} Keyner Manchay
  </div>

  <div className={styles.footerCenter}>
    <a href="https://github.com/kirth8" target="_blank" rel="noopener noreferrer">
      <img src="/icons/GitHub.png" alt="GitHub" />
    </a>

    <a href="https://linkedin.com/in/keyner-alexis-manchay-montoya-319aa9211" target="_blank" rel="noopener noreferrer">
      <img src="/icons/Linkedin.png" alt="LinkedIn" />
    </a>

    <a href="https://www.facebook.com/profile.php?id=100087275829274" target="_blank" rel="noopener noreferrer">
      <img src="/icons/Facebook.png" alt="Facebook" />
    </a>

    <a href="mailto:alexnirth@gmail.com">
      <img src="/icons/Gmail.png" alt="Email" />
    </a>

    
  </div>

    <div className={styles.footerRight}>
      <a href="/CV-KeynerManchay-H.pdf" download className={styles.cvButton}>
        <img src="/icons/PDF.png" alt="PDF" className={styles.pdfIcon}/>
          Descargar CV
      </a>
    </div>
  </footer>
    </div>

  );
}
