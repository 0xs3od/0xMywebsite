import { motion } from "framer-motion";

const SectionDivider = () => {
  return (
    <div className="relative py-8 flex items-center justify-center overflow-hidden">
      {/* Animated line */}
      <motion.div
        className="relative w-full max-w-md h-[1px]"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, transparent, hsl(var(--primary) / 0.5), transparent)',
          }}
        />
        {/* Animated pulse traveling across */}
        <motion.div
          className="absolute top-[-1px] h-[3px] w-16 rounded-full"
          style={{
            background: 'linear-gradient(90deg, transparent, hsl(var(--primary)), transparent)',
            boxShadow: '0 0 15px hsl(var(--primary) / 0.6), 0 0 30px hsl(var(--primary) / 0.3)',
          }}
          animate={{ left: ['-10%', '110%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
        />
      </motion.div>

      {/* Center dot */}
      <motion.div
        className="absolute w-2 h-2 rounded-full"
        style={{
          background: 'hsl(var(--primary))',
          boxShadow: '0 0 10px hsl(var(--primary) / 0.6), 0 0 20px hsl(var(--primary) / 0.3)',
        }}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ opacity: { duration: 2, repeat: Infinity }, scale: { duration: 0.3 } }}
      />
    </div>
  );
};

export default SectionDivider;
