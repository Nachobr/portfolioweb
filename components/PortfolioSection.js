import Image from "next/image";
import Link from "next/link";

const PortfolioSection = ({ projects }) => {
  return (
    <section id="portfolio" className="py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects && projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`}>
              <a className="block shadow-lg rounded-lg overflow-hidden">
                <div className="relative h-60">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                  <p className="text-gray-700">{project.description}</p>
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
