import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, ExternalLink, Terminal } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Contact</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Feel free to reach out for any inquiries or collaboration opportunities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-cyber p-6 md:p-8"
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Terminal size={18} className="text-primary" />
            </div>
            <div className="text-left">
              <h3 className="text-lg font-bold">Contact Me</h3>
              <span className="text-xs font-mono text-muted-foreground">/usr/bin/message</span>
            </div>
          </div>

          <div className="space-y-3">
            {/* E-MAIL */}
            <motion.a
              href="mailto:0xs3od@gmail.com"
              whileHover={{ scale: 1.02, borderColor: "hsl(var(--primary) / 0.5)" }}
              className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 border border-border transition-all group"
            >
              <motion.div
                whileHover={{ rotate: 15, scale: 1.15 }}
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{
                  background: 'hsl(0, 85%, 55% / 0.15)',
                  border: '1px solid hsl(0, 85%, 55% / 0.25)',
                }}
              >
                <Mail size={18} style={{ color: 'hsl(0, 85%, 55%)' }} />
              </motion.div>
              <div className="text-left flex-1 min-w-0">
                <div className="text-[10px] uppercase text-muted-foreground tracking-widest font-mono">E-mail</div>
                <div className="text-sm font-medium truncate">0xs3od@gmail.com</div>
              </div>
              <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
            </motion.a>

            {/* LINKEDIN */}
            <motion.a
              href="https://www.linkedin.com/in/0xs3od/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, borderColor: "hsl(210, 90%, 55% / 0.5)" }}
              className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 border border-border transition-all group"
            >
              <motion.div
                whileHover={{ rotate: 15, scale: 1.15 }}
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{
                  background: 'hsl(210, 90%, 55% / 0.15)',
                  border: '1px solid hsl(210, 90%, 55% / 0.25)',
                }}
              >
                <Linkedin size={18} style={{ color: 'hsl(210, 90%, 55%)' }} />
              </motion.div>
              <div className="text-left flex-1 min-w-0">
                <div className="text-[10px] uppercase text-muted-foreground tracking-widest font-mono">LinkedIn</div>
                <div className="text-sm font-medium truncate">Saud Alharbi</div>
              </div>
              <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
            </motion.a>

            {/* LOCATION */}
            <motion.div
              whileHover={{ scale: 1.02, borderColor: "hsl(145, 70%, 45% / 0.5)" }}
              className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 border border-border transition-all"
            >
              <motion.div
                whileHover={{ rotate: 15, scale: 1.15 }}
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{
                  background: 'hsl(145, 70%, 45% / 0.15)',
                  border: '1px solid hsl(145, 70%, 45% / 0.25)',
                }}
              >
                <MapPin size={18} style={{ color: 'hsl(145, 70%, 45%)' }} />
              </motion.div>
              <div className="text-left flex-1 min-w-0">
                <div className="text-[10px] uppercase text-muted-foreground tracking-widest font-mono">Location</div>
                <div className="text-sm font-medium">Kingdom of Saudi Arabia</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
