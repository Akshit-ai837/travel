import { motion } from 'motion/react';
import { Camera } from 'lucide-react';

export function PhotoGallery() {
  // Replace these with your actual photos
  const photos = [
    {
      url: 'https://images.unsplash.com/photo-1572649296821-441d570ae49e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZXN0JTIwZnJpZW5kcyUyMGxhdWdoaW5nfGVufDF8fHx8MTc3MDczMjY1MXww&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'That day we laughed until we cried 😂',
    },
    {
      url: 'https://images.unsplash.com/photo-1768776184097-cf035ece5dd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRzaGlwJTIwbWVtb3JpZXMlMjBwb2xhcm9pZHxlbnwxfHx8fDE3NzA3MzI2NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'Our favorite memories together 💕',
    },
    {
      url: 'https://images.unsplash.com/photo-1767269916536-99ffb335f3d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwcGFuZGElMjBiYW1ib298ZW58MXx8fHwxNzcwNzMyNjUyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'As cute as pandas together! 🐼',
    },
    {
      url: 'https://images.unsplash.com/photo-1762091489969-0315e5cd76d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwcGFuZGElMjBoZWFydHxlbnwxfHx8fDE3NzA3MzI2NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'You and me forever! 💖',
    },
  ];

  return (
    <div>
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <Camera className="w-12 h-12 text-pink-500 mx-auto mb-4" />
        <h2 className="text-3xl text-pink-600 mb-2">Our Beautiful Memories 📸</h2>
        <p className="text-purple-600">Every moment with you is special!</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-3xl p-4 shadow-xl hover:shadow-2xl transition-shadow"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02, rotate: Math.random() > 0.5 ? 2 : -2 }}
          >
            <div className="relative overflow-hidden rounded-2xl mb-4">
              <img
                src={photo.url}
                alt={photo.caption}
                className="w-full h-64 object-cover"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-pink-500/30 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </div>
            <p className="text-center text-lg text-gray-700">{photo.caption}</p>
            <motion.div
              className="flex justify-center gap-2 mt-3"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.3,
              }}
            >
              <span className="text-2xl">💕</span>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-8 text-center p-6 bg-white/70 backdrop-blur rounded-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-lg text-purple-600 italic">
          "To replace these with your own photos, simply update the URLs in the code with your actual images! 📷✨"
        </p>
      </motion.div>
    </div>
  );
}
