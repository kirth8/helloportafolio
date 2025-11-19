import { useEffect, useState } from "react";
import styles from "../components/css/About.module.css";
import miFoto from "../assets/perfil2.jpeg";

export default function About() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 100); // pequeño delay elegante
  }, []);
  
  return (
    <div className={styles.container}>

      <div className={styles.inner}>
        {/* Texto a la izquierda */}
        <div className={`${styles.text} ${styles.fadeLeft} ${show && styles.show}`}>
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
        <div className={`${styles.imageWrap} ${styles.fadeRight} ${show && styles.show}`}>
          <img src={miFoto} alt="perfil2" className={styles.image} />
        </div>
      </div>

<section className={styles.skillsContainer}>
  
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

<section className={styles.infoSection}>

  <div className={styles.infoCard}>
    

    <h3>Formación</h3>
    <ul>
      <li>Ingeniería en Ciencias de la Computación — UNL</li>
      <li>Bachiller en Ciencias - UE Juan XXIII</li>
    </ul>
    <h3>Certificaciones</h3>
    <ul>
      <li>Domina la IA con Gemini - Google Skillshop</li>
      <li>Cloud Computing - Google Activate</li>
      <li>IoT Fundamentals: Big Data & Analytics - Cisco Networking Academy</li>
      <li>Inteligencia Artificial y Data - IA Network</li>
      <li>Introduction to Packet Tracer - Cisco Networking Academy</li>
    </ul>
  </div>

  <div className={styles.infoCard}>
    <h3>Hobbies</h3>
    <ul>
      <li>Deportes</li>
      <li>Voluntariado</li>
      <li>Lectura y aprendizaje</li>
      <li>Correr</li>
      <li>Cocinar</li>
    </ul>
    <h3>Idiomas</h3>
    <ul>
      <li>Español — Nativo</li>
      <li>Inglés — Intermedio (B1 según MCER)</li>
    </ul>
  </div>
  

</section>

    </div>
  );
}
