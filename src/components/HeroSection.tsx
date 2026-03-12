import { motion } from "framer-motion";
import profileImg from "@/assets/profile-placeholder.png";

const tags = ["#######", "#######", "#######", "#######", "#######"];

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center py-20 px-6">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-none">
            <span className="text-primary text-glow-red">Saud</span>
            <br />
            <span className="text-foreground"></span>
          </h1>

          <p className="mt-4 text-lg font-mono text-muted-foreground">> Pentester | Cybersecurity
            <span className="text-primary">{">"}</span> ####### | #######
            <span className="typing-cursor"></span>
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-6">
            {tags.map((tag, i) =>
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.05 }}
              className="px-3 py-1 rounded-md text-xs font-mono border border-border bg-secondary text-secondary-foreground hover:border-primary/40 transition-colors">
              
                {tag}
              </motion.span>
            )}
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-muted-foreground leading-relaxed max-w-lg">
            
            Hello and welcome, Your Highness. On my website, I would like to introduce myself. I am a person who loves the field of cybersecurity and penetration testing, and I am interested in technical things and self-development. I am passionate about learning and I like to help people learn as well. I hope you enjoy your tour of the website.
          </motion.p>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center lg:justify-end">
          
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/40 border-glow-red">
              <img
                src={profileImg}
                alt="Profile"
                className="w-full h-full object-cover" />
              
            </div>
            {/* Online Badge */}
            <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-card border border-border rounded-full px-3 py-1">
              <span className="w-2 h-2 rounded-full bg-accent online-pulse"></span>
              <span className="text-xs font-mono text-accent">ONLINE</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default HeroSection;