import { motion } from "framer-motion";

const writeups = [
  {
    category: "#######",
    title: "####### ####### #######",
    description: "####### ####### ####### ####### ####### ####### ####### #######",
    date: "Jan 7, 2026",
  },
  {
    category: "#######",
    title: "####### ####### #######",
    description: "####### ####### ####### ####### ####### #######",
    date: "Jan 11, 2026",
  },
  {
    category: "#######",
    title: "####### ####### #######",
    description: "####### ####### ####### ####### ####### #######",
    date: "Jan 11, 2026",
  },
];

const FloatingBubbles = () => (
  <>
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-primary/5 border border-primary/10"
        style={{
          width: 8 + i * 6,
          height: 8 + i * 6,
          left: `${10 + i * 12}%`,
          top: `${15 + (i % 4) * 20}%`,
        }}
        animate={{
          y: [0, -20 - i * 5, 0],
          x: [0, Math.sin(i * 0.8) * 15, 0],
          opacity: [0.15, 0.4, 0.15],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 5 + i * 0.7,
          repeat: Infinity,
          delay: i * 0.4,
          ease: "easeInOut",
        }}
      />
    ))}
  </>
);

const WriteupsSection = () => {
  return (
    <section id="writeups" className="px-6 py-20 relative overflow-hidden">
      <FloatingBubbles />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-3"
        >
          <div className="w-2 h-2 rounded-full bg-accent online-pulse"></div>
          <span className="text-xs font-mono text-muted-foreground tracking-wider">LIBRARY</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold tracking-tighter mb-4"
        >
          Latest Write-ups
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground mb-12 max-w-2xl"
        >
          ####### ####### ####### ####### ####### ####### ####### #######.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {writeups.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, rotateX: 5 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 150 }}
              whileHover={{
                y: -8,
                boxShadow: "0 0 25px hsl(var(--glow-red) / 0.15)",
                borderColor: "hsl(var(--primary) / 0.5)",
              }}
              className="card-cyber p-6 group cursor-pointer"
            >
              <motion.span
                className="text-[10px] font-mono tracking-wider text-primary bg-primary/10 px-2 py-1 rounded inline-block"
                whileHover={{ scale: 1.1 }}
              >
                {item.category}
              </motion.span>
              <h3 className="text-lg font-semibold mt-4 mb-2 text-foreground group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.description}</p>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-xs text-muted-foreground">{item.date}</span>
                <motion.span
                  className="text-[10px] font-mono tracking-wider text-primary"
                  whileHover={{ x: 4 }}
                >
                  READ PROTOCOLS →
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, color: "hsl(var(--primary))" }}
            whileTap={{ scale: 0.95 }}
            className="text-sm font-mono text-primary hover:underline underline-offset-4"
          >
            View the complete library →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WriteupsSection;
