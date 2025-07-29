import React, { useState, useEffect } from 'react';
import HomeScreen from './components/HomeScreen';
import WordGameScreen from './components/WordGameScreen';
import PhonicsScreen from './components/PhonicsScreen';
import SentencesScreen from './components/SentencesScreen';
import StoriesScreen from './components/StoriesScreen';
import { wordGameData } from './data/wordGameData';
import { phonicsData } from './data/phonicsData';
import { sentenceData } from './data/sentenceData';
import { shuffleArray, playCorrectSound, playSadSound, enableAudio } from './utils/helpers';
import './App.css';

const App = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [currentActivity, setCurrentActivity] = useState('home');
  const [celebrationActive, setCelebrationActive] = useState(false);
  const [sadActive, setSadActive] = useState(false);

  // Game state
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentPhonicsIndex, setCurrentPhonicsIndex] = useState(0);
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  
  // Story state - updated for multiple stories
  const [currentStoryId, setCurrentStoryId] = useState(null);
  const [currentStoryScene, setCurrentStoryScene] = useState('start');
  
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [shuffledPhonics, setShuffledPhonics] = useState([]);
  const [shuffledSentences, setShuffledSentences] = useState([]);
  const [score, setScore] = useState(0);

  // Initialize shuffled options when word changes
  useEffect(() => {
    const currentWord = wordGameData[currentLanguage][currentWordIndex];
    if (currentWord) {
      setShuffledOptions(shuffleArray(currentWord.options));
    }
  }, [currentWordIndex, currentLanguage]);

  // Initialize shuffled phonics when language changes
  useEffect(() => {
    if (phonicsData[currentLanguage]) {
      setShuffledPhonics(shuffleArray(phonicsData[currentLanguage]));
      setCurrentPhonicsIndex(0);
    }
  }, [currentLanguage]);

  // Initialize shuffled sentences when language changes
  useEffect(() => {
    if (sentenceData[currentLanguage]) {
      setShuffledSentences(shuffleArray(sentenceData[currentLanguage]));
      setCurrentSentenceIndex(0);
    }
  }, [currentLanguage]);

  // Reset story state when language changes
  useEffect(() => {
    setCurrentStoryId(null);
    setCurrentStoryScene('start');
  }, [currentLanguage]);

  // Enable audio context on first interaction
  useEffect(() => {
    const handleFirstInteraction = () => {
      enableAudio();
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };
    
    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('touchstart', handleFirstInteraction);
    
    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, []);

  const playCorrectSoundEffect = () => {
    setCelebrationActive(true);
    playCorrectSound(currentLanguage);
    setTimeout(() => setCelebrationActive(false), 2000);
  };

  const playSadSoundEffect = () => {
    setSadActive(true);
    playSadSound(currentLanguage);
    setTimeout(() => setSadActive(false), 1500);
  };

  const handleWordGameAnswer = (selectedEmoji) => {
    const currentWord = wordGameData[currentLanguage][currentWordIndex];
    if (selectedEmoji === currentWord.correct) {
      playCorrectSoundEffect();
      setScore(score + 1);
      setTimeout(() => {
        const nextIndex = (currentWordIndex + 1) % wordGameData[currentLanguage].length;
        setCurrentWordIndex(nextIndex);
      }, 2000);
    } else {
      playSadSoundEffect();
    }
  };

  const appProps = {
    currentLanguage,
    setCurrentLanguage,
    currentActivity,
    setCurrentActivity,
    celebrationActive,
    sadActive,
    currentWordIndex,
    setCurrentWordIndex,
    currentPhonicsIndex,
    setCurrentPhonicsIndex,
    currentSentenceIndex,
    setCurrentSentenceIndex,
    // Story props - updated for multiple stories
    currentStoryId,
    setCurrentStoryId,
    currentStoryScene,
    setCurrentStoryScene,
    shuffledOptions,
    shuffledPhonics,
    shuffledSentences,
    score,
    setScore,
    handleWordGameAnswer,
    playCorrectSound: playCorrectSoundEffect,
    playSadSound: playSadSoundEffect
  };

  const renderCurrentActivity = () => {
    switch (currentActivity) {
      case 'wordGame':
        return <WordGameScreen {...appProps} />;
      case 'phonics':
        return <PhonicsScreen {...appProps} />;
      case 'sentences':
        return <SentencesScreen {...appProps} />;
      case 'stories':
        return <StoriesScreen {...appProps} />;
      default:
        return <HomeScreen {...appProps} />;
    }
  };

  return (
    <div className="font-kid-friendly select-none">
      {renderCurrentActivity()}
    </div>
  );
};

export default App;
