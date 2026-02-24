import { motion } from 'motion/react';
import { AlertCircle, CheckCircle, Clock, DollarSign, MapPin } from 'lucide-react';

interface ProblemSolutionProps {
  language: 'en' | 'hi';
  theme: 'light' | 'dark';
}

export function ProblemSolution({ language, theme }: ProblemSolutionProps) {
  const content = {
    en: {
      title: 'The Problem We Solve',
      subtitle: 'Understanding Rural Transportation Challenges',
      problems: [
        {
          icon: MapPin,
          title: 'Difficult to Find Bus Stops',
          description: 'People in rural areas struggle to locate nearby bus stops and routes.',
        },
        {
          icon: Clock,
          title: 'Uncertain Arrival Times',
          description: 'No way to know when the next bus will arrive, leading to long waits.',
        },
        {
          icon: DollarSign,
          title: 'Unknown Fare Information',
          description: 'Travelers are unsure about ticket prices before starting their journey.',
        },
      ],
      solutionTitle: 'Our Solution',
      solutionSubtitle: 'How We Make Transportation Simple',
      solutions: [
        {
          icon: CheckCircle,
          title: 'Real-Time Information',
          description: 'Live bus tracking and arrival updates at your fingertips.',
          impact: 'Saves 30+ minutes per trip',
        },
        {
          icon: CheckCircle,
          title: 'Easy Route Planning',
          description: 'Simple source-to-destination journey planner for everyone.',
          impact: 'Reduces travel confusion by 80%',
        },
        {
          icon: CheckCircle,
          title: 'Transparent Pricing',
          description: 'Know your fare before you travel, no surprises.',
          impact: 'Prevents overcharging',
        },
        {
          icon: CheckCircle,
          title: 'Offline Access',
          description: 'Access saved routes and schedules without internet.',
          impact: 'Works in low connectivity areas',
        },
      ],
    },
    hi: {
      title: 'हम जो समस्या हल करते हैं',
      subtitle: 'ग्रामीण परिवहन चुनौतियों को समझना',
      problems: [
        {
          icon: MapPin,
          title: 'बस स्टॉप खोजना मुश्किल',
          description: 'ग्रामीण क्षेत्रों में लोग पास के बस स्टॉप और मार्ग खोजने में संघर्ष करते हैं।',
        },
        {
          icon: Clock,
          title: 'अनिश्चित आगमन समय',
          description: 'अगली बस कब आएगी, यह जानने का कोई तरीका नहीं, जिससे लंबा इंतजार होता है।',
        },
        {
          icon: DollarSign,
          title: 'अज्ञात किराया जानकारी',
          description: 'यात्री अपनी यात्रा शुरू करने से पहले टिकट की कीमतों के बारे में अनिश्चित हैं।',
        },
      ],
      solutionTitle: 'हमारा समाधान',
      solutionSubtitle: 'हम परिवहन को कैसे सरल बनाते हैं',
      solutions: [
        {
          icon: CheckCircle,
          title: 'रियल-टाइम जानकारी',
          description: 'आपकी उंगलियों पर लाइव बस ट्रैकिंग और आगमन अपडेट।',
          impact: 'प्रति यात्रा 30+ मिनट बचाता है',
        },
        {
          icon: CheckCircle,
          title: 'आसान मार्ग योजना',
          description: 'सभी के लिए सरल स्रोत-से-गंतव्य यात्रा योजनाकार।',
          impact: 'यात्रा भ्रम को 80% तक कम करता है',
        },
        {
          icon: CheckCircle,
          title: 'पारदर्शी मूल्य निर्धारण',
          description: 'यात्रा करने से पहले अपना किराया जानें, कोई आश्चर्य नहीं।',
          impact: 'अधिक शुल्क लेने से रोकता है',
        },
        {
          icon: CheckCircle,
          title: 'ऑफ़लाइन एक्सेस',
          description: 'इंटरनेट के बिना सहेजे गए मार्गों और शेड्यूल तक पहुंचें।',
          impact: 'कम कनेक्टिविटी वाले क्षेत्रों में काम करता है',
        },
      ],
    },
  };

  return (
    <section className={`py-20 px-4 transition-colors ${
      theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto">
        {/* Problem Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-2 bg-red-100 text-red-700 rounded-full mb-4">
            <AlertCircle className="w-5 h-5 inline mr-2" />
            <span className="font-medium">{content[language].title}</span>
          </div>
          <h2 className={`text-4xl mb-4 ${
            theme === 'dark' ? 'text-gray-100' : 'text-gray-900'
          }`}>
            {content[language].subtitle}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {content[language].problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={index}
                className={`rounded-2xl p-8 shadow-lg border-2 border-red-100 ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-white'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-red-600" />
                </div>
                <h3 className={`text-xl mb-3 ${
                  theme === 'dark' ? 'text-gray-100' : 'text-gray-900'
                }`}>
                  {problem.title}
                </h3>
                <p className={`leading-relaxed ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {problem.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Solution Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full mb-4">
            <CheckCircle className="w-5 h-5 inline mr-2" />
            <span className="font-medium">{content[language].solutionTitle}</span>
          </div>
          <h2 className={`text-4xl mb-4 ${
            theme === 'dark' ? 'text-gray-100' : 'text-gray-900'
          }`}>
            {content[language].solutionSubtitle}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {content[language].solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={index}
                className={`rounded-2xl p-8 shadow-lg border-2 border-green-200 ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-br from-gray-700 to-gray-800' 
                    : 'bg-gradient-to-br from-blue-50 to-green-50'
                }`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-xl mb-2 ${
                      theme === 'dark' ? 'text-gray-100' : 'text-gray-900'
                    }`}>
                      {solution.title}
                    </h3>
                    <p className={`mb-3 leading-relaxed ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {solution.description}
                    </p>
                    <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      ✨ {solution.impact}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}