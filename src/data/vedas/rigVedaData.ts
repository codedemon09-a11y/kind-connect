// Rig Veda - The oldest of the four Vedas
export const rigVedaMandalas = [
  { number: 1, name: { en: 'Mandala 1', hi: 'प्रथम मण्डल', sanskrit: 'प्रथम मण्डल' }, description: { en: 'Contains hymns to Agni, Indra, and other Vedic deities', hi: 'अग्नि, इंद्र और अन्य वैदिक देवताओं की स्तुति' }, suktas: 191 },
  { number: 2, name: { en: 'Mandala 2', hi: 'द्वितीय मण्डल', sanskrit: 'द्वितीय मण्डल' }, description: { en: 'Family book of the Gṛtsamadas, hymns to Indra and Agni', hi: 'गृत्समद परिवार की पुस्तक, इंद्र और अग्नि की स्तुति' }, suktas: 43 },
  { number: 3, name: { en: 'Mandala 3', hi: 'तृतीय मण्डल', sanskrit: 'तृतीय मण्डल' }, description: { en: 'Contains the famous Gayatri Mantra', hi: 'प्रसिद्ध गायत्री मंत्र यहाँ है' }, suktas: 62 },
  { number: 4, name: { en: 'Mandala 4', hi: 'चतुर्थ मण्डल', sanskrit: 'चतुर्थ मण्डल' }, description: { en: 'Family book of Vamadeva, hymns to Agni and Indra', hi: 'वामदेव परिवार की पुस्तक' }, suktas: 58 },
  { number: 5, name: { en: 'Mandala 5', hi: 'पञ्चम मण्डल', sanskrit: 'पञ्चम मण्डल' }, description: { en: 'Family book of the Atris', hi: 'अत्रि परिवार की पुस्तक' }, suktas: 87 },
  { number: 6, name: { en: 'Mandala 6', hi: 'षष्ठ मण्डल', sanskrit: 'षष्ठ मण्डल' }, description: { en: 'Family book of the Bharadvajas', hi: 'भारद्वाज परिवार की पुस्तक' }, suktas: 75 },
  { number: 7, name: { en: 'Mandala 7', hi: 'सप्तम मण्डल', sanskrit: 'सप्तम मण्डल' }, description: { en: 'Family book of Vasishtha', hi: 'वशिष्ठ परिवार की पुस्तक' }, suktas: 104 },
  { number: 8, name: { en: 'Mandala 8', hi: 'अष्टम मण्डल', sanskrit: 'अष्टम मण्डल' }, description: { en: 'Mixed collection, includes Valakhilya hymns', hi: 'मिश्रित संग्रह, वालखिल्य सूक्त सहित' }, suktas: 103 },
  { number: 9, name: { en: 'Mandala 9', hi: 'नवम मण्डल', sanskrit: 'नवम मण्डल' }, description: { en: 'Entirely devoted to Soma Pavamana', hi: 'पूर्णतः सोम पवमान को समर्पित' }, suktas: 114 },
  { number: 10, name: { en: 'Mandala 10', hi: 'दशम मण्डल', sanskrit: 'दशम मण्डल' }, description: { en: 'Contains Purusha Sukta and Nasadiya Sukta', hi: 'पुरुष सूक्त और नासदीय सूक्त यहाँ हैं' }, suktas: 191 }
];

