import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

interface ContactProps {
  language: 'en' | 'hi';
  theme: 'light' | 'dark';
}

export function Contact({ language, theme }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const content = {
    en: {
      badge: 'Get In Touch',
      title: 'Contact Us',
      subtitle: 'Have questions? We\'d love to hear from you!',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Your Email',
      messagePlaceholder: 'Your Message',
      sendButton: 'Send Message',
      location: 'India',
      email: 'contact@smarttransport.in',
      phone: '+91 98765 43210',
    },
    hi: {
      badge: 'संपर्क में रहें',
      title: 'हमसे संपर्क करें',
      subtitle: 'प्रश्न हैं? हम आपसे सुनना पसंद करेंगे!',
      namePlaceholder: 'आपका नाम',
      emailPlaceholder: 'आपका ईमेल',
      messagePlaceholder: 'आपका संदेश',
      sendButton: 'संदेश भेजें',
      location: 'भारत',
      email: 'contact@smarttransport.in',
      phone: '+91 98765 43210',
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert(language === 'en' ? 'Message sent successfully!' : 'संदेश सफलतापूर्वक भेजा गया!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className={`py-20 px-4 transition-colors ${
      theme === 'dark' ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full mb-4">
            <span className="font-medium">📧 {content[language].badge}</span>
          </div>
          <h2 className={`text-4xl md:text-5xl mb-4 ${
            theme === 'dark' ? 'text-gray-100' : 'text-gray-900'
          }`}>
            {content[language].title}
          </h2>
          <p className={`text-xl ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {content[language].subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder={content[language].namePlaceholder}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-6 py-4 rounded-2xl border-2 focus:outline-none text-lg transition-colors ${
                    theme === 'dark'
                      ? 'bg-gray-700 border-gray-600 text-gray-100 focus:border-blue-500'
                      : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-blue-500'
                  }`}
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder={content[language].emailPlaceholder}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-6 py-4 rounded-2xl border-2 focus:outline-none text-lg transition-colors ${
                    theme === 'dark'
                      ? 'bg-gray-700 border-gray-600 text-gray-100 focus:border-blue-500'
                      : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-blue-500'
                  }`}
                  required
                />
              </div>

              <div>
                <textarea
                  placeholder={content[language].messagePlaceholder}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className={`w-full px-6 py-4 rounded-2xl border-2 focus:outline-none text-lg transition-colors resize-none ${
                    theme === 'dark'
                      ? 'bg-gray-700 border-gray-600 text-gray-100 focus:border-blue-500'
                      : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-blue-500'
                  }`}
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-2xl text-lg font-medium hover:from-blue-700 hover:to-green-700 transition-all shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5" />
                {content[language].sendButton}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Location */}
            <motion.div
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center mb-4">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl text-gray-900 mb-2">
                {language === 'en' ? 'Location' : 'स्थान'}
              </h3>
              <p className="text-gray-700 text-lg">{content[language].location}</p>
            </motion.div>

            {/* Email */}
            <motion.div
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center mb-4">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl text-gray-900 mb-2">
                {language === 'en' ? 'Email' : 'ईमेल'}
              </h3>
              <p className="text-gray-700 text-lg">{content[language].email}</p>
            </motion.div>

            {/* Phone */}
            <motion.div
              className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-14 h-14 bg-purple-500 rounded-2xl flex items-center justify-center mb-4">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl text-gray-900 mb-2">
                {language === 'en' ? 'Phone' : 'फ़ोन'}
              </h3>
              <p className="text-gray-700 text-lg">{content[language].phone}</p>
            </motion.div>

            {/* Social Media */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white">
              <h3 className="text-xl mb-4">
                {language === 'en' ? 'Follow Us' : 'हमें फॉलो करें'}
              </h3>
              <div className="flex gap-4">
                <motion.button
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="text-2xl">𝕏</span>
                </motion.button>
                <motion.button
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="text-2xl">📘</span>
                </motion.button>
                <motion.button
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="text-2xl">📷</span>
                </motion.button>
                <motion.button
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="text-2xl">💼</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
