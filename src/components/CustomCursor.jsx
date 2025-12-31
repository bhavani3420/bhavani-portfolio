import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updateMousePosition);

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
      el.addEventListener('mousedown', handleMouseDown);
      el.addEventListener('mouseup', handleMouseUp);
    });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
        el.removeEventListener('mousedown', handleMouseDown);
        el.removeEventListener('mouseup', handleMouseUp);
      });
    };
  }, []);

  return (
    <>
      {/* Outer cursor ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
        }}
      >
        <div className="w-full h-full rounded-full border-2 border-white/80" />
      </motion.div>

      {/* Inner cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isClicking ? 0.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
        }}
      >
        <div className="w-full h-full rounded-full bg-white" />
      </motion.div>

      {/* Glow effect on hover */}
      {isHovering && (
        <motion.div
          className="fixed top-0 left-0 w-20 h-20 pointer-events-none z-[9998]"
          initial={{ opacity: 0 }}
          animate={{
            x: mousePosition.x - 40,
            y: mousePosition.y - 40,
            opacity: 0.5,
          }}
          exit={{ opacity: 0 }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 blur-xl" />
        </motion.div>
      )}
    </>
  );
};

export default CustomCursor;

