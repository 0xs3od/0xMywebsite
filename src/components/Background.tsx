const Background = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none" style={{ background: "hsl(var(--background))" }}>
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground) / 0.15) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--foreground) / 0.15) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 50%, hsl(var(--background)) 100%)',
        }}
      />

      {/* Red glow orb top-right */}
      <div
        className="absolute rounded-full"
        style={{
          top: '-10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          background: 'hsl(var(--primary) / 0.08)',
          filter: 'blur(120px)',
        }}
      />

      {/* Orange glow orb bottom-left */}
      <div
        className="absolute rounded-full"
        style={{
          bottom: '-10%',
          left: '-5%',
          width: '400px',
          height: '400px',
          background: 'hsl(var(--cyber-orange) / 0.04)',
          filter: 'blur(100px)',
        }}
      />
    </div>
  );
};

export default Background;
