import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { impactItems } from "@/data/portfolio";
import {
  CheckCircle2,
  Bug,
  Layers,
  Lightbulb,
  FileText,
  Wrench,
} from "lucide-react";

const icons = [CheckCircle2, Bug, Layers, Lightbulb, FileText, Wrench];

export function Impact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="impact" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Internship Impact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            How I contributed
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Beyond writing code — the problem-solving, ownership, and communication I brought to the team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {impactItems.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.05 + i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group rounded-lg border border-border/50 bg-card/40 backdrop-blur-sm p-6 card-glow hover:border-primary/60 hover:bg-card/60 hover:shadow-2xl hover:shadow-primary/15 transition-all duration-300 relative overflow-hidden"
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

                <div className="flex items-center gap-3 mb-3 relative z-10">
                  <motion.div
                    className="flex-shrink-0 w-8 h-8 rounded-md bg-primary/15 text-primary flex items-center justify-center border border-primary/20 group-hover:bg-primary/25 transition-all duration-300"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                  >
                    <Icon className="h-4 w-4" />
                  </motion.div>
                  <h3 className="font-semibold text-sm group-hover:text-primary transition-colors duration-300 relative z-10">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300 relative z-10">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
