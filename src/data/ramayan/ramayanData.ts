// Ramayan data - Valmiki Ramayan with 7 Kandas
export const ramayanChaptersData = [
  {
    number: 1,
    name: { en: 'Bala Kanda', hi: 'बालकाण्ड', sanskrit: 'बालकाण्ड' },
    description: { 
      en: 'The Book of Youth - Birth and childhood of Rama, his education under Sage Vishwamitra, breaking of Shiva\'s bow, and marriage to Sita.',
      hi: 'बाल्यकाण्ड - राम का जन्म और बचपन, विश्वामित्र के साथ शिक्षा, शिव धनुष का भंग और सीता से विवाह।'
    },
    sargas: 77,
    topics: ['Birth of Rama', 'Vishwamitra', 'Tadaka', 'Ahalya', 'Sita Swayamvar']
  },
  {
    number: 2,
    name: { en: 'Ayodhya Kanda', hi: 'अयोध्याकाण्ड', sanskrit: 'अयोध्याकाण्ड' },
    description: { 
      en: 'The Book of Ayodhya - Preparations for Rama\'s coronation, Kaikeyi\'s demands, Rama\'s exile to the forest for 14 years.',
      hi: 'अयोध्याकाण्ड - राम के राज्याभिषेक की तैयारी, कैकेयी की माँग, और राम का 14 वर्ष का वनवास।'
    },
    sargas: 119,
    topics: ['Coronation', 'Kaikeyi', 'Exile', 'Bharata', 'Paduka']
  },
  {
    number: 3,
    name: { en: 'Aranya Kanda', hi: 'अरण्यकाण्ड', sanskrit: 'अरण्यकाण्ड' },
    description: { 
      en: 'The Book of the Forest - Life in exile, encounters with sages and demons, abduction of Sita by Ravana.',
      hi: 'अरण्यकाण्ड - वनवास का जीवन, ऋषियों और राक्षसों से मिलन, रावण द्वारा सीता का अपहरण।'
    },
    sargas: 75,
    topics: ['Forest Life', 'Shurpanakha', 'Golden Deer', 'Sita Abduction', 'Jatayu']
  },
  {
    number: 4,
    name: { en: 'Kishkindha Kanda', hi: 'किष्किन्धाकाण्ड', sanskrit: 'किष्किन्धाकाण्ड' },
    description: { 
      en: 'The Book of Kishkindha - Rama meets Hanuman and Sugriva, alliance with the Vanara kingdom, search for Sita begins.',
      hi: 'किष्किन्धाकाण्ड - राम की हनुमान और सुग्रीव से भेंट, वानर राज्य से मित्रता, सीता की खोज।'
    },
    sargas: 67,
    topics: ['Hanuman', 'Sugriva', 'Vali', 'Vanara Army', 'Search for Sita']
  },
  {
    number: 5,
    name: { en: 'Sundara Kanda', hi: 'सुन्दरकाण्ड', sanskrit: 'सुन्दरकाण्ड' },
    description: { 
      en: 'The Beautiful Book - Hanuman\'s leap to Lanka, finding Sita in Ashoka Vatika, burning of Lanka.',
      hi: 'सुन्दरकाण्ड - हनुमान की लंका यात्रा, अशोक वाटिका में सीता से मिलन, लंका दहन।'
    },
    sargas: 68,
    topics: ['Ocean Leap', 'Lanka', 'Ashoka Vatika', 'Lanka Dahan', 'Hanuman']
  },
  {
    number: 6,
    name: { en: 'Yuddha Kanda', hi: 'युद्धकाण्ड', sanskrit: 'युद्धकाण्ड' },
    description: { 
      en: 'The Book of War - Building of Ram Setu, the great battle against Ravana, victory and rescue of Sita.',
      hi: 'युद्धकाण्ड - रामसेतु का निर्माण, रावण से महायुद्ध, विजय और सीता का उद्धार।'
    },
    sargas: 128,
    topics: ['Ram Setu', 'Battle', 'Kumbhakarna', 'Indrajit', 'Ravana Vadh']
  },
  {
    number: 7,
    name: { en: 'Uttara Kanda', hi: 'उत्तरकाण्ड', sanskrit: 'उत्तरकाण्ड' },
    description: { 
      en: 'The Last Book - Return to Ayodhya, Rama\'s reign (Rama Rajya), the story of Sita\'s exile and final departure.',
      hi: 'उत्तरकाण्ड - अयोध्या वापसी, राम राज्य, सीता का वनगमन और अंतिम प्रस्थान।'
    },
    sargas: 111,
    topics: ['Rama Rajya', 'Lava Kusha', 'Sita\'s Trial', 'Ashwamedha', 'Final Departure']
  }
];

