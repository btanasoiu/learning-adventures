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
    return <div>Loading...</div>;
  }

  const handleNextLetter = () => {
    setCurrentPhonicsIndex((prev) => (prev + 1) % shuffledPhonics.length);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => setCurrentActivity('home')}
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold shadow-lg hover:bg-gray-100"
          >
            <Home size={20} className="inline mr-2" />
            {t.backToMenu}
          </button>
          <button
            onClick={handleNextLetter}
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold shadow-lg hover:bg-gray-100"
          >
            Next Letter →
          </button>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-2xl text-center">
          <div className="text-8xl font-bold text-blue-600 mb-4">
            {currentPhonics.letter}
          </div>
          <div className="text-3xl text-purple-600 mb-6">
            Sound: {currentPhonics.sound}
          </div>
          
          <button
            onClick={() => speakPhonicsLetter(currentPhonics.letter, currentLanguage)}
            className="bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-xl shadow-lg hover:bg-blue-600 mb-8"
          >
            <Volume2 size={24} className="inline mr-2" />
            {t.playSound}
          </button>

          <div className="grid gap-4">
            <h3 className="text-2xl font-bold text-gray-700 mb-4">Example Words:</h3>
            {currentPhonics.words.map((word, index) => (
              <div
                key={index}
                onClick={() => speakText(word.split(' ')[0], currentLanguage)}
                className="text-2xl p-4 bg-yellow-100 rounded-2xl shadow cursor-pointer hover:bg-yellow-200 transition-colors font-bold"
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
