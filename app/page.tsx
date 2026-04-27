"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, ArrowUpRight, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/context/language-context"

export default function Home() {
  const { t } = useLanguage()
  const projectsRef = useRef<HTMLElement>(null)

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Frosted fixed nav */}
      <header className="fixed top-0 inset-x-0 z-50 nav-frost border-b hairline">
        <div className="mx-auto max-w-6xl px-4 md:px-6 h-14 flex items-center justify-between">
          <Link href="#" className="font-mono text-sm font-semibold tracking-tight">
            <span className="text-primary">~/</span>nachobrit
          </Link>
          <nav className="hidden md:flex items-center gap-7 text-sm">
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
          <div className="flex items-center gap-1.5">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="pt-14">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="aurora" aria-hidden />
          <div className="absolute inset-0 bg-grid" aria-hidden />
          <div className="relative z-10 mx-auto max-w-5xl px-4 md:px-6 pt-20 pb-24 md:pt-32 md:pb-36 text-center fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border hairline bg-white/[0.02] text-xs font-mono text-muted-foreground mb-8">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
              </span>
              available for new projects
            </div>

            <div className="flex justify-center mb-8">
              <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full ring-1 ring-white/10 overflow-hidden">
                <Image src="/ProfPic.jpg" alt="Nacho Brit" fill className="object-cover" priority />
              </div>
            </div>

            <h1 className="heading-display text-5xl md:text-7xl lg:text-[88px] font-semibold">
              Ignacio <span className="text-primary">Britos</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("hero.title")}
            </p>

            <div className="mt-8 inline-flex items-center gap-2 font-mono text-sm text-muted-foreground">
              <span className="text-primary">{">"}</span>
              <TypewriterEffect />
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Button size="lg" onClick={scrollToProjects} className="rounded-md gap-2">
                {t("hero.cta")} <ArrowDown size={16} />
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-md gap-2 bg-transparent border-white/15 hover:bg-white/[0.04]"
              >
                <Link href="#contact">
                  <Mail size={16} /> {t("nav.contact")}
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="relative mx-auto max-w-5xl px-4 md:px-6 py-24 md:py-32">
          <SectionHeader number="01" label={t("nav.about")} title={t("about.title")} />
          <div className="grid md:grid-cols-5 gap-10 md:gap-16 mt-12">
            <div className="md:col-span-3 space-y-5 text-muted-foreground leading-relaxed">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
              <p>{t("about.p3")}</p>
              <p>{t("about.p4")}</p>
            </div>
            <div className="md:col-span-2">
              <p className="section-label mb-4">Stack</p>
              <div className="flex flex-wrap gap-1.5">
                {techStack.map((tech) => (
                  <span key={tech} className="tech-chip">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          ref={projectsRef}
          className="relative mx-auto max-w-6xl px-4 md:px-6 py-24 md:py-32"
        >
          <SectionHeader number="02" label="work" title={t("projects.title")} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mt-12">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={project.link}
                target={project.link === "#" ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group card-glow relative flex flex-col rounded-xl border hairline bg-card/40 overflow-hidden"
              >
                <div className="aspect-video relative overflow-hidden bg-muted">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={t(project.titleKey)}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/0 to-background/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base md:text-lg font-semibold heading-tight">
                      {t(project.titleKey)}
                    </h3>
                    <ArrowUpRight
                      size={16}
                      className="shrink-0 mt-1 text-muted-foreground transition-all group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {t(project.descriptionKey)}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="relative mx-auto max-w-3xl px-4 md:px-6 py-24 md:py-32 text-center">
          <SectionHeader number="03" label="contact" title={t("contact.title")} centered />
          <p className="mt-6 text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
            {t("contact.text")}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <ContactLink href="mailto:ignbritos@gmail.com" icon={<Mail size={16} />} label="Email" />
            <ContactLink
              href="https://github.com/nachobrit"
              icon={<Github size={16} />}
              label="GitHub"
              external
            />
            <ContactLink
              href="https://linkedin.com/in/nachobrit"
              icon={<Linkedin size={16} />}
              label="LinkedIn"
              external
            />
          </div>
        </section>
      </main>

      <footer className="border-t hairline">
        <div className="mx-auto max-w-6xl px-4 md:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-2 text-xs font-mono text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Ignacio Britos · {t("footer.rights")}
          </p>
          <p className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            built with Next.js · Tailwind · shadcn/ui
          </p>
        </div>
      </footer>
    </div>
  )
}

function SectionHeader({
  number,
  label,
  title,
  centered = false,
}: {
  number: string
  label: string
  title: string
  centered?: boolean
}) {
  return (
    <div className={centered ? "text-center" : ""}>
      <p className="section-label">
        {number} <span className="text-muted-foreground/70">/ {label}</span>
      </p>
      <h2 className="mt-3 heading-tight text-3xl md:text-5xl font-semibold">{title}</h2>
    </div>
  )
}

function ContactLink({
  href,
  icon,
  label,
  external = false,
}: {
  href: string
  icon: React.ReactNode
  label: string
  external?: boolean
}) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-md border hairline bg-white/[0.02] hover:border-primary/40 hover:bg-white/[0.04] transition-colors text-sm"
    >
      {icon}
      <span>{label}</span>
      <ArrowUpRight
        size={14}
        className="text-muted-foreground transition-all group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </Link>
  )
}

