import { motion } from "framer-motion";
import {
  Monitor,
  Bot,
  Database,
  KeyRound,
  Wifi,
  ShieldCheck,
  Wrench,
  Server,
  CheckCircle2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/data/portfolio";

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  Bot,
  Database,
  KeyRound,
  Wifi,
  ShieldCheck,
  Wrench,
  Server,
  CheckCircle2,
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const Icon = iconMap[project.icon] ?? Monitor;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      whileHover={{ y: -6 }}
      className="group rounded-lg border border-border/50 bg-card/40 backdrop-blur-sm p-6 flex flex-col gap-4 hover:border-primary/60 hover:bg-card/60 hover:shadow-2xl hover:shadow-primary/15 transition-all duration-300 card-glow relative overflow-hidden"
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

      {/* Header */}
      <div className="flex items-start justify-between gap-3 relative z-10">
        <div className="flex items-center gap-3">
          <motion.div
            className="flex-shrink-0 w-9 h-9 rounded-md bg-primary/15 text-primary flex items-center justify-center group-hover:bg-primary/25 transition-all duration-300 border border-primary/20"
            whileHover={{ scale: 1.15, rotate: 5 }}
          >
            <Icon className="h-4 w-4" />
          </motion.div>
          <div>
            <h3 className="font-semibold text-sm leading-tight group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-xs text-primary/70 mt-0.5 group-hover:text-primary/90 transition-colors duration-300">
              {project.category}
            </p>
          </div>
        </div>
      </div>

      {/* Summary */}
      <p className="text-sm text-muted-foreground leading-relaxed relative z-10 group-hover:text-foreground/90 transition-colors duration-300">
        {project.summary}
      </p>

      {/* Highlights */}
      <ul className="flex flex-col gap-2 relative z-10">
        {project.highlights.map((point, idx) => (
          <motion.li
            key={point}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.07 + idx * 0.05 }}
            className="flex items-start gap-2 text-xs text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300"
          >
            <motion.span
              className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-primary/60 group-hover:bg-primary transition-colors duration-300"
              whileHover={{ scale: 1.5 }}
            />
            {point}
          </motion.li>
        ))}
      </ul>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mt-auto pt-2 relative z-10">
        {project.tags.map((tag, idx) => (
          <motion.div
            key={tag}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, delay: index * 0.07 + idx * 0.03 }}
          >
            <Badge
              variant="secondary"
              className="text-xs px-2 py-0.5 font-normal group-hover:bg-primary/20 group-hover:text-primary transition-all duration-300"
            >
              {tag}
            </Badge>
          </motion.div>
        ))}
      </div>
    </motion.article>
  );
}
