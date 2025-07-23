"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/context/language-context"

export default function Home() {
  const { t, language } = useLanguage()
  const projectsRef = useRef<HTMLElement>(null)

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold">NachoBrit</h1>
          <div className="flex items-center gap-2 md:gap-4">
            <ThemeToggle />
            <LanguageSwitcher />
            {/* Mobile menu button could be added here */}
            <nav className="hidden md:flex gap-4 md:gap-6">
              <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                {t("nav.about")}
              </Link>
              <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                {t("nav.projects")}
              </Link>
              <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                {t("nav.contact")}
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:py-12">
        <section className="flex flex-col items-center text-center space-y-4 md:space-y-6 py-8 md:py-16">
          <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
            <Image
              src="/ProfPic.jpg"
              alt="Nacho Brit"
              fill
              className="rounded-full object-cover"
              priority
            />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Ignacio Britos</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl px-4">{t("hero.title")}</p>
          <div className="h-12 text-lg md:text-xl">
            <TypewriterEffect />
          </div>
          <Button size="lg" className="mt-4 md:mt-6" onClick={scrollToProjects}>
            {t("hero.cta")}
          </Button>
        </section>

        <section id="about" className="py-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">{t("about.title")}</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
            <p>{t("about.p3")}</p>
            <p>{t("about.p4")}</p>

            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" ref={projectsRef} className="py-8 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">{t("projects.title")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group border rounded-lg overflow-hidden transition-all hover:shadow-md">
                <div className="aspect-video relative overflow-hidden bg-muted">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={t(project.titleKey)}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{t(project.titleKey)}</h3>
                  <p className="text-muted-foreground mb-4">{t(project.descriptionKey)}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 bg-muted rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm font-medium hover:underline"
                  >
                    {t("project.viewProject")} <ExternalLink size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="py-16 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">{t("contact.title")}</h2>
          <p className="text-muted-foreground mb-8">{t("contact.text")}</p>
          <div className="flex justify-center gap-6">
            <Link
              href="mailto:contacto@nachobrit.xyz"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail size={20} />
              <span>Email</span>
            </Link>
            <Link
              href="https://github.com/nachobrit"
              className="flex items-center gap-2 hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
              <span>GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/nachobrit"
              className="flex items-center gap-2 hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Ignacio Britos. {t("footer.rights")}
          </p>
        </div>
      </footer>
    </div>
  )
}

const techStack = [
  "React",
  "Next.js",
  "Node.js",
  "TailwindCSS",
  "JavaScript",
  "TypeScript",
  "Python",
  "TensorFlow",
  "OpenCV",
  "Roboflow",
  "WebGL",
  "Smart Contracts",
  "SQL",
  "NoSQL",
  "RESTful API",
  "GraphQL",
  "Vercel",
  "Git",
  "HTML5",
  "CSS3",
]

const projects = [
  {
    id: 1,
    titleKey: "project1.title",
    descriptionKey: "project1.description",
    image: "/projects/tokenManager.png",
    technologies: ["React", "Next.js", "Vercel"],
    link: "https://v0-token-manager-dapp.vercel.app/",
  },
  {
    id: 2,
    titleKey: "project2.title",
    descriptionKey: "project2.description",
    image: "/projects/YbiLanding.png",
    technologies: ["React", "Node.js", "Vercel"],
    link: "https://website-yubiai.vercel.app/es",
  },
  {
    id: 3,
    titleKey: "project3.title",
    descriptionKey: "project3.description",
    image: "/projects/yubiaiMkt.png",
    technologies: ["React", "Marketplace", "Vercel"],
    link: "https://marketplace-front-sigma.vercel.app",
  },
  {
    id: 4,
    titleKey: "project4.title",
    descriptionKey: "project4.description",
    image: "/projects/aiResponser.jpeg",
    technologies: ["Python", "TensorFlow", "AI"],
    link: "https://github.com/Nachobr/mymeAI",
  },
  {
    id: 5,
    titleKey: "project5.title",
    descriptionKey: "project5.description",
    image: "/projects/model360.png",
    technologies: ["3D", "WebGL", "JavaScript"],
    link: "https://sites.google.com/view/pruebamodelado/home",
  },
  {
    id: 6,
    titleKey: "project6.title",
    descriptionKey: "project6.description",
    image: "/projects/degc.png",
    technologies: ["React", "Next.js", "Vercel"],
    link: "https://degc-cordoba.vercel.app/",
  },
  {
    id: 7,
    titleKey: "project7.title",
    descriptionKey: "project7.description",
    image: "/projects/porcon.png",
    technologies: ["Python", "OpenCV", "Next.js", "Roboflow"],
    link: "https://porcon.vercel.app/",
  },
]

function TypewriterEffect() {
  return (
    <div className="typewriter">
      <span className="text-primary font-medium">
        {"<"}
        <span className="typing-text">Basic Smart Contract Dev, FullStack Web Developer</span>
        {" />"}
      </span>
    </div>
  )
}
