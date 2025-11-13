import React from "react";
import styles from "../components/css/Home.module.css"
import miFoto from "../assets/perfil.png"

export default function Home() {
  return (
    <div className= {styles.container}>

      <section className= {styles.hero}>
          <h1 className= {styles.title}>¡Hello!, I'm Keyner Manchay</h1>
      </section>
      
      <div>
        <img src={miFoto} alt="Mi foto" className={styles.fotoPerfil} />
      </div>

      <section className= {styles.content}>
          <p>Programador full stack con dos años de experiencia en el desarrollo 
            y diseño de aplicaciones web dinámicas y escalables. Conocimiento en 
            tecnologías como React, Node.js, Flask, Django y bases de datos 
            SQL/NoSQL. En constante aprendizaje y comprometido con seguir las
             mejores prácticas de desarrollo. </p>
      </section>
    </div>

  );
}
