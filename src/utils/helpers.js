// Utility function to shuffle array
export const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Get the correct language code for speech synthesis
const getSpeechLanguage = (language) => {
  const languageMap = {
    'en': 'en-US',
    'de': 'de-DE',
    'ro': 'ro-RO'
  };
  return languageMap[language] || 'en-US';
};

// Find the best available voice for the language
const findBestVoice = (language) => {
  if (!('speechSynthesis' in window)) return null;
  
  const voices = speechSynthesis.getVoices();
  const targetLang = getSpeechLanguage(language);
  
  // First try to find a voice that exactly matches the language
  let voice = voices.find(v => v.lang === targetLang);
  
  // If not found, try to find a voice with the same language code (e.g., 'de' for German)
  if (!voice) {
    const langCode = language;
    voice = voices.find(v => v.lang.startsWith(langCode));
  }
  
  // If still not found, try common alternatives
  if (!voice && language === 'ro') {
    // Try alternative Romanian codes
    voice = voices.find(v => v.lang.includes('ro') || v.lang.includes('RO'));
  }
  
  if (!voice && language === 'de') {
    // Try alternative German codes
    voice = voices.find(v => v.lang.includes('de') || v.lang.includes('DE'));
  }
  
  return voice;
};

// Text-to-speech utility functions
export const speakText = (text, language = 'en') => {
  if ('speechSynthesis' in window) {
    // Cancel any ongoing speech
    speechSynthesis.cancel();
    
    // Wait a moment for voices to load if they haven't already
    const speak = () => {
      // Remove emojis and clean text for better speech
      const cleanText = text.replace(/[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu, '').trim();
      
      if (!cleanText) return;
      
      const utterance = new SpeechSynthesisUtterance(cleanText);
      
      // Set language
      utterance.lang = getSpeechLanguage(language);
      
      // Try to find and set the best voice
      const voice = findBestVoice(language);
      if (voice) {
        utterance.voice = voice;
      }
      
      // Adjust speech parameters for better clarity
      utterance.rate = 0.8;
      utterance.pitch = 1.0;
      utterance.volume = 0.9;
      
      speechSynthesis.speak(utterance);
    };
    
    // If voices aren't loaded yet, wait for them
    if (speechSynthesis.getVoices().length === 0) {
      speechSynthesis.addEventListener('voiceschanged', speak, { once: true });
    } else {
      speak();
    }
  }
};

// Special function for phonics - speaks just the letter sound
export const speakPhonicsLetter = (letter, language = 'en') => {
  if ('speechSynthesis' in window) {
    // Cancel any ongoing speech
    speechSynthesis.cancel();
    
    const speak = () => {
      // Use lowercase to avoid "Capital" prefix
      const pronounceableLetter = letter.toLowerCase();
      
      const utterance = new SpeechSynthesisUtterance(pronounceableLetter);
      
      // Set language
      utterance.lang = getSpeechLanguage(language);
      
      // Try to find and set the best voice
      const voice = findBestVoice(language);
      if (voice) {
        utterance.voice = voice;
      }
      
      utterance.rate = 0.6; // Slower for phonics clarity
      utterance.pitch = 1.1; // Slightly higher pitch for child-friendly sound
      utterance.volume = 0.9;
      
      speechSynthesis.speak(utterance);
    };
    
    // If voices aren't loaded yet, wait for them
    if (speechSynthesis.getVoices().length === 0) {
      speechSynthesis.addEventListener('voiceschanged', speak, { once: true });
    } else {
      speak();
    }
  }
};

// Audio context for sound effects
let audioContext = null;

// Initialize audio context (needed for modern browsers)
const initAudioContext = () => {
  if (!audioContext) {
    try {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
      console.log('Web Audio API not supported');
      return null;
    }
  }
  return audioContext;
};

// Create a beep sound with specific frequency and duration
const createBeep = (frequency, duration, volume = 0.3) => {
  const context = initAudioContext();
  if (!context) return;

  const oscillator = context.createOscillator();
  const gainNode = context.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(context.destination);
  
  oscillator.frequency.value = frequency;
  oscillator.type = 'sine';
  
  gainNode.gain.setValueAtTime(0, context.currentTime);
  gainNode.gain.linearRampToValueAtTime(volume, context.currentTime + 0.01);
  gainNode.gain.exponentialRampToValueAtTime(0.01, context.currentTime + duration);
  
  oscillator.start(context.currentTime);
  oscillator.stop(context.currentTime + duration);
};

// Create a multi-tone celebration sound
const playCelebrationBeep = () => {
  const context = initAudioContext();
  if (!context) return;

  // Play a happy ascending melody
  const notes = [523.25, 659.25, 783.99]; // C5, E5, G5 - happy major chord
  notes.forEach((freq, index) => {
    setTimeout(() => {
      createBeep(freq, 0.2, 0.2);
    }, index * 100);
  });
  
  // Add some sparkle with higher notes
  setTimeout(() => {
    createBeep(1046.5, 0.3, 0.15); // C6
  }, 400);
};

// Create a gentle sad sound
const playSadBeep = () => {
  const context = initAudioContext();
  if (!context) return;

  // Play a gentle descending tone
  const notes = [440, 392, 349.23]; // A4, G4, F4 - gentle descending
  notes.forEach((freq, index) => {
    setTimeout(() => {
      createBeep(freq, 0.3, 0.15);
    }, index * 150);
  });
};

// Enhanced celebration sound with speech
export const playCorrectSound = (language = 'en') => {
  // Play the beep sound effect
  playCelebrationBeep();
  
  // Also speak encouragement
  const encouragements = {
    en: ['Great job!', 'Excellent!', 'Well done!', 'Amazing!', 'Perfect!'],
    de: ['Gut gemacht!', 'Ausgezeichnet!', 'Sehr gut!', 'Fantastisch!', 'Perfekt!'],
    ro: ['Bravo!', 'Excelent!', 'Foarte bine!', 'Minunat!', 'Perfect!']
  };
  
  const phrases = encouragements[language] || encouragements.en;
  const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
  
  // Delay speech slightly so it doesn't interfere with beep
  setTimeout(() => {
    speakText(randomPhrase, language);
  }, 500);
};

// Enhanced sad sound with gentle speech
export const playSadSound = (language = 'en') => {
  // Play the gentle sad beep
  playSadBeep();
  
  // Speak gentle encouragement
  const encouragements = {
    en: ['Try again!', 'You can do it!', 'Almost there!', 'Keep trying!'],
    de: ['Versuche es nochmal!', 'Du schaffst das!', 'Fast geschafft!', 'Weiter so!'],
    ro: ['Încearcă din nou!', 'Poți să reușești!', 'Aproape!', 'Continuă să încerci!']
  };
  
  const phrases = encouragements[language] || encouragements.en;
  const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
  
  // Delay speech slightly
  setTimeout(() => {
    speakText(randomPhrase, language);
  }, 600);
};

// Function to enable audio context on user interaction (required by browsers)
export const enableAudio = () => {
  const context = initAudioContext();
  if (context && context.state === 'suspended') {
    context.resume();
  }
};

// Debug function to check available voices (you can call this in console)
export const debugVoices = () => {
  if ('speechSynthesis' in window) {
    const voices = speechSynthesis.getVoices();
    console.log('Available voices:');
    voices.forEach((voice, index) => {
      console.log(`${index}: ${voice.name} (${voice.lang}) - ${voice.localService ? 'Local' : 'Remote'}`);
    });
    
    console.log('\nGerman voices:');
    voices.filter(v => v.lang.includes('de')).forEach(voice => {
      console.log(`- ${voice.name} (${voice.lang})`);
    });
    
    console.log('\nRomanian voices:');
    voices.filter(v => v.lang.includes('ro')).forEach(voice => {
      console.log(`- ${voice.name} (${voice.lang})`);
    });
  }
};
