import { motion } from "framer-motion";

const TerminalBlock = () => {
  return (
    <section className="px-6 pb-16">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 items-center">
        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex-1 w-full"
        >
          <div className="bg-terminal-bg border border-border rounded-lg overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
              <span className="w-3 h-3 rounded-full bg-primary/60"></span>
              <span className="w-3 h-3 rounded-full bg-cyber-orange/60"></span>
              <span className="w-3 h-3 rounded-full bg-accent/60"></span>
            </div>
            <div className="p-4 font-mono text-sm space-y-1">
              <p>
                <span className="text-accent">root@user:~#</span>{" "}
                <span className="text-cyber-orange">./init_protocol.sh</span>
              </p>
              <p className="text-muted-foreground">{">"} Initializing Red Team protocol...</p>
              <p className="text-muted-foreground">{">"} Target acquired [192.168.1.X]</p>
              <p className="text-muted-foreground">
                {">"} Scanning ports...{" "}
                <span className="typing-cursor"></span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <motion.button
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="card-cyber px-6 py-4 flex items-center gap-3 hover:border-primary/40"
          >
            <span className="text-primary font-mono text-lg">{">"}_</span>
            <div className="text-left">
              <div className="text-xs text-muted-foreground tracking-wider">SYSTEM</div>
              <div className="text-sm font-semibold text-foreground">PRESS F2</div>
            </div>
          </motion.button>
          <motion.button
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="card-cyber px-6 py-4 flex items-center gap-3 hover:border-primary/40"
          >
            <span className="text-primary text-lg">⊞</span>
            <div className="text-left">
              <div className="text-xs text-muted-foreground tracking-wider">START MENU</div>
              <div className="text-sm font-semibold text-foreground">PRESS F4</div>
            </div>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default TerminalBlock;
