import { useEffect, useRef, useState } from "react";
import styles from "../components/css/Experience.module.css";
import experiences from "../data/experience";

export default function Experience() {
  const [bgImage, setBgImage] = useState("img/Carsat.jpg");
  const itemsRef = useRef([]);

  // Asignar observador para detectar qué tarjeta está a la vista
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newBg = entry.target.dataset.image;
            setBgImage(newBg);
          }
        });
      },
      { threshold: 0.5 }
    );

    itemsRef.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={styles.timelineSection}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.overlay}></div>

      <h2 className={styles.title}>Experiencia</h2>

      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`${styles.item} ${
              index % 2 === 0 ? styles.left : styles.right
            }`}
            data-image={exp.image}
            ref={(el) => (itemsRef.current[index] = el)}
          >
            <div className={styles.content}>
              {/* Imagen */}
              <img src={exp.image} alt="" className={styles.bigImage} />

              <h3>{exp.title}</h3>
              <h4>{exp.role}</h4>
              <p className={styles.meta}>
                {exp.location} — {exp.date}
              </p>

              <ul>
                {exp.description.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>

            <span className={styles.dot}></span>
          </div>
        ))}
      </div>
    </section>
  );
}
