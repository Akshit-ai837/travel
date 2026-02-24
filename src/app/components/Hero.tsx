import { motion } from 'motion/react';
import { MapPin, Navigation as NavigationIcon, ArrowRight } from 'lucide-react';

interface HeroProps {
  language: 'en' | 'hi';
  theme: 'light' | 'dark';
}

export function Hero({ language, theme }: HeroProps) {
  const content = {
    en: {
      headline: 'Making Public Transportation',
      subheadline: 'Simple, Smart & Accessible for Everyone',
      description: 'Find bus stops, track live buses, plan routes, and get fare estimates — designed especially for rural, town, and mandal areas.',
      cta1: 'Find Bus',
      cta2: 'Plan Route',
    },
    hi: {
      headline: 'सार्वजनिक परिवहन को बनाना',
      subheadline: 'सरल, स्मार्ट और सभी के लिए सुलभ',
      description: 'बस स्टॉप खोजें, लाइव बसों को ट्रैक करें, मार्ग की योजना बनाएं और किराया अनुमान प्राप्त करें — विशेष रूप से ग्रामीण, शहर और मंडल क्षेत्रों के लिए डिज़ाइन किया गया।',
      cta1: 'बस खोजें',
      cta2: 'मार्ग योजना',
    },
  };

  return (
    <section id="home" className={`pt-24 pb-12 px-4 transition-colors ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800' 
        : 'bg-gradient-to-br from-blue-50 via-green-50 to-blue-100'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="font-medium">🚀 Smart Rural & Urban Transport Solution</span>
            </motion.div>

            <h1 className={`text-4xl md:text-6xl mb-4 ${
              theme === 'dark' ? 'text-gray-100' : 'text-gray-900'
            }`}>
              {content[language].headline}
            </h1>
            <h2 className={`text-3xl md:text-5xl mb-6 ${
              theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
            }`}>
              {content[language].subheadline}
            </h2>
            
            <p className={`text-lg mb-8 leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {content[language].description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.button
                className="flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full text-lg font-medium hover:bg-blue-700 transition-colors shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MapPin className="w-5 h-5" />
                {content[language].cta1}
              </motion.button>

              <motion.button
                className="flex items-center gap-2 px-8 py-4 bg-green-600 text-white rounded-full text-lg font-medium hover:bg-green-700 transition-colors shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <NavigationIcon className="w-5 h-5" />
                {content[language].cta2}
              </motion.button>
            </div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div>
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {language === 'en' ? 'Bus Stops' : 'बस स्टॉप'}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">100+</div>
                <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {language === 'en' ? 'Routes' : 'मार्ग'}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">24/7</div>
                <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {language === 'en' ? 'Support' : 'समर्थन'}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Illustration */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1543698376-9c76b08cd35d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWJsaWMlMjBidXMlMjB0cmFuc3BvcnRhdGlvbnxlbnwxfHx8fDE3NzEwMDU5ODN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Public Transport"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
              
              {/* Floating Cards */}
              <motion.div
                className="absolute top-8 right-8 bg-white rounded-2xl p-4 shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">{language === 'en' ? 'Live Tracking' : 'लाइव ट्रैकिंग'}</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-8 left-8 bg-white rounded-2xl p-4 shadow-xl"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <div className="text-2xl font-bold text-blue-600">₹25</div>
                <div className="text-sm text-gray-600">{language === 'en' ? 'Estimated Fare' : 'अनुमानित किराया'}</div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-blue-200/30 to-green-200/30 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}