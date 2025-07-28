import React from 'react';
import { Volume2, Book, Gamepad2, FileText, Globe } from 'lucide-react';
import { translations } from '../data/translations';

const HomeScreen = ({ currentLanguage, setCurrentLanguage, setCurrentActivity }) => {
  const t = translations[currentLanguage];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-300 to-yellow-300 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-6 sm:mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-kid-extra-bold text-white mb-4 drop-shadow-lg leading-tight">
            {t.title} <span className="emoji-text">🌟</span>
          </h1>
          <div className="flex justify-center items-center gap-3 sm:gap-4 mb-6">
            <Globe className="text-white" size={20} />
            <select
              value={currentLanguage}
              onChange={(e) => setCurrentLanguage(e.target.value)}
              className="px-3 py-2 sm:px-4 sm:py-2 rounded-full bg-white text-purple-600 font-kid-bold text-base sm:text-lg border-none shadow-lg min-h-[44px] cursor-pointer"
            >
              <option value="en">English 🇺🇸</option>
              <option value="de">Deutsch 🇩🇪</option>
              <option value="ro">Română 🇷🇴</option>
            </select>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
          {[
            { key: 'wordGame', icon: Gamepad2, color: 'bg-green-400 hover:bg-green-500' },
            { key: 'phonics', icon: Volume2, color: 'bg-blue-400 hover:bg-blue-500' },
            { key: 'sentences', icon: FileText, color: 'bg-orange-400 hover:bg-orange-500' },
            { key: 'stories', icon: Book, color: 'bg-pink-400 hover:bg-pink-500' }
          ].map(({ key, icon: Icon, color }) => (
            <button
              key={key}
              onClick={() => setCurrentActivity(key)}
              className={`${color} text-white p-6 sm:p-8 rounded-3xl shadow-xl transform transition-all duration-200 hover:scale-105 active:scale-95 min-h-[120px] sm:min-h-[140px] flex flex-col items-center justify-center`}
            >
              <Icon size={36} className="sm:size-12 mx-auto mb-3 sm:mb-4" />
              <div className="text-lg sm:text-xl md:text-2xl font-kid-bold leading-tight text-center">
                {t[key]}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