// Sample Rig Veda verses
export const rigVedaVerses: { [key: number]: any[] } = {
  1: [
    {
      id: 'rv-1-1-1',
      sukta: 1,
      verse: 1,
      sanskrit: 'अग्निमीळे पुरोहितं यज्ञस्य देवमृत्विजम् ।\nहोतारं रत्नधातमम् ॥',
      transliteration: 'agnim īḷe purohitaṃ yajñasya devam ṛtvijam |\nhotāraṃ ratnadhātamam ||',
      translations: {
        en: 'I praise Agni, the foremost priest, the divine minister of the sacrifice, the invoker, the best bestower of treasures.',
        hi: 'मैं अग्नि की स्तुति करता हूँ, जो पुरोहित हैं, यज्ञ के देवता हैं, ऋत्विज हैं, होता हैं और सर्वोत्तम रत्नदाता हैं।'
      },
      meaning: {
        en: 'The very first verse of Rig Veda, beginning the sacred tradition with praise of Agni, the fire god.',
        hi: 'ऋग्वेद का पहला मंत्र, अग्निदेव की स्तुति से पवित्र परंपरा का प्रारंभ।'
      }
    },
    {
      id: 'rv-1-1-2',
      sukta: 1,
      verse: 2,
      sanskrit: 'अग्निः पूर्वेभिर्ऋषिभिर्ईड्यो नूतनैरुत ।\nस देवाँ एह वक्षति ॥',
      transliteration: 'agniḥ pūrvebhir ṛṣibhir īḍyo nūtanair uta |\nsa devān eha vakṣati ||',
      translations: {
        en: 'Agni, worthy of praise by ancient and modern sages, may he bring the gods here.',
        hi: 'अग्नि, प्राचीन और नवीन ऋषियों द्वारा स्तुति के योग्य, वे यहाँ देवताओं को लाएं।'
      },
      meaning: {
        en: 'Agni serves as the bridge between humans and gods, carrying offerings to the divine.',
        hi: 'अग्नि मनुष्यों और देवताओं के बीच सेतु हैं, देवताओं तक आहुति पहुँचाते हैं।'
      }
    }
  ],
  3: [
    {
      id: 'rv-3-62-10',
      sukta: 62,
      verse: 10,
      sanskrit: 'ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात् ॥',
      transliteration: 'oṃ bhūr bhuvaḥ svaḥ tat savitur vareṇyaṃ bhargo devasya dhīmahi dhiyo yo naḥ pracodayāt ||',
      translations: {
        en: 'We meditate on the excellent glory of the divine Sun. May he illuminate our intellects.',
        hi: 'हम उस देव सविता के वरेण्य तेज का ध्यान करते हैं। वे हमारी बुद्धि को प्रेरित करें।'
      },
      meaning: {
        en: 'The Gayatri Mantra - the most sacred verse in Hinduism, a prayer for divine illumination.',
        hi: 'गायत्री मंत्र - हिंदू धर्म का सबसे पवित्र मंत्र, दिव्य प्रकाश की प्रार्थना।'
      }
    }
  ],
  10: [
    {
      id: 'rv-10-90-1',
      sukta: 90,
      verse: 1,
      sanskrit: 'सहस्रशीर्षा पुरुषः सहस्राक्षः सहस्रपात् ।\nस भूमिं विश्वतो वृत्वात्यतिष्ठद्दशाङ्गुलम् ॥',
      transliteration: 'sahasraśīrṣā puruṣaḥ sahasrākṣaḥ sahasrapāt |\nsa bhūmiṃ viśvato vṛtvātyatiṣṭhad daśāṅgulam ||',
      translations: {
        en: 'The Cosmic Person has a thousand heads, a thousand eyes, a thousand feet. He pervaded the earth on all sides and extended beyond it by ten fingers.',
        hi: 'सहस्र सिर वाले पुरुष, सहस्र नेत्र वाले, सहस्र पैर वाले। उन्होंने भूमि को सब ओर से घेरकर दस अंगुल बाहर भी व्याप्त किया।'
      },
      meaning: {
        en: 'The beginning of Purusha Sukta, describing the cosmic being from whom the universe emerged.',
        hi: 'पुरुष सूक्त का प्रारंभ, ब्रह्मांडीय पुरुष का वर्णन जिनसे सृष्टि उत्पन्न हुई।'
      }
    },
    {
      id: 'rv-10-129-1',
      sukta: 129,
      verse: 1,
      sanskrit: 'नासदासीन्नो सदासीत्तदानीं नासीद्रजो नो व्योमा परो यत् ।\nकिमावरीवः कुह कस्य शर्मन्नम्भः किमासीद्गहनं गभीरम् ॥',
      transliteration: 'nāsad āsīn no sad āsīt tadānīṃ nāsīd rajo no vyomā paro yat |\nkim āvarīvaḥ kuha kasya śarmann ambhaḥ kim āsīd gahanaṃ gabhīram ||',
      translations: {
        en: 'There was neither non-existence nor existence then; there was neither the realm of space nor the sky beyond. What stirred? Where? In whose protection? Was there water, deep and unfathomable?',
        hi: 'तब न असत् था, न सत् था। न अंतरिक्ष था, न उसके परे आकाश। क्या ढका था? कहाँ? किसकी शरण में? क्या गहरा अथाह जल था?'
      },
      meaning: {
        en: 'The famous Nasadiya Sukta (Creation Hymn), one of the most profound philosophical passages in ancient literature.',
        hi: 'प्रसिद्ध नासदीय सूक्त (सृष्टि सूक्त), प्राचीन साहित्य के सबसे गहन दार्शनिक अंशों में से एक।'
      }
    }
  ]
};

// Get all Rig Veda chapters (Mandalas)
export function getAllRigVedaChapters() {
  return rigVedaMandalas.map(mandala => ({
    id: `rigveda-mandala-${mandala.number}`,
    number: mandala.number,
    title: mandala.name,
    description: mandala.description,
    verseCount: mandala.suktas,
    topics: [],
    verses: rigVedaVerses[mandala.number] || []
  }));
}
