// app/spiritual/spiritualData.ts

// 1. DATA FOR THE CARD LAYOUTS (Index Pages)
export const spiritualContent: Record<string, any> = {
    // --- BHAGAVAD GITA INDEX ---
    "gita": {
      title: "The Bhagavad Gita",
      subtitle: "The Divine Song of God",
      chapters: [
        {
          id: "ch1",
          title: "Chapter 1: Arjuna Vishada Yoga",
          desc: "Arjuna's Dilemma. Seeing his family on the battlefield, Arjuna is overcome with grief.",
          slug: "gita-ch1"
        },
        {
          id: "ch2",
          title: "Chapter 2: Sankhya Yoga",
          desc: "The Yoga of Knowledge. Krishna begins his teachings on the eternal soul.",
          slug: "gita-ch2"
        }
      ]
    },
  
    // --- MEDITATION INDEX ---
    "meditation": {
      title: "Meditation Lab",
      subtitle: "Tools for the Mind",
      sessions: [
        {
          title: "5-Minute Exam Focus",
          duration: "5 mins",
          slug: "focus-meditation",
          type: "audio"
        },
        {
          title: "Sleep & Recovery (Yoga Nidra)",
          duration: "20 mins",
          slug: "sleep-meditation",
          type: "audio"
        }
      ]
    },

    "vedic": {
    title: "Vedic Wisdom",
    subtitle: "Ancient Concepts for Modern Life",
    concepts: [
      {
        term: "Karma",
        translation: "Action & Reaction",
        desc: "Karma is not punishment; it is physics. Every action generates a force of energy that returns to us in like kind.",
        icon: "refresh"
      },
      {
        term: "Dharma",
        translation: "Cosmic Duty / Nature",
        desc: "Your unique purpose. Just as sugar's dharma is to be sweet, and fire's is to burn, you have a specific role to play in the cosmos.",
        icon: "scale"
      },
      {
        term: "Atman",
        translation: "The True Self",
        desc: "You are not the body, nor the mind. You are the observer within—the spark of consciousness that illuminates your experiences.",
        icon: "sun"
      },
      {
        term: "Moksha",
        translation: "Liberation",
        desc: "The ultimate goal. Breaking free from the cycle of birth and death (Samsara) by realizing your oneness with the universe.",
        icon: "feather"
      },
      {
        term: "Maya",
        translation: "Illusion",
        desc: "The matrix. The temporary reality that makes us believe we are separate from the universe and each other.",
        icon: "eye"
      },
      {
        term: "Ahimsa",
        translation: "Non-Violence",
        desc: "Not just physical non-violence, but the absence of hostile thoughts towards oneself and others.",
        icon: "heart"
      }
    ]
  }
};
  
  // 2. DATA FOR THE READER PAGES (Verses & Sanskrit)
  export const chapterText: Record<string, any> = {
    // --- CHAPTER 1 CONTENT ---
    "gita-ch1": {
      title: "Chapter 1",
      sanskritTitle: "अर्जुनविषादयोग", 
      summary: "Observing the Armies on the Battlefield of Kurukshetra.",
      verses: [
        {
          number: 1,
          // Original Sanskrit
          sanskrit: "धृतराष्ट्र उवाच |\nधर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः |\nमामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय ||", 
          // English Transliteration
          transliteration: "dhṛtarāṣṭra uvāca\ndharma-kṣetre kuru-kṣetre samavetā yuyutsavaḥ\nmāmakāḥ pāṇḍavāś caiva kim akurvata sañjaya",
          // English Translation
          translation: "Dhritarashtra said: O Sanjaya, after my sons and the sons of Pandu assembled in the place of pilgrimage at Kurukshetra, desiring to fight, what did they do?",
          // Deep Meaning
          purport: "Dhritarashtra is blind not only physically but spiritually. He is fearful that the holy influence of Kurukshetra might change the minds of his sons..."
        },
        {
          number: 2,
          sanskrit: "सञ्जय उवाच |\nदृष्ट्वा तु पाण्डवानीकं व्यूढं दुर्योधनस्तदा |\nआचार्यमुपसङ्गम्य राजा वचनमब्रवीत् ||",
          transliteration: "sañjaya uvāca\ndṛṣṭvā tu pāṇḍavānīkaṁ vyūḍhaṁ duryodhanas tadā\nācāryam upasaṅgamya rājā vacanam abravīt",
          translation: "Sanjaya said: O King, after looking over the army arranged in military formation by the sons of Pandu, King Duryodhana went to his teacher and spoke the following words.",
          purport: "Duryodhana is a diplomat. He immediately goes to Dronacharya, the commander, to point out the strength of the opposition..."
        }
      ]
    },
  
    // --- CHAPTER 2 CONTENT ---
    "gita-ch2": {
      title: "Chapter 2",
      sanskritTitle: "सांख्ययोग",
      summary: "Contents of the Gita Summarized.",
      verses: [
        {
          number: 47,
          sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन |\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ||",
          transliteration: "karmaṇy-evādhikāras te mā phaleṣu kadācana\nmā karma-phala-hetur bhūr mā te saṅgo ’stv akarmaṇi",
          translation: "You have a right to perform your prescribed duty, but you are not entitled to the fruits of action. Never consider yourself the cause of the results of your activities, and never be attached to not doing your duty.",
          purport: "This is a famous verse. Krishna explains Nishkama Karma—action without attachment to the result. Work is worship, but the result belongs to God."
        }
      ]
    }


  };