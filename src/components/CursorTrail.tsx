import { useEffect, useRef } from "react";

const TRAIL_LENGTH = 25;

const CursorTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const points = useRef<{ x: number; y: number }[]>([]);
  const mouse = useRef({ x: 0, y: 0 });
  const anim = useRef(0);

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

    const move = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", move);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // إضافة النقطة الجديدة
      points.current.push({
        x: mouse.current.x,
        y: mouse.current.y,
      });

      if (points.current.length > TRAIL_LENGTH) {
        points.current.shift();
      }

      const pts = points.current;

      for (let i = 1; i < pts.length; i++) {
        const p0 = pts[i - 1];
        const p1 = pts[i];

        const progress = i / pts.length;
        const alpha = progress * 0.6;

        ctx.beginPath();
        ctx.moveTo(p0.x, p0.y);
        ctx.lineTo(p1.x, p1.y);

        // لون نيون خفيف
        ctx.strokeStyle = `rgba(255,60,60,${alpha})`;
        ctx.lineWidth = progress * 4;
        ctx.lineCap = "round";

        // تأثير النيون
        ctx.shadowColor = "rgba(255,80,80,0.6)";
        ctx.shadowBlur = 12;

        ctx.stroke();
      }

      anim.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(anim.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
    />
  );
};

export default CursorTrail;
