import { motion } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';

export function PromisesSection() {
  const promises = [
    {
      icon: '🤝',
      promise: 'I promise to always be there for you, no matter what!',
      color: 'from-pink-400 to-rose-400',
    },
    {
      icon: '💪',
      promise: 'I promise to support all your dreams and crazy ideas!',
      color: 'from-purple-400 to-pink-400',
    },
    {
      icon: '😂',
      promise: 'I promise to make you laugh even on your worst days!',
      color: 'from-blue-400 to-purple-400',
    },
    {
      icon: '🎉',
      promise: 'I promise to celebrate every little win with you!',
      color: 'from-yellow-400 to-orange-400',
    },
    {
      icon: '🤫',
      promise: 'I promise to keep all your secrets safe forever!',
      color: 'from-green-400 to-teal-400',
    },
    {
      icon: '🌟',
      promise: 'I promise to be honest and real with you, always!',
      color: 'from-indigo-400 to-purple-400',
    },
    {
      icon: '🎭',
      promise: 'I promise to go on more adventures with you!',
      color: 'from-red-400 to-pink-400',
    },
    {
      icon: '💝',
      promise: 'I promise to love you unconditionally as my bestie forever!',
      color: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <div>
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <Heart className="w-16 h-16 text-pink-500 mx-auto mb-4 fill-pink-500" />
        </motion.div>
        <h2 className="text-4xl text-pink-600 mb-2">My Promises to You 💝</h2>
        <p className="text-purple-600 text-xl">On this Promise Day and forever...</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {promises.map((item, index) => (
          <motion.div
            key={index}
            className="relative group"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              delay: index * 0.1,
              type: "spring",
              stiffness: 80,
            }}
          >
            <motion.div
              className={`bg-gradient-to-br ${item.color} rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all h-full`}
              whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="text-6xl mb-4"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              >
                {item.icon}
              </motion.div>

              <p className="text-white text-lg leading-relaxed font-medium">
                {item.promise}
              </p>

              <motion.div
                className="absolute top-4 right-4"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Sparkles className="w-6 h-6 text-white/80" />
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Special Promise Card */}
      <motion.div
        className="bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-3xl p-8 shadow-2xl text-white text-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          delay: 0.8,
          type: "spring",
          stiffness: 100,
        }}
        whileHover={{ scale: 1.02 }}
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <span className="text-7xl block mb-4">🐼💕</span>
        </motion.div>
        
        <h3 className="text-3xl mb-4">My Ultimate Promise</h3>
        <p className="text-xl leading-relaxed mb-4">
          No matter where life takes us, no matter how far apart we may be, 
          you will always have a special place in my heart. Our friendship is forever! 
          Through ups and downs, laughs and tears, I'll always be your person. 
        </p>
        <p className="text-2xl">Best friends for life! 🌟✨</p>

        <motion.div
          className="flex justify-center gap-3 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {[...Array(7)].map((_, i) => (
            <motion.span
              key={i}
              className="text-3xl"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            >
              💖
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-8 text-center p-6 bg-white/70 backdrop-blur rounded-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <p className="text-lg text-purple-600 italic">
          "Edit these promises to make them uniquely yours! Add your own special touch! 💕"
        </p>
      </motion.div>
    </div>
  );
}
