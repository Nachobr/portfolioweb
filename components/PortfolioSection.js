import Image from "next/image";
import Link from "next/link";
import styles from './PortfolioSectionStyles.module.css';

const PortfolioSection = ({ projects }) => {
  return (
    <section id="portfolio" className="py-10">
      <div className={`${styles.container} container mx-auto`}>
        <div className={`${styles.grid} grid`}>
          {projects && projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`}>
              <a className={`${styles.block} block`}>
                <div className={`${styles.relative} relative`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                  <p className={styles.p}>{project.description}</p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
