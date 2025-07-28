import React from 'react';
import { Home, Volume2 } from 'lucide-react';
import { translations } from '../data/translations';
import { speakPhonicsLetter, speakText } from '../utils/helpers';

const PhonicsScreen = ({
  currentLanguage,
  setCurrentActivity,
  currentPhonicsIndex,
  setCurrentPhonicsIndex,
  shuffledPhonics
}) => {
  const t = translations[currentLanguage];
  const currentPhonics = shuffledPhonics[currentPhonicsIndex];
  
  if (!currentPhonics) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
        <div className="text-2xl font-kid-bold text-white">Loading...</div>
      </div>
    );
  }

  const handleNextLetter = () => {
    setCurrentPhonicsIndex((prev) => (prev + 1) % shuffledPhonics.length);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6 sm:mb-8 gap-4">
          <button
            onClick={() => setCurrentActivity('home')}
            className="bg-white text-blue-600 px-4 py-2 sm:px-6 sm:py-3 rounded-full font-kid-bold text-sm sm:text-base shadow-lg hover:bg-gray-100 flex items-center gap-2 min-h-[44px]"
          >
            <Home size={16} className="sm:size-5" />
            <span className="hidden xs:inline">{t.backToMenu}</span>
            <span className="xs:hidden">Back</span>
          </button>
          <button
            onClick={handleNextLetter}
            className="bg-white text-blue-600 px-4 py-2 sm:px-6 sm:py-3 rounded-full font-kid-bold text-sm sm:text-base shadow-lg hover:bg-gray-100 min-h-[44px]"
          >
            <span className="hidden xs:inline">Next Letter →</span>
            <span className="xs:hidden">Next →</span>
          </button>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl text-center">
          <div className="text-6xl sm:text-7xl md:text-8xl font-kid-extra-bold text-blue-600 mb-3 sm:mb-4 leading-tight">
            {currentPhonics.letter}
          </div>
          <div className="text-xl sm:text-2xl md:text-3xl text-purple-600 mb-6 font-kid-bold">
            Sound: <span className="font-mono">{currentPhonics.sound}</span>
          </div>
          
          <button
            onClick={() => speakPhonicsLetter(currentPhonics.letter, currentLanguage)}
            className="bg-blue-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-kid-bold text-lg sm:text-xl shadow-lg hover:bg-blue-600 mb-6 sm:mb-8 flex items-center gap-2 mx-auto min-h-[50px]"
          >
            <Volume2 size={20} className="sm:size-6" />
            {t.playSound}
          </button>

          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-xl sm:text-2xl font-kid-bold text-gray-700 mb-4">
              Example Words:
            </h3>
            {currentPhonics.words.map((word, index) => (
              <div
                key={index}
                onClick={() => speakText(word.split(' ')[0], currentLanguage)}
                className="text-lg sm:text-xl md:text-2xl p-3 sm:p-4 bg-yellow-100 rounded-2xl shadow cursor-pointer hover:bg-yellow-200 transition-colors font-kid-bold mx-auto max-w-md"
              >
                {word}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhonicsScreen;
