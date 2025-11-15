import styles from "../components/css/About.module.css"

export default function About() {
  return (<div className={styles.container}>
      
      <h1 className={styles.title}>Sobre mí</h1>

      <section className={styles.section}>
        {/* <h2>Sobre mí</h2> */}
        <p>
          Soy un desarrollador con formación en Ciencias de la Computación,
          orientado al desarrollo web, machine learning y videojuegos con C# y Godot.
        </p>
      </section>

      <section className={styles.grid}>
        
        <div className={styles.card}>
          <h3>Habilidades Técnicas</h3>
          <ul>
            <li>JavaScript, Node.js</li>
            <li>Django, Python</li>
            <li>C# (en aprendizaje)</li>
            <li>Godot — Android</li>
            <li>Git, Linux, APIs REST</li>
            <li>Machine Learning multimodal</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h3>Idiomas</h3>
          <ul>
            <li>Español — Nativo</li>
            <li>Inglés — Intermedio</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h3>Habilidades Blandas</h3>
          <ul>
            <li>Resolución de problemas</li>
            <li>Comunicación clara</li>
            <li>Adaptabilidad</li>
            <li>Pensamiento analítico</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h3>Hobbies</h3>
          <ul>
            <li>Videojuegos</li>
            <li>Crear proyectos personales</li>
            <li>Leer y aprender</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h3>Experiencia</h3>
          <ul>
            <li>Desarrollo web con JavaScript y Node.js</li>
            <li>Trabajo con modelos multimodales (Paligemma)</li>
            <li>Automatización y análisis de datos</li>
            <li>Videojuegos en Godot</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h3>Formación</h3>
          <p>Ingeniería en Ciencias de la Computación — UNL</p>
        </div>

        <div className={styles.card}>
          <h3>Certificaciones</h3>
          <ul>
            <li>C# y .NET — Microsoft Learn</li>
            <li>Fundamentos de Programación</li>
          </ul>
        </div>

      </section>
    </div>
  );
}
