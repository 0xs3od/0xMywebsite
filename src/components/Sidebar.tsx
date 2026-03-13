import { useState } from "react";
import { motion } from "framer-motion";
import { Home, BookOpen, Award, GraduationCap, Mail } from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: BookOpen, label: "Write-ups", href: "#writeups" },
  { icon: Award, label: "Certifications", href: "#certs" },
  { icon: GraduationCap, label: "Academic", href: "#academic" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <aside className="fixed left-0 top-0 h-screen w-16 bg-sidebar border-r border-border flex flex-col items-center py-6 z-50 hidden lg:flex">
      {/* Logo */}
      <motion.div
        whileHover={{ scale: 1.15, rotate: 360 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="w-10 h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mb-8 border-glow-red cursor-pointer"
      >
        <span className="text-primary font-bold text-sm font-mono">D</span>
      </motion.div>

      {/* Nav Items */}
      <nav className="flex-1 flex flex-col items-center gap-2">
        {navItems.map((item, index) => {
          const isActive = activeIndex === index;
          const isHovered = hoveredIndex === index;

          return (
            <motion.a
              key={item.label}
              href={item.href}
              onClick={() => setActiveIndex(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 group relative ${
                isActive
                  ? "text-primary bg-primary/10 border border-primary/30"
                  : "text-muted-foreground hover:text-primary hover:bg-secondary"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title={item.label}
            >
              <motion.div
                animate={isHovered ? { rotate: [0, -10, 10, -5, 0] } : {}}
                transition={{ duration: 0.4 }}
              >
                <item.icon size={20} />
              </motion.div>

              {/* Active indicator */}
              {isActive && (
                <motion.div
                  layoutId="sidebar-active"
                  className="absolute -left-[1px] top-1/2 -translate-y-1/2 w-[3px] h-5 bg-primary rounded-r-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}

              {/* Tooltip */}
              <motion.span
                initial={{ opacity: 0, x: -5 }}
                animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -5 }}
                className="absolute left-14 bg-card border border-border px-3 py-1.5 rounded text-xs text-foreground whitespace-nowrap pointer-events-none shadow-lg"
              >
                {item.label}
                <span className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-card border-l border-b border-border rotate-45" />
              </motion.span>

              {/* Glow effect on hover */}
              {isHovered && (
                <motion.div
                  className="absolute inset-0 rounded-lg bg-primary/5 border border-primary/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </motion.a>
          );
        })}
      </nav>

      {/* Clock */}
      <div className="text-center">
        <div className="text-[10px] text-muted-foreground font-mono">
          {new Date().toLocaleDateString('en', { weekday: 'short' }).toUpperCase()}
        </div>
        <motion.div
          className="text-primary font-mono text-sm font-bold"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {new Date().toLocaleTimeString('en', { hour: '2-digit', minute: '2-digit', hour12: false })}
        </motion.div>
      </div>
    </aside>
  );
};

export default Sidebar;
