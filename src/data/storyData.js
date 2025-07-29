export const storyData = {
  en: {
    title: 'Choose Your Adventure',
    stories: [
      {
        id: 'magical_forest',
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
      {
        id: 'space_adventure',
        title: 'Captain Star\'s Space Mission',
        scenes: {
          start: {
            text: "You are Captain Star, flying through space in your rocket ship! Suddenly, you see a colorful planet with friendly aliens waving at you. What do you do?",
            image: "🚀🌍👽",
            choices: [
              { text: "Land on the planet 🛸", next: "alienPlanet" },
              { text: "Wave back and explore more space 👋", next: "deepSpace" }
            ]
          },
          alienPlanet: {
            text: "The friendly aliens welcome you with a party! They show you their beautiful crystal gardens and teach you how to grow space flowers that glow in the dark!",
            image: "👽🎉🌸",
            choices: [
              { text: "Help them plant more flowers 🌱", next: "gardenHelper" },
              { text: "Ask to see their spaceship 🛸", next: "alienShip" }
            ]
          },
          deepSpace: {
            text: "As you fly deeper into space, you discover a meteor shower of shooting stars! Each star makes a beautiful musical note as it passes by your ship!",
            image: "⭐🎵✨",
            choices: [
              { text: "Follow the musical stars 🎶", next: "starSong" },
              { text: "Look for other planets 🪐", next: "newWorlds" }
            ]
          },
          gardenHelper: {
            text: "You help the aliens create the most beautiful space garden ever! The flowers light up the whole planet and make everyone happy. The aliens give you magical seeds to take home!",
            image: "🌟🌺🎁",
            choices: [
              { text: "Start a new space mission 🔄", next: "start" }
            ]
          },
          alienShip: {
            text: "The aliens show you their amazing spaceship that runs on laughter and kindness! They teach you how to pilot it, and you take a fun ride around their planet together!",
            image: "🛸😄💫",
            choices: [
              { text: "Start a new space mission 🔄", next: "start" }
            ]
          },
          starSong: {
            text: "The musical stars lead you to a cosmic concert where planets and moons are singing together! You join in the song and become the newest member of the Space Choir!",
            image: "🎵🪐🌙",
            choices: [
              { text: "Start a new space mission 🔄", next: "start" }
            ]
          },
          newWorlds: {
            text: "You discover a planet made entirely of bouncy clouds where cloud-creatures play all day! They invite you to join their cloud-hopping games and you have the bounciest fun ever!",
            image: "☁️🤸‍♂️🎈",
            choices: [
              { text: "Start a new space mission 🔄", next: "start" }
            ]
          }
        }
      },
      {
        id: 'underwater_adventure',
        title: 'The Underwater Kingdom',
        scenes: {
          start: {
            text: "You put on your magical diving suit and dive into the sparkling blue ocean! As you swim down, you see a beautiful underwater castle with seahorses swimming around it!",
            image: "🏰🌊🐠",
            choices: [
              { text: "Swim to the castle 🏰", next: "castle" },
              { text: "Follow the colorful fish 🐠", next: "fishFriends" }
            ]
          },
          castle: {
            text: "At the castle, you meet Princess Pearl, a kind mermaid! 'Welcome to our underwater kingdom!' she says. 'We're having a sea party, would you like to join us?'",
            image: "🧜‍♀️👑🎉",
            choices: [
              { text: "Join the sea party 🎊", next: "seaParty" },
              { text: "Ask to explore the castle 🏰", next: "castleTour" }
            ]
          },
          fishFriends: {
            text: "The colorful fish lead you to a coral reef where dolphins are playing music with sea shells! The music creates beautiful bubbles that float up to the surface!",
            image: "🐬🎵🫧",
            choices: [
              { text: "Make music with them 🎶", next: "oceanBand" },
              { text: "Explore the coral reef 🪸", next: "coralGarden" }
            ]
          },
          seaParty: {
            text: "The sea party is amazing! Octopi are juggling pearls, crabs are dancing, and whales are singing happy songs! Everyone welcomes you as the guest of honor!",
            image: "🐙🦀🐋",
            choices: [
              { text: "Start a new underwater adventure 🔄", next: "start" }
            ]
          },
          castleTour: {
            text: "Princess Pearl shows you the castle's treasure room filled with beautiful shells and pearls! She gives you a magical conch shell that lets you talk to all sea creatures!",
            image: "🐚💎✨",
            choices: [
              { text: "Start a new underwater adventure 🔄", next: "start" }
            ]
          },
          oceanBand: {
            text: "You join the ocean band and create the most beautiful underwater symphony! Fish from all over the ocean come to listen, and you become the famous conductor of the Sea Orchestra!",
            image: "🎼🐠🎵",
            choices: [
              { text: "Start a new underwater adventure 🔄", next: "start" }
            ]
          },
          coralGarden: {
            text: "In the coral garden, you help tiny seahorses find their way home! They're so grateful that they show you a secret cave filled with glowing pearls and friendly sea turtles!",
            image: "🐢💎🌟",
            choices: [
              { text: "Start a new underwater adventure 🔄", next: "start" }
            ]
          }
        }
      },
      {
        id: 'dinosaur_adventure',
        title: 'Dino Island Discovery',
        scenes: {
          start: {
            text: "You're exploring a mysterious island when you hear friendly roaring sounds! You peek through the jungle and see colorful dinosaurs playing together in a sunny meadow!",
            image: "🦕🌴🌞",
            choices: [
              { text: "Say hello to the dinosaurs 👋", next: "meetDinos" },
              { text: "Hide and watch them play 👁️", next: "watchAndLearn" }
            ]
          },
          meetDinos: {
            text: "The dinosaurs are so happy to meet you! A friendly Triceratops named Trixie introduces you to all her friends. 'We love making new friends!' she says with a big smile!",
            image: "🦕😊🤝",
            choices: [
              { text: "Ask to play with them 🎮", next: "dinoGames" },
              { text: "Ask about their island home 🏝️", next: "islandTour" }
            ]
          },
          watchAndLearn: {
            text: "You watch the dinosaurs and learn they're very gentle and kind! They help each other reach tall fruits and share everything. A baby dinosaur notices you and waddles over to say hi!",
            image: "🦕👶💕",
            choices: [
              { text: "Pet the baby dinosaur gently 🤗", next: "babyDino" },
              { text: "Come out and introduce yourself 👋", next: "meetDinos" }
            ]
          },
          dinoGames: {
            text: "You play the most amazing games with the dinosaurs! You play hide-and-seek in the jungle, race with the speedy dinosaurs, and even learn how to roar like them! What fun!",
            image: "🦕🎮🏃‍♂️",
            choices: [
              { text: "Start a new dino adventure 🔄", next: "start" }
            ]
          },
          islandTour: {
            text: "Trixie shows you around the beautiful island! There are fruit trees everywhere, crystal clear lakes, and even a dinosaur playground made of rocks and vines! It's like paradise!",
            image: "🌺🏞️🏗️",
            choices: [
              { text: "Start a new dino adventure 🔄", next: "start" }
            ]
          },
          babyDino: {
            text: "The baby dinosaur loves your gentle pets and becomes your best friend! The mama dinosaur is so grateful for your kindness that she lets you ride on her back for a tour of the island!",
            image: "🦕👶🚗",
            choices: [
              { text: "Start a new dino adventure 🔄", next: "start" }
            ]
          }
        }
      },
      {
        id: 'fairy_tale_adventure',
        title: 'The Enchanted Village',
        scenes: {
          start: {
            text: "You walk into a magical village where fairy tale characters live! You see Little Red Riding Hood waving at you, the Three Little Pigs building a playground, and Goldilocks having a tea party!",
            image: "🏘️✨🧚‍♀️",
            choices: [
              { text: "Visit Little Red Riding Hood 🔴", next: "redRidingHood" },
              { text: "Join Goldilocks' tea party 🫖", next: "teaParty" }
            ]
          },
          redRidingHood: {
            text: "Little Red Riding Hood is delivering cookies to everyone in the village! 'Would you like to help me spread joy?' she asks. The friendly wolf is helping too by carrying the heavy basket!",
            image: "🍪🐺❤️",
            choices: [
              { text: "Help deliver cookies 🍪", next: "cookieDelivery" },
              { text: "Learn to bake cookies 👩‍🍳", next: "cookieBaking" }
            ]
          },
          teaParty: {
            text: "Goldilocks has set up the perfect tea party with the Three Bears! 'Everything is just right!' she says happily. Baby Bear pours you a cup of delicious honey tea!",
            image: "🫖🐻🍯",
            choices: [
              { text: "Share stories with everyone 📚", next: "storyTime" },
              { text: "Help set up more tea parties 🎪", next: "partyPlanner" }
            ]
          },
          cookieDelivery: {
            text: "You help deliver cookies to everyone in the village! The Seven Dwarfs, Cinderella, and even the Dragon all get delicious treats! Everyone is so happy and grateful for your kindness!",
            image: "👑🐉😊",
            choices: [
              { text: "Start a new fairy tale adventure 🔄", next: "start" }
            ]
          },
          cookieBaking: {
            text: "You learn to bake the most magical cookies ever! They sparkle with fairy dust and taste like dreams come true! You become the official village baker and everyone loves your treats!",
            image: "🧚‍♀️🍪✨",
            choices: [
              { text: "Start a new fairy tale adventure 🔄", next: "start" }
            ]
          },
          storyTime: {
            text: "Everyone shares their favorite stories! You learn that all the fairy tale characters are actually best friends who help each other every day! You become part of their wonderful story circle!",
            image: "📖👫🌟",
            choices: [
              { text: "Start a new fairy tale adventure 🔄", next: "start" }
            ]
          },
          partyPlanner: {
            text: "You become the village party planner! You organize birthday parties, picnics, and celebration days for all the fairy tale characters! The village is always filled with laughter and joy!",
            image: "🎉🎂🎈",
            choices: [
              { text: "Start a new fairy tale adventure 🔄", next: "start" }
            ]
          }
        }
      }
    ]
  },
  de: {
    title: 'Wähle Dein Abenteuer',
    stories: [
      {
        id: 'magical_forest',
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
      {
        id: 'space_adventure',
        title: 'Kapitän Sterns Weltraummission',
        scenes: {
          start: {
            text: "Du bist Kapitän Stern und fliegst durch das Weltall in deinem Raumschiff! Plötzlich siehst du einen bunten Planeten mit freundlichen Außerirdischen, die dir zuwinken!",
            image: "🚀🌍👽",
            choices: [
              { text: "Auf dem Planeten landen 🛸", next: "alienPlanet" },
              { text: "Zurückwinken und mehr Weltall erkunden 👋", next: "deepSpace" }
            ]
          },
          alienPlanet: {
            text: "Die freundlichen Außerirdischen begrüßen dich mit einer Party! Sie zeigen dir ihre wunderschönen Kristallgärten und bringen dir bei, wie man Weltraumblumen züchtet, die im Dunkeln leuchten!",
            image: "👽🎉🌸",
            choices: [
              { text: "Ihnen beim Pflanzen helfen 🌱", next: "gardenHelper" },
              { text: "Nach ihrem Raumschiff fragen 🛸", next: "alienShip" }
            ]
          },
          deepSpace: {
            text: "Als du tiefer ins Weltall fliegst, entdeckst du einen Meteorschauer aus Sternschnuppen! Jeder Stern macht eine wunderschöne musikalische Note, wenn er an deinem Schiff vorbeifliegt!",
            image: "⭐🎵✨",
            choices: [
              { text: "Den musikalischen Sternen folgen 🎶", next: "starSong" },
              { text: "Nach anderen Planeten suchen 🪐", next: "newWorlds" }
            ]
          },
          gardenHelper: {
            text: "Du hilfst den Außerirdischen, den schönsten Weltraumgarten aller Zeiten zu schaffen! Die Blumen erleuchten den ganzen Planeten und machen alle glücklich. Die Außerirdischen geben dir magische Samen mit nach Hause!",
            image: "🌟🌺🎁",
            choices: [
              { text: "Eine neue Weltraummission beginnen 🔄", next: "start" }
            ]
          },
          alienShip: {
            text: "Die Außerirdischen zeigen dir ihr erstaunliches Raumschiff, das mit Lachen und Freundlichkeit angetrieben wird! Sie bringen dir bei, wie man es steuert, und ihr macht zusammen eine lustige Fahrt um ihren Planeten!",
            image: "🛸😄💫",
            choices: [
              { text: "Eine neue Weltraummission beginnen 🔄", next: "start" }
            ]
          },
          starSong: {
            text: "Die musikalischen Sterne führen dich zu einem kosmischen Konzert, wo Planeten und Monde zusammen singen! Du stimmst in das Lied ein und wirst das neueste Mitglied des Weltraumchors!",
            image: "🎵🪐🌙",
            choices: [
              { text: "Eine neue Weltraummission beginnen 🔄", next: "start" }
            ]
          },
          newWorlds: {
            text: "Du entdeckst einen Planeten, der vollständig aus hüpfenden Wolken besteht, wo Wolkenwesen den ganzen Tag spielen! Sie laden dich ein, bei ihren Wolkenhüpfspielen mitzumachen und du hast den hüpfendsten Spaß aller Zeiten!",
            image: "☁️🤸‍♂️🎈",
            choices: [
              { text: "Eine neue Weltraummission beginnen 🔄", next: "start" }
            ]
          }
        }
      },
      {
        id: 'underwater_adventure',
        title: 'Das Unterwasserkönigreich',
        scenes: {
          start: {
            text: "Du ziehst deinen magischen Taucheranzug an und tauchst in den funkelnden blauen Ozean! Als du hinunterschwimmst, siehst du ein wunderschönes Unterwasserschloss mit Seepferdchen, die darum herumschwimmen!",
            image: "🏰🌊🐠",
            choices: [
              { text: "Zum Schloss schwimmen 🏰", next: "castle" },
              { text: "Den bunten Fischen folgen 🐠", next: "fishFriends" }
            ]
          },
          castle: {
            text: "Am Schloss triffst du Prinzessin Perle, eine freundliche Meerjungfrau! 'Willkommen in unserem Unterwasserkönigreich!' sagt sie. 'Wir haben eine Meeresparty, möchtest du mitmachen?'",
            image: "🧜‍♀️👑🎉",
            choices: [
              { text: "Bei der Meeresparty mitmachen 🎊", next: "seaParty" },
              { text: "Das Schloss erkunden wollen 🏰", next: "castleTour" }
            ]
          },
          fishFriends: {
            text: "Die bunten Fische führen dich zu einem Korallenriff, wo Delfine mit Muscheln Musik machen! Die Musik erzeugt wunderschöne Blasen, die zur Oberfläche aufsteigen!",
            image: "🐬🎵🫧",
            choices: [
              { text: "Mit ihnen Musik machen 🎶", next: "oceanBand" },
              { text: "Das Korallenriff erkunden 🪸", next: "coralGarden" }
            ]
          },
          seaParty: {
            text: "Die Meeresparty ist fantastisch! Oktopusse jonglieren mit Perlen, Krabben tanzen und Wale singen fröhliche Lieder! Alle begrüßen dich als Ehrengast!",
            image: "🐙🦀🐋",
            choices: [
              { text: "Ein neues Unterwasserabenteuer beginnen 🔄", next: "start" }
            ]
          },
          castleTour: {
            text: "Prinzessin Perle zeigt dir die Schatzkammer des Schlosses voller wunderschöner Muscheln und Perlen! Sie gibt dir eine magische Schneckenmuschel, mit der du mit allen Meerestieren sprechen kannst!",
            image: "🐚💎✨",
            choices: [
              { text: "Ein neues Unterwasserabenteuer beginnen 🔄", next: "start" }
            ]
          },
          oceanBand: {
            text: "Du schließt dich der Meeresband an und erschaffst die schönste Unterwassersinfonie! Fische aus dem ganzen Ozean kommen zum Zuhören, und du wirst der berühmte Dirigent des Meeresorchesters!",
            image: "🎼🐠🎵",
            choices: [
              { text: "Ein neues Unterwasserabenteuer beginnen 🔄", next: "start" }
            ]
          },
          coralGarden: {
            text: "Im Korallengarten hilfst du winzigen Seepferdchen, nach Hause zu finden! Sie sind so dankbar, dass sie dir eine geheime Höhle voller leuchtender Perlen und freundlicher Meeresschildkröten zeigen!",
            image: "🐢💎🌟",
            choices: [
              { text: "Ein neues Unterwasserabenteuer beginnen 🔄", next: "start" }
            ]
          }
        }
      },
      {
        id: 'dinosaur_adventure',
        title: 'Dinosaurier-Insel Entdeckung',
        scenes: {
          start: {
            text: "Du erkundest eine geheimnisvolle Insel, als du freundliche Brüllgeräusche hörst! Du schaust durch den Dschungel und siehst bunte Dinosaurier, die zusammen auf einer sonnigen Wiese spielen!",
            image: "🦕🌴🌞",
            choices: [
              { text: "Die Dinosaurier begrüßen 👋", next: "meetDinos" },
              { text: "Versteckt zusehen 👁️", next: "watchAndLearn" }
            ]
          },
          meetDinos: {
            text: "Die Dinosaurier sind so glücklich, dich zu treffen! Ein freundlicher Triceratops namens Trixi stellt dir alle ihre Freunde vor. 'Wir lieben es, neue Freunde zu finden!' sagt sie mit einem großen Lächeln!",
            image: "🦕😊🤝",
            choices: [
              { text: "Fragen, ob du mitspielen kannst 🎮", next: "dinoGames" },
              { text: "Nach ihrer Inselheimat fragen 🏝️", next: "islandTour" }
            ]
          },
          watchAndLearn: {
            text: "Du beobachtest die Dinosaurier und lernst, dass sie sehr sanft und freundlich sind! Sie helfen sich gegenseitig, hohe Früchte zu erreichen und teilen alles. Ein Baby-Dinosaurier bemerkt dich und watschelt herüber, um Hallo zu sagen!",
            image: "🦕👶💕",
            choices: [
              { text: "Den Baby-Dinosaurier sanft streicheln 🤗", next: "babyDino" },
              { text: "Herauskommen und sich vorstellen 👋", next: "meetDinos" }
            ]
          },
          dinoGames: {
            text: "Du spielst die fantastischsten Spiele mit den Dinosauriern! Ihr spielt Verstecken im Dschungel, rennst mit den schnellen Dinosauriern um die Wette und lernst sogar, wie man wie sie brüllt! Was für ein Spaß!",
            image: "🦕🎮🏃‍♂️",
            choices: [
              { text: "Ein neues Dinosaurier-Abenteuer beginnen 🔄", next: "start" }
            ]
          },
          islandTour: {
            text: "Trixi zeigt dir die wunderschöne Insel! Überall gibt es Obstbäume, kristallklare Seen und sogar einen Dinosaurier-Spielplatz aus Felsen und Ranken! Es ist wie das Paradies!",
            image: "🌺🏞️🏗️",
            choices: [
              { text: "Ein neues Dinosaurier-Abenteuer beginnen 🔄", next: "start" }
            ]
          },
          babyDino: {
            text: "Der Baby-Dinosaurier liebt deine sanften Streicheleinheiten und wird dein bester Freund! Die Mama-Dinosaurier ist so dankbar für deine Freundlichkeit, dass sie dich auf ihrem Rücken für eine Inseltour reiten lässt!",
            image: "🦕👶🚗",
            choices: [
              { text: "Ein neues Dinosaurier-Abenteuer beginnen 🔄", next: "start" }
            ]
          }
        }
      },
      {
        id: 'fairy_tale_adventure',
        title: 'Das Verzauberte Dorf',
        scenes: {
          start: {
            text: "Du gehst in ein magisches Dorf, wo Märchenfiguren leben! Du siehst Rotkäppchen, das dir zuwinkt, die drei kleinen Schweinchen, die einen Spielplatz bauen, und Goldlöckchen bei einer Teeparty!",
            image: "🏘️✨🧚‍♀️",
            choices: [
              { text: "Rotkäppchen besuchen 🔴", next: "redRidingHood" },
              { text: "Bei Goldlöckchens Teeparty mitmachen 🫖", next: "teaParty" }
            ]
          },
          redRidingHood: {
            text: "Rotkäppchen verteilt Kekse an alle im Dorf! 'Möchtest du mir helfen, Freude zu verbreiten?' fragt sie. Der freundliche Wolf hilft auch, indem er den schweren Korb trägt!",
            image: "🍪🐺❤️",
            choices: [
              { text: "Beim Kekse verteilen helfen 🍪", next: "cookieDelivery" },
              { text: "Kekse backen lernen 👩‍🍳", next: "cookieBaking" }
            ]
          },
          teaParty: {
            text: "Goldlöckchen hat die perfekte Teeparty mit den drei Bären vorbereitet! 'Alles ist genau richtig!' sagt sie glücklich. Baby Bär gießt dir eine Tasse köstlichen Honig-Tee ein!",
            image: "🫖🐻🍯",
            choices: [
              { text: "Geschichten mit allen teilen 📚", next: "storyTime" },
              { text: "Mehr Teeparties organisieren helfen 🎪", next: "partyPlanner" }
            ]
          },
          cookieDelivery: {
            text: "Du hilfst dabei, Kekse an alle im Dorf zu verteilen! Die sieben Zwerge, Aschenputtel und sogar der Drache bekommen leckere Leckereien! Alle sind so glücklich und dankbar für deine Freundlichkeit!",
            image: "👑🐉😊",
            choices: [
              { text: "Ein neues Märchenabenteuer beginnen 🔄", next: "start" }
            ]
          },
          cookieBaking: {
            text: "Du lernst, die magischsten Kekse aller Zeiten zu backen! Sie funkeln mit Feenstaub und schmecken wie wahr gewordene Träume! Du wirst der offizielle Dorfbäcker und alle lieben deine Leckereien!",
            image: "🧚‍♀️🍪✨",
            choices: [
              { text: "Ein neues Märchenabenteuer beginnen 🔄", next: "start" }
            ]
          },
          storyTime: {
            text: "Alle teilen ihre Lieblingsgeschichten! Du erfährst, dass alle Märchenfiguren eigentlich beste Freunde sind, die sich jeden Tag helfen! Du wirst Teil ihres wunderbaren Geschichtenkreises!",
            image: "📖👫🌟",
            choices: [
              { text: "Ein neues Märchenabenteuer beginnen 🔄", next: "start" }
            ]
          },
          partyPlanner: {
            text: "Du wirst der Dorf-Partyplaner! Du organisierst Geburtstagsfeiern, Picknicks und Feiertage für alle Märchenfiguren! Das Dorf ist immer voller Lachen und Freude!",
            image: "🎉🎂🎈",
            choices: [
              { text: "Ein neues Märchenabenteuer beginnen 🔄", next: "start" }
            ]
          }
        }
      }
    ]
  },
  ro: {
    title: 'Alege-ți Aventura',
    stories: [
      {
        id: 'magical_forest',
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
      },
      {
        id: 'space_adventure',
        title: 'Misiunea Spațială a Căpitanului Stea',
        scenes: {
          start: {
            text: "Ești Căpitanul Stea și zbori prin spațiu în racheta ta! Deodată, vezi o planetă colorată cu extratereștri prietenoși care îți fac cu mâna. Ce faci?",
            image: "🚀🌍👽",
            choices: [
              { text: "Aterizează pe planetă 🛸", next: "alienPlanet" },
              { text: "Fă cu mâna înapoi și explorează mai mult spațiul 👋", next: "deepSpace" }
            ]
          },
          alienPlanet: {
            text: "Extratereștrii prietenoși te întâmpină cu o petrecere! Îți arată grădinile lor frumoase de cristal și te învață cum să crești flori spațiale care strălucesc în întuneric!",
            image: "👽🎉🌸",
            choices: [
              { text: "Ajută-i să planteze mai multe flori 🌱", next: "gardenHelper" },
              { text: "Întreabă să vezi nava lor spațială 🛸", next: "alienShip" }
            ]
          },
          deepSpace: {
            text: "Pe măsură ce zbori mai adânc în spațiu, descoperi o ploaie de meteori din stele căzătoare! Fiecare stea face o notă muzicală frumoasă când trece pe lângă nava ta!",
            image: "⭐🎵✨",
            choices: [
              { text: "Urmează stelele muzicale 🎶", next: "starSong" },
              { text: "Caută alte planete 🪐", next: "newWorlds" }
            ]
          },
          gardenHelper: {
            text: "Ajuți extratereștrii să creeze cea mai frumoasă grădină spațială din toate timpurile! Florile luminează întreaga planetă și îi fac pe toți fericiți. Extratereștrii îți dau semințe magice să le iei acasă!",
            image: "🌟🌺🎁",
            choices: [
              { text: "Începe o nouă misiune spațială 🔄", next: "start" }
            ]
          },
          alienShip: {
            text: "Extratereștrii îți arată nava lor spațială uimitoare care funcționează cu râs și bunătate! Te învață cum să o pilotezi și faceți împreună o plimbare distractivă în jurul planetei lor!",
            image: "🛸😄💫",
            choices: [
              { text: "Începe o nouă misiune spațială 🔄", next: "start" }
            ]
          },
          starSong: {
            text: "Stelele muzicale te duc la un concert cosmic unde planetele și lunile cântă împreună! Te alături cântecului și devii cel mai nou membru al Corului Spațial!",
            image: "🎵🪐🌙",
            choices: [
              { text: "Începe o nouă misiune spațială 🔄", next: "start" }
            ]
          },
          newWorlds: {
            text: "Descoperi o planetă făcută în întregime din nori saltăreți unde ființele-nor se joacă toată ziua! Te invită să te alături jocurilor lor de sărituri pe nori și ai cea mai săltăreață distracție din toate timpurile!",
            image: "☁️🤸‍♂️🎈",
            choices: [
              { text: "Începe o nouă misiune spațială 🔄", next: "start" }
            ]
          }
        }
      },
      {
        id: 'underwater_adventure',
        title: 'Regatul Subacvatic',
        scenes: {
          start: {
            text: "Îți pui costumul magic de scufundare și te scufunzi în oceanul albastru strălucitor! Pe măsură ce înoți în jos, vezi un castel subacvatic frumos cu cai de mare înotând în jurul lui!",
            image: "🏰🌊🐠",
            choices: [
              { text: "Înoată spre castel 🏰", next: "castle" },
              { text: "Urmează peștii colorați 🐠", next: "fishFriends" }
            ]
          },
          castle: {
            text: "La castel, o întâlnești pe Prințesa Perlă, o sirenă drăguță! 'Bine ai venit în regatul nostru subacvatic!' spune ea. 'Avem o petrecere marină, vrei să te alături nouă?'",
            image: "🧜‍♀️👑🎉",
            choices: [
              { text: "Alătură-te petrecerii marine 🎊", next: "seaParty" },
              { text: "Cere să explorezi castelul 🏰", next: "castleTour" }
            ]
          },
          fishFriends: {
            text: "Peștii colorați te duc la o recifă de corali unde delfinii fac muzică cu scoici marine! Muzica creează bule frumoase care plutesc spre suprafață!",
            image: "🐬🎵🫧",
            choices: [
              { text: "Fă muzică cu ei 🎶", next: "oceanBand" },
              { text: "Explorează recifa de corali 🪸", next: "coralGarden" }
            ]
          },
          seaParty: {
            text: "Petrecerea marină este uimitoare! Caracatițele jonglează cu perle, crabii dansează și balenele cântă cântece vesele! Toată lumea te primește ca oaspete de onoare!",
            image: "🐙🦀🐋",
            choices: [
              { text: "Începe o nouă aventură subacvatică 🔄", next: "start" }
            ]
          },
          castleTour: {
            text: "Prințesa Perlă îți arată camera cu comori a castelului plină de scoici și perle frumoase! Îți dă o scoică magică care îți permite să vorbești cu toate creaturile marine!",
            image: "🐚💎✨",
            choices: [
              { text: "Începe o nouă aventură subacvatică 🔄", next: "start" }
            ]
          },
          oceanBand: {
            text: "Te alături trupei oceanice și creezi cea mai frumoasă simfonie subacvatică! Pești din tot oceanul vin să asculte, și devii faimosul dirijor al Orchestrei Marine!",
            image: "🎼🐠🎵",
            choices: [
              { text: "Începe o nouă aventură subacvatică 🔄", next: "start" }
            ]
          },
          coralGarden: {
            text: "În grădina de corali, ajuți caii de mare mici să-și găsească drumul acasă! Sunt atât de recunoscători încât îți arată o peșteră secretă plină de perle strălucitoare și broaște țestoase prietenoase!",
            image: "🐢💎🌟",
            choices: [
              { text: "Începe o nouă aventură subacvatică 🔄", next: "start" }
            ]
          }
        }
      },
      {
        id: 'dinosaur_adventure',
        title: 'Descoperirea Insulei Dinozaurilor',
        scenes: {
          start: {
            text: "Explorezi o insulă misterioasă când auzi sunete prietenoase de răcnet! Te uiți prin junglă și vezi dinozauri colorați jucându-se împreună pe o pajiște însorită!",
            image: "🦕🌴🌞",
            choices: [
              { text: "Salută dinozaurii 👋", next: "meetDinos" },
              { text: "Ascunde-te și urmărește-i jucându-se 👁️", next: "watchAndLearn" }
            ]
          },
          meetDinos: {
            text: "Dinozaurii sunt atât de fericiți să te întâlnească! Un Triceratops prietenos pe nume Trixi te prezintă tuturor prietenilor ei. 'Ne place să facem prieteni noi!' spune cu un zâmbet mare!",
            image: "🦕😊🤝",
            choices: [
              { text: "Întreabă dacă te poți juca cu ei 🎮", next: "dinoGames" },
              { text: "Întreabă despre casa lor din insulă 🏝️", next: "islandTour" }
            ]
          },
          watchAndLearn: {
            text: "Urmărești dinozaurii și înveți că sunt foarte blânzi și drăguți! Se ajută între ei să ajungă la fructele înalte și împart totul. Un dinozaur bebe te observă și se apropie să-ți spună salut!",
            image: "🦕👶💕",
            choices: [
              { text: "Mângâie blând dinozaurul bebe 🤗", next: "babyDino" },
              { text: "Ieși și te prezinți 👋", next: "meetDinos" }
            ]
          },
          dinoGames: {
            text: "Joci cele mai uimitoare jocuri cu dinozaurii! Jucați de-a v-ați ascunselea în junglă, aleargă cu dinozaurii rapizi și înveți chiar și cum să răcnești ca ei! Ce distractiv!",
            image: "🦕🎮🏃‍♂️",
            choices: [
              { text: "Începe o nouă aventură cu dinozauri 🔄", next: "start" }
            ]
          },
          islandTour: {
            text: "Trixi îți arată insula frumoasă! Sunt copaci cu fructe peste tot, lacuri cristaline și chiar și un loc de joacă pentru dinozauri făcut din pietre și liană! E ca paradisul!",
            image: "🌺🏞️🏗️",
            choices: [
              { text: "Începe o nouă aventură cu dinozauri 🔄", next: "start" }
            ]
          },
          babyDino: {
            text: "Dinozaurul bebe adoră mângâierile tale blânde și devine cel mai bun prieten al tău! Mama dinozaur este atât de recunoscătoare pentru bunătatea ta încât te lasă să călărești pe spatele ei pentru un tur al insulei!",
            image: "🦕👶🚗",
            choices: [
              { text: "Începe o nouă aventură cu dinozauri 🔄", next: "start" }
            ]
          }
        }
      },
      {
        id: 'fairy_tale_adventure',
        title: 'Satul Fermecat',
        scenes: {
          start: {
            text: "Intri într-un sat magic unde trăiesc personajele din basme! O vezi pe Scufița Roșie făcându-ți cu mâna, cei Trei Purceluși construind un loc de joacă, și pe Goldilocks la o petrecere cu ceai!",
            image: "🏘️✨🧚‍♀️",
            choices: [
              { text: "Vizitează-o pe Scufița Roșie 🔴", next: "redRidingHood" },
              { text: "Alătură-te petrecerii cu ceai a lui Goldilocks 🫖", next: "teaParty" }
            ]
          },
          redRidingHood: {
            text: "Scufița Roșie distribuie prăjituri tuturor din sat! 'Vrei să mă ajuți să răspândesc bucurie?' întreabă ea. Lupul prietenos ajută și el purtând coșul greu!",
            image: "🍪🐺❤️",
            choices: [
              { text: "Ajută la distribuirea prăjiturilor 🍪", next: "cookieDelivery" },
              { text: "Învață să faci prăjituri 👩‍🍳", next: "cookieBaking" }
            ]
          },
          teaParty: {
            text: "Goldilocks a pregătit petrecerea perfectă cu ceai împreună cu cei Trei Urși! 'Totul este exact bun!' spune ea fericit. Ursulețul îți toarnă o ceașcă de ceai delicios cu miere!",
            image: "🫖🐻🍯",
            choices: [
              { text: "Împarte povești cu toată lumea 📚", next: "storyTime" },
              { text: "Ajută să organizezi mai multe petreceri cu ceai 🎪", next: "partyPlanner" }
            ]
          },
          cookieDelivery: {
            text: "Ajuți să distribui prăjituri tuturor din sat! Cei Șapte Pitici, Cenușăreasa și chiar și Dragonul primesc dulciuri delicioase! Toată lumea este atât de fericită și recunoscătoare pentru bunătatea ta!",
            image: "👑🐉😊",
            choices: [
              { text: "Începe o nouă aventură din basme 🔄", next: "start" }
            ]
          },
          cookieBaking: {
            text: "Înveți să faci cele mai magice prăjituri din toate timpurile! Ele sclipesc cu pudră de zână și au gustul visurilor împlinite! Devii brutarul oficial al satului și toată lumea adoră dulciurile tale!",
            image: "🧚‍♀️🍪✨",
            choices: [
              { text: "Începe o nouă aventură din basme 🔄", next: "start" }
            ]
          },
          storyTime: {
            text: "Toată lumea își împarte poveștile favorite! Înveți că toate personajele din basme sunt de fapt cei mai buni prieteni care se ajută între ei în fiecare zi! Devii parte din cercul lor minunat de povești!",
            image: "📖👫🌟",
            choices: [
              { text: "Începe o nouă aventură din basme 🔄", next: "start" }
            ]
          },
          partyPlanner: {
            text: "Devii organizatorul de petreceri al satului! Organizezi sărbători de ziua de naștere, picnicuri și zile de sărbătoare pentru toate personajele din basme! Satul este mereu plin de râs și bucurie!",
            image: "🎉🎂🎈",
            choices: [
              { text: "Începe o nouă aventură din basme 🔄", next: "start" }
            ]
          }
        }
      }
    ]
  }
};
