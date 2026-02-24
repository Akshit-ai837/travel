import { motion } from 'motion/react';
import { BookOpen, Star } from 'lucide-react';

export function StoriesSection() {
  const stories = [
    {
      emoji: '🎉',
      title: 'When We First Met',
      story: 'Remember that day when we instantly clicked? It felt like I had known you forever! From that moment, I knew you were going to be someone special in my life. 💫',
      date: 'The Beginning',
    },
    {
      emoji: '🎂',
      title: 'The Birthday Surprise',
      story: 'You threw me the most amazing surprise party! I was so shocked and happy. The way you planned everything perfectly showed how much you care. Best birthday ever! 🎈',
      date: 'Unforgettable Day',
    },
    {
      emoji: '🌟',
      title: 'Our Late Night Adventures',
      story: 'Those endless conversations at 3 AM, sharing secrets, dreams, and silly jokes. We laughed until our stomachs hurt! These are the moments I treasure most. 🌙',
      date: 'Many Nights',
    },
    {
      emoji: '🎭',
      title: 'The Funny Incident',
      story: 'That time we got completely lost and ended up having the most random adventure! We turned a disaster into the best day ever. Only with you could that happen! 😂',
      date: 'Epic Memory',
    },
    {
      emoji: '💪',
      title: 'When You Were There',
      story: 'During my toughest times, you never left my side. Your support and encouragement helped me get through everything. I don\'t know what I would do without you! 🤗',
      date: 'Always',
    },
    {
      emoji: '🎨',
      title: 'Our Crazy Plans',
      story: 'All those wild dreams and plans we made together! From traveling the world to starting our own business. With you, every dream feels possible! ✨',
      date: 'Future Goals',
    },
  ];

  return (
    <div>
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <BookOpen className="w-12 h-12 text-pink-500 mx-auto mb-4" />
        <h2 className="text-3xl text-pink-600 mb-2">Our Story Collection 📖</h2>
        <p className="text-purple-600">Every chapter with you is my favorite!</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-white to-pink-50 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all"
            initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ 
              delay: index * 0.15,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            <motion.div
              className="text-5xl mb-4"
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            >
              {story.emoji}
            </motion.div>

            <div className="flex items-center gap-2 mb-3">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <h3 className="text-xl text-pink-600">{story.title}</h3>
            </div>

            <p className="text-gray-700 mb-4 leading-relaxed">
              {story.story}
            </p>

            <div className="flex items-center justify-between">
              <span className="text-sm text-purple-500 italic">{story.date}</span>
              <motion.span
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
              >
                💝
              </motion.span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-8 text-center p-6 bg-white/70 backdrop-blur rounded-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <p className="text-lg text-purple-600 italic">
          "Feel free to edit these stories with your own special moments! Make it truly yours! 💕"
        </p>
      </motion.div>
    </div>
  );
}
