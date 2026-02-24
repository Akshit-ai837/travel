import { Menu, X, Globe, Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface NavigationProps {
  language: 'en' | 'hi';
  setLanguage: (lang: 'en' | 'hi') => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

export function Navigation({ language, setLanguage, theme, setTheme }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const content = {
    en: {
      home: 'Home',
      features: 'Features',
      personas: 'Who We Help',
      team: 'Team',
      contact: 'Contact',
    },
    hi: {
      home: 'होम',
      features: 'सुविधाएं',
      personas: 'हम किसकी मदद करते हैं',
      team: 'टीम',
      contact: 'संपर्क करें',
    },
  };

  const navItems = [
    { label: content[language].home, href: '#home' },
    { label: content[language].features, href: '#features' },
    { label: content[language].personas, href: '#personas' },
    { label: content[language].team, href: '#team' },
    { label: content[language].contact, href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md shadow-md transition-colors ${
      theme === 'dark' ? 'bg-gray-800/95' : 'bg-white/95'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="text-3xl">🚌</div>
            <div>
              <div className={`text-xl ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                Smart Transport
              </div>
              <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Group 101
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className={`transition-colors ${
                  theme === 'dark' 
                    ? 'text-gray-300 hover:text-blue-400' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {item.label}
              </motion.a>
            ))}

            {/* Theme Toggle */}
            <motion.button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className={`p-2 rounded-full transition-colors ${
                theme === 'dark'
                  ? 'bg-yellow-400/20 text-yellow-400 hover:bg-yellow-400/30'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </motion.button>

            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
              className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">
                {language === 'en' ? 'हिंदी' : 'English'}
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className={`p-2 rounded-full ${
                theme === 'dark'
                  ? 'bg-yellow-400/20 text-yellow-400'
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>
            <button
              onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
              className="p-2 bg-green-100 text-green-700 rounded-full"
            >
              <Globe className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`md:hidden border-t ${
              theme === 'dark' 
                ? 'bg-gray-800 border-gray-700' 
                : 'bg-white border-gray-200'
            }`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`block py-2 transition-colors ${
                    theme === 'dark'
                      ? 'text-gray-300 hover:text-blue-400'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}