import React from 'react';
import { Volume2, Book, Gamepad2, FileText, Globe } from 'lucide-react';
import { translations } from '../data/translations';

const HomeScreen = ({ currentLanguage, setCurrentLanguage, setCurrentActivity }) => {
  const t = translations[currentLanguage];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-300 to-yellow-300 p-6">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">
            {t.title} 🌟
          </h1>
          <div className="flex justify-center items-center gap-4 mb-6">
            <Globe className="text-white" size={24} />
            <select
              value={currentLanguage}
              onChange={(e) => setCurrentLanguage(e.target.value)}
              className="px-4 py-2 rounded-full bg-white text-purple-600 font-bold text-lg border-none shadow-lg"
            >
              <option value="en">English 🇺🇸</option>
              <option value="de">Deutsch 🇩🇪</option>
              <option value="ro">Română 🇷🇴</option>
            </select>
          </div>
        </header>

        <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
          {[
            { key: 'wordGame', icon: Gamepad2, color: 'bg-green-400 hover:bg-green-500' },
            { key: 'phonics', icon: Volume2, color: 'bg-blue-400 hover:bg-blue-500' },
            { key: 'sentences', icon: FileText, color: 'bg-orange-400 hover:bg-orange-500' },
            { key: 'stories', icon: Book, color: 'bg-pink-400 hover:bg-pink-500' }
          ].map(({ key, icon: Icon, color }) => (
            <button
              key={key}
              onClick={() => setCurrentActivity(key)}
              className={`${color} text-white p-8 rounded-3xl shadow-xl transform transition-all duration-200 hover:scale-105 active:scale-95`}
            >
              <Icon size={48} className="mx-auto mb-4" />
              <div className="text-2xl font-bold">{t[key]}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
