import { useRef } from "react";
import { projects } from "@/data/portfolio";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const ref = useRef(null);

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            What I worked on
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Real-world internship work across software development, AI integration, infrastructure, automation, APIs, and security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
