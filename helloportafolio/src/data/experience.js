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
    image: `${process.env.PUBLIC_URL}/img/Carsat.jpg`,
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
    image: `${process.env.PUBLIC_URL}/img/JetsonNano.jpg`,
  },
  {
    title: "UNIVERSIDAD TÉCNICA PARTICULAR DE LOJA (UTPL)",
    role: "Desarrollador de Deep Learning, Computer Vision y Web",
    location: "Loja, Ecuador",
    date: "06/2023 - 01/2024",
    description: [
      "Se implemento una solución de accesibilidad para las personas con discapacidad auditiva.",
      "Se creo un modelo de Computer Vision manejando CNN para la detección de manos y salida de texto.",
      "Se creo una plataforma web con Flask para la implementación del modelo creado.",
      "Se obtuvo el primer lugar en II Convocatoria de Retos de Innovación Abierta Ecuador Sustentable 2030 "
    ],
    image: `${process.env.PUBLIC_URL}/img/Manjilu.jpeg`,
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
    image: `${process.env.PUBLIC_URL}/img/Nodo.jpg`,
  }
];

export default experiences;
