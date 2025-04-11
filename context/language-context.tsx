"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "es" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const translations = {
  es: {
    "nav.about": "Sobre Mí",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
    "hero.title": "Desarrollador Full Stack especializado en crear experiencias digitales excepcionales",
    "hero.cta": "Explora Mi Trabajo",
    "about.title": "Sobre Mí",
    "about.p1":
      "Soy un desarrollador Full Stack con amplia experiencia en tecnologías web modernas. Mi stack principal incluye React, Next.js, Node.js y TailwindCSS para el desarrollo frontend y backend. Tengo experiencia trabajando con bases de datos SQL y NoSQL, así como con APIs RESTful y GraphQL.",
    "about.p2":
      "Mi experiencia se extiende al desarrollo blockchain con Smart Contracts, y al campo de la inteligencia artificial y visión por computadora utilizando Python, TensorFlow, OpenCV y Roboflow. También he trabajado con tecnologías de visualización 3D utilizando WebGL y JavaScript.",
    "about.p3":
      "Me especializo en crear soluciones digitales completas, desde interfaces de usuario atractivas y responsivas hasta sistemas backend robustos y escalables. Tengo experiencia en despliegue de aplicaciones en plataformas como Vercel y en la integración de servicios de terceros para crear experiencias de usuario excepcionales.",
    "about.p4":
      "Además de mi trabajo como desarrollador, me apasiona aprender nuevas tecnologías, resolver problemas complejos y compartir conocimientos con la comunidad tecnológica.",
    "projects.title": "Proyectos Destacados",
    "project1.title": "Token Manager",
    "project1.description": "Aplicación descentralizada para la gestión de tokens en blockchain.",
    "project2.title": "Yubiai Landing",
    "project2.description": "Página de aterrizaje para la plataforma Yubiai con diseño responsive.",
    "project3.title": "Marketplace Front",
    "project3.description": "Interfaz de usuario para un marketplace digital con funcionalidades de compra y venta.",
    "project4.title": "AI personal responser",
    "project4.description":
      "Modelo de IA que imita el estilo de escritura personal basado en datos de texto (en desarrollo).",
    "project5.title": "Renderizador de Modelos 360",
    "project5.description": "Visualizador web para modelos 3D con rotación de 360 grados.",
    "project6.title": "DEGC Córdoba",
    "project6.description": "Plataforma web para la Dirección de Estadísticas y Censos de Córdoba.",
    "project7.title": "Contador de Cerdos",
    "project7.description":
      "Aplicación de visión por computadora que detecta y cuenta cerdos en tiempo real, con frontend en Next.js y backend integrado con Roboflow.",
    "project.viewProject": "Ver proyecto",
    "contact.title": "Contacto",
    "contact.text": "¿Interesado en trabajar juntos? Estoy abierto a nuevas oportunidades y colaboraciones.",
    "footer.rights": "Todos los derechos reservados.",
  },
  en: {
    "nav.about": "About Me",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.title": "Full Stack Developer specialized in creating exceptional digital experiences",
    "hero.cta": "Explore My Work",
    "about.title": "About Me",
    "about.p1":
      "I'm a Full Stack Developer with extensive experience in modern web technologies. My main stack includes React, Next.js, Node.js, and TailwindCSS for frontend and backend development. I have experience working with SQL and NoSQL databases, as well as RESTful and GraphQL APIs.",
    "about.p2":
      "My expertise extends to blockchain development with Smart Contracts, and to the field of artificial intelligence and computer vision using Python, TensorFlow, OpenCV, and Roboflow. I've also worked with 3D visualization technologies using WebGL and JavaScript.",
    "about.p3":
      "I specialize in creating complete digital solutions, from attractive and responsive user interfaces to robust and scalable backend systems. I have experience deploying applications on platforms like Vercel and integrating third-party services to create exceptional user experiences.",
    "about.p4":
      "In addition to my work as a developer, I'm passionate about learning new technologies, solving complex problems, and sharing knowledge with the tech community.",
    "projects.title": "Featured Projects",
    "project1.title": "Token Manager",
    "project1.description": "Decentralized application for blockchain token management.",
    "project2.title": "Yubiai Landing",
    "project2.description": "Landing page for the Yubiai platform with responsive design.",
    "project3.title": "Marketplace Front",
    "project3.description": "User interface for a digital marketplace with buying and selling functionalities.",
    "project4.title": "AI personal responser",
    "project4.description": "AI model that imitates personal writing style based on text data (in development).",
    "project5.title": "360 Model Renderer",
    "project5.description": "Web visualizer for 3D models with 360-degree rotation.",
    "project6.title": "DEGC Córdoba",
    "project6.description": "Web platform for the Statistics and Census Department of Córdoba.",
    "project7.title": "Pig Counter",
    "project7.description":
      "Computer vision application that detects and counts pigs in real-time, with a Next.js frontend and backend integrated with Roboflow.",
    "project.viewProject": "View project",
    "contact.title": "Contact",
    "contact.text": "Interested in working together? I'm open to new opportunities and collaborations.",
    "footer.rights": "All rights reserved.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
