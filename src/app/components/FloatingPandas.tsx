import { motion } from 'motion/react';

export function FloatingPandas() {
  const pandas = ['🐼', '🐼', '🐼', '🐼', '🐼', '🐼'];

  return (
    <>
      {pandas.map((panda, i) => (
        <motion.div
          key={i}
          className="fixed text-6xl pointer-events-none z-0"
          style={{
            left: `${(i * 20) % 100}%`,
            top: `${(i * 15) % 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
            rotate: [0, 10, -10, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        >
          {panda}
        </motion.div>
      ))}
    </>
  );
}
