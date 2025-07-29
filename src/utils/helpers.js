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
