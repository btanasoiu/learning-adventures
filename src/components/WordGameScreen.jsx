import React from 'react';
import { Home } from 'lucide-react';
import { translations } from '../data/translations';
import { wordGameData } from '../data/wordGameData';

const WordGameScreen = ({
  currentLanguage,
  setCurrentActivity,
  currentWordIndex,
  shuffledOptions,
  score,
  handleWordGameAnswer,
  celebrationActive,
  sadActive
}) => {
  const t = translations[currentLanguage];
  const currentWord = wordGameData[currentLanguage][currentWordIndex];
  
  // Use special font class for Romanian and German
  const textFontClass = (currentLanguage === 'ro' || currentLanguage === 'de')
    ? 'font-romanian-german'
    : 'font-kid-friendly';
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6 sm:mb-8 gap-4">
          <button
            onClick={() => setCurrentActivity('home')}
            className={`bg-white text-green-600 px-4 py-2 sm:px-6 sm:py-3 rounded-full font-kid-bold text-sm sm:text-base shadow-lg hover:bg-gray-100 flex items-center gap-2 min-h-[44px] ${textFontClass}`}
          >
            <Home size={16} className="sm:size-5" />
            <span className="hidden xs:inline">{t.backToMenu}</span>
            <span className="xs:hidden">Back</span>
          </button>
          <div className={`bg-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-kid-bold text-green-600 shadow-lg text-sm sm:text-base ${textFontClass}`}>
            Score: {score} <span className="emoji-text">⭐</span>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl text-center">
          <div className="mb-6 sm:mb-8">
            <div className={`text-4xl sm:text-5xl md:text-6xl font-kid-extra-bold text-green-600 mb-3 sm:mb-4 leading-tight ${textFontClass}`}>
              {currentWord.word}
            </div>
            <div className={`text-2xl sm:text-3xl md:text-4xl font-kid-bold text-blue-600 leading-tight ${textFontClass}`}>
              {currentWord.lowercase}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-sm sm:max-w-md mx-auto">
            {shuffledOptions.map((emoji, index) => (
              <button
                key={`${emoji}-${index}`}
                onClick={() => handleWordGameAnswer(emoji)}
                className="text-4xl sm:text-5xl md:text-6xl p-4 sm:p-6 bg-yellow-100 hover:bg-yellow-200 rounded-2xl shadow-lg transform transition-all duration-200 hover:scale-105 active:scale-95 emoji-text min-h-[80px] sm:min-h-[100px] flex items-center justify-center"
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>
      </div>

      {celebrationActive && (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50">
          <div className={`text-4xl sm:text-5xl md:text-6xl animate-bounce font-kid-extra-bold text-center px-4 ${textFontClass}`}>
            <span className="emoji-text">🎉</span> {t.correct} <span className="emoji-text">🎉</span>
          </div>
          <div className="absolute inset-0 animate-pulse">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-ping text-2xl sm:text-3xl emoji-text"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              >
                ⭐
              </div>
            ))}
          </div>
        </div>
      )}

      {sadActive && (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50">
          <div className={`text-2xl sm:text-3xl md:text-4xl animate-pulse bg-white px-6 py-4 rounded-2xl shadow-lg font-kid-bold mx-4 text-center ${textFontClass}`}>
            {t.incorrect}
          </div>
        </div>
      )}
    </div>
  );
};

export default WordGameScreen;
