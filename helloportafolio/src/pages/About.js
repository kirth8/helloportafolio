import React from "react";
import styles from "../components/css/About.module.css";
import miFoto from "../assets/perfil2.jpeg";

export default function About() {
  return (
    <div className={styles.container}>

      <div className={styles.inner}>
        {/* Texto a la izquierda */}
        <div className={styles.text}>
          <h1 className={styles.title}>Sobre mí</h1>
          <p className={styles.paragraph}>
            Soy un desarrollador con base en Ciencias de la Computación, apasionado
            por resolver problemas usando tecnologías modernas. Tengo experiencia 
            construyendo plataformas web utilizando Node.js, Flask, Django, y
            trabajando con modelos de machine learning multimodales como Paligemma.

            Actualmente estoy aprendiendo C# y explorando el desarrollo de videojuegos
            con Godot, con el objetivo de construir juegos como parte de mi 
            crecimiento profesional.
          </p>
        </div>

        {/* Separador central con ">" */}
        <div className={styles.separator}>{'>'}</div>


        {/* Imagen a la derecha */}
        <div className={styles.imageWrap}>
          <img src={miFoto} alt="perfil2" className={styles.image} />
        </div>
      </div>

<section className={styles.skillsContainer}>
  
  {/* Habilidades Técnicas */}
  <div className={`${styles.skillsGroup} ${styles.rightSkills}`}>
    <h2 className={styles.groupTitle}>Habilidades Técnicas</h2>

    <div className={styles.hand}>
      <div className={styles.card} style={{ "--i": 0 }}>Frontend: JavaScript, React</div>
      <div className={styles.card} style={{ "--i": 1 }}>Backend: Node.js, Django, Flask</div>
      <div className={styles.card} style={{ "--i": 2 }}>Bases de datos: MySQL, MongoDB</div>
      <div className={styles.card} style={{ "--i": 3 }}>Git, Linux, APIs REST</div>
      <div className={styles.card} style={{ "--i": 4 }}>C#, Godot — Android</div>
    </div>
  </div>

  {/* Habilidades Blandas */}
  <div className={`${styles.skillsGroup} ${styles.leftSkills}`}>
    <h2 className={styles.groupTitle}>Habilidades Blandas</h2>

    <div className={styles.hand}>
      <div className={styles.card} style={{ "--i": 0 }}>Resolución de problemas</div>
      <div className={styles.card} style={{ "--i": 1 }}>Trabajo en equipo</div>
      <div className={styles.card} style={{ "--i": 3 }}>Adaptabilidad</div>
      <div className={styles.card} style={{ "--i": 4 }}>Gestión del tiempo</div>
      <div className={styles.card} style={{ "--i": 5 }}>Pensamiento analítico</div>
    </div>
  </div>

</section>

Idiomas

Español — Nativo

Inglés — Intermedio (lectura técnica sólida)

Hobbies

Aprender nuevas tecnologías

Videojuegos

Crear prototipos y proyectos personales

Lectura y estudio autodidacta

Experiencia

Desarrollo de plataformas web con JavaScript y Node.js

Trabajo con modelos multimodales como Paligemma para procesamiento de documentos

Automatización y análisis de datos

Proyectos personales de videojuegos en Godot

(Puedes expandir esto si has tenido trabajos formales o freelance.)

Formación

Ingeniería en Ciencias de la Computación
Universidad Nacional de Loja

Certificaciones

Cursos de C# y .NET — Microsoft Learn

Fundamentos de programación

Conceptos de Machine Learning (varios cursos y lecturas)
(Puedes agregar más si los tienes.)
      {/* aquí puedes mantener las cards o seguir debajo */}
    </div>
  );
}
