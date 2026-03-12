import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    number: "02",
    title: "#######",
    description: "####### ####### ####### ####### ####### ####### ####### #######. ####### ####### #######.",
    link: "#",
    date: "2026-01-21",
    label: "PROJECT: #######",
  },
  {
    number: "01",
    title: "#######",
    description: "####### ####### ####### ####### ####### ####### ####### #######.",
    link: "#",
    date: "2025-12-23",
    label: "PROJECT: #######",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold tracking-tighter mb-12"
        >
          Projects
        </motion.h2>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-cyber p-8 group"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl font-bold text-primary/20 font-mono">{project.number}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline underline-offset-4"
                  >
                    <ExternalLink size={14} /> Visit Project
                  </a>
                </div>

                {/* Placeholder image area */}
                <div className="w-full lg:w-80 h-48 bg-secondary rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground text-sm font-mono">####### IMAGE</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                <span className="text-xs text-muted-foreground font-mono">{project.date}</span>
                <span className="text-[10px] tracking-wider text-muted-foreground font-mono">{project.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
