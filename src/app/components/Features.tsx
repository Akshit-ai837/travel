import { motion } from 'motion/react';
import { MapPin, Navigation, Radio, DollarSign, Globe, WifiOff } from 'lucide-react';

interface FeaturesProps {
  language: 'en' | 'hi';
  theme: 'light' | 'dark';
}

export function Features({ language, theme }: FeaturesProps) {
  const content = {
    en: {
      badge: 'Core Features',
      title: 'Everything You Need for Seamless Travel',
      subtitle: 'Designed for simplicity and accessibility',
      features: [
        {
          icon: MapPin,
          title: 'Bus Stop Locator',
          description: 'Find nearby bus stops using your location. View them on an interactive map with distance information.',
          color: 'from-blue-500 to-blue-600',
        },
        {
          icon: Navigation,
          title: 'Smart Route Planner',
          description: 'Enter source and destination to get available buses, travel duration, and detailed route information.',
          color: 'from-green-500 to-green-600',
        },
        {
          icon: Radio,
          title: 'Live Bus Tracking',
          description: 'See real-time bus locations on the map and get estimated arrival times at your stop.',
          color: 'from-purple-500 to-purple-600',
        },
        {
          icon: DollarSign,
          title: 'Fare Estimator',
          description: 'Know the approximate ticket price before you travel. No surprises, complete transparency.',
          color: 'from-orange-500 to-orange-600',
        },
        {
          icon: Globe,
          title: 'Multi-Language Support',
          description: 'Switch between English and regional languages. Easy-to-read fonts for all users.',
          color: 'from-teal-500 to-teal-600',
        },
        {
          icon: WifiOff,
          title: 'Offline Lite Mode',
          description: 'Access saved routes and schedules without internet. Perfect for rural areas with low connectivity.',
          color: 'from-red-500 to-red-600',
        },
      ],
    },
    hi: {
      badge: 'मुख्य सुविधाएँ',
      title: 'निर्बाध यात्रा के लिए आपको जो कुछ भी चाहिए',
      subtitle: 'सरलता और सुलभता के लिए डिज़ाइन किया गया',
      features: [
        {
          icon: MapPin,
          title: 'बस स्टॉप लोकेटर',
          description: 'अपने स्थान का उपयोग करके पास के बस स्टॉप खोजें। उन्हें दूरी की जानकारी के साथ एक इंटरैक्टिव मानचित्र पर देखें।',
          color: 'from-blue-500 to-blue-600',
        },
        {
          icon: Navigation,
          title: 'स्मार्ट मार्ग योजनाकार',
          description: 'उपलब्ध बसें, यात्रा अवधि और विस्तृत मार्ग जानकारी प्राप्त करने के लिए स्रोत और गंतव्य दर्ज करें।',
          color: 'from-green-500 to-green-600',
        },
        {
          icon: Radio,
          title: 'लाइव बस ट्रैकिंग',
          description: 'मानचित्र पर वास्तविक समय बस स्थान देखें और अपने स्टॉप पर अनुमानित आगमन समय प्राप्त करें।',
          color: 'from-purple-500 to-purple-600',
        },
        {
          icon: DollarSign,
          title: 'किराया अनुमानक',
          description: 'यात्रा करने से पहले अनुमानित टिकट मूल्य जानें। कोई आश्चर्य नहीं, पूर्ण पारदर्शिता।',
          color: 'from-orange-500 to-orange-600',
        },
        {
          icon: Globe,
          title: 'बहु-भाषा समर्थन',
          description: 'अंग्रेजी और क्षेत्रीय भाषाओं के बीच स्विच करें। सभी उपयोगकर्ताओं के लिए पढ़ने में आसान फ़ॉन्ट।',
          color: 'from-teal-500 to-teal-600',
        },
        {
          icon: WifiOff,
          title: 'ऑफ़लाइन लाइट मोड',
          description: 'इंटरनेट के बिना सहेजे गए मार्गों और शेड्यूल तक पहुंचें। कम कनेक्टिविटी वाले ग्रामीण क्षेत्रों के लिए बिल्कुल सही।',
          color: 'from-red-500 to-red-600',
        },
      ],
    },
  };

  return (
    <section id="features" className={`py-20 px-4 transition-colors ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-4">
            <span className="font-medium">✨ {content[language].badge}</span>
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content[language].features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className={`rounded-3xl p-8 shadow-xl border hover:shadow-2xl transition-shadow ${
                  theme === 'dark' 
                    ? 'bg-gray-800 border-gray-700' 
                    : 'bg-white border-gray-100'
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className={`text-2xl mb-4 ${
                  theme === 'dark' ? 'text-gray-100' : 'text-gray-900'
                }`}>
                  {feature.title}
                </h3>
                <p className={`leading-relaxed ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Feature Demo Image */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1764347923709-fc48487f2486?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBtYXAlMjBuYXZpZ2F0aW9ufGVufDF8fHx8MTc3MTAwNTk4NHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="App Interface"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent flex items-end justify-center pb-12">
              <div className="text-center">
                <h3 className="text-3xl text-white mb-2">
                  {language === 'en' ? 'Simple & Intuitive Interface' : 'सरल और सहज इंटरफ़ेस'}
                </h3>
                <p className="text-white/90">
                  {language === 'en' ? 'Designed for users of all ages and tech backgrounds' : 'सभी उम्र और तकनीकी पृष्ठभूमि के उपयोगकर्ताओं के लिए डिज़ाइन किया गया'}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}