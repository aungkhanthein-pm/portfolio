import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { skillGroups } from "@/data/portfolio";
import { SpotlightCard } from "@/components/ui/spotlight-card";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="section-padding bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
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
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 + i * 0.07 }}
            >
              <SpotlightCard className="p-5 h-full">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-primary mb-4 group-hover:text-primary/90 transition-colors duration-300">
                  {group.label}
                </h3>
                <ul className="flex flex-col gap-2">
                  {group.skills.map((skill, idx) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.05 + i * 0.07 + idx * 0.03 }}
                      className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300"
                    >
                      <motion.span
                        className="flex-shrink-0 w-1 h-1 rounded-full bg-primary/50 group-hover:bg-primary transition-colors duration-300"
                        whileHover={{ scale: 1.5 }}
                      />
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
