import { useEffect, useRef } from "react";
import styles from "../components/css/Projects.module.css";
import projects from "../data/projects";

export default function Projects() {

  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (

    <div className={styles.container}>
      <h1 className={styles.title}>Mis Proyectos</h1>
      <p className={styles.subtitle}>Proyectos que cuentan mi historia como desarrollador</p>

      <div className={styles.list}>
        {projects.map((p, i) => (
          <div
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            className={styles.card}
          >
            <img src={p.image} alt={p.title} className={styles.image} />

            <div className={styles.info}>
              <h2>{p.title}</h2>
              <p>{p.desc}</p>

              <ul className={styles.techList}>
                {p.tech.map((t, idx) => (
                  <li key={idx}>{t}</li>
                ))}
              </ul>

              <div className={styles.buttons}>
                <a href={p.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
