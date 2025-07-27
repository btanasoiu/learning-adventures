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
    <div className="min-h-screen bg-gradient-to-br from-pink-400 to-purple-500 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => {
              setCurrentActivity('home');
              setCurrentStoryScene('start');
            }}
            className="bg-white text-pink-600 px-6 py-3 rounded-full font-bold shadow-lg hover:bg-gray-100"
          >
            <Home size={20} className="inline mr-2" />
            {t.backToMenu}
          </button>
          
          <button
            onClick={() => setCurrentStoryScene('start')}
            className="bg-white/80 text-pink-700 px-4 py-2 rounded-full font-bold shadow-lg hover:bg-white"
          >
            🔄 Restart Story
          </button>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-2xl">
          <h2 className="text-4xl font-bold text-center text-pink-600 mb-8">
            📚 {currentStory.title} 📚
          </h2>
          
          {/* Scene Image */}
          <div className="text-center mb-6">
            <div className="text-8xl mb-4">
              {currentScene.image}
            </div>
          </div>
          
          {/* Scene Text */}
          <div className="text-2xl leading-relaxed text-gray-700 mb-8 text-center px-4">
            {currentScene.text}
          </div>
          
          {/* Audio Button */}
          <div className="text-center mb-8">
            <button
              onClick={() => speakText(currentScene.text, currentLanguage)}
              className="bg-pink-500 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-pink-600 mr-4"
            >
              <Volume2 size={20} className="inline mr-2" />
              {t.readStory}
            </button>
          </div>
          
          {/* Choices */}
          <div className="space-y-4 max-w-2xl mx-auto">
            {currentScene.choices.map((choice, index) => (
              <button
                key={index}
                onClick={() => handleChoice(choice.next)}
                className="w-full bg-gradient-to-r from-purple-400 to-pink-400 text-white p-4 rounded-2xl font-bold text-xl shadow-lg hover:from-purple-500 hover:to-pink-500 transform transition-all duration-200 hover:scale-105 active:scale-95"
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
