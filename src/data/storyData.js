export const storyData = {
  en: {
    title: 'The Magical Forest Adventure',
    scenes: {
      start: {
        text: "You are walking through a magical forest when you see a shimmering path ahead. Suddenly, you hear a friendly voice calling for help!",
        image: "🌲🌟",
        choices: [
          { text: "Follow the voice 👂", next: "helpFriend" },
          { text: "Explore the shiny path ✨", next: "magicalPath" }
        ]
      },
      helpFriend: {
        text: "You find a little rabbit stuck under a fallen branch! 'Thank you for coming!' says the rabbit. 'I know where the forest treasure is hidden!'",
        image: "🐰💎",
        choices: [
          { text: "Help the rabbit 🤝", next: "treasure" },
          { text: "Ask about the treasure first 🤔", next: "treasureInfo" }
        ]
      },
      magicalPath: {
        text: "The glittering path leads you to a beautiful clearing with a crystal fountain that sparkles in the sunlight!",
        image: "⛲🌈",
        choices: [
          { text: "Make a wish at the fountain 🌟", next: "wishFountain" },
          { text: "Look around for more paths 👀", next: "morePaths" }
        ]
      },
      treasure: {
        text: "You help the rabbit and together you find a chest full of magical crystals! 'Thanks to your kindness, we can share this treasure!' says the rabbit. You both become the best of friends!",
        image: "💎🐰👫",
        choices: [
          { text: "Start a new adventure 🔄", next: "start" }
        ]
      },
      treasureInfo: {
        text: "The rabbit explains: 'The treasure grants one wish to those with kind hearts!' You decide to help the rabbit first, showing your kindness!",
        image: "💝🤗",
        choices: [
          { text: "Help the rabbit now 🤝", next: "treasure" }
        ]
      },
      wishFountain: {
        text: "You make a wish for all forest animals to be happy! Suddenly, colorful butterflies appear and dance around you! Your kind wish has made the whole forest magical!",
        image: "🦋🌟✨",
        choices: [
          { text: "Start a new adventure 🔄", next: "start" }
        ]
      },
      morePaths: {
        text: "You discover three new paths: one leads to a flower garden, one to a friendly dragon's cave, and one back to the village!",
        image: "🌸🐉🏘️",
        choices: [
          { text: "Visit the flower garden 🌸", next: "flowerGarden" },
          { text: "Meet the friendly dragon 🐉", next: "dragon" }
        ]
      },
      flowerGarden: {
        text: "In the garden, you meet a wise owl who teaches you about all the different flowers! 'Knowledge is the greatest treasure,' says the owl. You feel smarter and happier!",
        image: "🦉🌺📚",
        choices: [
          { text: "Start a new adventure 🔄", next: "start" }
        ]
      },
      dragon: {
        text: "The friendly dragon is actually very lonely and just wants to play! You spend the day playing games and making the dragon laugh! 'You're my first friend!' says the dragon happily!",
        image: "🐉😄🎉",
        choices: [
          { text: "Start a new adventure 🔄", next: "start" }
        ]
      }
    }
  },
  de: {
    title: 'Das Magische Waldabenteuer',
    scenes: {
      start: {
        text: "Du gehst durch einen magischen Wald und siehst einen schimmernden Pfad vor dir. Plötzlich hörst du eine freundliche Stimme um Hilfe rufen!",
        image: "🌲🌟",
        choices: [
          { text: "Der Stimme folgen 👂", next: "helpFriend" },
          { text: "Den glänzenden Pfad erkunden ✨", next: "magicalPath" }
        ]
      },
      helpFriend: {
        text: "Du findest einen kleinen Hasen, der unter einem gefallenen Ast feststeckt! 'Danke, dass du gekommen bist!' sagt der Hase. 'Ich weiß, wo der Waldschatz versteckt ist!'",
        image: "🐰💎",
        choices: [
          { text: "Dem Hasen helfen 🤝", next: "treasure" },
          { text: "Zuerst nach dem Schatz fragen 🤔", next: "treasureInfo" }
        ]
      },
      magicalPath: {
        text: "Der glitzernde Pfad führt dich zu einer wunderschönen Lichtung mit einem Kristallbrunnen, der im Sonnenlicht funkelt!",
        image: "⛲🌈",
        choices: [
          { text: "Einen Wunsch am Brunnen äußern 🌟", next: "wishFountain" },
          { text: "Nach weiteren Pfaden suchen 👀", next: "morePaths" }
        ]
      },
      treasure: {
        text: "Du hilfst dem Hasen und zusammen findet ihr eine Truhe voller magischer Kristalle! 'Dank deiner Freundlichkeit können wir diesen Schatz teilen!' sagt der Hase. Ihr werdet beste Freunde!",
        image: "💎🐰👫",
        choices: [
          { text: "Ein neues Abenteuer beginnen 🔄", next: "start" }
        ]
      },
      treasureInfo: {
        text: "Der Hase erklärt: 'Der Schatz gewährt einen Wunsch für die mit gütigen Herzen!' Du beschließt, dem Hasen zuerst zu helfen und zeigst deine Freundlichkeit!",
        image: "💝🤗",
        choices: [
          { text: "Dem Hasen jetzt helfen 🤝", next: "treasure" }
        ]
      },
      wishFountain: {
        text: "Du wünschst dir, dass alle Waldtiere glücklich sind! Plötzlich erscheinen bunte Schmetterlinge und tanzen um dich herum! Dein gütiger Wunsch hat den ganzen Wald magisch gemacht!",
        image: "🦋🌟✨",
        choices: [
          { text: "Ein neues Abenteuer beginnen 🔄", next: "start" }
        ]
      },
      morePaths: {
        text: "Du entdeckst drei neue Pfade: einer führt zu einem Blumengarten, einer zu einer freundlichen Drachenhöhle, und einer zurück zum Dorf!",
        image: "🌸🐉🏘️",
        choices: [
          { text: "Den Blumengarten besuchen 🌸", next: "flowerGarden" },
          { text: "Den freundlichen Drachen treffen 🐉", next: "dragon" }
        ]
      },
      flowerGarden: {
        text: "Im Garten triffst du eine weise Eule, die dir alles über die verschiedenen Blumen beibringt! 'Wissen ist der größte Schatz,' sagt die Eule. Du fühlst dich klüger und glücklicher!",
        image: "🦉🌺📚",
        choices: [
          { text: "Ein neues Abenteuer beginnen 🔄", next: "start" }
        ]
      },
      dragon: {
        text: "Der freundliche Drache ist eigentlich sehr einsam und möchte nur spielen! Du verbringst den Tag mit Spielen und bringst den Drachen zum Lachen! 'Du bist mein erster Freund!' sagt der Drache glücklich!",
        image: "🐉😄🎉",
        choices: [
          { text: "Ein neues Abenteuer beginnen 🔄", next: "start" }
        ]
      }
    }
  },
  ro: {
    title: 'Aventura Pădurii Magice',
    scenes: {
      start: {
        text: "Mergi printr-o pădure magică când vezi o potecă strălucitoare în față. Deodată, auzi o voce prietenoasă care strigă după ajutor!",
        image: "🌲🌟",
        choices: [
          { text: "Urmează vocea 👂", next: "helpFriend" },
          { text: "Explorează poteca strălucitoare ✨", next: "magicalPath" }
        ]
      },
      helpFriend: {
        text: "Găsești un iepuraș prins sub o creangă căzută! 'Mulțumesc că ai venit!' spune iepurașul. 'Știu unde este ascuns comoara pădurii!'",
        image: "🐰💎",
        choices: [
          { text: "Ajută iepurașul 🤝", next: "treasure" },
          { text: "Întreabă despre comoară mai întâi 🤔", next: "treasureInfo" }
        ]
      },
      magicalPath: {
        text: "Poteca strălucitoare te duce la o poiană frumoasă cu o fântână de cristal care scânteiază în lumina soarelui!",
        image: "⛲🌈",
        choices: [
          { text: "Fă o dorință la fântână 🌟", next: "wishFountain" },
          { text: "Caută mai multe poteci 👀", next: "morePaths" }
        ]
      },
      treasure: {
        text: "Ajuți iepurașul și împreună găsiți o ladă plină de cristale magice! 'Datorită bunătății tale, putem împărți această comoară!' spune iepurașul. Deveniți cei mai buni prieteni!",
        image: "💎🐰👫",
        choices: [
          { text: "Începe o nouă aventură 🔄", next: "start" }
        ]
      },
      treasureInfo: {
        text: "Iepurașul explică: 'Comoara acordă o dorință celor cu inimi bune!' Decizi să ajuți iepurașul mai întâi, arătându-ți bunătatea!",
        image: "💝🤗",
        choices: [
          { text: "Ajută iepurașul acum 🤝", next: "treasure" }
        ]
      },
      wishFountain: {
        text: "Îți dorești ca toate animalele pădurii să fie fericite! Deodată, apar fluturi colorați și dansează în jurul tău! Dorința ta bună a făcut întreaga pădure magică!",
        image: "🦋🌟✨",
        choices: [
          { text: "Începe o nouă aventură 🔄", next: "start" }
        ]
      },
      morePaths: {
        text: "Descoperi trei poteci noi: una duce la o grădină cu flori, una la peștera unui dragon prietenos, și una înapoi la sat!",
        image: "🌸🐉🏘️",
        choices: [
          { text: "Vizitează grădina cu flori 🌸", next: "flowerGarden" },
          { text: "Întâlnește dragonul prietenos 🐉", next: "dragon" }
        ]
      },
      flowerGarden: {
        text: "În grădină, întâlnești o bufniță înțeleaptă care te învață despre toate florile diferite! 'Cunoașterea este cea mai mare comoară,' spune bufnița. Te simți mai deștept și mai fericit!",
        image: "🦉🌺📚",
        choices: [
          { text: "Începe o nouă aventură 🔄", next: "start" }
        ]
      },
      dragon: {
        text: "Dragonul prietenos este de fapt foarte singur și vrea doar să se joace! Petreci ziua jucându-te și făcând dragonul să râdă! 'Ești primul meu prieten!' spune dragonul fericit!",
        image: "🐉😄🎉",
        choices: [
          { text: "Începe o nouă aventură 🔄", next: "start" }
        ]
      }
    }
  }
};
