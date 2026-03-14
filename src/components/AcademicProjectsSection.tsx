import { motion } from "framer-motion";
import { GraduationCap, ExternalLink, Github } from "lucide-react";

const academicProjects = [
{
  title: "Algorithm-Based Programming Projects",
  course: "Visual Programming",
  description: "• Developed multiple small applications implementing various algorithms and logical solutions \n• Built programs for calculations, data processing, and decision-making \n• Applied control structures, loops, conditions, and functions \n• Used both VB.NET and C++ to implement and test algorithms",
  tech: ["VB.NET", "VB"],
  date: "2026",
  link: "#"
},
{
  title: "User & Data Management Systems",
  course: "Programming",
  description: "• Created systems to manage users, courses, and records • Implemented Add, Delete, Update, and Search functionalities • Applied object-oriented programming (OOP) using classes • Focused on data validation and program flow control",
  tech: ["C++", "VB.NET", "SQL"],
  date: "2025",
  link: "#"
}];


const FloatingBubbles = () =>
<>
    {[...Array(7)].map((_, i) =>
  <motion.div
    key={i}
    className="absolute rounded-full bg-cyber-blue/5 border border-cyber-blue/10"
    style={{
      width: 7 + i * 5,
      height: 7 + i * 5,
      left: `${8 + i * 13}%`,
      bottom: `${10 + i % 3 * 25}%`
    }}
    animate={{
      y: [0, -18 - i * 3, 0],
      x: [0, Math.sin(i * 1.2) * 10, 0],
      opacity: [0.1, 0.3, 0.1],
      scale: [1, 1.2, 1]
    }}
    transition={{
      duration: 5 + i * 0.6,
      repeat: Infinity,
      delay: i * 0.3,
      ease: "easeInOut"
    }} />

  )}
  </>;


const AcademicProjectsSection = () => {
  return (
    <section id="academic" className="px-6 py-20 relative overflow-hidden">
      <FloatingBubbles />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-3">
          
          <GraduationCap size={16} className="text-primary" />
          <span className="text-xs font-mono text-muted-foreground tracking-wider">ACADEMIC</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
          
          Academic Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground mb-10 max-w-2xl">
          
          These projects showcase what I have learned during my studies and practical experiences. They are simple but reflect my understanding of the subjects and technologies, with much more still to document.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {academicProjects.map((project, i) =>
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 160 }}
            whileHover={{
              y: -6,
              boxShadow: "0 0 25px hsl(var(--glow-red) / 0.12)",
              borderColor: "hsl(var(--primary) / 0.4)"
            }}
            className="card-cyber p-6 group">
            
              <div className="flex items-start justify-between mb-3">
                <span className="text-[10px] font-mono tracking-wider text-muted-foreground">
                  {project.date}
                </span>
                <span className="text-[10px] font-mono tracking-wider text-primary px-2 py-0.5 rounded bg-[#ee2b2b]/15">
                  {project.course}
                </span>
              </div>

              <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                {project.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((t, j) =>
              <motion.span
                key={j}
                whileHover={{ scale: 1.1 }}
                className="px-2 py-0.5 bg-secondary rounded text-[10px] font-mono text-secondary-foreground">
                
                    {t}
                  </motion.span>
              )}
              </div>

              <div className="pt-3 border-t border-border flex items-center gap-4">
                <motion.a
                href={project.link}
                whileHover={{ x: 3 }}
                className="flex items-center gap-1 text-[10px] text-primary font-mono hover:underline underline-offset-4">
                
                  <ExternalLink size={10} /> View Project
                </motion.a>
                <motion.a
                href="#"
                whileHover={{ x: 3 }}
                className="flex items-center gap-1 text-[10px] text-muted-foreground font-mono hover:text-primary hover:underline underline-offset-4">
                
                  <Github size={10} /> Source Code
                </motion.a>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default AcademicProjectsSection;