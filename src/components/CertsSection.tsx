import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const certs = [
  { name: "#######", abbr: "###", color: "primary" },
  { name: "#######", abbr: "###", color: "cyber-blue" },
  { name: "#######", abbr: "###", color: "accent" },
];

const CertsSection = () => {
  return (
    <section id="certs" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Main Cert Card */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-cyber p-8 md:p-12 mb-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <span className="text-[10px] font-mono tracking-wider text-muted-foreground">CERTIFICATION</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mt-2 mb-6">
                ####### #######
              </h2>
              <span className="text-primary font-mono text-sm">###</span>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div>
                  <div className="text-[10px] font-mono tracking-wider text-muted-foreground mb-1">Date</div>
                  <div className="text-sm font-semibold text-foreground">####.##.##</div>
                </div>
                <div>
                  <div className="text-[10px] font-mono tracking-wider text-muted-foreground mb-1">Duration</div>
                  <div className="text-sm font-semibold text-foreground">## Months</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-2 text-foreground">Objective</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                ####### ####### ####### ####### ####### ####### ####### ####### ####### #######.
              </p>

              <div className="text-[10px] font-mono tracking-wider text-muted-foreground mb-3">CORE MODULES</div>
              <div className="flex flex-wrap gap-2">
                {["#######", "#######", "#######", "#######", "#######"].map((m, i) => (
                  <span key={i} className="px-3 py-1 bg-secondary rounded text-xs text-secondary-foreground">
                    {m}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between pt-4 border-t border-border">
                <span className="text-xs text-accent font-mono">Status: 100% Completed</span>
                <button className="flex items-center gap-1 text-xs text-primary hover:underline underline-offset-4">
                  <ExternalLink size={12} /> Verify Credential
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Cert badges row */}
        <div className="flex gap-4 justify-center">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="w-20 h-20 card-cyber flex items-center justify-center"
            >
              <span className="font-mono text-xs text-muted-foreground font-bold">{cert.abbr}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertsSection;
