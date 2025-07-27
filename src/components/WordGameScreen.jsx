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
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => setCurrentActivity('home')}
            className="bg-white text-green-600 px-6 py-3 rounded-full font-bold shadow-lg hover:bg-gray-100"
          >
            <Home size={20} className="inline mr-2" />
            {t.backToMenu}
          </button>
          <div className="bg-white px-6 py-3 rounded-full font-bold text-green-600 shadow-lg">
            Score: {score} ⭐
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-2xl text-center">
          <div className="mb-8">
            <div className="text-6xl font-bold text-green-600 mb-4">
              {currentWord.word}
            </div>
            <div className="text-4xl font-bold text-blue-600">
              {currentWord.lowercase}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
            {shuffledOptions.map((emoji, index) => (
              <button
                key={`${emoji}-${index}`}
                onClick={() => handleWordGameAnswer(emoji)}
                className="text-6xl p-6 bg-yellow-100 hover:bg-yellow-200 rounded-2xl shadow-lg transform transition-all duration-200 hover:scale-105 active:scale-95"
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>
      </div>

      {celebrationActive && (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50">
          <div className="text-6xl animate-bounce">
            🎉 {t.correct} 🎉
          </div>
          <div className="absolute inset-0 animate-pulse">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-ping"
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
          <div className="text-4xl animate-pulse bg-white px-8 py-4 rounded-2xl shadow-lg">
            {t.incorrect}
          </div>
        </div>
      )}
    </div>
  );
};

export default WordGameScreen;
