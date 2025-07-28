import React from 'react';
import { Home, Volume2 } from 'lucide-react';
import { translations } from '../data/translations';
import { storyData } from '../data/storyData';
import { speakText } from '../utils/helpers';

const StoriesScreen = ({
  currentLanguage,
  setCurrentActivity,
  currentStoryScene,
  setCurrentStoryScene
}) => {
  const t = translations[currentLanguage];
  const currentStory = storyData[currentLanguage];
  const currentScene = currentStory.scenes[currentStoryScene];
  
  const handleChoice = (nextScene) => {
    setTimeout(() => {
      setCurrentStoryScene(nextScene);
    }, 200);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 to-purple-500 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6 sm:mb-8 gap-4">
          <button
            onClick={() => {
              setCurrentActivity('home');
              setCurrentStoryScene('start');
            }}
            className="bg-white text-pink-600 px-4 py-2 sm:px-6 sm:py-3 rounded-full font-kid-bold text-sm sm:text-base shadow-lg hover:bg-gray-100 flex items-center gap-2 min-h-[44px]"
          >
            <Home size={16} className="sm:size-5" />
            <span className="hidden xs:inline">{t.backToMenu}</span>
            <span className="xs:hidden">Back</span>
          </button>
          
          <button
            onClick={() => setCurrentStoryScene('start')}
            className="bg-white/80 text-pink-700 px-3 py-2 sm:px-4 sm:py-2 rounded-full font-kid-bold text-sm sm:text-base shadow-lg hover:bg-white min-h-[44px] flex items-center gap-1"
          >
            <span className="emoji-text">🔄</span>
            <span className="hidden xs:inline">Restart Story</span>
            <span className="xs:hidden">Restart</span>
          </button>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-kid-extra-bold text-center text-pink-600 mb-6 sm:mb-8 leading-tight">
            <span className="emoji-text">📚</span> {currentStory.title} <span className="emoji-text">📚</span>
          </h2>
          
          {/* Scene Image */}
          <div className="text-center mb-4 sm:mb-6">
            <div className="text-6xl sm:text-7xl md:text-8xl mb-4 emoji-text leading-tight">
              {currentScene.image}
            </div>
          </div>
          
          {/* Scene Text */}
          <div className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-700 mb-6 sm:mb-8 text-center px-2 sm:px-4 font-kid-friendly">
            {currentScene.text}
          </div>
          
          {/* Audio Button */}
          <div className="text-center mb-6 sm:mb-8">
            <button
              onClick={() => speakText(currentScene.text, currentLanguage)}
              className="bg-pink-500 text-white px-4 py-3 sm:px-6 sm:py-3 rounded-full font-kid-bold text-base sm:text-lg shadow-lg hover:bg-pink-600 flex items-center gap-2 mx-auto min-h-[50px]"
            >
              <Volume2 size={18} className="sm:size-5" />
              {t.readStory}
            </button>
          </div>
          
          {/* Choices */}
          <div className="space-y-3 sm:space-y-4 max-w-2xl mx-auto">
            {currentScene.choices.map((choice, index) => (
              <button
                key={index}
                onClick={() => handleChoice(choice.next)}
                className="w-full bg-gradient-to-r from-purple-400 to-pink-400 text-white p-4 sm:p-4 rounded-2xl font-kid-bold text-base sm:text-lg md:text-xl shadow-lg hover:from-purple-500 hover:to-pink-500 transform transition-all duration-200 hover:scale-105 active:scale-95 min-h-[60px] leading-tight"
              >
                {choice.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoriesScreen;
