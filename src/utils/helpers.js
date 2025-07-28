// Utility function to shuffle array
export const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Helper function to get the best available voice for a language
const getBestVoice = (language) => {
  if (!('speechSynthesis' in window)) return null;
  
  const voices = speechSynthesis.getVoices();
  
  // Language mappings with multiple fallbacks
  const languageMappings = {
    'en': ['en-US', 'en-GB', 'en-AU', 'en-CA', 'en'],
    'de': ['de-DE', 'de-AT', 'de-CH', 'de'],
    'ro': ['ro-RO', 'ro']
  };
  
  const preferredLanguages = languageMappings[language] || ['en-US', 'en'];
  
  // Try to find a voice for each preferred language in order
  for (const lang of preferredLanguages) {
    const voice = voices.find(voice =>
      voice.lang.toLowerCase().startsWith(lang.toLowerCase())
    );
    if (voice) return voice;
  }
  
  // Fallback to default voice
  return voices.find(voice => voice.default) || voices[0] || null;
};

// Wait for voices to be loaded
const ensureVoicesLoaded = () => {
  return new Promise((resolve) => {
    if (speechSynthesis.getVoices().length > 0) {
      resolve();
    } else {
      speechSynthesis.addEventListener('voiceschanged', () => {
        resolve();
      }, { once: true });
      
      // Fallback timeout in case voiceschanged doesn't fire
      setTimeout(resolve, 1000);
    }
  });
};

// Text-to-speech utility functions
export const speakText = async (text, language = 'en') => {
  if (!('speechSynthesis' in window)) {
    console.warn('Speech synthesis not supported');
    return;
  }

  try {
    // Cancel any ongoing speech
    speechSynthesis.cancel();
    
    // Wait for voices to be loaded
    await ensureVoicesLoaded();
    
    // Remove emojis and clean text for better speech
    const cleanText = text.replace(/[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu, '').trim();
    
    if (!cleanText) return;
    
    const utterance = new SpeechSynthesisUtterance(cleanText);
    const voice = getBestVoice(language);
    
    if (voice) {
      utterance.voice = voice;
      utterance.lang = voice.lang;
    } else {
      // Fallback language codes
      const langCodes = {
        'en': 'en-US',
        'de': 'de-DE',
        'ro': 'ro-RO'
      };
      utterance.lang = langCodes[language] || 'en-US';
    }
    
    utterance.rate = 0.8;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;
    
    // Add error handling
    utterance.onerror = (event) => {
      console.warn('Speech synthesis error:', event.error);
    };
    
    speechSynthesis.speak(utterance);
  } catch (error) {
    console.warn('Error in speakText:', error);
  }
};

// Special function for phonics - speaks just the letter sound
export const speakPhonicsLetter = async (letter, language = 'en') => {
  if (!('speechSynthesis' in window)) {
    console.warn('Speech synthesis not supported');
    return;
  }

  try {
    // Cancel any ongoing speech
    speechSynthesis.cancel();
    
    // Wait for voices to be loaded
    await ensureVoicesLoaded();
    
    // Use lowercase to avoid "Capital" prefix
    const pronounceableLetter = letter.toLowerCase();
    
    const utterance = new SpeechSynthesisUtterance(pronounceableLetter);
    const voice = getBestVoice(language);
    
    if (voice) {
      utterance.voice = voice;
      utterance.lang = voice.lang;
    } else {
      // Fallback language codes
      const langCodes = {
        'en': 'en-US',
        'de': 'de-DE',
        'ro': 'ro-RO'
      };
      utterance.lang = langCodes[language] || 'en-US';
    }
    
    utterance.rate = 0.6; // Slower for phonics clarity
    utterance.pitch = 1.1; // Slightly higher pitch for child-friendly sound
    utterance.volume = 1.0;
    
    // Add error handling
    utterance.onerror = (event) => {
      console.warn('Speech synthesis error:', event.error);
    };
    
    speechSynthesis.speak(utterance);
  } catch (error) {
    console.warn('Error in speakPhonicsLetter:', error);
  }
};
