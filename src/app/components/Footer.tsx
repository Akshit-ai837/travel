import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

interface FooterProps {
  theme: 'light' | 'dark';
}

export function Footer({ theme }: FooterProps) {
  return (
    <footer className={`py-12 px-4 transition-colors ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white' 
        : 'bg-gradient-to-br from-gray-900 to-gray-800 text-white'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="text-4xl">🚌</div>
              <div>
                <div className="text-2xl font-bold">Smart Transport</div>
                <div className="text-sm text-gray-400">Group 101</div>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Making public transportation simple, smart & accessible for everyone in rural and urban India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#personas" className="text-gray-400 hover:text-white transition-colors">
                  Who We Help
                </a>
              </li>
              <li>
                <a href="#team" className="text-gray-400 hover:text-white transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>📍 India</li>
              <li>📧 contact@smarttransport.in</li>
              <li>📱 +91 98765 43210</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.div
              className="flex items-center gap-2 text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span>© 2026 Smart Transport System</span>
              <span>•</span>
              <span>Group 101</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in India
              </span>
            </motion.div>

            <div className="flex gap-4 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}