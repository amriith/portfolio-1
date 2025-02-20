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
    <div className="relative h-screen bg-gray-900">
     
      {visible && (
        <div
          className="absolute w-90 h-90 bg-blue-300 opacity-5 blur-xl rounded-full pointer-events-none transition-transform duration-100"
          style={{
            transform: `translate(${position.x - 50}px, ${position.y - 50}px)`,
          }}
        />
      )}

      <div className="relative z-10">{children}</div>
    </div>
  );
}
