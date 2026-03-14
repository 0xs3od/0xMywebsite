import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, ExternalLink, Terminal } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Contact</h2>
          <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
            Feel free to reach out for any inquiries or collaboration opportunities. I'd be happy to hear from you!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
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
            <a
              href="mailto:0xs3od@gmail.com"
              className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 border border-border hover:border-primary/40 transition-all group"
            >
              <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <Mail size={16} className="text-primary" />
              </div>
              <div className="text-left flex-1 min-w-0">
                <div className="text-[10px] uppercase text-muted-foreground tracking-widest font-mono">E-mail</div>
                <div className="text-sm font-medium truncate">0xs3od@gmail.com</div>
              </div>
              <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/0xs3od/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 border border-border hover:border-primary/40 transition-all group"
            >
              <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <Linkedin size={16} className="text-primary" />
              </div>
              <div className="text-left flex-1 min-w-0">
                <div className="text-[10px] uppercase text-muted-foreground tracking-widest font-mono">LinkedIn</div>
                <div className="text-sm font-medium truncate">Saud Alharbi</div>
              </div>
              <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
            </a>

            {/* LOCATION */}
            <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 border border-border">
              <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                <MapPin size={16} className="text-accent" />
              </div>
              <div className="text-left flex-1 min-w-0">
                <div className="text-[10px] uppercase text-muted-foreground tracking-widest font-mono">Location</div>
                <div className="text-sm font-medium">Kingdom of Saudi Arabia</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
