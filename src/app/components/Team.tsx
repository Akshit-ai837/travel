import { motion } from 'motion/react';
import { Github, Linkedin, Mail } from 'lucide-react';

interface TeamProps {
  language: 'en' | 'hi';
  theme: 'light' | 'dark';
}

export function Team({ language, theme }: TeamProps) {
  const content = {
    en: {
      badge: 'Our Team',
      title: 'Meet the Innovators',
      subtitle: 'Group 101 - Building the future of rural transportation',
      members: [
        {
          name: 'Akhil',
          role: 'Full Stack Developer',
          expertise: 'Backend & API Integration',
          color: 'from-blue-500 to-blue-600',
        },
        {
          name: 'Akshit',
          role: 'Frontend Developer',
          expertise: 'UI/UX & Design',
          color: 'from-green-500 to-green-600',
        },
        {
          name: 'Vaibhav',
          role: 'Mobile Developer',
          expertise: 'React Native & PWA',
          color: 'from-purple-500 to-purple-600',
        },
        {
          name: 'Abhishek',
          role: 'Data Analyst',
          expertise: 'Route Optimization',
          color: 'from-orange-500 to-orange-600',
        },
        {
          name: 'Swaraj',
          role: 'Product Manager',
          expertise: 'Strategy & Research',
          color: 'from-teal-500 to-teal-600',
        },
      ],
    },
    hi: {
      badge: 'हमारी टीम',
      title: 'नवप्रवर्तकों से मिलें',
      subtitle: 'ग्रुप 101 - ग्रामीण परिवहन का भविष्य बना रहे हैं',
      members: [
        {
          name: 'अखिल',
          role: 'फुल स्टैक डेवलपर',
          expertise: 'बैकएंड और API एकीकरण',
          color: 'from-blue-500 to-blue-600',
        },
        {
          name: 'अक्षित',
          role: 'फ्रंटएंड डेवलपर',
          expertise: 'UI/UX और डिज़ाइन',
          color: 'from-green-500 to-green-600',
        },
        {
          name: 'वैभव',
          role: 'मोबाइल डेवलपर',
          expertise: 'React Native और PWA',
          color: 'from-purple-500 to-purple-600',
        },
        {
          name: 'अभिषेक',
          role: 'डेटा विश्लेषक',
          expertise: 'मार्ग अनुकूलन',
          color: 'from-orange-500 to-orange-600',
        },
        {
          name: 'स्वराज',
          role: 'उत्पाद प्रबंधक',
          expertise: 'रणनीति और अनुसंधान',
          color: 'from-teal-500 to-teal-600',
        },
      ],
    },
  };

  const avatarColors = [
    'bg-blue-500',
    'bg-green-500',
    'bg-purple-500',
    'bg-orange-500',
    'bg-teal-500',
  ];

  return (
    <section id="team" className={`py-20 px-4 transition-colors ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-4">
            <span className="font-medium">👨‍💻 {content[language].badge}</span>
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {content[language].members.map((member, index) => (
            <motion.div
              key={index}
              className={`rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Avatar */}
              <motion.div
                className={`w-24 h-24 ${avatarColors[index]} rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-6 shadow-lg`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {member.name.charAt(0)}
              </motion.div>

              {/* Name & Role */}
              <h3 className={`text-2xl text-center mb-2 ${
                theme === 'dark' ? 'text-gray-100' : 'text-gray-900'
              }`}>
                {member.name}
              </h3>
              <div className={`text-center mb-4 bg-gradient-to-r ${member.color} text-transparent bg-clip-text font-semibold`}>
                {member.role}
              </div>

              {/* Expertise */}
              <div className={`rounded-xl p-4 mb-6 ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
              }`}>
                <div className={`text-sm text-center ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {language === 'en' ? 'Expertise:' : 'विशेषज्ञता:'}
                </div>
                <div className={`text-center font-medium ${
                  theme === 'dark' ? 'text-gray-200' : 'text-gray-900'
                }`}>
                  {member.expertise}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-3">
                <motion.button
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                    theme === 'dark'
                      ? 'bg-gray-700 hover:bg-blue-600'
                      : 'bg-gray-100 hover:bg-blue-100'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="w-5 h-5 text-blue-600" />
                </motion.button>
                <motion.button
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                    theme === 'dark'
                      ? 'bg-gray-700 hover:bg-gray-600'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github className={`w-5 h-5 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`} />
                </motion.button>
                <motion.button
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                    theme === 'dark'
                      ? 'bg-gray-700 hover:bg-green-600'
                      : 'bg-gray-100 hover:bg-green-100'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Mail className="w-5 h-5 text-green-600" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Quote */}
        <motion.div
          className="bg-gradient-to-br from-blue-600 to-green-600 rounded-3xl p-12 text-white text-center shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-6xl mb-6">🚀</div>
          <h3 className="text-3xl mb-4">
            {language === 'en' ? 'Our Mission' : 'हमारा मिशन'}
          </h3>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto">
            {language === 'en'
              ? 'We are committed to bridging the transportation gap in rural and urban India. Our goal is to make every journey simple, affordable, and stress-free for millions of commuters.'
              : 'हम ग्रामीण और शहरी भारत में परिवहन अंतर को पाटने के लिए प्रतिबद्ध हैं। हमारा लक्ष्य लाखों यात्रियों के लिए हर यात्रा को सरल, सस्ती और तनाव मुक्त बनाना है।'}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
