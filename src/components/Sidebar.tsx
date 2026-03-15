import { useState } from "react";
import { motion } from "framer-motion";
import { Home, BookOpen, Award, GraduationCap, Mail } from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", href: "#home", color: "hsl(var(--primary))" },
  { icon: BookOpen, label: "Write-ups", href: "#writeups", color: "hsl(210, 90%, 55%)" },
  { icon: Award, label: "Certifications", href: "#certs", color: "hsl(25, 95%, 55%)" },
  { icon: GraduationCap, label: "Academic", href: "#academic", color: "hsl(145, 70%, 45%)" },
  { icon: Mail, label: "Contact", href: "#contact", color: "hsl(280, 70%, 55%)" },
];

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <aside className="fixed left-0 top-0 h-screen w-20 backdrop-blur-xl flex flex-col items-center py-6 z-50 hidden lg:flex"
      style={{
        background: 'hsl(var(--background) / 0.95)',
        borderRight: '1px solid hsl(var(--foreground) / 0.04)',
      }}
    >
      {/* Sidebar glow line on right edge */}
      <div
        className="absolute top-0 bottom-0 right-0 w-[1px] opacity-30"
        style={{
          background: 'linear-gradient(180deg, transparent, hsl(var(--primary) / 0.4), transparent)',
        }}
      />

      {/* Ambient glow behind active icon */}
      <div
        className="absolute w-40 h-40 rounded-full blur-[80px] opacity-20 transition-all duration-1000 pointer-events-none"
        style={{
          background: navItems[activeIndex].color,
          top: `${140 + activeIndex * 68}px`,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      />

      {/* Logo */}
      <motion.div
        whileHover={{ scale: 1.15, rotate: 360 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="w-12 h-12 rounded-full flex items-center justify-center mb-6 cursor-pointer overflow-hidden"
        style={{
          background: 'hsl(var(--primary) / 0.15)',
          border: '1px solid hsl(var(--primary) / 0.3)',
          boxShadow: '0 0 15px hsl(var(--primary) / 0.15)',
        }}
      >
        <span className="text-primary font-bold text-sm font-mono">D</span>
      </motion.div>

      <div className="w-10 h-px bg-foreground/10 mb-4" />

      {/* Nav Items */}
      <nav className="flex-1 flex flex-col items-center gap-1 w-full px-2">
        {navItems.map((item, index) => {
          const isActive = activeIndex === index;
          const isHovered = hoveredIndex === index;

          return (
            <div key={item.label} className="w-full flex justify-center py-[5px]">
              <motion.a
                href={item.href}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative w-[54px] h-[54px] rounded-[18px] flex items-center justify-center cursor-pointer transition-all duration-300"
                style={{
                  background: isActive
                    ? `linear-gradient(135deg, hsl(var(--foreground) / 0.1), hsl(var(--foreground) / 0.05))`
                    : 'transparent',
                  boxShadow: isActive
                    ? `0 4px 30px ${item.color}40, 0 0 60px ${item.color}15`
                    : 'none',
                }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                title={item.label}
              >
                {/* Orbiting border for active */}
                {isActive && (
                  <div
                    className="absolute inset-[-4px] rounded-[22px] pointer-events-none"
                    style={{
                      background: `conic-gradient(from var(--rotation, 0deg), transparent 0%, ${item.color}60 15%, transparent 30%, ${item.color}30 50%, transparent 65%, ${item.color}50 80%, transparent 100%)`,
                      padding: '1.5px',
                      mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                      animation: 'rotate-border 4s linear infinite',
                    }}
                  />
                )}

                {/* Corner accents for active */}
                {isActive && (
                  <>
                    <div
                      className="absolute -left-[2px] bottom-[-2px] h-[20px] w-[3px] rounded-tr-full rounded-b-sm"
                      style={{ background: item.color, boxShadow: `0 0 10px ${item.color}, 0 0 20px ${item.color}` }}
                    />
                    <div
                      className="absolute -bottom-[2px] -left-[2px] w-[20px] h-[3px] rounded-r-full rounded-t-sm"
                      style={{ background: item.color, boxShadow: `0 0 10px ${item.color}, 0 0 20px ${item.color}` }}
                    />
                  </>
                )}

                {/* Glass overlay */}
                <div
                  className="absolute inset-0 rounded-[18px] pointer-events-none opacity-30"
                  style={{
                    background: 'linear-gradient(160deg, hsl(var(--foreground) / 0.12) 0%, transparent 40%)',
                  }}
                />

                {/* Icon */}
                <motion.div
                  className="relative z-10 transition-all duration-300"
                  style={{
                    color: isActive ? item.color : 'hsl(var(--muted-foreground))',
                    filter: isActive ? `drop-shadow(0 0 8px ${item.color}90)` : 'none',
                  }}
                  animate={isHovered && !isActive ? { scale: 1.1, color: item.color } : {}}
                >
                  <item.icon size={22} strokeWidth={isActive ? 2.4 : 1.8} />
                </motion.div>

                {/* Tooltip */}
                <motion.div
                  initial={{ opacity: 0, x: 8 }}
                  animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: 8 }}
                  className="absolute left-[120%] px-3 py-2 rounded-xl whitespace-nowrap pointer-events-none z-50"
                  style={{
                    background: 'linear-gradient(135deg, hsl(220 20% 10% / 0.95), hsl(220 20% 6% / 0.98))',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid hsl(var(--foreground) / 0.08)',
                    boxShadow: `0 8px 32px hsl(0 0% 0% / 0.5), 0 0 20px ${item.color}15`,
                  }}
                >
                  {/* Top line accent */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[1px] rounded-t-xl"
                    style={{
                      background: isActive
                        ? `linear-gradient(90deg, transparent, ${item.color}60, transparent)`
                        : 'linear-gradient(90deg, transparent, hsl(var(--foreground) / 0.15), transparent)',
                    }}
                  />
                  <span
                    className="text-xs font-semibold"
                    style={{
                      color: isActive ? item.color : 'hsl(var(--foreground))',
                      textShadow: isActive ? `0 0 10px ${item.color}40` : 'none',
                    }}
                  >
                    {item.label}
                  </span>
                  {/* Arrow */}
                  <div
                    className="absolute top-1/2 -translate-y-1/2 -left-1 rotate-45 w-2 h-2"
                    style={{
                      background: 'hsl(220 20% 10% / 0.95)',
                      borderLeft: '1px solid hsl(var(--foreground) / 0.08)',
                      borderBottom: '1px solid hsl(var(--foreground) / 0.08)',
                    }}
                  />
                </motion.div>
              </motion.a>
            </div>
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
