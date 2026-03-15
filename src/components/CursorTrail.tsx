import { useEffect, useRef } from "react";

const TRAIL_LENGTH = 20;

const CursorTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const points = useRef<{ x: number; y: number; age: number }[]>([]);
  const mouse = useRef({ x: -100, y: -100 });
  const animId = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      points.current.push({ x: e.clientX, y: e.clientY, age: 0 });
      if (points.current.length > TRAIL_LENGTH) {
        points.current.shift();
      }
    };
    window.addEventListener("mousemove", onMove);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const pts = points.current;
      if (pts.length < 2) {
        animId.current = requestAnimationFrame(draw);
        return;
      }

      // Age points
      for (let i = 0; i < pts.length; i++) {
        pts[i].age += 0.02;
      }
      // Remove fully faded
      points.current = pts.filter((p) => p.age < 1);

      const remaining = points.current;
      if (remaining.length < 2) {
        animId.current = requestAnimationFrame(draw);
        return;
      }

      for (let i = 1; i < remaining.length; i++) {
        const p0 = remaining[i - 1];
        const p1 = remaining[i];
        const progress = i / remaining.length;
        const alpha = Math.max(0, (1 - p1.age) * progress);
        const width = progress * 3;

        ctx.beginPath();
        ctx.moveTo(p0.x, p0.y);
        ctx.lineTo(p1.x, p1.y);
        ctx.strokeStyle = `hsla(0, 85%, 55%, ${alpha})`;
        ctx.lineWidth = width;
        ctx.lineCap = "round";
        ctx.shadowColor = `hsla(0, 85%, 55%, ${alpha * 0.6})`;
        ctx.shadowBlur = 8;
        ctx.stroke();
      }

      animId.current = requestAnimationFrame(draw);
    };

    animId.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(animId.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[9999] pointer-events-none"
    />
  );
};

export default CursorTrail;