// Sample verses from each Kanda
export const ramayanVerses: { [key: number]: any[] } = {
  1: [
    {
      id: 'ram-1-1-1',
      sarga: 1,
      verse: 1,
      sanskrit: 'तपःस्वाध्यायनिरतं तपस्वी वाग्विदां वरम् ।\nनारदं परिपप्रच्छ वाल्मीकिर्मुनिपुङ्गवम् ॥',
      transliteration: 'tapaḥsvādhyāyaniratam tapasvī vāgvidāṃ varam |\nnāradaṃ paripapraccha vālmīkirmunipuṅgavam ||',
      translations: {
        en: 'The ascetic Valmiki questioned the eminent sage Narada, who was devoted to penance and sacred studies, and was foremost among the eloquent.',
        hi: 'तप और स्वाध्याय में निरत, वाग्विदों में श्रेष्ठ, मुनियों में उत्तम नारद से तपस्वी वाल्मीकि ने पूछा।'
      },
      meaning: {
        en: 'This opening verse introduces the dialogue between Sage Valmiki and Narada, setting the stage for the entire Ramayana.',
        hi: 'यह प्रारंभिक श्लोक ऋषि वाल्मीकि और नारद के बीच संवाद का परिचय देता है।'
      }
    },
    {
      id: 'ram-1-1-2',
      sarga: 1,
      verse: 2,
      sanskrit: 'को न्वस्मिन्साम्प्रतं लोके गुणवान्कश्च वीर्यवान् ।\nधर्मज्ञश्च कृतज्ञश्च सत्यवाक्यो दृढव्रतः ॥',
      transliteration: 'ko nvasminsāmprataṃ loke guṇavānkaśca vīryavān |\ndharmajñaśca kṛtajñaśca satyavākyo dṛḍhavrataḥ ||',
      translations: {
        en: 'Who in this world today is virtuous? Who is valorous? Who knows dharma? Who is grateful? Who speaks truth and is firm in his vows?',
        hi: 'इस संसार में आज कौन गुणवान है? कौन वीर्यवान है? कौन धर्मज्ञ है? कौन कृतज्ञ है? कौन सत्यवादी और दृढ़प्रतिज्ञ है?'
      },
      meaning: {
        en: 'Valmiki asks Narada about the ideal man who possesses all virtues, leading to the description of Lord Rama.',
        hi: 'वाल्मीकि नारद से आदर्श पुरुष के बारे में पूछते हैं जो सभी गुणों से संपन्न हो।'
      }
    },
    {
      id: 'ram-1-1-3',
      sarga: 1,
      verse: 3,
      sanskrit: 'चारित्रेण च को युक्तः सर्वभूतेषु को हितः ।\nविद्वान्कः कः समर्थश्च कश्चैकप्रियदर्शनः ॥',
      transliteration: 'cāritreṇa ca ko yuktaḥ sarvabhūteṣu ko hitaḥ |\nvidvānkaḥ kaḥ samarthaśca kaścaikapriyadarśanaḥ ||',
      translations: {
        en: 'Who is endowed with good character? Who is benevolent to all beings? Who is learned? Who is capable? Whose appearance is pleasing to all?',
        hi: 'कौन सद्चरित्र है? कौन सभी प्राणियों का हित करने वाला है? कौन विद्वान है? कौन समर्थ है? किसका दर्शन सभी को प्रिय है?'
      },
      meaning: {
        en: 'Valmiki continues his inquiry about the perfect person who possesses wisdom, capability and whose very sight brings joy.',
        hi: 'वाल्मीकि उस पूर्ण व्यक्ति के बारे में पूछते हैं जो ज्ञानी, समर्थ और सुंदर हो।'
      }
    },
    {
      id: 'ram-1-1-4',
      sarga: 1,
      verse: 4,
      sanskrit: 'आत्मवान्को जितक्रोधो द्युतिमान्कोऽनसूयकः ।\nकस्य बिभ्यति देवाश्च जातरोषस्य संयुगे ॥',
      transliteration: 'ātmavānko jitakrodho dyutimānko'nasūyakaḥ |\nkasya bibhyati devāśca jātaroṣasya saṃyuge ||',
      translations: {
        en: 'Who has self-control? Who has conquered anger? Who is radiant? Who is free from envy? Of whom are even the gods afraid when he is enraged in battle?',
        hi: 'कौन आत्मवान है? किसने क्रोध को जीता है? कौन तेजस्वी है? कौन निर्मत्सर है? युद्ध में रुष्ट होने पर किससे देवता भी डरते हैं?'
      },
      meaning: {
        en: 'These qualities describe a being of divine power and self-mastery, pointing towards Rama.',
        hi: 'ये गुण दिव्य शक्ति और आत्म-संयम वाले व्यक्ति का वर्णन करते हैं।'
      }
    },
    {
      id: 'ram-1-1-5',
      sarga: 1,
      verse: 5,
      sanskrit: 'एतदिच्छाम्यहं श्रोतुं परं कौतूहलं हि मे ।\nमहर्षे त्वं समर्थोऽसि ज्ञातुमेवंविधं नरम् ॥',
      transliteration: 'etadicchāmyahaṃ śrotuṃ paraṃ kautūhalaṃ hi me |\nmaharṣe tvaṃ samartho'si jñātumevaṃvidhaṃ naram ||',
      translations: {
        en: 'I wish to hear about such a person. I have great curiosity. O great sage, you are capable of knowing such a man.',
        hi: 'मैं ऐसे व्यक्ति के बारे में सुनना चाहता हूँ। मुझे बड़ी जिज्ञासा है। हे महर्षि, आप ऐसे मनुष्य को जानने में समर्थ हैं।'
      },
      meaning: {
        en: 'Valmiki expresses his eagerness to learn about this ideal person from the all-knowing Narada.',
        hi: 'वाल्मीकि सर्वज्ञ नारद से इस आदर्श व्यक्ति के बारे में जानने की उत्सुकता व्यक्त करते हैं।'
      }
    }
  ],
  5: [
    {
      id: 'ram-5-1-1',
      sarga: 1,
      verse: 1,
      sanskrit: 'ततो रावणनीतायाः सीतायाः शत्रुकर्शनः ।\nइयेष पदमन्वेष्टुं चारणाचरिते पथि ॥',
      transliteration: 'tato rāvaṇanītāyāḥ sītāyāḥ śatrukarśanaḥ |\niyeṣa padamanveṣṭuṃ cāraṇācarite pathi ||',
      translations: {
        en: 'Then Hanuman, the destroyer of enemies, wished to search for the whereabouts of Sita who was carried away by Ravana, on the path traversed by celestial beings.',
        hi: 'तब शत्रुओं को कष्ट देने वाले हनुमान ने रावण द्वारा हरी गई सीता का पता लगाने के लिए आकाश मार्ग से जाने की इच्छा की।'
      },
      meaning: {
        en: 'This verse begins the Sundara Kanda, describing Hanuman\'s determination to find Sita.',
        hi: 'यह श्लोक सुंदरकांड का प्रारंभ करता है, जो हनुमान के सीता को खोजने के संकल्प का वर्णन करता है।'
      }
    },
    {
      id: 'ram-5-1-2',
      sarga: 1,
      verse: 2,
      sanskrit: 'अतिक्रम्य सुतां तारां उदयादृषभो यथा ।\nसत्त्ववाञ्जवनाकाशं पपात जवनः कपिः ॥',
      transliteration: 'atikramya sutāṃ tārāṃ udayādṛṣabho yathā |\nsattvavāñjavanākāśaṃ papāta javanaḥ kapiḥ ||',
      translations: {
        en: 'Like the sun rising over the daughter of the star (the horizon), the powerful and swift monkey leaped into the sky.',
        hi: 'जैसे सूर्य तारों की पुत्री (क्षितिज) के ऊपर उदय होता है, वैसे ही बलवान और तेज कपि आकाश में उछले।'
      },
      meaning: {
        en: 'Hanuman begins his legendary leap across the ocean to Lanka.',
        hi: 'हनुमान ने लंका की ओर समुद्र पार करने की अपनी प्रसिद्ध छलांग शुरू की।'
      }
    },
    {
      id: 'ram-5-35-1',
      sarga: 35,
      verse: 1,
      sanskrit: 'भयात्कमलपत्राक्षी विकृष्टा जनकात्मजा ।\nउवाच रोदमाना सा वाचं करुणविक्लवाम् ॥',
      transliteration: 'bhayātkamalapatrākṣī vikṛṣṭā janakātmajā |\nuvāca rodamānā sā vācaṃ karuṇaviklavām ||',
      translations: {
        en: 'The lotus-eyed daughter of Janaka, distressed with fear, weeping, spoke words filled with anguish.',
        hi: 'कमल नेत्री जनक नंदिनी भय से व्याकुल, रोती हुई, करुणा भरे वचन बोलीं।'
      },
      meaning: {
        en: 'This describes Sita\'s emotional state when Hanuman finds her in Ashoka Vatika.',
        hi: 'यह अशोक वाटिका में हनुमान द्वारा मिलने पर सीता की भावनात्मक स्थिति का वर्णन करता है।'
      }
    }
  ]
};

// Get chapter data for Ramayan
export function getRamayanChapter(kandaNumber: number) {
  const kanda = ramayanChaptersData.find(k => k.number === kandaNumber);
  if (!kanda) return null;
  
  return {
    id: `ramayan-kanda-${kandaNumber}`,
    number: kandaNumber,
    title: kanda.name,
    description: kanda.description,
    verseCount: kanda.sargas,
    topics: kanda.topics,
    verses: ramayanVerses[kandaNumber] || []
  };
}

// Get all Ramayan chapters
export function getAllRamayanChapters() {
  return ramayanChaptersData.map(kanda => ({
    id: `ramayan-kanda-${kanda.number}`,
    number: kanda.number,
    title: kanda.name,
    description: kanda.description,
    verseCount: kanda.sargas,
    topics: kanda.topics,
    verses: ramayanVerses[kanda.number] || []
  }));
}
