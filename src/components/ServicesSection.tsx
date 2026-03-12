import { motion } from "framer-motion";
import { FileText, BookOpen, Award, Briefcase, ArrowRight } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Write-ups",
    description: "Explain and summarize everything that is useful",
    label: "OPEN_ FILE MANAGER",
    href: "#writeups",
  },
  {
    icon: BookOpen,
    title: "My Courses",
    description: "Explain the certificates and courses you have completed for free",
    label: "ACADEMY",
    href: "#courses",
  },
  {
    icon: Award,
    title: "Certifications",
    description: "Professional certificates",
    label: "CREDENTIALS",
    href: "#certs",
  },
  {
    icon: Briefcase,
    title: "Projects",
    description: "Projects I've worked on in the field of cybersecurity and non-cybersecurity",
    label: "LOGS",
    href: "#projects",
  },
];

const ServicesSection = () => {
  return (
    <section className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <motion.a
              key={service.title}
              href={service.href}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="card-cyber p-6 flex flex-col justify-between min-h-[220px] group"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-6">
                  <service.icon size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
                <span className="text-[10px] tracking-wider text-muted-foreground font-mono">{service.label}</span>
                <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
