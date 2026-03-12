import { motion } from "framer-motion";
import { Star } from "lucide-react";

const CoursesSection = () => {
  return (
    <section id="courses" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold tracking-tighter mb-4"
        >
          My Courses
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground mb-12"
        >
          ####### ####### ####### ####### ####### #######
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-cyber p-6 max-w-md"
        >
          <div className="w-full h-40 bg-secondary rounded-lg mb-4 flex items-center justify-center">
            <span className="text-muted-foreground text-sm font-mono">####### THUMBNAIL</span>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-mono tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded">#######</span>
            <span className="text-accent font-bold text-sm">0.00$ FREE</span>
          </div>

          <h3 className="text-lg font-bold mb-2">####### #######</h3>

          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <span className="text-foreground font-semibold">Presenter:</span> #######
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-border">
            <div className="flex items-center gap-1">
              <Star size={12} className="text-cyber-orange fill-cyber-orange" />
              <span>5 (Rating)</span>
            </div>
            <span>### (Students)</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSection;
