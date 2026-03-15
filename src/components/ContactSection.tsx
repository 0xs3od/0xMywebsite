import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, ExternalLink, Terminal } from "lucide-react";

const contactItems = [
  {
    icon: Mail,
    label: "E-mail",
    value: "0xs3od@gmail.com",
    href: "mailto:0xs3od@gmail.com",
    color: "0, 85%, 55%",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Saud Alharbi",
    href: "https://www.linkedin.com/in/0xs3od/",
    external: true,
    color: "210, 90%, 55%",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kingdom of Saudi Arabia",
    color: "145, 70%, 45%",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="px-6 py-20 flex items-center justify-center min-h-[60vh]">
      <div className="w-full max-w-xl">
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
            {contactItems.map((item, index) => {
              const IconComp = item.icon;
              const iconBg = `hsla(${item.color}, 0.15)`;
              const iconBorder = `hsla(${item.color}, 0.25)`;
              const iconColor = `hsl(${item.color})`;
              const glowColor = `hsla(${item.color}, 0.4)`;

              const content = (
                <>
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.15 }}
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      background: iconBg,
                      border: `1px solid ${iconBorder}`,
                      boxShadow: `0 0 12px ${glowColor}`,
                    }}
                  >
                    <IconComp size={18} style={{ color: iconColor }} />
                  </motion.div>
                  <div className="text-left flex-1 min-w-0">
                    <div className="text-[10px] uppercase text-muted-foreground tracking-widest font-mono">{item.label}</div>
                    <div className="text-sm font-medium truncate">{item.value}</div>
                  </div>
                  {item.href && (
                    <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                  )}
                </>
              );

              return item.href ? (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 border border-border hover:border-primary/30 transition-all group cursor-pointer"
                >
                  {content}
                </motion.a>
              ) : (
                <motion.div
                  key={item.label}
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 border border-border transition-all"
                >
                  {content}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
