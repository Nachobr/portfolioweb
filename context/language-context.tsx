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
    "hero.title": "Ingeniero de Software especializado en crear experiencias digitales excepcionales",
    "hero.cta": "Explora Mi Trabajo",
    "about.title": "Sobre Mí",
    "about.p1":
      "Soy Ingeniero de Software con amplia experiencia en tecnologías web modernas. Mi stack principal incluye React, Next.js, Node.js y TailwindCSS para el desarrollo frontend y backend. Tengo experiencia trabajando con bases de datos SQL y NoSQL, así como con APIs RESTful y GraphQL.",
    "about.p2":
      "Mi experiencia se extiende al desarrollo blockchain con Smart Contracts, y al campo de la inteligencia artificial y visión por computadora utilizando Python, TensorFlow, OpenCV y Roboflow. También he trabajado con tecnologías de visualización 3D utilizando WebGL y JavaScript.",
    "about.p3":
      "Me especializo en crear soluciones digitales completas, desde interfaces de usuario atractivas y responsivas hasta sistemas backend robustos y escalables. Tengo experiencia en despliegue de aplicaciones en plataformas como Vercel y en la integración de servicios de terceros para crear experiencias de usuario excepcionales.",
    "about.p4":
      "Además de mi trabajo como Ingeniero de Software, me apasiona aprender nuevas tecnologías, resolver problemas complejos y compartir conocimientos con la comunidad tecnológica.",
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
    "project8.title": "Agente de IA para creditos UVA",
    "project8.description":
      "Agente de IA para soporte de informacion sobre creditos UVA.",
    "project9.title": "Juego de Carreras F1",
    "project9.description": "Simulador de carreras de F1 en 3D con modo un jugador, multijugador, selección de pistas y editor de pistas.",
    "project10.title": "Luz Córdoba",
    "project10.description": "Consulta el estado de tu barrio en tiempo real, reporta incidencias y recibe asistencia con inteligencia artificial.",
    "project11.title": "Vcol — Videollamadas P2P Instantáneas",
    "project11.description": "Videollamadas seguras y sin registro directamente en el navegador.",
    "project12.title": "Legacy Code Archaeologist",
    "project12.description": "Legacy Code Archaeologist es un motor de migración autónomo que desarrollé para manejar el trabajo de \"maratón\" de la refactorización. A diferencia de los asistentes estándar, este agente opera en un ciclo continuo de Observar-Planificar-Actuar-Verificar (OPAV).",
    "project13.title": "Pensamiento Crítico & Semántica",
    "project13.description": "Plataforma dedicada a la traducción en español del trabajo fundamental de Stuart Chase sobre semántica y pensamiento crítico. Permite a los usuarios acceder al libro completo a través de una contribución voluntaria en criptomonedas.",
    "project14.title": "PromptCraft",
    "project14.description": "Aplicación web inteligente que actúa como un 'Consultor Senior en Ingeniería de Prompts', transformando ideas en instrucciones estructuradas de alto rendimiento para LLMs.",
    "project15.title": "Spark AI",
    "project15.description": "Spark AI Idea Manager es una aplicación web inteligente diseñada para ayudar a los usuarios a capturar, evolucionar y estructurar sus ideas en planes accionables utilizando el poder de Google Gemini AI.",
    "project16.title": "PayPrompt",
    "project16.description": "Permite a los usuarios conectar su billetera, depositar stablecoins MNEE y pagar solo por los prompts que usan. Las transacciones sin gas se retransmiten para manejar la complejidad subyacente de la blockchain para el usuario.",
    "project17.title": "BeaconAI",
    "project17.description": "BeaconAI es un asistente de accesibilidad multimodal en tiempo real diseñado para proporcionar orientación por voz manos libres para usuarios con discapacidad visual. Construido con React y la API de Google Gemini Live, actúa como un \"copiloto\" inteligente que ve y escucha el mundo para proporcionar contexto, leer texto e identificar peligros en tiempo real.",
    "project18.title": "AI Anomaly",
    "project18.description": "Detección de anomalías impulsada por IA para comercio electrónico, proporciona un marco en tiempo real para la detección de anomalías en motores de recomendación, integrado con Vertex AI y Datadog.",
    "project19.title": "SEOreport",
    "project19.description": "Una herramienta de análisis SEO impulsada por IA que proporciona auditorías integrales de sitios web en segundos. Construida con React, TypeScript y potenciada por el modelo Llama 3 de Groq.",
    "project20.title": "EdgeLend",
    "project20.description": "Una terminal DeFi de grado institucional que combina datos de Chainlink en vivo con un motor de simulación de alta velocidad para demostrar estrategias complejas de préstamos y arbitraje en tiempo real. Ofrece una experiencia estilo 'Bloomberg' para monitorear posiciones, factores de salud y liquidaciones.",
  },
  en: {
    "nav.about": "About Me",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.title": "Software Engineer specialized in creating exceptional digital experiences",
    "hero.cta": "Explore My Work",
    "about.title": "About Me",
    "about.p1":
      "I'm a Software Engineer with extensive experience in modern web technologies. My main stack includes React, Next.js, Node.js, and TailwindCSS for frontend and backend development. I have experience working with SQL and NoSQL databases, as well as RESTful and GraphQL APIs.",
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
    "project8.title": "UVA Credits AI Agent",
    "project8.description":
      "AI agent for support on UVA credits.",
    "project9.title": "F1 Race Game",
    "project9.description": "3D F1 racing simulator with single player, multiplayer, track selection, and track editor.",
    "project10.title": "Luz Córdoba",
    "project10.description": "Check the status of your neighborhood in real-time, report incidents, and receive assistance with artificial intelligence.",
    "contact.title": "Contact",
    "contact.text": "Interested in working together? I'm open to new opportunities and collaborations.",
    "project11.title": "Vcol — Instant P2P Video Calling",
    "project11.description": "Secure, no-login video calling directly in the browser.",
    "project12.title": "Legacy Code Archaeologist",
    "project12.description": "Legacy Code Archaeologist is an autonomous migration engine I developed to handle the \"marathon\" work of refactoring. Unlike standard assistants, this agent operates in a continuous Observe-Plan-Act-Verify (OPAV) loop.",
    "project13.title": "Stuart Chase — Critical Thinking & Semantics",
    "project13.description": "Platform dedicated to the Spanish translation of Stuart Chase's fundamental work on semantics and critical thinking. Allows users to access the complete book through a voluntary crypto contribution.",
    "project14.title": "PromptCraft",
    "project14.description": "Intelligent web application acting as a 'Senior Prompt Engineering Consultant', transforming ideas into high-performance, structured instructions for LLMs.",
    "project15.title": "Spark AI",
    "project15.description": "Spark AI Idea Manager is an intelligent web application designed to help users capture, evolve, and structure their raw ideas into actionable plans using the power of Google Gemini AI.",
    "project16.title": "PayPrompt",
    "project16.description": "Allows users to connect their wallet, deposit MNEE stablecoins, and pay only for the prompts they use. Gasless transactions are relayed to handle the underlying blockchain complexity for the user.",
    "project17.title": "BeaconAI",
    "project17.description": "BeaconAI is a real-time, multimodal accessibility assistant designed to provide hands-free voice guidance for visually impaired users. Built with React and the Google Gemini Live API, it acts as an intelligent \"co-pilot,\" seeing and hearing the world to provide context, read text, and identify hazards in real-time.",
    "project18.title": "AI Anomaly",
    "project18.description": "AI-Powered Anomaly Detection for E-Commerce, provides a real-time framework for anomaly detection in recommendation engines, integrated with Vertex AI and Datadog.",
    "project19.title": "SEOreport",
    "project19.description": "An AI-powered SEO analysis tool that provides comprehensive website audits in seconds. Built with React, TypeScript, and powered by Groq's Llama 3 model.",
    "project20.title": "EdgeLend",
    "project20.description": "An institutional-grade DeFi terminal that combines live Chainlink data with a high-speed simulation engine to demonstrate complex lending and arbitrage strategies in real-time. EdgeLend offers a 'Bloomberg-style' experience for monitoring positions, health factors, and liquidations.",
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
