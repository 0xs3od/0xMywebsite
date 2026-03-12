import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin } from "lucide-react";

const socials = [
  { name: "LinkedIn", href: "#" },
  { name: "X (Twitter)", href: "#" },
  { name: "TikTok", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "YouTube", href: "#" },
  { name: "Email", href: "#" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Contact</h2>
          <p className="text-muted-foreground mb-12 max-w-xl">
            ####### ####### ####### ####### ####### ####### ####### #######.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-cyber p-8 max-w-lg"
        >
          <div className="flex items-center gap-2 mb-6">
            <h3 className="text-lg font-bold">Contact Me</h3>
            <span className="text-xs font-mono text-muted-foreground">/usr/bin/message</span>
          </div>

          <div className="space-y-4">
            <a href="mailto:#######" className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors">
              <Mail size={16} className="text-muted-foreground" />
              <div>
                <div className="text-[10px] text-muted-foreground tracking-wider">E-mail</div>
                <div>#######@#######.com</div>
              </div>
            </a>

            <a href="#" className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors">
              <Linkedin size={16} className="text-muted-foreground" />
              <div>
                <div className="text-[10px] text-muted-foreground tracking-wider">LinkedIn</div>
                <div>####### #######</div>
              </div>
            </a>

            <div className="flex items-center gap-3 text-sm text-foreground">
              <MapPin size={16} className="text-muted-foreground" />
              <div>
                <div className="text-[10px] text-muted-foreground tracking-wider">Location</div>
                <div>####### #######</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
