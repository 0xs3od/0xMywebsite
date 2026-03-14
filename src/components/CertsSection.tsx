import { motion } from "framer-motion";
import { Award, ShieldCheck, ExternalLink } from "lucide-react";

const certs = [
  {
    name: "Network Security",
    abbr: "ISC2",
    date: "2025.11.11",
    status: "Completed",
    link: "https://www.coursera.org/account/accomplishments/verify/T6TYK1SZHYGQ/"
  },
  {
    name: "Relational Database Administration (DBA)",
    abbr: "IBM",
    date: "2025.04.20",
    status: "Completed",
    link: "https://www.coursera.org/account/accomplishments/verify/QFHCLH2FZWSX/"
  },
  {
    name: "Build Your Professional ePortfolio in English",
    abbr: "Georgia Institute of Technology",
    date: "2023.11.29",
    status: "Completed",
    link: "https://www.coursera.org/account/accomplishments/verify/99VXCZULHNY6/"
  },
  {
    name: "Object-Oriented Data Structures in C++",
    abbr: "University of Illinois",
    date: "2024.11.03",
    status: "Completed",
    link: "https://www.coursera.org/account/accomplishments/verify/XUH7VJNYV907/"
  },
  {
    name: "Introduction to Visual Basic Programming",
    abbr: "Simmons University",
    date: "####.##.##",
    status: "Completed",
    link: "https://coursera.org/"
  },
  {
    name: "Data Structures",
    abbr: "University of California San Diego",
    date: "2025.04.26",
    status: "Completed",
    link: "https://www.coursera.org/account/accomplishments/verify/KYZHCI9MOBL9/"
  }
];

const FloatingBubbles = () => (
  <>
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-accent/5 border border-accent/10"
        style={{
          width: 6 + i * 5,
          height: 6 + i * 5,
          right: `${5 + i * 14}%`,
          top: `${10 + (i % 3) * 30}%`,
        }}
        animate={{
          y: [0, -15 - i * 4, 0],
          x: [0, Math.cos(i) * 12, 0],
          opacity: [0.1, 0.35, 0.1],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 4 + i * 0.8,
          repeat: Infinity,
          delay: i * 0.5,
          ease: "easeInOut",
        }}
      />
    ))}
  </>
);

const CertsSection = () => {
  return (
    <section id="certs" className="px-6 py-20 relative overflow-hidden">
      <FloatingBubbles />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-3"
        >
          <Award size={16} className="text-primary" />
          <span className="text-xs font-mono text-muted-foreground tracking-wider">
            CREDENTIALS
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold tracking-tighter mb-4"
        >
          Certifications
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground mb-10 max-w-2xl"
        >
          Each certificate I have earned represents a step toward excellence
          and advancing my professional journey.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, type: "spring", stiffness: 180 }}
              whileHover={{
                y: -6,
                boxShadow: "0 0 20px hsl(var(--glow-red) / 0.12)",
                borderColor: "hsl(var(--primary) / 0.4)",
              }}
              className="card-cyber p-5 group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <motion.div
                  className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <ShieldCheck size={18} className="text-primary" />
                </motion.div>

                <span
                  className={`text-[10px] font-mono tracking-wider px-2 py-0.5 rounded ${
                    cert.status === "Completed"
                      ? "text-accent bg-accent/10"
                      : "text-cyber-orange bg-cyber-orange/10"
                  }`}
                >
                  {cert.status === "Completed" ? "✓ DONE" : "◐ IN PROGRESS"}
                </span>
              </div>

              <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                {cert.name}
              </h3>

              <div className="flex items-center justify-between">
                <span className="text-primary font-mono text-xs font-bold">
                  {cert.abbr}
                </span>
                <span className="text-[10px] text-muted-foreground font-mono">
                  {cert.date}
                </span>
              </div>

              <div className="mt-3 pt-3 border-t border-border">
                <motion.a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 3 }}
                  className="flex items-center gap-1 text-[10px] text-primary font-mono hover:underline underline-offset-4"
                >
                  <ExternalLink size={10} /> Verify
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertsSection;
