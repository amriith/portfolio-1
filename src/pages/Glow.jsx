import { useState, useEffect } from "react";

export default function CursorShadow({ children }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let animationFrameId;

    const handleMouseMove = (e) => {
      setVisible(true);
      animationFrameId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative bg-gray-900 min-h-screen w-full">
      {/* Fixed Background Overlay */}
      <div className="fixed inset-0 bg-gray-900 z-[-1]" />

      
      {visible && (
        <div
          className="fixed w-[280px] h-[280px] bg-blue-300 opacity-17 blur-3xl rounded-full pointer-events-none transition-transform duration-100"
          style={{
            transform: `translate(${position.x - 100}px, ${position.y - 100}px)`,
          }}
        />
      )}

      {/* Content (Ensures scrolling is possible) */}
      <div className="relative z-10 min-h-screen w-full">{children}</div>
    </div>
  );
}
