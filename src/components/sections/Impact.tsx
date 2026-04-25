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
                className="rounded-lg border border-border bg-card p-6 glow-border hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-md bg-primary/10 text-primary flex items-center justify-center">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="font-semibold text-sm">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
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