function TypewriterEffect() {
  return (
    <div className="typewriter">
      <span className="font-mono">
        <span className="text-foreground/70">{"<"}</span>
        <span className="typing-text text-foreground">Vibe Engineer</span>
        <span className="text-foreground/70">{" />"}</span>
      </span>
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
  "Three.js",
  "Gemini",
  "Claude",
  "Prompt Engineering",
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
  {
    id: 8,
    titleKey: "project8.title",
    descriptionKey: "project8.description",
    image: "/projects/creditosHipotecarios.png",
    technologies: ["AI", "Next.js", "Vercel", "Gemini"],
    link: "https://creditoshipotecariosarg.vercel.app/",
  },
  {
    id: 9,
    titleKey: "project9.title",
    descriptionKey: "project9.description",
    image: "/projects/f1-race-game.png",
    technologies: ["Threejs", "Blender"],
    link: "https://f1max-orpin.vercel.app/",
  },
  {
    id: 10,
    titleKey: "project10.title",
    descriptionKey: "project10.description",
    image: "/projects/luzculeao.png",
    technologies: ["Next.js", "React", "Vercel", "Google AI"],
    link: "https://luzculeao.vercel.app/",
  },
  {
    id: 11,
    titleKey: "project11.title",
    descriptionKey: "project11.description",
    image: "/projects/vcol.png",
    technologies: ["React", "WebRTC", "TailwindCSS", "Vercel"],
    link: "https://vcol.xyz",
  },
  {
    id: 12,
    titleKey: "project12.title",
    descriptionKey: "project12.description",
    image: "/projects/archrefactor.png",
    technologies: ["AI", "Auto-migration", "OPAV", "Vercel"],
    link: "https://archrefactor.vercel.app/",
  },
  {
    id: 13,
    titleKey: "project13.title",
    descriptionKey: "project13.description",
    image: "/projects/semanticsbook.png",
    technologies: ["React", "Next.js", "Web3", "Vercel"],
    link: "https://semanticsbook.vercel.app/",
  },
  {
    id: 14,
    titleKey: "project14.title",
    descriptionKey: "project14.description",
    image: "/projects/promptcraft.png",
    technologies: ["React", "Next.js", "AI", "LLM"],
    link: "https://promptcrafter-chi.vercel.app/",
  },
  {
    id: 15,
    titleKey: "project15.title",
    descriptionKey: "project15.description",
    image: "/projects/sparkai.png",
    technologies: ["React", "Next.js", "Gemini AI", "Vercel"],
    link: "https://sparkai-gray.vercel.app/",
  },
  {
    id: 16,
    titleKey: "project16.title",
    descriptionKey: "project16.description",
    image: "/projects/payprompt.png",
    technologies: ["Blockchain", "MNEE", "Gasless", "Vercel"],
    link: "https://payprompt-delta.vercel.app/",
  },
  {
    id: 17,
    titleKey: "project17.title",
    descriptionKey: "project17.description",
    image: "/projects/beaconsai.png",
    technologies: ["React", "Gemini Live API", "Accessibility"],
    link: "https://beaconsai-three.vercel.app/",
  },
  {
    id: 18,
    titleKey: "project18.title",
    descriptionKey: "project18.description",
    image: "/projects/aianomaly.png",
    technologies: ["Vertex AI", "Datadog", "E-Commerce"],
    link: "https://aianomaly.vercel.app/",
  },
  {
    id: 19,
    titleKey: "project19.title",
    descriptionKey: "project19.description",
    image: "/projects/seoreport.png",
    technologies: ["React", "TypeScript", "Groq", "Llama 3"],
    link: "https://seoreport-eosin.vercel.app/",
  },
  {
    id: 20,
    titleKey: "project20.title",
    descriptionKey: "project20.description",
    image: "/projects/edgelend.png",
    technologies: ["DeFi", "Chainlink", "Simulation", "React"],
    link: "https://edgeloan.vercel.app/",
  },
  {
    id: 21,
    titleKey: "project21.title",
    descriptionKey: "project21.description",
    image: "/projects/vianditacaptura.png",
    technologies: ["Next.js", "React", "Mobile", "Vercel"],
    link: "https://www.viandita.app/",
  },
  {
    id: 22,
    titleKey: "project22.title",
    descriptionKey: "project22.description",
    image: "/projects/forgeai.png",
    technologies: ["AI", "UEFN", "Verse", "LLM"],
    link: "#",
  },
]
