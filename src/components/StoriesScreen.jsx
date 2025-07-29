import React from 'react';
import { Home, Volume2, BookOpen, ArrowLeft } from 'lucide-react';
import { translations } from '../data/translations';
import { storyData } from '../data/storyData';
import { speakText } from '../utils/helpers';

const StoriesScreen = ({
  currentLanguage,
  setCurrentActivity,
  currentStoryScene,
  setCurrentStoryScene,
  currentStoryId,
  setCurrentStoryId
}) => {
  const t = translations[currentLanguage];
  const stories = storyData[currentLanguage].stories;
  
  // Story selection screen
  if (!currentStoryId) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-400 to-purple-500 p-4 sm:p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6 sm:mb-8 gap-4">
            <button
              onClick={() => setCurrentActivity('home')}
              className="bg-white text-pink-600 px-4 py-2 sm:px-6 sm:py-3 rounded-full font-kid-bold text-sm sm:text-base shadow-lg hover:bg-gray-100 flex items-center gap-2 min-h-[44px]"
            >
              <Home size={16} className="sm:size-5" />
              <span className="hidden xs:inline">{t.backToMenu}</span>
              <span className="xs:hidden">Back</span>
            </button>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-kid-extra-bold text-center text-pink-600 mb-6 sm:mb-8 leading-tight">
              <span className="emoji-text">📚</span> {storyData[currentLanguage].title} <span className="emoji-text">📚</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
              {stories.map((story) => (
                <button
                  key={story.id}
                  onClick={() => {
                    setCurrentStoryId(story.id);
                    setCurrentStoryScene('start');
                  }}
                  className="bg-gradient-to-r from-purple-400 to-pink-400 text-white p-6 sm:p-8 rounded-3xl shadow-xl transform transition-all duration-200 hover:scale-105 active:scale-95 min-h-[140px] sm:min-h-[160px] flex flex-col items-center justify-center text-center"
                >
                  <BookOpen size={32} className="sm:size-12 mx-auto mb-3 sm:mb-4" />
                  <div className="text-lg sm:text-xl md:text-2xl font-kid-bold leading-tight">
                    {story.title}
                  </div>
                  <div className="text-sm sm:text-base mt-2 opacity-90 font-kid-friendly">
                    {getStoryEmoji(story.id)}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Find current story and scene
  const currentStory = stories.find(story => story.id === currentStoryId);
  const currentScene = currentStory?.scenes[currentStoryScene];
  
  if (!currentStory || !currentScene) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center">
        <div className="text-2xl font-kid-bold text-white">Loading story...</div>
      </div>
    );
  }
  
  const handleChoice = (nextScene) => {
    setTimeout(() => {
      setCurrentStoryScene(nextScene);
    }, 200);
  };

  const handleBackToStories = () => {
    setCurrentStoryId(null);
    setCurrentStoryScene('start');
  };

  const handleRestartStory = () => {
    setCurrentStoryScene('start');
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 to-purple-500 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6 sm:mb-8 gap-4">
          <button
            onClick={() => setCurrentActivity('home')}
            className="bg-white text-pink-600 px-4 py-2 sm:px-6 sm:py-3 rounded-full font-kid-bold text-sm sm:text-base shadow-lg hover:bg-gray-100 flex items-center gap-2 min-h-[44px]"
          >
            <Home size={16} className="sm:size-5" />
            <span className="hidden xs:inline">{t.backToMenu}</span>
            <span className="xs:hidden">Home</span>
          </button>

          <div className="flex gap-2">
            <button
              onClick={handleBackToStories}
              className="bg-white/80 text-pink-700 px-3 py-2 sm:px-4 sm:py-2 rounded-full font-kid-bold text-sm sm:text-base shadow-lg hover:bg-white min-h-[44px] flex items-center gap-1"
            >
              <ArrowLeft size={16} className="sm:size-5" />
              <span className="hidden xs:inline">All Stories</span>
              <span className="xs:hidden">Stories</span>
            </button>
            
            <button
              onClick={handleRestartStory}
              className="bg-white/80 text-pink-700 px-3 py-2 sm:px-4 sm:py-2 rounded-full font-kid-bold text-sm sm:text-base shadow-lg hover:bg-white min-h-[44px] flex items-center gap-1"
            >
              <span className="emoji-text">🔄</span>
              <span className="hidden xs:inline">Restart</span>
            </button>
          </div>
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

          {/* Story Progress Indicator */}
          {currentStoryScene !== 'start' && (
            <div className="mt-6 sm:mt-8 text-center">
              <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full">
                <span className="emoji-text">✨</span>
                <span className="text-sm font-kid-bold text-purple-700">
                  Adventure in progress...
                </span>
                <span className="emoji-text">✨</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Helper function to get story emojis
const getStoryEmoji = (storyId) => {
  const emojiMap = {
    'magical_forest': '🌲✨🐰',
    'space_adventure': '🚀👽⭐',
    'underwater_adventure': '🌊🧜‍♀️🐠',
    'dinosaur_adventure': '🦕🌴🌞',
    'fairy_tale_adventure': '🏰🧚‍♀️👑'
  };
  return emojiMap[storyId] || '📖✨';
};

export default StoriesScreen;
