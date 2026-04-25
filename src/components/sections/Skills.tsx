import { motion } from "framer-motion";
import { useRef } from "react";
import { skillGroups } from "@/data/portfolio";
import { SpotlightCard } from "@/components/ui/spotlight-card";

export function Skills() {
  const ref = useRef(null);

  return (
    <section id="skills" className="section-padding bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Technical toolkit
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Skills applied across real projects — not a checklist of tutorials.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 auto-rows-fr">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="h-full"
            >
              <SpotlightCard className="p-5 h-full">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-primary mb-4 group-hover:text-primary/90 transition-colors duration-300">
                  {group.label}
                </h3>
                <ul className="flex flex-col gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300"
                    >
                      <motion.span
                        className="flex-shrink-0 w-1 h-1 rounded-full bg-primary/50 group-hover:bg-primary transition-colors duration-300"
                        whileHover={{ scale: 1.5 }}
                      />
                      {skill}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
