import styles from "../components/css/Experience.module.css";

export default function Experience() {
  const experiences = [
    {
      title: "CARSAT Rastreo Satelital",
      role: "Soporte Técnico y Mantenimiento Web",
      location: "Machala, Ecuador",
      date: "03/2025 - Actualidad",
      description: [
        "Diagnóstico y resolución de bugs en aplicaciones web privadas.",
        "Gestión del hosting en Bluehost para garantizar disponibilidad.",
        "Instalación y configuración de sistemas GPS para vehículos."
      ],
      image: "img/Carsat.jpg"
    },
    {
      title: "Universidad Nacional de Loja (UNL)",
      role: "Desarrollador de Deep Learning & Computer Vision",
      location: "Loja, Ecuador",
      date: "06/2024 - 08/2024",
      description: [
        "Implementé una solución de accesibilidad para personas con discapacidad visual.",
        "Configuré un dispositivo NVIDIA Jetson Nano para inferencia de deep learning.",
        "Evalué modelos multimodales (Florence 2, Paligemma, Chameleon).",
        "Desarrollé una API REST con Paligemma y un frontend accesible con Flask."
      ],
      image: "img/JetsonNano.jpg"
    },
    {
      title: "Empresa NODO Cía. Ltda.",
      role: "Pasante Desarrollador Web",
      location: "Loja, Ecuador",
      date: "10/2022 - 02/2023",
      description: [
        "Contribuí al desarrollo del proyecto ChatBot Academia.",
        "Optimicé código en Node.js y React.",
        "Mejoré la arquitectura backend y los diagramas funcionales.",
        "Optimicé consultas a MongoDB para mayor eficiencia."
      ],
      image: "img/Nodo.jpg"
    }
  ];

  return (
    <section className={styles.timelineSection}>
      <h2 className={styles.title}>Experiencia</h2>

      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`${styles.item} ${
              index % 2 === 0 ? styles.left : styles.right
            }`}
          >
            <div className={styles.content}>
              <img src={exp.image} alt="" className={styles.image} />

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
