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
    return <div>Loading...</div>;
  }

  const handleNextSentence = () => {
    setCurrentSentenceIndex((prev) => (prev + 1) % shuffledSentences.length);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 to-red-500 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => setCurrentActivity('home')}
            className="bg-white text-orange-600 px-6 py-3 rounded-full font-bold shadow-lg hover:bg-gray-100"
          >
            <Home size={20} className="inline mr-2" />
            {t.backToMenu}
          </button>
          <button
            onClick={handleNextSentence}
            className="bg-white text-orange-600 px-6 py-3 rounded-full font-bold shadow-lg hover:bg-gray-100"
          >
            Next Sentence →
          </button>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-2xl text-center">
          <div className="text-4xl mb-6">
            {currentSentence.emojis}
          </div>
          <div className="text-3xl font-bold text-gray-700 mb-8 leading-relaxed">
            {currentSentence.text}
          </div>
          
          <button
            onClick={() => speakText(currentSentence.text, currentLanguage)}
            className="bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-xl shadow-lg hover:bg-orange-600"
          >
            <Volume2 size={24} className="inline mr-2" />
            {t.playSound}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SentencesScreen;
