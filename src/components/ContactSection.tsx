import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin } from "lucide-react";

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
            Feel free to reach out for any inquiries or collaboration opportunities. I’d be happy to hear from you!
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
            {/* E-MAIL */}
            <a
              href="mailto:0xs3od@gmail.com"
              className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors"
            >
              <Mail size={16} className="text-muted-foreground" />
              <div>
                <div className="text-[10px] text-muted-foreground tracking-wider">E-mail</div>
                <div>0xs3od@gmail.com</div>
              </div>
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/0xs3od/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={16} className="text-muted-foreground" />
              <div>
                <div className="text-[10px] text-muted-foreground tracking-wider">LinkedIn</div>
                <div>Saud Alharbi</div>
              </div>
            </a>

            {/* LOCATION */}
            <div className="flex items-center gap-3 text-sm text-foreground">
              <MapPin size={16} className="text-muted-foreground" />
              <div>
                <div className="text-[10px] text-muted-foreground tracking-wider">Location</div>
                <div>Kingdom of Saudi Arabia</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
