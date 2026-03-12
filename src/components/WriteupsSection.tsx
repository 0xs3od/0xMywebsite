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

const WriteupsSection = () => {
  return (
    <section id="writeups" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
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
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="card-cyber p-6 group cursor-pointer"
            >
              <span className="text-[10px] font-mono tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">
                {item.category}
              </span>
              <h3 className="text-lg font-semibold mt-4 mb-2 text-foreground group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.description}</p>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-xs text-muted-foreground">{item.date}</span>
                <span className="text-[10px] font-mono tracking-wider text-primary">READ PROTOCOLS</span>
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
          <button className="text-sm font-mono text-primary hover:underline underline-offset-4">
            View the complete library →
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WriteupsSection;
