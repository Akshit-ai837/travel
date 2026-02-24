import { motion } from 'motion/react';
import { User, GraduationCap, Briefcase } from 'lucide-react';

interface UserPersonasProps {
  language: 'en' | 'hi';
  theme: 'light' | 'dark';
}

export function UserPersonas({ language, theme }: UserPersonasProps) {
  const content = {
    en: {
      badge: 'Who We Help',
      title: 'Making Travel Easy for Everyone',
      subtitle: 'Real people, real benefits',
      personas: [
        {
          icon: User,
          name: 'Ramesh - Rural Farmer',
          location: 'Village, Maharashtra',
          image: 'https://images.unsplash.com/photo-1694093817187-0c913bc4ad87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjB3b3JraW5nJTIwZmllbGR8ZW58MXx8fHwxNzcwOTIxMjU4fDA&ixlib=rb-4.1.0&q=80&w=1080',
          challenge: 'Struggles to find bus timings to reach the market on time',
          solution: 'Now checks live bus tracking and plans his trips efficiently',
          benefit: 'Saves 2+ hours weekly, never misses market days',
          emoji: '🌾',
        },
        {
          icon: GraduationCap,
          name: 'Priya - College Student',
          location: 'Town, Karnataka',
          image: 'https://images.unsplash.com/photo-1604177091072-b7b677a077f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjb2xsZWdlJTIwc3R1ZGVudHxlbnwxfHx8fDE3NzEwMDU5ODR8MA&ixlib=rb-4.1.0&q=80&w=1080',
          challenge: 'Uncertain about bus routes and fares between college and home',
          solution: 'Uses route planner and fare estimator for stress-free commutes',
          benefit: 'Never gets overcharged, arrives on time for classes',
          emoji: '📚',
        },
        {
          icon: Briefcase,
          name: 'Suresh - Daily Worker',
          location: 'Mandal Area, Telangana',
          image: 'https://images.unsplash.com/photo-1642044670987-778a6b5b3271?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYWlseSUyMHdvcmtlciUyMGNvbW11dGV8ZW58MXx8fHwxNzcxMDA1OTg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
          challenge: 'Wastes time waiting at bus stops without knowing arrival times',
          solution: 'Checks bus arrival times before leaving home, plans accordingly',
          benefit: 'More productive days, reduced waiting time by 80%',
          emoji: '⚒️',
        },
      ],
    },
    hi: {
      badge: 'हम किसकी मदद करते हैं',
      title: 'सभी के लिए यात्रा को आसान बनाना',
      subtitle: 'वास्तविक लोग, वास्तविक लाभ',
      personas: [
        {
          icon: User,
          name: 'रमेश - ग्रामीण किसान',
          location: 'गाँव, महाराष्ट्र',
          image: 'https://images.unsplash.com/photo-1694093817187-0c913bc4ad87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjB3b3JraW5nJTIwZmllbGR8ZW58MXx8fHwxNzcwOTIxMjU4fDA&ixlib=rb-4.1.0&q=80&w=1080',
          challenge: 'समय पर बाजार पहुंचने के लिए बस का समय खोजने में संघर्ष',
          solution: 'अब लाइव बस ट्रैकिंग की जांच करता है और अपनी यात्राओं की कुशलता से योजना बनाता है',
          benefit: 'साप्ताहिक 2+ घंटे बचाता है, कभी बाजार के दिन नहीं चूकता',
          emoji: '🌾',
        },
        {
          icon: GraduationCap,
          name: 'प्रिया - कॉलेज छात्र',
          location: 'शहर, कर्नाटक',
          image: 'https://images.unsplash.com/photo-1604177091072-b7b677a077f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjb2xsZWdlJTIwc3R1ZGVudHxlbnwxfHx8fDE3NzEwMDU5ODR8MA&ixlib=rb-4.1.0&q=80&w=1080',
          challenge: 'कॉलेज और घर के बीच बस मार्गों और किराए के बारे में अनिश्चित',
          solution: 'तनाव मुक्त आवागमन के लिए मार्ग योजनाकार और किराया अनुमानक का उपयोग करती है',
          benefit: 'कभी अधिक शुल्क नहीं लिया जाता, कक्षाओं के लिए समय पर पहुंचती है',
          emoji: '📚',
        },
        {
          icon: Briefcase,
          name: 'सुरेश - दैनिक मजदूर',
          location: 'मंडल क्षेत्र, तेलंगाना',
          image: 'https://images.unsplash.com/photo-1642044670987-778a6b5b3271?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYWlseSUyMHdvcmtlciUyMGNvbW11dGV8ZW58MXx8fHwxNzcxMDA1OTg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
          challenge: 'आगमन समय जाने बिना बस स्टॉप पर प्रतीक्षा में समय बर्बाद करता है',
          solution: 'घर से निकलने से पहले बस आगमन समय की जांच करता है, तदनुसार योजना बनाता है',
          benefit: 'अधिक उत्पादक दिन, 80% तक प्रतीक्षा समय कम',
          emoji: '⚒️',
        },
      ],
    },
  };

  return (
    <section id="personas" className={`py-20 px-4 transition-colors ${
      theme === 'dark' ? 'bg-gray-800' : 'bg-gradient-to-br from-blue-50 to-green-50'
    }`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full mb-4">
            <span className="font-medium">👥 {content[language].badge}</span>
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

        <div className="grid md:grid-cols-3 gap-8">
          {content[language].personas.map((persona, index) => {
            const Icon = persona.icon;
            return (
              <motion.div
                key={index}
                className={`rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-white'
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={persona.image}
                    alt={persona.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-white text-xl">{persona.name}</h3>
                        <p className="text-white/80 text-sm">{persona.location}</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 text-4xl">
                    {persona.emoji}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Challenge */}
                  <div className="mb-4">
                    <div className="text-sm text-red-600 font-medium mb-1">
                      ⚠️ {language === 'en' ? 'Challenge' : 'चुनौती'}
                    </div>
                    <p className={`text-sm leading-relaxed ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {persona.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="mb-4">
                    <div className="text-sm text-blue-600 font-medium mb-1">
                      💡 {language === 'en' ? 'Solution' : 'समाधान'}
                    </div>
                    <p className={`text-sm leading-relaxed ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {persona.solution}
                    </p>
                  </div>

                  {/* Benefit */}
                  <div className="bg-green-50 rounded-xl p-4">
                    <div className="text-sm text-green-700 font-medium mb-1">
                      ✅ {language === 'en' ? 'Benefit' : 'लाभ'}
                    </div>
                    <p className="text-green-800 font-medium text-sm">
                      {persona.benefit}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Impact Stats */}
        <motion.div
          className={`mt-16 rounded-3xl p-12 shadow-xl ${
            theme === 'dark' ? 'bg-gray-700' : 'bg-white'
          }`}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h3 className={`text-3xl text-center mb-8 ${
            theme === 'dark' ? 'text-gray-100' : 'text-gray-900'
          }`}>
            {language === 'en' ? 'Real Impact on Lives' : 'जीवन पर वास्तविक प्रभाव'}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">30+</div>
              <div className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                {language === 'en' ? 'Minutes Saved' : 'मिनट बचाए'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">80%</div>
              <div className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                {language === 'en' ? 'Less Confusion' : 'कम भ्रम'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
              <div className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                {language === 'en' ? 'Transparency' : 'पारदर्शिता'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                {language === 'en' ? 'Accessibility' : 'पहुंच'}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
