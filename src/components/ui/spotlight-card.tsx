import { motion } from "framer-motion";
import { useRef, useState } from "react";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
}

export function SpotlightCard({ children, className = "" }: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spotlightPosition, setSpotlightPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setSpotlightPosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -6 }}
      className={`group rounded-lg border border-border/50 bg-card/40 backdrop-blur-sm card-glow hover:border-primary/60 hover:bg-card/60 hover:shadow-2xl hover:shadow-primary/15 transition-all duration-300 relative overflow-hidden flex flex-col h-full ${className}`}
    >
      {/* Dynamic spotlight effect that follows cursor */}
      {isHovering && (
        <motion.div
          className="absolute pointer-events-none"
          style={{
            width: 300,
            height: 300,
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
            filter: "blur(40px)",
            left: spotlightPosition.x - 150,
            top: spotlightPosition.y - 150,
          }}
          animate={{
            opacity: isHovering ? 1 : 0,
          }}
          transition={{ duration: 0.1 }}
        />
      )}

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

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">{children}</div>
    </motion.div>
  );
}
