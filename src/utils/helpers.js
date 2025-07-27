// Utility function to shuffle array
export const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Text-to-speech utility functions
export const speakText = (text, language = 'en') => {
  if ('speechSynthesis' in window) {
    // Remove emojis and clean text for better speech
    const cleanText = text.replace(/[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu, '').trim();
    
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = language === 'en' ? 'en-US' : language === 'de' ? 'de-DE' : 'ro-RO';
    speechSynthesis.speak(utterance);
  }
};

// Special function for phonics - speaks just the letter sound
export const speakPhonicsLetter = (letter, language = 'en') => {
  if ('speechSynthesis' in window) {
    // Use lowercase to avoid "Capital" prefix
    const pronounceableLetter = letter.toLowerCase();
    
    const utterance = new SpeechSynthesisUtterance(pronounceableLetter);
    utterance.lang = language === 'en' ? 'en-US' : language === 'de' ? 'de-DE' : 'ro-RO';
    utterance.rate = 0.7; // Slower for phonics clarity
    utterance.pitch = 1.1; // Slightly higher pitch for child-friendly sound
    speechSynthesis.speak(utterance);
  }
};
