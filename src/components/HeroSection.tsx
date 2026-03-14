import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import profileImg from "@/assets/profile-placeholder.png";

const tags = ["AA", "CC", "VV", "DD", "DD"];

const nameText = "Saud";
const codeText = "<Saud/>";
const lastNameText = "Alharbi";
const codeLastName = "{Alharbi}";

const HeroSection = () => {
  const [nameHovered, setNameHovered] = useState(false);
  const [displayName, setDisplayName] = useState(nameText);
  const [displayLastName, setDisplayLastName] = useState(lastNameText);
  const sectionRef = useRef<HTMLElement>(null);

  // Custom cursor
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const cursorSize = useMotionValue(16);
  const springX = useSpring(cursorX, { stiffness: 500, damping: 28 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 28 });
  const springSize = useSpring(cursorSize, { stiffness: 300, damping: 20 });
  const [cursorVisible, setCursorVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      cursorX.set(e.clientX - rect.left);
      cursorY.set(e.clientY - rect.top);
    };

    const handleEnter = () => setCursorVisible(true);
    const handleLeave = () => setCursorVisible(false);

    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseenter", handleEnter);
    section.addEventListener("mouseleave", handleLeave);

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseenter", handleEnter);
      section.removeEventListener("mouseleave", handleLeave);
    };
  }, [cursorX, cursorY]);

  // Scramble name on hover
  useEffect(() => {
    if (nameHovered) {
      const chars = "!@#$%^&*<>/{}[]";
      let iterations = 0;
      const targetName = codeText;
      const targetLast = codeLastName;

      const interval = setInterval(() => {
        setDisplayName(
          targetName.
          split("").
          map((char, i) =>
          i < iterations ? char : chars[Math.floor(Math.random() * chars.length)]
          ).
          join("")
        );
        setDisplayLastName(
          targetLast.
          split("").
          map((char, i) =>
          i < iterations ? char : chars[Math.floor(Math.random() * chars.length)]
          ).
          join("")
        );
        iterations += 1;
        if (iterations > Math.max(targetName.length, targetLast.length)) {
          clearInterval(interval);
        }
      }, 40);

      return () => clearInterval(interval);
    } else {
      setDisplayName(nameText);
      setDisplayLastName(lastNameText);
    }
  }, [nameHovered]);

  const handleInteractiveEnter = () => cursorSize.set(40);
  const handleInteractiveLeave = () => cursorSize.set(16);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-screen flex items-center py-20 px-6 relative overflow-hidden interactive-cursor">
      
      {/* Custom Cursor */}
      <motion.div
        className="pointer-events-none fixed z-[9999] rounded-full border-2 border-primary mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          width: springSize,
          height: springSize,
          translateX: "-50%",
          translateY: "-50%",
          opacity: cursorVisible ? 1 : 0,
          position: "absolute"
        }} />
      
      <motion.div
        className="pointer-events-none fixed z-[9999] rounded-full bg-primary"
        style={{
          x: springX,
          y: springY,
          width: 4,
          height: 4,
          translateX: "-50%",
          translateY: "-50%",
          opacity: cursorVisible ? 1 : 0,
          position: "absolute"
        }} />
      

      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                          linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) =>
      <motion.div
        key={i}
        className="absolute w-1 h-1 rounded-full bg-primary/30"
        animate={{
          y: [0, -30, 0],
          x: [0, Math.sin(i) * 20, 0],
          opacity: [0.2, 0.6, 0.2]
        }}
        transition={{
          duration: 4 + i,
          repeat: Infinity,
          delay: i * 0.5
        }}
        style={{
          left: `${15 + i * 15}%`,
          top: `${20 + i % 3 * 25}%`
        }} />

      )}

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}>
          
          {/* Name with hover-to-code effect */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-none cursor-none"
            onMouseEnter={() => {
              setNameHovered(true);
              handleInteractiveEnter();
            }}
            onMouseLeave={() => {
              setNameHovered(false);
              handleInteractiveLeave();
            }}>
            
            <motion.span
              className="text-primary text-glow-red inline-block glitch-text"
              animate={nameHovered ? { textShadow: "0 0 30px hsl(var(--glow-red) / 0.8)" } : {}}>
              
              {displayName}
            </motion.span>
            <br />
            <motion.span
              className="text-foreground inline-block"
              animate={nameHovered ? { color: "hsl(var(--cyber-green))" } : {}}
              transition={{ duration: 0.3 }}>
              
              {displayLastName}
            </motion.span>
          </motion.h1>

          {/* Terminal-style subtitle */}
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-4 text-lg font-mono text-muted-foreground">
            
            {">"} Pentester | Cybersecurity
            <span className="text-primary">{">"}</span> ####### | #######
            <span className="typing-cursor"></span>
          </motion.p>

          {/* Tags with interactive effects */}
          <div className="flex flex-wrap gap-2 mt-6">
            {tags.map((tag, i) =>
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.08, type: "spring", stiffness: 200 }}
              whileHover={{
                scale: 1.1,
                borderColor: "hsl(var(--primary))",
                boxShadow: "0 0 15px hsl(var(--glow-red) / 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={handleInteractiveEnter}
              onMouseLeave={handleInteractiveLeave}
              className="px-3 py-1 rounded-md text-xs font-mono border border-border bg-secondary text-secondary-foreground tag-interactive magnetic-hover cursor-none">
              
                {tag}
              </motion.span>
            )}
          </div>

          {/* Description with stagger reveal */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-8 text-muted-foreground leading-relaxed max-w-lg">
            
            Hello👋 , Ladies and Gentlemen! Welcome to my website, where I share my passion for cybersecurity and penetration testing. I love exploring all things tech and believe that continuous learning is the key to growth. Here, you’ll discover my journey, my tools, and my insights, along with tips to help others develop as well. Get ready for an exciting and inspiring tour of the site!


          </motion.p>

          {/* CTA Buttons */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-8 flex gap-4">
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px hsl(var(--glow-red) / 0.4)" }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={handleInteractiveEnter}
              onMouseLeave={handleInteractiveLeave}
              className="px-6 py-3 bg-primary text-primary-foreground font-mono text-sm rounded-lg border-glow-red cursor-none transition-colors">
              
              {">"} Contact_Me
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary))" }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={handleInteractiveEnter}
              onMouseLeave={handleInteractiveLeave}
              className="px-6 py-3 border border-border text-foreground font-mono text-sm rounded-lg hover:border-primary/40 cursor-none transition-colors">
              
              {">"} View_Projects
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Profile Image with rotating border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex justify-center lg:justify-end">
          
          <div className="relative float-animation">
            {/* Rotating border ring */}
            <motion.div
              className="absolute -inset-2 rounded-full opacity-75"
              style={{
                background: "conic-gradient(from 0deg, hsl(var(--cyber-red)), transparent 40%, transparent 60%, hsl(var(--cyber-red)))"
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />
            
            {/* Second rotating ring (opposite direction) */}
            <motion.div
              className="absolute -inset-3 rounded-full opacity-30"
              style={{
                background: "conic-gradient(from 180deg, hsl(var(--cyber-red) / 0.5), transparent 30%, transparent 70%, hsl(var(--cyber-red) / 0.5))"
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }} />
            
            {/* Background circle to mask the rotating border */}
            <div className="absolute -inset-[2px] rounded-full bg-background" />

            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/40"
              whileHover={{ scale: 1.03 }}
              onMouseEnter={handleInteractiveEnter}
              onMouseLeave={handleInteractiveLeave}>
              
              {/* Scan line overlay */}
              <div className="absolute inset-0 scan-line z-10 pointer-events-none" />

              <img
                src={profileImg}
                alt="Profile"
                className="w-full h-full object-cover" />
              

              {/* Hover overlay */}
              <motion.div
                className="absolute inset-0 bg-primary/0 transition-colors duration-300"
                whileHover={{ backgroundColor: "hsl(var(--primary) / 0.1)" }} />
              
            </motion.div>

            {/* Online Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
              className="absolute bottom-4 right-4 flex items-center gap-2 bg-card border border-border rounded-full px-3 py-1 z-10">
              
              <span className="w-2 h-2 rounded-full bg-accent online-pulse"></span>
              <span className="text-xs font-mono text-accent">ONLINE</span>
            </motion.div>

            {/* Status indicator top-left */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute top-4 left-4 flex items-center gap-1 z-10">
              
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              <span className="text-[10px] font-mono text-primary/70">REC</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default HeroSection;