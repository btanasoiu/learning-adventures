import React from 'react';
import { Home, Volume2 } from 'lucide-react';
import { translations } from '../data/translations';
import { speakText } from '../utils/helpers';

const SentencesScreen = ({
  currentLanguage,
  setCurrentActivity,
  currentSentenceIndex,
  setCurrentSentenceIndex,
  shuffledSentences
}) => {
  const t = translations[currentLanguage];
  const currentSentence = shuffledSentences[currentSentenceIndex];
  
  if (!currentSentence) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
        <div className="text-2xl font-kid-bold text-white">Loading...</div>
      </div>
    );
  }

  const handleNextSentence = () => {
    setCurrentSentenceIndex((prev) => (prev + 1) % shuffledSentences.length);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 to-red-500 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6 sm:mb-8 gap-4">
          <button
            onClick={() => setCurrentActivity('home')}
            className="bg-white text-orange-600 px-4 py-2 sm:px-6 sm:py-3 rounded-full font-kid-bold text-sm sm:text-base shadow-lg hover:bg-gray-100 flex items-center gap-2 min-h-[44px]"
          >
            <Home size={16} className="sm:size-5" />
            <span className="hidden xs:inline">{t.backToMenu}</span>
            <span className="xs:hidden">Back</span>
          </button>
          <button
            onClick={handleNextSentence}
            className="bg-white text-orange-600 px-4 py-2 sm:px-6 sm:py-3 rounded-full font-kid-bold text-sm sm:text-base shadow-lg hover:bg-gray-100 min-h-[44px]"
          >
            <span className="hidden xs:inline">Next Sentence →</span>
            <span className="xs:hidden">Next →</span>
          </button>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl text-center">
          <div className="text-5xl sm:text-6xl md:text-7xl mb-4 sm:mb-6 emoji-text leading-tight">
            {currentSentence.emojis}
          </div>
          <div className="text-xl sm:text-2xl md:text-3xl font-kid-bold text-gray-700 mb-6 sm:mb-8 leading-relaxed px-2">
            {currentSentence.text}
          </div>
          
          <button
            onClick={() => speakText(currentSentence.text, currentLanguage)}
            className="bg-orange-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-kid-bold text-lg sm:text-xl shadow-lg hover:bg-orange-600 flex items-center gap-2 mx-auto min-h-[50px]"
          >
            <Volume2 size={20} className="sm:size-6" />
            {t.playSound}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SentencesScreen;
