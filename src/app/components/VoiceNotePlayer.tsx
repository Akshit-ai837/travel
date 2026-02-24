import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Music, Play, Pause, Volume2 } from 'lucide-react';

export function VoiceNotePlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Replace this URL with your actual voice note/audio file
  const audioUrl = ''; // Add your audio file URL here

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-50"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, type: "spring", stiffness: 100 }}
    >
      <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-6 shadow-2xl">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="flex items-center gap-4"
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            {/* Icon */}
            <motion.div
              animate={{
                rotate: isPlaying ? 360 : 0,
              }}
              transition={{
                duration: 3,
                repeat: isPlaying ? Infinity : 0,
                ease: "linear",
              }}
            >
              <div className="bg-white rounded-full p-3">
                <Music className="w-6 h-6 text-pink-500" />
              </div>
            </motion.div>

            {/* Info */}
            <div className="flex-1">
              <motion.h3 
                className="text-white text-lg mb-1"
                animate={{
                  opacity: [1, 0.7, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                💝 Special Voice Message For You
              </motion.h3>
              
              {audioUrl ? (
                <>
                  <input
                    type="range"
                    min="0"
                    max={audioRef.current?.duration || 0}
                    value={currentTime}
                    onChange={handleSeek}
                    className="w-full h-2 bg-white/30 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, white ${(currentTime / (audioRef.current?.duration || 1)) * 100}%, rgba(255,255,255,0.3) ${(currentTime / (audioRef.current?.duration || 1)) * 100}%)`,
                    }}
                  />
                  <audio
                    ref={audioRef}
                    src={audioUrl}
                    onTimeUpdate={handleTimeUpdate}
                    onEnded={() => setIsPlaying(false)}
                  />
                </>
              ) : (
                <p className="text-white/90 text-sm">
                  Add your voice note URL in the code to enable playback! 🎵
                </p>
              )}
            </div>

            {/* Play/Pause Button */}
            <motion.button
              onClick={togglePlay}
              disabled={!audioUrl}
              className={`bg-white rounded-full p-4 shadow-lg ${
                audioUrl ? 'hover:scale-110' : 'opacity-50 cursor-not-allowed'
              } transition-all`}
              whileHover={audioUrl ? { scale: 1.1 } : {}}
              whileTap={audioUrl ? { scale: 0.9 } : {}}
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 text-pink-500" />
              ) : (
                <Play className="w-6 h-6 text-pink-500" />
              )}
            </motion.button>

            {/* Volume Icon */}
            <motion.div
              animate={{
                scale: isPlaying ? [1, 1.2, 1] : 1,
              }}
              transition={{
                duration: 0.5,
                repeat: isPlaying ? Infinity : 0,
              }}
            >
              <Volume2 className="w-6 h-6 text-white" />
            </motion.div>
          </motion.div>

          {/* Cute Note */}
          <motion.p
            className="text-center text-white/90 text-sm mt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            🎧 Listen to my special message whenever you miss me! 💕
          </motion.p>
        </div>
      </div>

      {/* Decorative floating music notes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {isPlaying && [...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white text-2xl"
            style={{
              left: `${20 + i * 15}%`,
              bottom: '100%',
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            ♪
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
