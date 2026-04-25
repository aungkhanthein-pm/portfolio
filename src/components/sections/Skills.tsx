import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { skillGroups } from "@/data/portfolio";

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
              whileHover={{ y: -6 }}
              className="group rounded-lg border border-border/50 bg-card/40 backdrop-blur-sm p-5 card-glow hover:border-primary/60 hover:bg-card/60 hover:shadow-2xl hover:shadow-primary/15 transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover glow effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.08), transparent)",
                }}
              />

              {/* Animated border glow on hover */}
              <motion.div
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent)",
                }}
                animate={{
                  x: [-100, 100],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <h3 className="text-xs font-semibold uppercase tracking-widest text-primary mb-4 relative z-10 group-hover:text-primary/90 transition-colors duration-300">
                {group.label}
              </h3>
              <ul className="flex flex-col gap-2 relative z-10">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
