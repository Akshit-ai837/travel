import { useState } from 'react';
import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';
import { ProblemSolution } from './components/ProblemSolution';
import { Features } from './components/Features';
import { UserPersonas } from './components/UserPersonas';
import { Team } from './components/Team';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [language, setLanguage] = useState<'en' | 'hi'>('en');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-white'
    }`}>
      <Navigation language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme} />
      <Hero language={language} theme={theme} />
      <ProblemSolution language={language} theme={theme} />
      <Features language={language} theme={theme} />
      <UserPersonas language={language} theme={theme} />
      <Team language={language} theme={theme} />
      <Contact language={language} theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}