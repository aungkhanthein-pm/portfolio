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
      whileHover={{ y: -4 }}
      className="group rounded-lg border border-border bg-card p-6 flex flex-col gap-4 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 glow-border relative overflow-hidden"
    >
      {/* Hover glow effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.05), transparent)",
        }}
      />

      {/* Header */}
      <div className="flex items-start justify-between gap-3 relative z-10">
        <div className="flex items-center gap-3">
          <motion.div
            className="flex-shrink-0 w-9 h-9 rounded-md bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary/20 transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            <Icon className="h-4 w-4" />
          </motion.div>
          <div>
            <h3 className="font-semibold text-sm leading-tight">
              {project.title}
            </h3>
            <p className="text-xs text-primary/80 mt-0.5">{project.category}</p>
          </div>
        </div>
      </div>

      {/* Summary */}
      <p className="text-sm text-muted-foreground leading-relaxed relative z-10">
        {project.summary}
      </p>

      {/* Highlights */}
      <ul className="flex flex-col gap-2 relative z-10">
        {project.highlights.map((point) => (
          <li
            key={point}
            className="flex items-start gap-2 text-xs text-muted-foreground"
          >
            <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-primary/60" />
            {point}
          </li>
        ))}
      </ul>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mt-auto pt-2 relative z-10">
        {project.tags.map((tag) => (
          <Badge
            key={tag}
            variant="secondary"
            className="text-xs px-2 py-0.5 font-normal"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </motion.article>
  );
}
