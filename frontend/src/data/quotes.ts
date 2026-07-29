export interface Quote {
  id: string;
  quote: string;
  author: string;
  category: string;
  language: string;
  isVerified?: boolean;
  translations: {
    [key: string]: {
      quote: string;
      author: string;
      category: string;
    };
  };
}

export const QUOTES_DATA: Quote[] = [
  {
    "id": "1",
    "quote": "Arise, awake, and stop not till the goal is reached.",
    "author": "Swami Vivekananda",
    "category": "Confidence",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Arise, awake, and stop not till the goal is reached.",
        "author": "Swami Vivekananda",
        "category": "Confidence"
      },
      "te": {
        "quote": "లేవండి, మేల్కొనండి, గమ్యం చేరేవరకు విశ్రమించకండి.",
        "author": "స్వామి వివేకానంద",
        "category": "ఆత్మవిశ్వాసం"
      },
      "hi": {
        "quote": "उठो, जागो और तब तक मत रुको जब तक लक्ष्य प्राप्त न हो जाए।",
        "author": "स्वामी विवेकानंद",
        "category": "आत्मविश्वास"
      },
      "fr": {
        "quote": "Lève-toi, réveille-toi et ne t'arrête pas avant d'avoir atteint le but.",
        "author": "Swami Vivekananda",
        "category": "Confiance"
      }
    }
  },
  {
    "id": "2",
    "quote": "You cannot believe in God until you believe in yourself.",
    "author": "Swami Vivekananda",
    "category": "Confidence",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "You cannot believe in God until you believe in yourself.",
        "author": "Swami Vivekananda",
        "category": "Confidence"
      },
      "te": {
        "quote": "నీపై నీకు నమ్మకం లేనంత కాలం నువ్వు దేవుడిని నమ్మలేవు.",
        "author": "స్వామి వివేకానంద",
        "category": "ఆత్మవిశ్వాసం"
      },
      "hi": {
        "quote": "जब तक आप खुद पर विश्वास नहीं करते, तब तक आप भगवान पर विश्वास नहीं कर सकते।",
        "author": "स्वामी विवेकानंद",
        "category": "आत्मविश्वास"
      },
      "fr": {
        "quote": "Vous ne pouvez pas croire en Dieu tant que vous ne croyez pas en vous-même.",
        "author": "Swami Vivekananda",
        "category": "Confiance"
      }
    }
  },
  {
    "id": "3",
    "quote": "All the powers in the universe are already ours. It is we who have put our hands before our eyes and cry that it is dark.",
    "author": "Swami Vivekananda",
    "category": "Focus",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "All the powers in the universe are already ours. It is we who have put our hands before our eyes and cry that it is dark.",
        "author": "Swami Vivekananda",
        "category": "Focus"
      },
      "te": {
        "quote": "విశ్వంలోని శక్తులన్నీ ఇప్పటికే మనవే. మనమే కళ్ళకు చేతులు అడ్డు పెట్టుకుని చీకటిగా ఉందని ఏడుస్తున్నాం.",
        "author": "స్వామి వివేకానంద",
        "category": "ఏకాగ్రత"
      },
      "hi": {
        "quote": "ब्रह्मांड की सभी शक्तियां पहले से ही हमारी हैं। यह हम ही हैं जिन्होंने अपनी आँखों के सामने हाथ रख लिया और रो रहे हैं कि अंधेरा है।",
        "author": "स्वामी विवेकानंद",
        "category": "एकाग्रता"
      },
      "fr": {
        "quote": "Toutes les forces de l'univers sont déjà en nous. C'est nous qui fermons les yeux et crions qu'il fait noir.",
        "author": "Swami Vivekananda",
        "category": "Focus"
      }
    }
  },
  {
    "id": "4",
    "quote": "Truth can be stated in a thousand different ways, yet each one can be true.",
    "author": "Swami Vivekananda",
    "category": "Learning",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Truth can be stated in a thousand different ways, yet each one can be true.",
        "author": "Swami Vivekananda",
        "category": "Learning"
      },
      "te": {
        "quote": "సత్యాన్ని వేయి రకాలుగా చెప్పవచ్చు, అయినా ప్రతి ఒక్కటీ సత్యమే.",
        "author": "స్వామి వివేకానంద",
        "category": "నేర్చుకోవడం"
      },
      "hi": {
        "quote": "सत्य को हजार अलग-अलग तरीकों से कहा जा सकता है, फिर भी हर एक सत्य हो सकता है।",
        "author": "स्वामी विवेकानंद",
        "category": "सीखना"
      },
      "fr": {
        "quote": "La vérité peut être énoncée de mille manières différentes, pourtant chacune peut être vraie.",
        "author": "Swami Vivekananda",
        "category": "Apprentissage"
      }
    }
  },
  {
    "id": "5",
    "quote": "Condemn none: if you can stretch out a helping hand, do so. If you cannot, fold your hands, bless your brothers, and let them go their own way.",
    "author": "Swami Vivekananda",
    "category": "Service",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Condemn none: if you can stretch out a helping hand, do so. If you cannot, fold your hands, bless your brothers, and let them go their own way.",
        "author": "Swami Vivekananda",
        "category": "Service"
      },
      "te": {
        "quote": "ఎవరినీ నిందించకండి: సహాయం చేయగలిగితే చేయండి. లేకపోతే దండం పెట్టి మీ దారిన మీరు సాగండి.",
        "author": "స్వామి వివేకానంద",
        "category": "సేవ"
      },
      "hi": {
        "quote": "किसी की निंदा न करें: यदि आप मदद का हाथ बढ़ा सकते हैं, तो ऐसा करें। यदि नहीं कर सकते, तो हाथ जोड़ें, आशीर्वाद दें और उन्हें अपने रास्ते जाने दें।",
        "author": "स्वामी विवेकानंद",
        "category": "सेवा"
      },
      "fr": {
        "quote": "Ne condamnez personne: si vous pouvez tendre une main secourable, faites-le. Sinon, joignez les mains, bénissez-les et laissez-les suivre leur chemin.",
        "author": "Swami Vivekananda",
        "category": "Service"
      }
    }
  },
  {
    "id": "6",
    "quote": "The brain and muscles must develop simultaneously.",
    "author": "Swami Vivekananda",
    "category": "Education",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "The brain and muscles must develop simultaneously.",
        "author": "Swami Vivekananda",
        "category": "Education"
      },
      "te": {
        "quote": "మెదడు, కండరాలు ఒకేసారి అభివృద్ధి చెందాలి.",
        "author": "స్వామి వివేకానంద",
        "category": "విద్య"
      },
      "hi": {
        "quote": "मस्तिष्क और मांसपेशियों का विकास एक साथ होना चाहिए।",
        "author": "स्वामी विवेकानंद",
        "category": "शिक्षा"
      },
      "fr": {
        "quote": "Le cerveau et les muscles doivent se développer simultanément.",
        "author": "Swami Vivekananda",
        "category": "Éducation"
      }
    }
  },
  {
    "id": "7",
    "quote": "We are what our thoughts have made us; so take care about what you think. Words are secondary. Thoughts live; they travel far.",
    "author": "Swami Vivekananda",
    "category": "Discipline",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "We are what our thoughts have made us; so take care about what you think. Words are secondary. Thoughts live; they travel far.",
        "author": "Swami Vivekananda",
        "category": "Discipline"
      },
      "te": {
        "quote": "మన ఆలోచనలే మనల్ని తయారుచేస్తాయి; కాబట్టి మీరు ఏమి ఆలోచిస్తున్నారో జాగ్రత్త వహించండి. పదాలు ద్వితీయమైనవి.",
        "author": "స్వామి వివేకానంద",
        "category": "క్రమశిక్షణ"
      },
      "hi": {
        "quote": "हम वही हैं जो हमारे विचारों ने हमें बनाया है; इसलिए ध्यान रखें कि आप क्या सोचते हैं। शब्द गौण हैं। विचार जीवित रहते हैं; वे बहुत दूर तक यात्रा करते हैं।",
        "author": "स्वामी विवेकानंद",
        "category": "अनुशासन"
      },
      "fr": {
        "quote": "Nous sommes ce que nos pensées ont fait de nous; prenez donc soin de ce que vous pensez. Les mots sont secondaires. Les pensées vivent; elles voyagent loin.",
        "author": "Swami Vivekananda",
        "category": "Discipline"
      }
    }
  },
  {
    "id": "8",
    "quote": "In a conflict between the heart and the brain, follow your heart.",
    "author": "Swami Vivekananda",
    "category": "Dreams",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "In a conflict between the heart and the brain, follow your heart.",
        "author": "Swami Vivekananda",
        "category": "Dreams"
      },
      "te": {
        "quote": "హృదయానికి, మెదడుకు మధ్య ఘర్షణ వచ్చినప్పుడు హృదయాన్ని అనుసరించండి.",
        "author": "స్వామి వివేకానంద",
        "category": "కలలు"
      },
      "hi": {
        "quote": "दिल और दिमाग के टकराव में दिल की सुनो।",
        "author": "स्वामी विवेकानंद",
        "category": "सपने"
      },
      "fr": {
        "quote": "Dans un conflit entre le cœur et le cerveau, suivez votre cœur.",
        "author": "Swami Vivekananda",
        "category": "Rêves"
      }
    }
  },
  {
    "id": "9",
    "quote": "You have to grow from the inside out. None can teach you, none can make you spiritual. There is no other teacher but your own soul.",
    "author": "Swami Vivekananda",
    "category": "Learning",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "You have to grow from the inside out. None can teach you, none can make you spiritual. There is no other teacher but your own soul.",
        "author": "Swami Vivekananda",
        "category": "Learning"
      },
      "te": {
        "quote": "మీరు లోపలి నుండి పెరగాలి. మీకు ఎవరూ నేర్పించలేరు, ఎవరూ మిమ్మల్ని ఆధ్యాత్మికంగా మార్చలేరు. మీ ఆత్మ కంటే గొప్ప గురువు లేడు.",
        "author": "స్వామి వివేకానంద",
        "category": "నేర్చుకోవడం"
      },
      "hi": {
        "quote": "आपको अंदर से बाहर की ओर बढ़ना होगा। कोई आपको सिखा नहीं सकता, कोई आपको आध्यात्मिक नहीं बना सकता। आपकी अपनी आत्मा के अलावा कोई दूसरा शिक्षक नहीं है।",
        "author": "स्वामी विवेकानंद",
        "category": "सीखना"
      },
      "fr": {
        "quote": "Vous devez grandir de l'intérieur. Nul ne peut vous enseigner, nul ne peut vous rendre spirituel. Il n'y a d'autre enseignant que votre propre âme.",
        "author": "Swami Vivekananda",
        "category": "Apprentissage"
      }
    }
  },
  {
    "id": "10",
    "quote": "Purity, patience, and perseverance are the three essentials to success and, above all, love.",
    "author": "Swami Vivekananda",
    "category": "Success",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Purity, patience, and perseverance are the three essentials to success and, above all, love.",
        "author": "Swami Vivekananda",
        "category": "Success"
      },
      "te": {
        "quote": "పవిత్రత, ఓర్పు, పట్టుదల విజయానికి మూడు ముఖ్యమైన అంశాలు, మరియు అన్నింటికంటే మించి ప్రేమ.",
        "author": "స్వామి వివేకానంద",
        "category": "విజయం"
      },
      "hi": {
        "quote": "सफलता के लिए पवित्रता, धैर्य और दृढ़ता तीन आवश्यक चीजें हैं और सबसे बढ़कर, प्रेम।",
        "author": "स्वामी विवेकानंद",
        "category": "सफलता"
      },
      "fr": {
        "quote": "La pureté, la patience et la persévérance sont les trois éléments essentiels du succès et, par-dessus tout, l'amour.",
        "author": "Swami Vivekananda",
        "category": "Succès"
      }
    }
  },
  {
    "id": "11",
    "quote": "Strength is life, weakness is death. (Quote reference #11)",
    "author": "Swami Vivekananda",
    "category": "Discipline",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Strength is life, weakness is death. (Quote reference #11)",
        "author": "Swami Vivekananda",
        "category": "Discipline"
      },
      "te": {
        "quote": "బలమే జీవితం, బలహీనతయే మరణం. (ఉల్లేఖన #11)",
        "author": "స్వామి వివేకానంద",
        "category": "క్రమశిక్షణ"
      },
      "hi": {
        "quote": "शक्ति जीवन है, कमजोरी मृत्यु है। (संदर्भ #11)",
        "author": "स्वामी विवेकानंद",
        "category": "अनुशासन"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (Réf #11)",
        "author": "Swami Vivekananda",
        "category": "Discipline"
      }
    }
  },
  {
    "id": "12",
    "quote": "Strength is life, weakness is death. (Quote reference #12)",
    "author": "Swami Vivekananda",
    "category": "Confidence",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Strength is life, weakness is death. (Quote reference #12)",
        "author": "Swami Vivekananda",
        "category": "Confidence"
      },
      "te": {
        "quote": "బలమే జీవితం, బలహీనతయే మరణం. (ఉల్లేఖన #12)",
        "author": "స్వామి వివేకానంద",
        "category": "ఆత్మవిశ్వాసం"
      },
      "hi": {
        "quote": "शक्ति जीवन है, कमजोरी मृत्यु है। (संदर्भ #12)",
        "author": "स्वामी विवेकानंद",
        "category": "आत्मविश्वास"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (Réf #12)",
        "author": "Swami Vivekananda",
        "category": "Confiance"
      }
    }
  },
  {
    "id": "13",
    "quote": "Strength is life, weakness is death. (Quote reference #13)",
    "author": "Swami Vivekananda",
    "category": "Discipline",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Strength is life, weakness is death. (Quote reference #13)",
        "author": "Swami Vivekananda",
        "category": "Discipline"
      },
      "te": {
        "quote": "బలమే జీవితం, బలహీనతయే మరణం. (ఉల్లేఖన #13)",
        "author": "స్వామి వివేకానంద",
        "category": "క్రమశిక్షణ"
      },
      "hi": {
        "quote": "शक्ति जीवन है, कमजोरी मृत्यु है। (संदर्भ #13)",
        "author": "स्वामी विवेकानंद",
        "category": "अनुशासन"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (Réf #13)",
        "author": "Swami Vivekananda",
        "category": "Discipline"
      }
    }
  },
  {
    "id": "14",
    "quote": "Strength is life, weakness is death. (Quote reference #14)",
    "author": "Swami Vivekananda",
    "category": "Service",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Strength is life, weakness is death. (Quote reference #14)",
        "author": "Swami Vivekananda",
        "category": "Service"
      },
      "te": {
        "quote": "బలమే జీవితం, బలహీనతయే మరణం. (ఉల్లేఖన #14)",
        "author": "స్వామి వివేకానంద",
        "category": "సేవ"
      },
      "hi": {
        "quote": "शक्ति जीवन है, कमजोरी मृत्यु है। (संदर्भ #14)",
        "author": "स्वामी विवेकानंद",
        "category": "सेवा"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (Réf #14)",
        "author": "Swami Vivekananda",
        "category": "Service"
      }
    }
  },
  {
    "id": "15",
    "quote": "Strength is life, weakness is death. (Quote reference #15)",
    "author": "Swami Vivekananda",
    "category": "Confidence",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Strength is life, weakness is death. (Quote reference #15)",
        "author": "Swami Vivekananda",
        "category": "Confidence"
      },
      "te": {
        "quote": "బలమే జీవితం, బలహీనతయే మరణం. (ఉల్లేఖన #15)",
        "author": "స్వామి వివేకానంద",
        "category": "ఆత్మవిశ్వాసం"
      },
      "hi": {
        "quote": "शक्ति जीवन है, कमजोरी मृत्यु है। (संदर्भ #15)",
        "author": "स्वामी विवेकानंद",
        "category": "आत्मविश्वास"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (Réf #15)",
        "author": "Swami Vivekananda",
        "category": "Confiance"
      }
    }
  },
  {
    "id": "16",
    "quote": "Strength is life, weakness is death. (Quote reference #16)",
    "author": "Swami Vivekananda",
    "category": "Success",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Strength is life, weakness is death. (Quote reference #16)",
        "author": "Swami Vivekananda",
        "category": "Success"
      },
      "te": {
        "quote": "బలమే జీవితం, బలహీనతయే మరణం. (ఉల్లేఖన #16)",
        "author": "స్వామి వివేకానంద",
        "category": "విజయం"
      },
      "hi": {
        "quote": "शक्ति जीवन है, कमजोरी मृत्यु है। (संदर्भ #16)",
        "author": "स्वामी विवेकानंद",
        "category": "सफलता"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (Réf #16)",
        "author": "Swami Vivekananda",
        "category": "Succès"
      }
    }
  },
  {
    "id": "17",
    "quote": "Strength is life, weakness is death. (Quote reference #17)",
    "author": "Swami Vivekananda",
    "category": "Discipline",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Strength is life, weakness is death. (Quote reference #17)",
        "author": "Swami Vivekananda",
        "category": "Discipline"
      },
      "te": {
        "quote": "బలమే జీవితం, బలహీనతయే మరణం. (ఉల్లేఖన #17)",
        "author": "స్వామి వివేకానంద",
        "category": "క్రమశిక్షణ"
      },
      "hi": {
        "quote": "शक्ति जीवन है, कमजोरी मृत्यु है। (संदर्भ #17)",
        "author": "स्वामी विवेकानंद",
        "category": "अनुशासन"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (Réf #17)",
        "author": "Swami Vivekananda",
        "category": "Discipline"
      }
    }
  },
  {
    "id": "18",
    "quote": "Strength is life, weakness is death. (Quote reference #18)",
    "author": "Swami Vivekananda",
    "category": "Confidence",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Strength is life, weakness is death. (Quote reference #18)",
        "author": "Swami Vivekananda",
        "category": "Confidence"
      },
      "te": {
        "quote": "బలమే జీవితం, బలహీనతయే మరణం. (ఉల్లేఖన #18)",
        "author": "స్వామి వివేకానంద",
        "category": "ఆత్మవిశ్వాసం"
      },
      "hi": {
        "quote": "शक्ति जीवन है, कमजोरी मृत्यु है। (संदर्भ #18)",
        "author": "स्वामी विवेकानंद",
        "category": "आत्मविश्वास"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (Réf #18)",
        "author": "Swami Vivekananda",
        "category": "Confiance"
      }
    }
  },
  {
    "id": "19",
    "quote": "Strength is life, weakness is death. (Quote reference #19)",
    "author": "Swami Vivekananda",
    "category": "Discipline",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Strength is life, weakness is death. (Quote reference #19)",
        "author": "Swami Vivekananda",
        "category": "Discipline"
      },
      "te": {
        "quote": "బలమే జీవితం, బలహీనతయే మరణం. (ఉల్లేఖన #19)",
        "author": "స్వామి వివేకానంద",
        "category": "క్రమశిక్షణ"
      },
      "hi": {
        "quote": "शक्ति जीवन है, कमजोरी मृत्यु है। (संदर्भ #19)",
        "author": "स्वामी विवेकानंद",
        "category": "अनुशासन"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (Réf #19)",
        "author": "Swami Vivekananda",
        "category": "Discipline"
      }
    }
  },
  {
    "id": "20",
    "quote": "Strength is life, weakness is death. (Quote reference #20)",
    "author": "Swami Vivekananda",
    "category": "Education",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Strength is life, weakness is death. (Quote reference #20)",
        "author": "Swami Vivekananda",
        "category": "Education"
      },
      "te": {
        "quote": "బలమే జీవితం, బలహీనతయే మరణం. (ఉల్లేఖన #20)",
        "author": "స్వామి వివేకానంద",
        "category": "విద్య"
      },
      "hi": {
        "quote": "शक्ति जीवन है, कमजोरी मृत्यु है। (संदर्भ #20)",
        "author": "स्वामी विवेकानंद",
        "category": "शिक्षा"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (Réf #20)",
        "author": "Swami Vivekananda",
        "category": "Éducation"
      }
    }
  },
  {
    "id": "21",
    "quote": "Strength is life, weakness is death. (Quote reference #21)",
    "author": "Swami Vivekananda",
    "category": "Confidence",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Strength is life, weakness is death. (Quote reference #21)",
        "author": "Swami Vivekananda",
        "category": "Confidence"
      },
      "te": {
        "quote": "బలమే జీవితం, బలహీనతయే మరణం. (ఉల్లేఖన #21)",
        "author": "స్వామి వివేకానంద",
        "category": "ఆత్మవిశ్వాసం"
      },
      "hi": {
        "quote": "शक्ति जीवन है, कमजोरी मृत्यु है। (संदर्भ #21)",
        "author": "स्वामी विवेकानंद",
        "category": "आत्मविश्वास"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (Réf #21)",
        "author": "Swami Vivekananda",
        "category": "Confiance"
      }
    }
  },
  {
    "id": "22",
    "quote": "Strength is life, weakness is death. (Quote reference #22)",
    "author": "Swami Vivekananda",
    "category": "Success",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Strength is life, weakness is death. (Quote reference #22)",
        "author": "Swami Vivekananda",
        "category": "Success"
      },
      "te": {
        "quote": "బలమే జీవితం, బలహీనతయే మరణం. (ఉల్లేఖన #22)",
        "author": "స్వామి వివేకానంద",
        "category": "విజయం"
      },
      "hi": {
        "quote": "शक्ति जीवन है, कमजोरी मृत्यु है। (संदर्भ #22)",
        "author": "स्वामी विवेकानंद",
        "category": "सफलता"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (Réf #22)",
        "author": "Swami Vivekananda",
        "category": "Succès"
      }
    }
  },
  {
    "id": "23",
    "quote": "Strength is life, weakness is death. (Quote reference #23)",
    "author": "Swami Vivekananda",
    "category": "Discipline",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Strength is life, weakness is death. (Quote reference #23)",
        "author": "Swami Vivekananda",
        "category": "Discipline"
      },
      "te": {
        "quote": "బలమే జీవితం, బలహీనతయే మరణం. (ఉల్లేఖన #23)",
        "author": "స్వామి వివేకానంద",
        "category": "క్రమశిక్షణ"
      },
      "hi": {
        "quote": "शक्ति जीवन है, कमजोरी मृत्यु है। (संदर्भ #23)",
        "author": "स्वामी विवेकानंद",
        "category": "अनुशासन"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (Réf #23)",
        "author": "Swami Vivekananda",
        "category": "Discipline"
      }
    }
  },
  {
    "id": "24",
    "quote": "Strength is life, weakness is death. (Quote reference #24)",
    "author": "Swami Vivekananda",
    "category": "Confidence",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Strength is life, weakness is death. (Quote reference #24)",
        "author": "Swami Vivekananda",
        "category": "Confidence"
      },
      "te": {
        "quote": "బలమే జీవితం, బలహీనతయే మరణం. (ఉల్లేఖన #24)",
        "author": "స్వామి వివేకానంద",
        "category": "ఆత్మవిశ్వాసం"
      },
      "hi": {
        "quote": "शक्ति जीवन है, कमजोरी मृत्यु है। (संदर्भ #24)",
        "author": "स्वामी विवेकानंद",
        "category": "आत्मविश्वास"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (Réf #24)",
        "author": "Swami Vivekananda",
        "category": "Confiance"
      }
    }
  },
  {
    "id": "25",
    "quote": "Strength is life, weakness is death. (Quote reference #25)",
    "author": "Swami Vivekananda",
    "category": "Education",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Strength is life, weakness is death. (Quote reference #25)",
        "author": "Swami Vivekananda",
        "category": "Education"
      },
      "te": {
        "quote": "బలమే జీవితం, బలహీనతయే మరణం. (ఉల్లేఖన #25)",
        "author": "స్వామి వివేకానంద",
        "category": "విద్య"
      },
      "hi": {
        "quote": "शक्ति जीवन है, कमजोरी मृत्यु है। (संदर्भ #25)",
        "author": "स्वामी विवेकानंद",
        "category": "शिक्षा"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (Réf #25)",
        "author": "Swami Vivekananda",
        "category": "Éducation"
      }
    }
  },
  {
    "id": "26",
    "quote": "Strength is life, weakness is death. (Quote reference #26)",
    "author": "Swami Vivekananda",
    "category": "Success",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Strength is life, weakness is death. (Quote reference #26)",
        "author": "Swami Vivekananda",
        "category": "Success"
      },
      "te": {
        "quote": "బలమే జీవితం, బలహీనతయే మరణం. (ఉల్లేఖన #26)",
        "author": "స్వామి వివేకానంద",
        "category": "విజయం"
      },
      "hi": {
        "quote": "शक्ति जीवन है, कमजोरी मृत्यु है। (संदर्भ #26)",
        "author": "स्वामी विवेकानंद",
        "category": "सफलता"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (Réf #26)",
        "author": "Swami Vivekananda",
        "category": "Succès"
      }
    }
  },
  {
    "id": "27",
    "quote": "Strength is life, weakness is death. (Quote reference #27)",
    "author": "Swami Vivekananda",
    "category": "Confidence",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Strength is life, weakness is death. (Quote reference #27)",
        "author": "Swami Vivekananda",
        "category": "Confidence"
      },
      "te": {
        "quote": "బలమే జీవితం, బలహీనతయే మరణం. (ఉల్లేఖన #27)",
        "author": "స్వామి వివేకానంద",
        "category": "ఆత్మవిశ్వాసం"
      },
      "hi": {
        "quote": "शक्ति जीवन है, कमजोरी मृत्यु है। (संदर्भ #27)",
        "author": "स्वामी विवेकानंद",
        "category": "आत्मविश्वास"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (Réf #27)",
        "author": "Swami Vivekananda",
        "category": "Confiance"
      }
    }
  },
  {
    "id": "28",
    "quote": "Strength is life, weakness is death. (Quote reference #28)",
    "author": "Swami Vivekananda",
    "category": "Service",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Strength is life, weakness is death. (Quote reference #28)",
        "author": "Swami Vivekananda",
        "category": "Service"
      },
      "te": {
        "quote": "బలమే జీవితం, బలహీనతయే మరణం. (ఉల్లేఖన #28)",
        "author": "స్వామి వివేకానంద",
        "category": "సేవ"
      },
      "hi": {
        "quote": "शक्ति जीवन है, कमजोरी मृत्यु है। (संदर्भ #28)",
        "author": "स्वामी विवेकानंद",
        "category": "सेवा"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (Réf #28)",
        "author": "Swami Vivekananda",
        "category": "Service"
      }
    }
  },
  {
    "id": "29",
    "quote": "Strength is life, weakness is death. (Quote reference #29)",
    "author": "Swami Vivekananda",
    "category": "Discipline",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Strength is life, weakness is death. (Quote reference #29)",
        "author": "Swami Vivekananda",
        "category": "Discipline"
      },
      "te": {
        "quote": "బలమే జీవితం, బలహీనతయే మరణం. (ఉల్లేఖన #29)",
        "author": "స్వామి వివేకానంద",
        "category": "క్రమశిక్షణ"
      },
      "hi": {
        "quote": "शक्ति जीवन है, कमजोरी मृत्यु है। (संदर्भ #29)",
        "author": "स्वामी विवेकानंद",
        "category": "अनुशासन"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (Réf #29)",
        "author": "Swami Vivekananda",
        "category": "Discipline"
      }
    }
  },
  {
    "id": "30",
    "quote": "Strength is life, weakness is death. (Quote reference #30)",
    "author": "Swami Vivekananda",
    "category": "Confidence",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Strength is life, weakness is death. (Quote reference #30)",
        "author": "Swami Vivekananda",
        "category": "Confidence"
      },
      "te": {
        "quote": "బలమే జీవితం, బలహీనతయే మరణం. (ఉల్లేఖన #30)",
        "author": "స్వామి వివేకానంద",
        "category": "ఆత్మవిశ్వాసం"
      },
      "hi": {
        "quote": "शक्ति जीवन है, कमजोरी मृत्यु है। (संदर्भ #30)",
        "author": "स्वामी विवेकानंद",
        "category": "आत्मविश्वास"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (Réf #30)",
        "author": "Swami Vivekananda",
        "category": "Confiance"
      }
    }
  },
  {
    "id": "31",
    "quote": "Strength is life, weakness is death. (Quote reference #31)",
    "author": "Swami Vivekananda",
    "category": "Discipline",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Strength is life, weakness is death. (Quote reference #31)",
        "author": "Swami Vivekananda",
        "category": "Discipline"
      },
      "te": {
        "quote": "బలమే జీవితం, బలహీనతయే మరణం. (ఉల్లేఖన #31)",
        "author": "స్వామి వివేకానంద",
        "category": "క్రమశిక్షణ"
      },
      "hi": {
        "quote": "शक्ति जीवन है, कमजोरी मृत्यु है। (संदर्भ #31)",
        "author": "स्वामी विवेकानंद",
        "category": "अनुशासन"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (Réf #31)",
        "author": "Swami Vivekananda",
        "category": "Discipline"
      }
    }
  },
  {
    "id": "32",
    "quote": "Strength is life, weakness is death. (Quote reference #32)",
    "author": "Swami Vivekananda",
    "category": "Success",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Strength is life, weakness is death. (Quote reference #32)",
        "author": "Swami Vivekananda",
        "category": "Success"
      },
      "te": {
        "quote": "బలమే జీవితం, బలహీనతయే మరణం. (ఉల్లేఖన #32)",
        "author": "స్వామి వివేకానంద",
        "category": "విజయం"
      },
      "hi": {
        "quote": "शक्ति जीवन है, कमजोरी मृत्यु है। (संदर्भ #32)",
        "author": "स्वामी विवेकानंद",
        "category": "सफलता"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (Réf #32)",
        "author": "Swami Vivekananda",
        "category": "Succès"
      }
    }
  },
  {
    "id": "33",
    "quote": "Strength is life, weakness is death. (Quote reference #33)",
    "author": "Swami Vivekananda",
    "category": "Confidence",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Strength is life, weakness is death. (Quote reference #33)",
        "author": "Swami Vivekananda",
        "category": "Confidence"
      },
      "te": {
        "quote": "బలమే జీవితం, బలహీనతయే మరణం. (ఉల్లేఖన #33)",
        "author": "స్వామి వివేకానంద",
        "category": "ఆత్మవిశ్వాసం"
      },
      "hi": {
        "quote": "शक्ति जीवन है, कमजोरी मृत्यु है। (संदर्भ #33)",
        "author": "स्वामी विवेकानंद",
        "category": "आत्मविश्वास"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (Réf #33)",
        "author": "Swami Vivekananda",
        "category": "Confiance"
      }
    }
  },
  {
    "id": "34",
    "quote": "Strength is life, weakness is death. (Quote reference #34)",
    "author": "Swami Vivekananda",
    "category": "Success",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Strength is life, weakness is death. (Quote reference #34)",
        "author": "Swami Vivekananda",
        "category": "Success"
      },
      "te": {
        "quote": "బలమే జీవితం, బలహీనతయే మరణం. (ఉల్లేఖన #34)",
        "author": "స్వామి వివేకానంద",
        "category": "విజయం"
      },
      "hi": {
        "quote": "शक्ति जीवन है, कमजोरी मृत्यु है। (संदर्भ #34)",
        "author": "स्वामी विवेकानंद",
        "category": "सफलता"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (Réf #34)",
        "author": "Swami Vivekananda",
        "category": "Succès"
      }
    }
  },
  {
    "id": "35",
    "quote": "Strength is life, weakness is death. (Quote reference #35)",
    "author": "Swami Vivekananda",
    "category": "Education",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Strength is life, weakness is death. (Quote reference #35)",
        "author": "Swami Vivekananda",
        "category": "Education"
      },
      "te": {
        "quote": "బలమే జీవితం, బలహీనతయే మరణం. (ఉల్లేఖన #35)",
        "author": "స్వామి వివేకానంద",
        "category": "విద్య"
      },
      "hi": {
        "quote": "शक्ति जीवन है, कमजोरी मृत्यु है। (संदर्भ #35)",
        "author": "स्वामी विवेकानंद",
        "category": "शिक्षा"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (Réf #35)",
        "author": "Swami Vivekananda",
        "category": "Éducation"
      }
    }
  },
  {
    "id": "36",
    "quote": "Strength is life, weakness is death. (Quote reference #36)",
    "author": "Swami Vivekananda",
    "category": "Confidence",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Strength is life, weakness is death. (Quote reference #36)",
        "author": "Swami Vivekananda",
        "category": "Confidence"
      },
      "te": {
        "quote": "బలమే జీవితం, బలహీనతయే మరణం. (ఉల్లేఖన #36)",
        "author": "స్వామి వివేకానంద",
        "category": "ఆత్మవిశ్వాసం"
      },
      "hi": {
        "quote": "शक्ति जीवन है, कमजोरी मृत्यु है। (संदर्भ #36)",
        "author": "स्वामी विवेकानंद",
        "category": "आत्मविश्वास"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (Réf #36)",
        "author": "Swami Vivekananda",
        "category": "Confiance"
      }
    }
  },
  {
    "id": "37",
    "quote": "Strength is life, weakness is death. (Quote reference #37)",
    "author": "Swami Vivekananda",
    "category": "Discipline",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Strength is life, weakness is death. (Quote reference #37)",
        "author": "Swami Vivekananda",
        "category": "Discipline"
      },
      "te": {
        "quote": "బలమే జీవితం, బలహీనతయే మరణం. (ఉల్లేఖన #37)",
        "author": "స్వామి వివేకానంద",
        "category": "క్రమశిక్షణ"
      },
      "hi": {
        "quote": "शक्ति जीवन है, कमजोरी मृत्यु है। (संदर्भ #37)",
        "author": "स्वामी विवेकानंद",
        "category": "अनुशासन"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (Réf #37)",
        "author": "Swami Vivekananda",
        "category": "Discipline"
      }
    }
  },
  {
    "id": "38",
    "quote": "Strength is life, weakness is death. (Quote reference #38)",
    "author": "Swami Vivekananda",
    "category": "Success",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Strength is life, weakness is death. (Quote reference #38)",
        "author": "Swami Vivekananda",
        "category": "Success"
      },
      "te": {
        "quote": "బలమే జీవితం, బలహీనతయే మరణం. (ఉల్లేఖన #38)",
        "author": "స్వామి వివేకానంద",
        "category": "విజయం"
      },
      "hi": {
        "quote": "शक्ति जीवन है, कमजोरी मृत्यु है। (संदर्भ #38)",
        "author": "स्वामी विवेकानंद",
        "category": "सफलता"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (Réf #38)",
        "author": "Swami Vivekananda",
        "category": "Succès"
      }
    }
  },
  {
    "id": "39",
    "quote": "Strength is life, weakness is death. (Quote reference #39)",
    "author": "Swami Vivekananda",
    "category": "Confidence",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Strength is life, weakness is death. (Quote reference #39)",
        "author": "Swami Vivekananda",
        "category": "Confidence"
      },
      "te": {
        "quote": "బలమే జీవితం, బలహీనతయే మరణం. (ఉల్లేఖన #39)",
        "author": "స్వామి వివేకానంద",
        "category": "ఆత్మవిశ్వాసం"
      },
      "hi": {
        "quote": "शक्ति जीवन है, कमजोरी मृत्यु है। (संदर्भ #39)",
        "author": "स्वामी विवेकानंद",
        "category": "आत्मविश्वास"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (Réf #39)",
        "author": "Swami Vivekananda",
        "category": "Confiance"
      }
    }
  },
  {
    "id": "40",
    "quote": "Strength is life, weakness is death. (Quote reference #40)",
    "author": "Swami Vivekananda",
    "category": "Education",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Strength is life, weakness is death. (Quote reference #40)",
        "author": "Swami Vivekananda",
        "category": "Education"
      },
      "te": {
        "quote": "బలమే జీవితం, బలహీనతయే మరణం. (ఉల్లేఖన #40)",
        "author": "స్వామి వివేకానంద",
        "category": "విద్య"
      },
      "hi": {
        "quote": "शक्ति जीवन है, कमजोरी मृत्यु है। (संदर्भ #40)",
        "author": "स्वामी विवेकानंद",
        "category": "शिक्षा"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (Réf #40)",
        "author": "Swami Vivekananda",
        "category": "Éducation"
      }
    }
  },
  {
    "id": "41",
    "quote": "Strength is life, weakness is death. (Quote reference #41)",
    "author": "Swami Vivekananda",
    "category": "Discipline",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Strength is life, weakness is death. (Quote reference #41)",
        "author": "Swami Vivekananda",
        "category": "Discipline"
      },
      "te": {
        "quote": "బలమే జీవితం, బలహీనతయే మరణం. (ఉల్లేఖన #41)",
        "author": "స్వామి వివేకానంద",
        "category": "క్రమశిక్షణ"
      },
      "hi": {
        "quote": "शक्ति जीवन है, कमजोरी मृत्यु है। (संदर्भ #41)",
        "author": "स्वामी विवेकानंद",
        "category": "अनुशासन"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (Réf #41)",
        "author": "Swami Vivekananda",
        "category": "Discipline"
      }
    }
  },
  {
    "id": "42",
    "quote": "Strength is life, weakness is death. (Quote reference #42)",
    "author": "Swami Vivekananda",
    "category": "Confidence",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Strength is life, weakness is death. (Quote reference #42)",
        "author": "Swami Vivekananda",
        "category": "Confidence"
      },
      "te": {
        "quote": "బలమే జీవితం, బలహీనతయే మరణం. (ఉల్లేఖన #42)",
        "author": "స్వామి వివేకానంద",
        "category": "ఆత్మవిశ్వాసం"
      },
      "hi": {
        "quote": "शक्ति जीवन है, कमजोरी मृत्यु है। (संदर्भ #42)",
        "author": "स्वामी विवेकानंद",
        "category": "आत्मविश्वास"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (Réf #42)",
        "author": "Swami Vivekananda",
        "category": "Confiance"
      }
    }
  },
  {
    "id": "43",
    "quote": "Strength is life, weakness is death. (Quote reference #43)",
    "author": "Swami Vivekananda",
    "category": "Discipline",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Strength is life, weakness is death. (Quote reference #43)",
        "author": "Swami Vivekananda",
        "category": "Discipline"
      },
      "te": {
        "quote": "బలమే జీవితం, బలహీనతయే మరణం. (ఉల్లేఖన #43)",
        "author": "స్వామి వివేకానంద",
        "category": "క్రమశిక్షణ"
      },
      "hi": {
        "quote": "शक्ति जीवन है, कमजोरी मृत्यु है। (संदर्भ #43)",
        "author": "स्वामी विवेकानंद",
        "category": "अनुशासन"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (Réf #43)",
        "author": "Swami Vivekananda",
        "category": "Discipline"
      }
    }
  },
  {
    "id": "44",
    "quote": "Strength is life, weakness is death. (Quote reference #44)",
    "author": "Swami Vivekananda",
    "category": "Success",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Strength is life, weakness is death. (Quote reference #44)",
        "author": "Swami Vivekananda",
        "category": "Success"
      },
      "te": {
        "quote": "బలమే జీవితం, బలహీనతయే మరణం. (ఉల్లేఖన #44)",
        "author": "స్వామి వివేకానంద",
        "category": "విజయం"
      },
      "hi": {
        "quote": "शक्ति जीवन है, कमजोरी मृत्यु है। (संदर्भ #44)",
        "author": "स्वामी विवेकानंद",
        "category": "सफलता"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (Réf #44)",
        "author": "Swami Vivekananda",
        "category": "Succès"
      }
    }
  },
  {
    "id": "45",
    "quote": "Strength is life, weakness is death. (Quote reference #45)",
    "author": "Swami Vivekananda",
    "category": "Confidence",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Strength is life, weakness is death. (Quote reference #45)",
        "author": "Swami Vivekananda",
        "category": "Confidence"
      },
      "te": {
        "quote": "బలమే జీవితం, బలహీనతయే మరణం. (ఉల్లేఖన #45)",
        "author": "స్వామి వివేకానంద",
        "category": "ఆత్మవిశ్వాసం"
      },
      "hi": {
        "quote": "शक्ति जीवन है, कमजोरी मृत्यु है। (संदर्भ #45)",
        "author": "स्वामी विवेकानंद",
        "category": "आत्मविश्वास"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (Réf #45)",
        "author": "Swami Vivekananda",
        "category": "Confiance"
      }
    }
  },
  {
    "id": "46",
    "quote": "Strength is life, weakness is death. (Quote reference #46)",
    "author": "Swami Vivekananda",
    "category": "Success",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Strength is life, weakness is death. (Quote reference #46)",
        "author": "Swami Vivekananda",
        "category": "Success"
      },
      "te": {
        "quote": "బలమే జీవితం, బలహీనతయే మరణం. (ఉల్లేఖన #46)",
        "author": "స్వామి వివేకానంద",
        "category": "విజయం"
      },
      "hi": {
        "quote": "शक्ति जीवन है, कमजोरी मृत्यु है। (संदर्भ #46)",
        "author": "स्वामी विवेकानंद",
        "category": "सफलता"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (Réf #46)",
        "author": "Swami Vivekananda",
        "category": "Succès"
      }
    }
  },
  {
    "id": "47",
    "quote": "Strength is life, weakness is death. (Quote reference #47)",
    "author": "Swami Vivekananda",
    "category": "Discipline",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Strength is life, weakness is death. (Quote reference #47)",
        "author": "Swami Vivekananda",
        "category": "Discipline"
      },
      "te": {
        "quote": "బలమే జీవితం, బలహీనతయే మరణం. (ఉల్లేఖన #47)",
        "author": "స్వామి వివేకానంద",
        "category": "క్రమశిక్షణ"
      },
      "hi": {
        "quote": "शक्ति जीवन है, कमजोरी मृत्यु है। (संदर्भ #47)",
        "author": "स्वामी विवेकानंद",
        "category": "अनुशासन"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (Réf #47)",
        "author": "Swami Vivekananda",
        "category": "Discipline"
      }
    }
  },
  {
    "id": "48",
    "quote": "Strength is life, weakness is death. (Quote reference #48)",
    "author": "Swami Vivekananda",
    "category": "Confidence",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Strength is life, weakness is death. (Quote reference #48)",
        "author": "Swami Vivekananda",
        "category": "Confidence"
      },
      "te": {
        "quote": "బలమే జీవితం, బలహీనతయే మరణం. (ఉల్లేఖన #48)",
        "author": "స్వామి వివేకానంద",
        "category": "ఆత్మవిశ్వాసం"
      },
      "hi": {
        "quote": "शक्ति जीवन है, कमजोरी मृत्यु है। (संदर्भ #48)",
        "author": "स्वामी विवेकानंद",
        "category": "आत्मविश्वास"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (Réf #48)",
        "author": "Swami Vivekananda",
        "category": "Confiance"
      }
    }
  },
  {
    "id": "49",
    "quote": "Strength is life, weakness is death. (Quote reference #49)",
    "author": "Swami Vivekananda",
    "category": "Service",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Strength is life, weakness is death. (Quote reference #49)",
        "author": "Swami Vivekananda",
        "category": "Service"
      },
      "te": {
        "quote": "బలమే జీవితం, బలహీనతయే మరణం. (ఉల్లేఖన #49)",
        "author": "స్వామి వివేకానంద",
        "category": "సేవ"
      },
      "hi": {
        "quote": "शक्ति जीवन है, कमजोरी मृत्यु है। (संदर्भ #49)",
        "author": "स्वामी विवेकानंद",
        "category": "सेवा"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (Réf #49)",
        "author": "Swami Vivekananda",
        "category": "Service"
      }
    }
  },
  {
    "id": "50",
    "quote": "Strength is life, weakness is death. (Quote reference #50)",
    "author": "Swami Vivekananda",
    "category": "Education",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Strength is life, weakness is death. (Quote reference #50)",
        "author": "Swami Vivekananda",
        "category": "Education"
      },
      "te": {
        "quote": "బలమే జీవితం, బలహీనతయే మరణం. (ఉల్లేఖన #50)",
        "author": "స్వామి వివేకానంద",
        "category": "విద్య"
      },
      "hi": {
        "quote": "शक्ति जीवन है, कमजोरी मृत्यु है। (संदर्भ #50)",
        "author": "स्वामी विवेकानंद",
        "category": "शिक्षा"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (Réf #50)",
        "author": "Swami Vivekananda",
        "category": "Éducation"
      }
    }
  },
  {
    "id": "51",
    "quote": "Dreams is not that which you see while sleeping, it is something that does not let you sleep.",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Dreams",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Dreams is not that which you see while sleeping, it is something that does not let you sleep.",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Dreams"
      },
      "te": {
        "quote": "కలలు అంటే మీరు నిద్రపోయేటప్పుడు చూసేవి కావు, మిమ్మల్ని నిద్రపోనివ్వనివే కలలు.",
        "author": "డా. ఎ. పి. జె. అబ్దుల్ కలాం",
        "category": "కలలు"
      },
      "hi": {
        "quote": "सपने वो नहीं जो हम सोते हुए देखते हैं, सपने वो हैं जो हमें सोने नहीं देते।",
        "author": "डॉ. ए. पी. जे. अब्दुल कलाम",
        "category": "सपने"
      },
      "fr": {
        "quote": "Le rêve n'est pas ce que vous voyez en dormant, c'est ce qui vous empêche de dormir.",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Rêves"
      }
    }
  },
  {
    "id": "52",
    "quote": "To succeed in your mission, you must have single-minded devotion to your goal.",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Focus",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "To succeed in your mission, you must have single-minded devotion to your goal.",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Focus"
      },
      "te": {
        "quote": "మీ లక్ష్యంలో విజయం సాధించాలంటే, మీ ధ్యాస అంతా లక్ష్యం మీదే ఉండాలి.",
        "author": "డా. ఎ. పి. జె. అబ్దుల్ కలాం",
        "category": "ఏకాగ్రత"
      },
      "hi": {
        "quote": "अपने मिशन में सफल होने के लिए, आपके पास अपने लक्ष्य के प्रति एकनिष्ठ भक्ति होनी चाहिए।",
        "author": "डॉ. ए. पी. जे. अब्दुल कलाम",
        "category": "एकाग्रता"
      },
      "fr": {
        "quote": "Pour réussir votre mission, vous devez avoir un dévouement exclusif à votre objectif.",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Focus"
      }
    }
  },
  {
    "id": "53",
    "quote": "If you want to shine like a sun, first burn like a sun.",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Hard Work",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "If you want to shine like a sun, first burn like a sun.",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Hard Work"
      },
      "te": {
        "quote": "నువ్వు సూర్యుడిలా ప్రకాశించాలంటే, మొదట సూర్యుడిలా మండాలి.",
        "author": "డా. ఎ. పి. జె. అబ్దుల్ కలాం",
        "category": "కష్టపడటం"
      },
      "hi": {
        "quote": "अगर तुम सूरज की तरह चमकना चाहते हो, तो पहले सूरज की तरह जलना सीखो।",
        "author": "डॉ. ए. पी. जे. अब्दुल कलाम",
        "category": "कड़ी मेहनत"
      },
      "fr": {
        "quote": "Si vous voulez briller comme un soleil, commencez par brûler comme un soleil.",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Travail Acharné"
      }
    }
  },
  {
    "id": "54",
    "quote": "All of us do not have equal talent. But , all of us have an equal opportunity to develop our talents.",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Education",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "All of us do not have equal talent. But , all of us have an equal opportunity to develop our talents.",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Education"
      },
      "te": {
        "quote": "మనందరికీ సమాన ప్రతిభ ఉండకపోవచ్చు. కానీ, మన ప్రతిభను పెంపొందించుకోవడానికి మనందరికీ సమాన అవకాశం ఉంది.",
        "author": "డా. ఎ. పి. జె. అబ్దుల్ కలాం",
        "category": "విద్య"
      },
      "hi": {
        "quote": "हम सभी के पास समान प्रतिभा नहीं होती है। लेकिन, हम सभी के पास अपनी प्रतिभा को विकसित करने का समान अवसर होता है।",
        "author": "डॉ. ए. पी. जे. अब्दुल कलाम",
        "category": "शिक्षा"
      },
      "fr": {
        "quote": "Nous n'avons pas tous le même talent. Mais nous avons tous une opportunité égale de développer nos talents.",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Éducation"
      }
    }
  },
  {
    "id": "55",
    "quote": "Don't take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck.",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Success",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Don't take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck.",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Success"
      },
      "te": {
        "quote": "మొదటి విజయం తర్వాత విశ్రమించకండి, ఎందుకంటే రెండోసారి విఫలమైతే మొదటి విజయం అదృష్టమేనని చెప్పడానికి చాలా మంది ఎదురుచూస్తుంటారు.",
        "author": "డా. ఎ. పి. జె. అబ్దుల్ కలాం",
        "category": "విజయం"
      },
      "hi": {
        "quote": "अपनी पहली जीत के बाद आराम मत करो क्योंकि अगर तुम दूसरी बार में असफल हो गए, तो कई लोग यह कहने के लिए इंतजार कर रहे हैं कि तुम्हारी पहली जीत सिर्फ किस्मत थी।",
        "author": "डॉ. ए. पी. जे. अब्दुल कलाम",
        "category": "सफलता"
      },
      "fr": {
        "quote": "Ne vous reposez pas après votre première victoire, car si vous échouez à la seconde, de nombreuses lèvres attendent de dire que votre première victoire n'était que de la chance.",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Succès"
      }
    }
  },
  {
    "id": "56",
    "quote": "Failure will never overtake me if my determination to succeed is strong enough.",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Confidence",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Failure will never overtake me if my determination to succeed is strong enough.",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Confidence"
      },
      "te": {
        "quote": "విజయం సాధించాలనే నా సంకల్పం బలంగా ఉంటే వైఫల్యం నన్ను ఎప్పటికీ ఓడించలేదు.",
        "author": "డా. ఎ. పి. జె. అబ్దుల్ కలాం",
        "category": "ఆత్మవిశ్వాసం"
      },
      "hi": {
        "quote": "अगर सफल होने का मेरा संकल्प काफी मजबूत है, तो असफलता मुझे कभी पछाड़ नहीं पाएगी।",
        "author": "डॉ. ए. पी. जे. अब्दुल कलाम",
        "category": "आत्मविश्वास"
      },
      "fr": {
        "quote": "L'échec ne me rattrapera jamais si ma détermination à réussir est assez forte.",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Confiance"
      }
    }
  },
  {
    "id": "57",
    "quote": "Confidence and Hard-work is the best medicine to kill the disease called failure. it will make you successful person.",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Hard Work",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Confidence and Hard-work is the best medicine to kill the disease called failure. it will make you successful person.",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Hard Work"
      },
      "te": {
        "quote": "వైఫల్యం అనే వ్యాధిని చంపడానికి ఆత్మవిశ్వాసం, శ్రమ అనేవి ఉత్తమమైన మందులు. ఇది మిమ్మల్ని విజయవంతమైన వ్యక్తిగా చేస్తుంది.",
        "author": "డా. ఎ. పి. జె. అబ్దుల్ కలాం",
        "category": "కష్టపడటం"
      },
      "hi": {
        "quote": "आत्मविश्वास और कड़ी मेहनत विफलता नामक बीमारी को मारने की सबसे अच्छी दवा है। यह आपको एक सफल इंसान बनाएगी।",
        "author": "डॉ. ए. पी. जे. अब्दुल कलाम",
        "category": "कड़ी मेहनत"
      },
      "fr": {
        "quote": "La confiance et le travail acharné sont le meilleur remède pour tuer la maladie appelée échec. Cela fera de vous une personne prospère.",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Travail Acharné"
      }
    }
  },
  {
    "id": "58",
    "quote": "Great dreams of great dreamers are always transcended.",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Dreams",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Great dreams of great dreamers are always transcended.",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Dreams"
      },
      "te": {
        "quote": "గొప్ప కలలు కనేవారి గొప్ప కలలు ఎల్లప్పుడూ నిజమవుతాయి.",
        "author": "డా. ఎ. పి. జె. అబ్దుల్ కలాం",
        "category": "కలలు"
      },
      "hi": {
        "quote": "महान सपने देखने वालों के महान सपने हमेशा पूरे होते हैं।",
        "author": "डॉ. ए. पी. जे. अब्दुल कलाम",
        "category": "सपने"
      },
      "fr": {
        "quote": "Les grands rêves des grands rêveurs sont toujours transcendés.",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Rêves"
      }
    }
  },
  {
    "id": "59",
    "quote": "Learning gives creativity, creativity leads to thinking, thinking provides knowledge, knowledge makes you great.",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Learning",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Learning gives creativity, creativity leads to thinking, thinking provides knowledge, knowledge makes you great.",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Learning"
      },
      "te": {
        "quote": "నేర్చుకోవడం సృజనాత్మకతను ఇస్తుంది, సృజనాత్మకత ఆలోచనకు దారి తీస్తుంది, ఆలోచన జ్ఞానాన్ని ఇస్తుంది, జ్ఞానం నిన్ను గొప్పవాడిని చేస్తుంది.",
        "author": "డా. ఎ. పి. జె. అబ్దుల్ కలాం",
        "category": "నేర్చుకోవడం"
      },
      "hi": {
        "quote": "सीखने से रचनात्मकता आती है, रचनात्मकता सोच की ओर ले जाती है, सोच ज्ञान प्रदान करती है, ज्ञान आपको महान बनाता है।",
        "author": "डॉ. ए. पी. जे. अब्दुल कलाम",
        "category": "सीखना"
      },
      "fr": {
        "quote": "L'apprentissage donne la créativité, la créativité mène à la pensée, la pensée apporte la connaissance, la connaissance vous rend grand.",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Apprentissage"
      }
    }
  },
  {
    "id": "60",
    "quote": "If a country is to be corruption free and become a nation of beautiful minds, I strongly feel there are three key societal members who can make a difference. They are the father, the mother and the teacher.",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Education",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "If a country is to be corruption free and become a nation of beautiful minds, I strongly feel there are three key societal members who can make a difference. They are the father, the mother and the teacher.",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Education"
      },
      "te": {
        "quote": "ఒక దేశం అవినీతి రహితంగా మారి, అందమైన మనసులు గల దేశంగా ఎదగాలంటే, సమాజంలో ముగ్గురు కీలక పాత్ర పోషిస్తారని నేను నమ్ముతున్నాను. వారు తండ్రి, తల్లి మరియు గురువు.",
        "author": "డా. ఎ. పి. జె. అబ్దుల్ కలాం",
        "category": "విద్య"
      },
      "hi": {
        "quote": "यदि किसी देश को भ्रष्टाचार मुक्त होना है और सुंदर दिमागों का देश बनना है, तो मुझे दृढ़ता से लगता है कि तीन प्रमुख सामाजिक सदस्य हैं जो बदलाव ला सकते हैं। वे हैं पिता, माता और शिक्षक।",
        "author": "डॉ. ए. पी. जे. अब्दुल कलाम",
        "category": "शिक्षा"
      },
      "fr": {
        "quote": "Si un pays doit être exempt de corruption et devenir une nation de beaux esprits, je pense fermement qu'il y a trois membres clés de la société qui peuvent faire la différence. Ce sont le père, la mère et l'enseignant.",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Éducation"
      }
    }
  },
  {
    "id": "61",
    "quote": "You have to dream before your dreams can come true. (Quote reference #11)",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Focus",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "You have to dream before your dreams can come true. (Quote reference #11)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Focus"
      },
      "te": {
        "quote": "మీ కలలు నిజం కావడానికి ముందే మీరు కలలు కనాలి. (ఉల్లేఖన #11)",
        "author": "డా. ఎ. పి. జె. అబ్దుల్ కలాం",
        "category": "ఏకాగ్రత"
      },
      "hi": {
        "quote": "सपने सच होने से पहले आपको सपने देखने होंगे। (संदर्भ #11)",
        "author": "डॉ. ए. पी. जे. अब्दुल कलाम",
        "category": "एकाग्रता"
      },
      "fr": {
        "quote": "Vous devez rêver avant que vos rêves ne se réalisent. (Réf #11)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Focus"
      }
    }
  },
  {
    "id": "62",
    "quote": "You have to dream before your dreams can come true. (Quote reference #12)",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Success",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "You have to dream before your dreams can come true. (Quote reference #12)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Success"
      },
      "te": {
        "quote": "మీ కలలు నిజం కావడానికి ముందే మీరు కలలు కనాలి. (ఉల్లేఖన #12)",
        "author": "డా. ఎ. పి. జె. అబ్దుల్ కలాం",
        "category": "విజయం"
      },
      "hi": {
        "quote": "सपने सच होने से पहले आपको सपने देखने होंगे। (संदर्भ #12)",
        "author": "डॉ. ए. पी. जे. अब्दुल कलाम",
        "category": "सफलता"
      },
      "fr": {
        "quote": "Vous devez rêver avant que vos rêves ne se réalisent. (Réf #12)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Succès"
      }
    }
  },
  {
    "id": "63",
    "quote": "You have to dream before your dreams can come true. (Quote reference #13)",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Focus",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "You have to dream before your dreams can come true. (Quote reference #13)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Focus"
      },
      "te": {
        "quote": "మీ కలలు నిజం కావడానికి ముందే మీరు కలలు కనాలి. (ఉల్లేఖన #13)",
        "author": "డా. ఎ. పి. జె. అబ్దుల్ కలాం",
        "category": "ఏకాగ్రత"
      },
      "hi": {
        "quote": "सपने सच होने से पहले आपको सपने देखने होंगे। (संदर्भ #13)",
        "author": "डॉ. ए. पी. जे. अब्दुल कलाम",
        "category": "एकाग्रता"
      },
      "fr": {
        "quote": "Vous devez rêver avant que vos rêves ne se réalisent. (Réf #13)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Focus"
      }
    }
  },
  {
    "id": "64",
    "quote": "You have to dream before your dreams can come true. (Quote reference #14)",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Education",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "You have to dream before your dreams can come true. (Quote reference #14)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Education"
      },
      "te": {
        "quote": "మీ కలలు నిజం కావడానికి ముందే మీరు కలలు కనాలి. (ఉల్లేఖన #14)",
        "author": "డా. ఎ. పి. జె. అబ్దుల్ కలాం",
        "category": "విద్య"
      },
      "hi": {
        "quote": "सपने सच होने से पहले आपको सपने देखने होंगे। (संदर्भ #14)",
        "author": "डॉ. ए. पी. जे. अब्दुल कलाम",
        "category": "शिक्षा"
      },
      "fr": {
        "quote": "Vous devez rêver avant que vos rêves ne se réalisent. (Réf #14)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Éducation"
      }
    }
  },
  {
    "id": "65",
    "quote": "You have to dream before your dreams can come true. (Quote reference #15)",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Success",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "You have to dream before your dreams can come true. (Quote reference #15)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Success"
      },
      "te": {
        "quote": "మీ కలలు నిజం కావడానికి ముందే మీరు కలలు కనాలి. (ఉల్లేఖన #15)",
        "author": "డా. ఎ. పి. జె. అబ్దుల్ కలాం",
        "category": "విజయం"
      },
      "hi": {
        "quote": "सपने सच होने से पहले आपको सपने देखने होंगे। (संदर्भ #15)",
        "author": "डॉ. ए. पी. जे. अब्दुल कलाम",
        "category": "सफलता"
      },
      "fr": {
        "quote": "Vous devez rêver avant que vos rêves ne se réalisent. (Réf #15)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Succès"
      }
    }
  },
  {
    "id": "66",
    "quote": "You have to dream before your dreams can come true. (Quote reference #16)",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Dreams",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "You have to dream before your dreams can come true. (Quote reference #16)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Dreams"
      },
      "te": {
        "quote": "మీ కలలు నిజం కావడానికి ముందే మీరు కలలు కనాలి. (ఉల్లేఖన #16)",
        "author": "డా. ఎ. పి. జె. అబ్దుల్ కలాం",
        "category": "కలలు"
      },
      "hi": {
        "quote": "सपने सच होने से पहले आपको सपने देखने होंगे। (संदर्भ #16)",
        "author": "डॉ. ए. पी. जे. अब्दुल कलाम",
        "category": "सपने"
      },
      "fr": {
        "quote": "Vous devez rêver avant que vos rêves ne se réalisent. (Réf #16)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Rêves"
      }
    }
  },
  {
    "id": "67",
    "quote": "You have to dream before your dreams can come true. (Quote reference #17)",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Focus",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "You have to dream before your dreams can come true. (Quote reference #17)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Focus"
      },
      "te": {
        "quote": "మీ కలలు నిజం కావడానికి ముందే మీరు కలలు కనాలి. (ఉల్లేఖన #17)",
        "author": "డా. ఎ. పి. జె. అబ్దుల్ కలాం",
        "category": "ఏకాగ్రత"
      },
      "hi": {
        "quote": "सपने सच होने से पहले आपको सपने देखने होंगे। (संदर्भ #17)",
        "author": "डॉ. ए. पी. जे. अब्दुल कलाम",
        "category": "एकाग्रता"
      },
      "fr": {
        "quote": "Vous devez rêver avant que vos rêves ne se réalisent. (Réf #17)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Focus"
      }
    }
  },
  {
    "id": "68",
    "quote": "You have to dream before your dreams can come true. (Quote reference #18)",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Success",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "You have to dream before your dreams can come true. (Quote reference #18)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Success"
      },
      "te": {
        "quote": "మీ కలలు నిజం కావడానికి ముందే మీరు కలలు కనాలి. (ఉల్లేఖన #18)",
        "author": "డా. ఎ. పి. జె. అబ్దుల్ కలాం",
        "category": "విజయం"
      },
      "hi": {
        "quote": "सपने सच होने से पहले आपको सपने देखने होंगे। (संदर्भ #18)",
        "author": "डॉ. ए. पी. जे. अब्दुल कलाम",
        "category": "सफलता"
      },
      "fr": {
        "quote": "Vous devez rêver avant que vos rêves ne se réalisent. (Réf #18)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Succès"
      }
    }
  },
  {
    "id": "69",
    "quote": "You have to dream before your dreams can come true. (Quote reference #19)",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Focus",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "You have to dream before your dreams can come true. (Quote reference #19)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Focus"
      },
      "te": {
        "quote": "మీ కలలు నిజం కావడానికి ముందే మీరు కలలు కనాలి. (ఉల్లేఖన #19)",
        "author": "డా. ఎ. పి. జె. అబ్దుల్ కలాం",
        "category": "ఏకాగ్రత"
      },
      "hi": {
        "quote": "सपने सच होने से पहले आपको सपने देखने होंगे। (संदर्भ #19)",
        "author": "डॉ. ए. पी. जे. अब्दुल कलाम",
        "category": "एकाग्रता"
      },
      "fr": {
        "quote": "Vous devez rêver avant que vos rêves ne se réalisent. (Réf #19)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Focus"
      }
    }
  },
  {
    "id": "70",
    "quote": "You have to dream before your dreams can come true. (Quote reference #20)",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Hard Work",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "You have to dream before your dreams can come true. (Quote reference #20)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Hard Work"
      },
      "te": {
        "quote": "మీ కలలు నిజం కావడానికి ముందే మీరు కలలు కనాలి. (ఉల్లేఖన #20)",
        "author": "డా. ఎ. పి. జె. అబ్దుల్ కలాం",
        "category": "కష్టపడటం"
      },
      "hi": {
        "quote": "सपने सच होने से पहले आपको सपने देखने होंगे। (संदर्भ #20)",
        "author": "डॉ. ए. पी. जे. अब्दुल कलाम",
        "category": "कड़ी मेहनत"
      },
      "fr": {
        "quote": "Vous devez rêver avant que vos rêves ne se réalisent. (Réf #20)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Travail Acharné"
      }
    }
  },
  {
    "id": "71",
    "quote": "You have to dream before your dreams can come true. (Quote reference #21)",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Success",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "You have to dream before your dreams can come true. (Quote reference #21)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Success"
      },
      "te": {
        "quote": "మీ కలలు నిజం కావడానికి ముందే మీరు కలలు కనాలి. (ఉల్లేఖన #21)",
        "author": "డా. ఎ. పి. జె. అబ్దుల్ కలాం",
        "category": "విజయం"
      },
      "hi": {
        "quote": "सपने सच होने से पहले आपको सपने देखने होंगे। (संदर्भ #21)",
        "author": "डॉ. ए. पी. जे. अब्दुल कलाम",
        "category": "सफलता"
      },
      "fr": {
        "quote": "Vous devez rêver avant que vos rêves ne se réalisent. (Réf #21)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Succès"
      }
    }
  },
  {
    "id": "72",
    "quote": "You have to dream before your dreams can come true. (Quote reference #22)",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Dreams",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "You have to dream before your dreams can come true. (Quote reference #22)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Dreams"
      },
      "te": {
        "quote": "మీ కలలు నిజం కావడానికి ముందే మీరు కలలు కనాలి. (ఉల్లేఖన #22)",
        "author": "డా. ఎ. పి. జె. అబ్దుల్ కలాం",
        "category": "కలలు"
      },
      "hi": {
        "quote": "सपने सच होने से पहले आपको सपने देखने होंगे। (संदर्भ #22)",
        "author": "डॉ. ए. पी. जे. अब्दुल कलाम",
        "category": "सपने"
      },
      "fr": {
        "quote": "Vous devez rêver avant que vos rêves ne se réalisent. (Réf #22)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Rêves"
      }
    }
  },
  {
    "id": "73",
    "quote": "You have to dream before your dreams can come true. (Quote reference #23)",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Focus",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "You have to dream before your dreams can come true. (Quote reference #23)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Focus"
      },
      "te": {
        "quote": "మీ కలలు నిజం కావడానికి ముందే మీరు కలలు కనాలి. (ఉల్లేఖన #23)",
        "author": "డా. ఎ. పి. జె. అబ్దుల్ కలాం",
        "category": "ఏకాగ్రత"
      },
      "hi": {
        "quote": "सपने सच होने से पहले आपको सपने देखने होंगे। (संदर्भ #23)",
        "author": "डॉ. ए. पी. जे. अब्दुल कलाम",
        "category": "एकाग्रता"
      },
      "fr": {
        "quote": "Vous devez rêver avant que vos rêves ne se réalisent. (Réf #23)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Focus"
      }
    }
  },
  {
    "id": "74",
    "quote": "You have to dream before your dreams can come true. (Quote reference #24)",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Success",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "You have to dream before your dreams can come true. (Quote reference #24)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Success"
      },
      "te": {
        "quote": "మీ కలలు నిజం కావడానికి ముందే మీరు కలలు కనాలి. (ఉల్లేఖన #24)",
        "author": "డా. ఎ. పి. జె. అబ్దుల్ కలాం",
        "category": "విజయం"
      },
      "hi": {
        "quote": "सपने सच होने से पहले आपको सपने देखने होंगे। (संदर्भ #24)",
        "author": "डॉ. ए. पी. जे. अब्दुल कलाम",
        "category": "सफलता"
      },
      "fr": {
        "quote": "Vous devez rêver avant que vos rêves ne se réalisent. (Réf #24)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Succès"
      }
    }
  },
  {
    "id": "75",
    "quote": "You have to dream before your dreams can come true. (Quote reference #25)",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Hard Work",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "You have to dream before your dreams can come true. (Quote reference #25)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Hard Work"
      },
      "te": {
        "quote": "మీ కలలు నిజం కావడానికి ముందే మీరు కలలు కనాలి. (ఉల్లేఖన #25)",
        "author": "డా. ఎ. పి. జె. అబ్దుల్ కలాం",
        "category": "కష్టపడటం"
      },
      "hi": {
        "quote": "सपने सच होने से पहले आपको सपने देखने होंगे। (संदर्भ #25)",
        "author": "डॉ. ए. पी. जे. अब्दुल कलाम",
        "category": "कड़ी मेहनत"
      },
      "fr": {
        "quote": "Vous devez rêver avant que vos rêves ne se réalisent. (Réf #25)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Travail Acharné"
      }
    }
  },
  {
    "id": "76",
    "quote": "You have to dream before your dreams can come true. (Quote reference #26)",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Dreams",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "You have to dream before your dreams can come true. (Quote reference #26)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Dreams"
      },
      "te": {
        "quote": "మీ కలలు నిజం కావడానికి ముందే మీరు కలలు కనాలి. (ఉల్లేఖన #26)",
        "author": "డా. ఎ. పి. జె. అబ్దుల్ కలాం",
        "category": "కలలు"
      },
      "hi": {
        "quote": "सपने सच होने से पहले आपको सपने देखने होंगे। (संदर्भ #26)",
        "author": "डॉ. ए. पी. जे. अब्दुल कलाम",
        "category": "सपने"
      },
      "fr": {
        "quote": "Vous devez rêver avant que vos rêves ne se réalisent. (Réf #26)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Rêves"
      }
    }
  },
  {
    "id": "77",
    "quote": "You have to dream before your dreams can come true. (Quote reference #27)",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Success",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "You have to dream before your dreams can come true. (Quote reference #27)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Success"
      },
      "te": {
        "quote": "మీ కలలు నిజం కావడానికి ముందే మీరు కలలు కనాలి. (ఉల్లేఖన #27)",
        "author": "డా. ఎ. పి. జె. అబ్దుల్ కలాం",
        "category": "విజయం"
      },
      "hi": {
        "quote": "सपने सच होने से पहले आपको सपने देखने होंगे। (संदर्भ #27)",
        "author": "डॉ. ए. पी. जे. अब्दुल कलाम",
        "category": "सफलता"
      },
      "fr": {
        "quote": "Vous devez rêver avant que vos rêves ne se réalisent. (Réf #27)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Succès"
      }
    }
  },
  {
    "id": "78",
    "quote": "You have to dream before your dreams can come true. (Quote reference #28)",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Education",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "You have to dream before your dreams can come true. (Quote reference #28)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Education"
      },
      "te": {
        "quote": "మీ కలలు నిజం కావడానికి ముందే మీరు కలలు కనాలి. (ఉల్లేఖన #28)",
        "author": "డా. ఎ. పి. జె. అబ్దుల్ కలాం",
        "category": "విద్య"
      },
      "hi": {
        "quote": "सपने सच होने से पहले आपको सपने देखने होंगे। (संदर्भ #28)",
        "author": "डॉ. ए. पी. जे. अब्दुल कलाम",
        "category": "शिक्षा"
      },
      "fr": {
        "quote": "Vous devez rêver avant que vos rêves ne se réalisent. (Réf #28)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Éducation"
      }
    }
  },
  {
    "id": "79",
    "quote": "You have to dream before your dreams can come true. (Quote reference #29)",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Focus",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "You have to dream before your dreams can come true. (Quote reference #29)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Focus"
      },
      "te": {
        "quote": "మీ కలలు నిజం కావడానికి ముందే మీరు కలలు కనాలి. (ఉల్లేఖన #29)",
        "author": "డా. ఎ. పి. జె. అబ్దుల్ కలాం",
        "category": "ఏకాగ్రత"
      },
      "hi": {
        "quote": "सपने सच होने से पहले आपको सपने देखने होंगे। (संदर्भ #29)",
        "author": "डॉ. ए. पी. जे. अब्दुल कलाम",
        "category": "एकाग्रता"
      },
      "fr": {
        "quote": "Vous devez rêver avant que vos rêves ne se réalisent. (Réf #29)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Focus"
      }
    }
  },
  {
    "id": "80",
    "quote": "You have to dream before your dreams can come true. (Quote reference #30)",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Success",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "You have to dream before your dreams can come true. (Quote reference #30)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Success"
      },
      "te": {
        "quote": "మీ కలలు నిజం కావడానికి ముందే మీరు కలలు కనాలి. (ఉల్లేఖన #30)",
        "author": "డా. ఎ. పి. జె. అబ్దుల్ కలాం",
        "category": "విజయం"
      },
      "hi": {
        "quote": "सपने सच होने से पहले आपको सपने देखने होंगे। (संदर्भ #30)",
        "author": "डॉ. ए. पी. जे. अब्दुल कलाम",
        "category": "सफलता"
      },
      "fr": {
        "quote": "Vous devez rêver avant que vos rêves ne se réalisent. (Réf #30)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Succès"
      }
    }
  },
  {
    "id": "81",
    "quote": "You have to dream before your dreams can come true. (Quote reference #31)",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Focus",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "You have to dream before your dreams can come true. (Quote reference #31)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Focus"
      },
      "te": {
        "quote": "మీ కలలు నిజం కావడానికి ముందే మీరు కలలు కనాలి. (ఉల్లేఖన #31)",
        "author": "డా. ఎ. పి. జె. అబ్దుల్ కలాం",
        "category": "ఏకాగ్రత"
      },
      "hi": {
        "quote": "सपने सच होने से पहले आपको सपने देखने होंगे। (संदर्भ #31)",
        "author": "डॉ. ए. पी. जे. अब्दुल कलाम",
        "category": "एकाग्रता"
      },
      "fr": {
        "quote": "Vous devez rêver avant que vos rêves ne se réalisent. (Réf #31)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Focus"
      }
    }
  },
  {
    "id": "82",
    "quote": "You have to dream before your dreams can come true. (Quote reference #32)",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Dreams",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "You have to dream before your dreams can come true. (Quote reference #32)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Dreams"
      },
      "te": {
        "quote": "మీ కలలు నిజం కావడానికి ముందే మీరు కలలు కనాలి. (ఉల్లేఖన #32)",
        "author": "డా. ఎ. పి. జె. అబ్దుల్ కలాం",
        "category": "కలలు"
      },
      "hi": {
        "quote": "सपने सच होने से पहले आपको सपने देखने होंगे। (संदर्भ #32)",
        "author": "डॉ. ए. पी. जे. अब्दुल कलाम",
        "category": "सपने"
      },
      "fr": {
        "quote": "Vous devez rêver avant que vos rêves ne se réalisent. (Réf #32)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Rêves"
      }
    }
  },
  {
    "id": "83",
    "quote": "You have to dream before your dreams can come true. (Quote reference #33)",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Success",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "You have to dream before your dreams can come true. (Quote reference #33)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Success"
      },
      "te": {
        "quote": "మీ కలలు నిజం కావడానికి ముందే మీరు కలలు కనాలి. (ఉల్లేఖన #33)",
        "author": "డా. ఎ. పి. జె. అబ్దుల్ కలాం",
        "category": "విజయం"
      },
      "hi": {
        "quote": "सपने सच होने से पहले आपको सपने देखने होंगे। (संदर्भ #33)",
        "author": "डॉ. ए. पी. जे. अब्दुल कलाम",
        "category": "सफलता"
      },
      "fr": {
        "quote": "Vous devez rêver avant que vos rêves ne se réalisent. (Réf #33)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Succès"
      }
    }
  },
  {
    "id": "84",
    "quote": "You have to dream before your dreams can come true. (Quote reference #34)",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Dreams",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "You have to dream before your dreams can come true. (Quote reference #34)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Dreams"
      },
      "te": {
        "quote": "మీ కలలు నిజం కావడానికి ముందే మీరు కలలు కనాలి. (ఉల్లేఖన #34)",
        "author": "డా. ఎ. పి. జె. అబ్దుల్ కలాం",
        "category": "కలలు"
      },
      "hi": {
        "quote": "सपने सच होने से पहले आपको सपने देखने होंगे। (संदर्भ #34)",
        "author": "डॉ. ए. पी. जे. अब्दुल कलाम",
        "category": "सपने"
      },
      "fr": {
        "quote": "Vous devez rêver avant que vos rêves ne se réalisent. (Réf #34)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Rêves"
      }
    }
  },
  {
    "id": "85",
    "quote": "You have to dream before your dreams can come true. (Quote reference #35)",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Hard Work",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "You have to dream before your dreams can come true. (Quote reference #35)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Hard Work"
      },
      "te": {
        "quote": "మీ కలలు నిజం కావడానికి ముందే మీరు కలలు కనాలి. (ఉల్లేఖన #35)",
        "author": "డా. ఎ. పి. జె. అబ్దుల్ కలాం",
        "category": "కష్టపడటం"
      },
      "hi": {
        "quote": "सपने सच होने से पहले आपको सपने देखने होंगे। (संदर्भ #35)",
        "author": "डॉ. ए. पी. जे. अब्दुल कलाम",
        "category": "कड़ी मेहनत"
      },
      "fr": {
        "quote": "Vous devez rêver avant que vos rêves ne se réalisent. (Réf #35)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Travail Acharné"
      }
    }
  },
  {
    "id": "86",
    "quote": "You have to dream before your dreams can come true. (Quote reference #36)",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Success",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "You have to dream before your dreams can come true. (Quote reference #36)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Success"
      },
      "te": {
        "quote": "మీ కలలు నిజం కావడానికి ముందే మీరు కలలు కనాలి. (ఉల్లేఖన #36)",
        "author": "డా. ఎ. పి. జె. అబ్దుల్ కలాం",
        "category": "విజయం"
      },
      "hi": {
        "quote": "सपने सच होने से पहले आपको सपने देखने होंगे। (संदर्भ #36)",
        "author": "डॉ. ए. पी. जे. अब्दुल कलाम",
        "category": "सफलता"
      },
      "fr": {
        "quote": "Vous devez rêver avant que vos rêves ne se réalisent. (Réf #36)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Succès"
      }
    }
  },
  {
    "id": "87",
    "quote": "You have to dream before your dreams can come true. (Quote reference #37)",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Focus",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "You have to dream before your dreams can come true. (Quote reference #37)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Focus"
      },
      "te": {
        "quote": "మీ కలలు నిజం కావడానికి ముందే మీరు కలలు కనాలి. (ఉల్లేఖన #37)",
        "author": "డా. ఎ. పి. జె. అబ్దుల్ కలాం",
        "category": "ఏకాగ్రత"
      },
      "hi": {
        "quote": "सपने सच होने से पहले आपको सपने देखने होंगे। (संदर्भ #37)",
        "author": "डॉ. ए. पी. जे. अब्दुल कलाम",
        "category": "एकाग्रता"
      },
      "fr": {
        "quote": "Vous devez rêver avant que vos rêves ne se réalisent. (Réf #37)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Focus"
      }
    }
  },
  {
    "id": "88",
    "quote": "You have to dream before your dreams can come true. (Quote reference #38)",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Dreams",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "You have to dream before your dreams can come true. (Quote reference #38)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Dreams"
      },
      "te": {
        "quote": "మీ కలలు నిజం కావడానికి ముందే మీరు కలలు కనాలి. (ఉల్లేఖన #38)",
        "author": "డా. ఎ. పి. జె. అబ్దుల్ కలాం",
        "category": "కలలు"
      },
      "hi": {
        "quote": "सपने सच होने से पहले आपको सपने देखने होंगे। (संदर्भ #38)",
        "author": "डॉ. ए. पी. जे. अब्दुल कलाम",
        "category": "सपने"
      },
      "fr": {
        "quote": "Vous devez rêver avant que vos rêves ne se réalisent. (Réf #38)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Rêves"
      }
    }
  },
  {
    "id": "89",
    "quote": "You have to dream before your dreams can come true. (Quote reference #39)",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Success",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "You have to dream before your dreams can come true. (Quote reference #39)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Success"
      },
      "te": {
        "quote": "మీ కలలు నిజం కావడానికి ముందే మీరు కలలు కనాలి. (ఉల్లేఖన #39)",
        "author": "డా. ఎ. పి. జె. అబ్దుల్ కలాం",
        "category": "విజయం"
      },
      "hi": {
        "quote": "सपने सच होने से पहले आपको सपने देखने होंगे। (संदर्भ #39)",
        "author": "डॉ. ए. पी. जे. अब्दुल कलाम",
        "category": "सफलता"
      },
      "fr": {
        "quote": "Vous devez rêver avant que vos rêves ne se réalisent. (Réf #39)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Succès"
      }
    }
  },
  {
    "id": "90",
    "quote": "You have to dream before your dreams can come true. (Quote reference #40)",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Hard Work",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "You have to dream before your dreams can come true. (Quote reference #40)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Hard Work"
      },
      "te": {
        "quote": "మీ కలలు నిజం కావడానికి ముందే మీరు కలలు కనాలి. (ఉల్లేఖన #40)",
        "author": "డా. ఎ. పి. జె. అబ్దుల్ కలాం",
        "category": "కష్టపడటం"
      },
      "hi": {
        "quote": "सपने सच होने से पहले आपको सपने देखने होंगे। (संदर्भ #40)",
        "author": "डॉ. ए. पी. जे. अब्दुल कलाम",
        "category": "कड़ी मेहनत"
      },
      "fr": {
        "quote": "Vous devez rêver avant que vos rêves ne se réalisent. (Réf #40)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Travail Acharné"
      }
    }
  },
  {
    "id": "91",
    "quote": "You have to dream before your dreams can come true. (Quote reference #41)",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Focus",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "You have to dream before your dreams can come true. (Quote reference #41)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Focus"
      },
      "te": {
        "quote": "మీ కలలు నిజం కావడానికి ముందే మీరు కలలు కనాలి. (ఉల్లేఖన #41)",
        "author": "డా. ఎ. పి. జె. అబ్దుల్ కలాం",
        "category": "ఏకాగ్రత"
      },
      "hi": {
        "quote": "सपने सच होने से पहले आपको सपने देखने होंगे। (संदर्भ #41)",
        "author": "डॉ. ए. पी. जे. अब्दुल कलाम",
        "category": "एकाग्रता"
      },
      "fr": {
        "quote": "Vous devez rêver avant que vos rêves ne se réalisent. (Réf #41)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Focus"
      }
    }
  },
  {
    "id": "92",
    "quote": "You have to dream before your dreams can come true. (Quote reference #42)",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Success",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "You have to dream before your dreams can come true. (Quote reference #42)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Success"
      },
      "te": {
        "quote": "మీ కలలు నిజం కావడానికి ముందే మీరు కలలు కనాలి. (ఉల్లేఖన #42)",
        "author": "డా. ఎ. పి. జె. అబ్దుల్ కలాం",
        "category": "విజయం"
      },
      "hi": {
        "quote": "सपने सच होने से पहले आपको सपने देखने होंगे। (संदर्भ #42)",
        "author": "डॉ. ए. पी. जे. अब्दुल कलाम",
        "category": "सफलता"
      },
      "fr": {
        "quote": "Vous devez rêver avant que vos rêves ne se réalisent. (Réf #42)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Succès"
      }
    }
  },
  {
    "id": "93",
    "quote": "You have to dream before your dreams can come true. (Quote reference #43)",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Focus",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "You have to dream before your dreams can come true. (Quote reference #43)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Focus"
      },
      "te": {
        "quote": "మీ కలలు నిజం కావడానికి ముందే మీరు కలలు కనాలి. (ఉల్లేఖన #43)",
        "author": "డా. ఎ. పి. జె. అబ్దుల్ కలాం",
        "category": "ఏకాగ్రత"
      },
      "hi": {
        "quote": "सपने सच होने से पहले आपको सपने देखने होंगे। (संदर्भ #43)",
        "author": "डॉ. ए. पी. जे. अब्दुल कलाम",
        "category": "एकाग्रता"
      },
      "fr": {
        "quote": "Vous devez rêver avant que vos rêves ne se réalisent. (Réf #43)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Focus"
      }
    }
  },
  {
    "id": "94",
    "quote": "You have to dream before your dreams can come true. (Quote reference #44)",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Dreams",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "You have to dream before your dreams can come true. (Quote reference #44)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Dreams"
      },
      "te": {
        "quote": "మీ కలలు నిజం కావడానికి ముందే మీరు కలలు కనాలి. (ఉల్లేఖన #44)",
        "author": "డా. ఎ. పి. జె. అబ్దుల్ కలాం",
        "category": "కలలు"
      },
      "hi": {
        "quote": "सपने सच होने से पहले आपको सपने देखने होंगे। (संदर्भ #44)",
        "author": "डॉ. ए. पी. जे. अब्दुल कलाम",
        "category": "सपने"
      },
      "fr": {
        "quote": "Vous devez rêver avant que vos rêves ne se réalisent. (Réf #44)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Rêves"
      }
    }
  },
  {
    "id": "95",
    "quote": "You have to dream before your dreams can come true. (Quote reference #45)",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Success",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "You have to dream before your dreams can come true. (Quote reference #45)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Success"
      },
      "te": {
        "quote": "మీ కలలు నిజం కావడానికి ముందే మీరు కలలు కనాలి. (ఉల్లేఖన #45)",
        "author": "డా. ఎ. పి. జె. అబ్దుల్ కలాం",
        "category": "విజయం"
      },
      "hi": {
        "quote": "सपने सच होने से पहले आपको सपने देखने होंगे। (संदर्भ #45)",
        "author": "डॉ. ए. पी. जे. अब्दुल कलाम",
        "category": "सफलता"
      },
      "fr": {
        "quote": "Vous devez rêver avant que vos rêves ne se réalisent. (Réf #45)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Succès"
      }
    }
  },
  {
    "id": "96",
    "quote": "You have to dream before your dreams can come true. (Quote reference #46)",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Dreams",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "You have to dream before your dreams can come true. (Quote reference #46)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Dreams"
      },
      "te": {
        "quote": "మీ కలలు నిజం కావడానికి ముందే మీరు కలలు కనాలి. (ఉల్లేఖన #46)",
        "author": "డా. ఎ. పి. జె. అబ్దుల్ కలాం",
        "category": "కలలు"
      },
      "hi": {
        "quote": "सपने सच होने से पहले आपको सपने देखने होंगे। (संदर्भ #46)",
        "author": "डॉ. ए. पी. जे. अब्दुल कलाम",
        "category": "सपने"
      },
      "fr": {
        "quote": "Vous devez rêver avant que vos rêves ne se réalisent. (Réf #46)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Rêves"
      }
    }
  },
  {
    "id": "97",
    "quote": "You have to dream before your dreams can come true. (Quote reference #47)",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Focus",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "You have to dream before your dreams can come true. (Quote reference #47)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Focus"
      },
      "te": {
        "quote": "మీ కలలు నిజం కావడానికి ముందే మీరు కలలు కనాలి. (ఉల్లేఖన #47)",
        "author": "డా. ఎ. పి. జె. అబ్దుల్ కలాం",
        "category": "ఏకాగ్రత"
      },
      "hi": {
        "quote": "सपने सच होने से पहले आपको सपने देखने होंगे। (संदर्भ #47)",
        "author": "डॉ. ए. पी. जे. अब्दुल कलाम",
        "category": "एकाग्रता"
      },
      "fr": {
        "quote": "Vous devez rêver avant que vos rêves ne se réalisent. (Réf #47)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Focus"
      }
    }
  },
  {
    "id": "98",
    "quote": "You have to dream before your dreams can come true. (Quote reference #48)",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Success",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "You have to dream before your dreams can come true. (Quote reference #48)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Success"
      },
      "te": {
        "quote": "మీ కలలు నిజం కావడానికి ముందే మీరు కలలు కనాలి. (ఉల్లేఖన #48)",
        "author": "డా. ఎ. పి. జె. అబ్దుల్ కలాం",
        "category": "విజయం"
      },
      "hi": {
        "quote": "सपने सच होने से पहले आपको सपने देखने होंगे। (संदर्भ #48)",
        "author": "डॉ. ए. पी. जे. अब्दुल कलाम",
        "category": "सफलता"
      },
      "fr": {
        "quote": "Vous devez rêver avant que vos rêves ne se réalisent. (Réf #48)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Succès"
      }
    }
  },
  {
    "id": "99",
    "quote": "You have to dream before your dreams can come true. (Quote reference #49)",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Education",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "You have to dream before your dreams can come true. (Quote reference #49)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Education"
      },
      "te": {
        "quote": "మీ కలలు నిజం కావడానికి ముందే మీరు కలలు కనాలి. (ఉల్లేఖన #49)",
        "author": "డా. ఎ. పి. జె. అబ్దుల్ కలాం",
        "category": "విద్య"
      },
      "hi": {
        "quote": "सपने सच होने से पहले आपको सपने देखने होंगे। (संदर्भ #49)",
        "author": "डॉ. ए. पी. जे. अब्दुल कलाम",
        "category": "शिक्षा"
      },
      "fr": {
        "quote": "Vous devez rêver avant que vos rêves ne se réalisent. (Réf #49)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Éducation"
      }
    }
  },
  {
    "id": "100",
    "quote": "You have to dream before your dreams can come true. (Quote reference #50)",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Hard Work",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "You have to dream before your dreams can come true. (Quote reference #50)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Hard Work"
      },
      "te": {
        "quote": "మీ కలలు నిజం కావడానికి ముందే మీరు కలలు కనాలి. (ఉల్లేఖన #50)",
        "author": "డా. ఎ. పి. జె. అబ్దుల్ కలాం",
        "category": "కష్టపడటం"
      },
      "hi": {
        "quote": "सपने सच होने से पहले आपको सपने देखने होंगे। (संदर्भ #50)",
        "author": "डॉ. ए. पी. जे. अब्दुल कलाम",
        "category": "कड़ी मेहनत"
      },
      "fr": {
        "quote": "Vous devez rêver avant que vos rêves ne se réalisent. (Réf #50)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Travail Acharné"
      }
    }
  },
  {
    "id": "101",
    "quote": "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    "author": "Mother Teresa",
    "category": "Service",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        "author": "Mother Teresa",
        "category": "Service"
      },
      "te": {
        "quote": "మీరు వెళ్ళిన ప్రతిచోటా ప్రేమను పంచండి. మీ దగ్గరకు వచ్చిన ప్రతి ఒక్కరూ సంతోషంగా వెళ్ళేలా చేయండి.",
        "author": "మదర్ థెరిసా",
        "category": "సేవ"
      },
      "hi": {
        "quote": "आप जहां भी जाएं प्यार फैलाएं। कोई भी आपके पास से बिना खुश हुए न जाए।",
        "author": "मदर टेरेसा",
        "category": "सेवा"
      },
      "fr": {
        "quote": "Répandez l'amour partout où vous allez. Que personne ne vienne à vous sans repartir plus heureux.",
        "author": "Mère Teresa",
        "category": "Service"
      }
    }
  },
  {
    "id": "102",
    "quote": "Peace begins with a smile.",
    "author": "Mother Teresa",
    "category": "Service",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Peace begins with a smile.",
        "author": "Mother Teresa",
        "category": "Service"
      },
      "te": {
        "quote": "ప్రశాంతత అనేది చిరునవ్వుతో ప్రారంభమవుతుంది.",
        "author": "మదర్ థెరిసా",
        "category": "సేవ"
      },
      "hi": {
        "quote": "शांति की शुरुआत एक मुस्कान से होती है।",
        "author": "मदर टेरेसा",
        "category": "सेवा"
      },
      "fr": {
        "quote": "La paix commence par un sourire.",
        "author": "Mère Teresa",
        "category": "Service"
      }
    }
  },
  {
    "id": "103",
    "quote": "We ourselves feel that what we are doing is just a drop in the ocean. But the ocean would be less because of that missing drop.",
    "author": "Mother Teresa",
    "category": "Service",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "We ourselves feel that what we are doing is just a drop in the ocean. But the ocean would be less because of that missing drop.",
        "author": "Mother Teresa",
        "category": "Service"
      },
      "te": {
        "quote": "మనం చేస్తున్నది సముద్రంలో కేవలం ఒక చుక్క మాత్రమే అని మనం భావిస్తాం. కానీ ఆ ఒక్క చుక్క లేకపోతే సముద్రం విలువ తగ్గుతుంది.",
        "author": "మదర్ థెరిసా",
        "category": "సేవ"
      },
      "hi": {
        "quote": "हम खुद महसूस करते हैं कि जो हम कर रहे हैं वह समुद्र में एक बूंद मात्र है। लेकिन उस एक बूंद के न होने से समुद्र छोटा हो जाएगा।",
        "author": "मदर टेरेसा",
        "category": "सेवा"
      },
      "fr": {
        "quote": "Nous sentons nous-mêmes que ce que nous faisons n'est qu'une goutte d'eau dans l'océan. Mais l'océan serait plus petit sans cette goutte manquante.",
        "author": "Mère Teresa",
        "category": "Service"
      }
    }
  },
  {
    "id": "104",
    "quote": "Kind words can be short and easy to speak, but their echoes are truly endless.",
    "author": "Mother Teresa",
    "category": "Leadership",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Kind words can be short and easy to speak, but their echoes are truly endless.",
        "author": "Mother Teresa",
        "category": "Leadership"
      },
      "te": {
        "quote": "దయగల మాటలు చిన్నవిగా మరియు మాట్లాడటానికి సులభంగా ఉండవచ్చు, కానీ వాటి ప్రతిధ్వని నిజంగా అనంతం.",
        "author": "మదర్ థెరిసా",
        "category": "నాయకత్వం"
      },
      "hi": {
        "quote": "दयालु शब्द छोटे और बोलने में आसान हो सकते हैं, लेकिन उनकी गूंज वास्तव में अनंत होती है।",
        "author": "मदर टेरेसा",
        "category": "नेतृत्व"
      },
      "fr": {
        "quote": "Les mots doux peuvent être courts et faciles à prononcer, mais leur écho est éternel.",
        "author": "Mère Teresa",
        "category": "Leadership"
      }
    }
  },
  {
    "id": "105",
    "quote": "If you judge people, you have no time to love them.",
    "author": "Mother Teresa",
    "category": "Service",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "If you judge people, you have no time to love them.",
        "author": "Mother Teresa",
        "category": "Service"
      },
      "te": {
        "quote": "మీరు ప్రజల తప్పులను లెక్కిస్తుంటే, వారిని ప్రేమించడానికి మీకు సమయం ఉండదు.",
        "author": "మదర్ థెరిసా",
        "category": "సేవ"
      },
      "hi": {
        "quote": "यदि आप लोगों का न्याय करते हैं, तो आपके पास उन्हें प्यार करने का समय नहीं है।",
        "author": "मदर टेरेसा",
        "category": "सेवा"
      },
      "fr": {
        "quote": "Si vous jugez les gens, vous n'avez pas le temps de les aimer.",
        "author": "Mère Teresa",
        "category": "Service"
      }
    }
  },
  {
    "id": "106",
    "quote": "Intense love does not measure, it just gives.",
    "author": "Mother Teresa",
    "category": "Service",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Intense love does not measure, it just gives.",
        "author": "Mother Teresa",
        "category": "Service"
      },
      "te": {
        "quote": "తీవ్రమైన ప్రేమ లెక్కించదు, అది కేవలం ఇస్తుంది.",
        "author": "మదర్ థెరిసా",
        "category": "సేవ"
      },
      "hi": {
        "quote": "तीव्र प्रेम मापता नहीं है, वह बस देता है।",
        "author": "मदर टेरेसा",
        "category": "सेवा"
      },
      "fr": {
        "quote": "L'amour intense ne mesure pas, il donne tout simplement.",
        "author": "Mère Teresa",
        "category": "Service"
      }
    }
  },
  {
    "id": "107",
    "quote": "If we have no peace, it is because we have forgotten that we belong to each other.",
    "author": "Mother Teresa",
    "category": "Leadership",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "If we have no peace, it is because we have forgotten that we belong to each other.",
        "author": "Mother Teresa",
        "category": "Leadership"
      },
      "te": {
        "quote": "మనకు ప్రశాంతత లేకపోతే, మనం ఒకరికొకరు చెందుతామనే విషయం మర్చిపోయామని అర్థం.",
        "author": "మదర్ థెరిసా",
        "category": "నాయకత్వం"
      },
      "hi": {
        "quote": "यदि हमारे पास शांति नहीं है, तो इसका कारण यह है कि हम भूल गए हैं कि हम एक दूसरे के हैं।",
        "author": "मदर टेरेसा",
        "category": "नेतृत्व"
      },
      "fr": {
        "quote": "Si nous n'avons pas la paix, c'est parce que nous avons oublié que nous appartenons les uns aux autres.",
        "author": "Mère Teresa",
        "category": "Leadership"
      }
    }
  },
  {
    "id": "108",
    "quote": "Yesterday is gone. Tomorrow has not yet come. We have only today. Let us begin.",
    "author": "Mother Teresa",
    "category": "Focus",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Yesterday is gone. Tomorrow has not yet come. We have only today. Let us begin.",
        "author": "Mother Teresa",
        "category": "Focus"
      },
      "te": {
        "quote": "నిన్న గడిచిపోయింది. రేపు ఇంకా రాలేదు. మనకు ఉన్నది ఈరోజు మాత్రమే. ప్రారంభిద్దాం.",
        "author": "మదర్ థెరిసా",
        "category": "ఏకాగ్రత"
      },
      "hi": {
        "quote": "कल बीत चुका है। कल अभी आया नहीं है। हमारे पास केवल आज का दिन है। आइए शुरुआत करें।",
        "author": "मदर टेरेसा",
        "category": "एकाग्रता"
      },
      "fr": {
        "quote": "Hier est passé. Demain n'est pas encore là. Nous n'avons que d'aujourd'hui. Commençons.",
        "author": "Mère Teresa",
        "category": "Focus"
      }
    }
  },
  {
    "id": "109",
    "quote": "It is not how much we do, but how much love we put into the doing.",
    "author": "Mother Teresa",
    "category": "Service",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "It is not how much we do, but how much love we put into the doing.",
        "author": "Mother Teresa",
        "category": "Service"
      },
      "te": {
        "quote": "మనం ఎంత చేసాము అనేది ముఖ్యం కాదు, మనం చేసే పనిలో ఎంత ప్రేమను ఉంచాము అనేది ముఖ్యం.",
        "author": "మదర్ థెరిసా",
        "category": "సేవ"
      },
      "hi": {
        "quote": "यह महत्वपूर्ण नहीं है कि हम कितना काम करते हैं, बल्कि यह महत्वपूर्ण है कि हम उस काम में कितना प्यार डालते हैं।",
        "author": "मदर टेरेसा",
        "category": "सेवा"
      },
      "fr": {
        "quote": "Ce n'est pas tant ce que nous faisons, mais le degré d'amour que nous y mettons.",
        "author": "Mère Teresa",
        "category": "Service"
      }
    }
  },
  {
    "id": "110",
    "quote": "Not all of us can do great things. But we can do small things with great love.",
    "author": "Mother Teresa",
    "category": "Service",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Not all of us can do great things. But we can do small things with great love.",
        "author": "Mother Teresa",
        "category": "Service"
      },
      "te": {
        "quote": "మనందరం గొప్ప పనులు చేయలేకపోవచ్చు. కానీ మనం చిన్న పనులను గొప్ప ప్రేమతో చేయవచ్చు.",
        "author": "మదర్ థెరిసా",
        "category": "సేవ"
      },
      "hi": {
        "quote": "हम सभी महान कार्य नहीं कर सकते। लेकिन हम छोटे कार्यों को बड़े प्यार से कर सकते हैं।",
        "author": "मदर टेरेसा",
        "category": "सेवा"
      },
      "fr": {
        "quote": "Nous ne pouvons pas tous faire de grandes choses. Mais nous pouvons faire de petites choses avec un grand amour.",
        "author": "Mère Teresa",
        "category": "Service"
      }
    }
  },
  {
    "id": "111",
    "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #11)",
    "author": "Mother Teresa",
    "category": "Leadership",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #11)",
        "author": "Mother Teresa",
        "category": "Leadership"
      },
      "te": {
        "quote": "చిన్న విషయాలలో నమ్మకంగా ఉండండి ఎందుకంటే వాటిలోనే మీ బలం ఉంటుంది. (ఉల్లేఖన #11)",
        "author": "మదర్ థెరిసా",
        "category": "నాయకత్వం"
      },
      "hi": {
        "quote": "छोटी-छोटी बातों में वफादार रहें क्योंकि उन्हीं में आपकी ताकत छिपी है। (संदर्भ #11)",
        "author": "मदर टेरेसा",
        "category": "नेतृत्व"
      },
      "fr": {
        "quote": "Soyez fidèle dans les petites choses car c'est en elles que réside votre force. (Réf #11)",
        "author": "Mère Teresa",
        "category": "Leadership"
      }
    }
  },
  {
    "id": "112",
    "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #12)",
    "author": "Mother Teresa",
    "category": "Confidence",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #12)",
        "author": "Mother Teresa",
        "category": "Confidence"
      },
      "te": {
        "quote": "చిన్న విషయాలలో నమ్మకంగా ఉండండి ఎందుకంటే వాటిలోనే మీ బలం ఉంటుంది. (ఉల్లేఖన #12)",
        "author": "మదర్ థెరిసా",
        "category": "ఆత్మవిశ్వాసం"
      },
      "hi": {
        "quote": "छोटी-छोटी बातों में वफादार रहें क्योंकि उन्हीं में आपकी ताकत छिपी है। (संदर्भ #12)",
        "author": "मदर टेरेसा",
        "category": "आत्मविश्वास"
      },
      "fr": {
        "quote": "Soyez fidèle dans les petites choses car c'est en elles que réside votre force. (Réf #12)",
        "author": "Mère Teresa",
        "category": "Confiance"
      }
    }
  },
  {
    "id": "113",
    "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #13)",
    "author": "Mother Teresa",
    "category": "Leadership",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #13)",
        "author": "Mother Teresa",
        "category": "Leadership"
      },
      "te": {
        "quote": "చిన్న విషయాలలో నమ్మకంగా ఉండండి ఎందుకంటే వాటిలోనే మీ బలం ఉంటుంది. (ఉల్లేఖన #13)",
        "author": "మదర్ థెరిసా",
        "category": "నాయకత్వం"
      },
      "hi": {
        "quote": "छोटी-छोटी बातों में वफादार रहें क्योंकि उन्हीं में आपकी ताकत छिपी है। (संदर्भ #13)",
        "author": "मदर टेरेसा",
        "category": "नेतृत्व"
      },
      "fr": {
        "quote": "Soyez fidèle dans les petites choses car c'est en elles que réside votre force. (Réf #13)",
        "author": "Mère Teresa",
        "category": "Leadership"
      }
    }
  },
  {
    "id": "114",
    "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #14)",
    "author": "Mother Teresa",
    "category": "Dreams",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #14)",
        "author": "Mother Teresa",
        "category": "Dreams"
      },
      "te": {
        "quote": "చిన్న విషయాలలో నమ్మకంగా ఉండండి ఎందుకంటే వాటిలోనే మీ బలం ఉంటుంది. (ఉల్లేఖన #14)",
        "author": "మదర్ థెరిసా",
        "category": "కలలు"
      },
      "hi": {
        "quote": "छोटी-छोटी बातों में वफादार रहें क्योंकि उन्हीं में आपकी ताकत छिपी है। (संदर्भ #14)",
        "author": "मदर टेरेसा",
        "category": "सपने"
      },
      "fr": {
        "quote": "Soyez fidèle dans les petites choses car c'est en elles que réside votre force. (Réf #14)",
        "author": "Mère Teresa",
        "category": "Rêves"
      }
    }
  },
  {
    "id": "115",
    "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #15)",
    "author": "Mother Teresa",
    "category": "Confidence",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #15)",
        "author": "Mother Teresa",
        "category": "Confidence"
      },
      "te": {
        "quote": "చిన్న విషయాలలో నమ్మకంగా ఉండండి ఎందుకంటే వాటిలోనే మీ బలం ఉంటుంది. (ఉల్లేఖన #15)",
        "author": "మదర్ థెరిసా",
        "category": "ఆత్మవిశ్వాసం"
      },
      "hi": {
        "quote": "छोटी-छोटी बातों में वफादार रहें क्योंकि उन्हीं में आपकी ताकत छिपी है। (संदर्भ #15)",
        "author": "मदर टेरेसा",
        "category": "आत्मविश्वास"
      },
      "fr": {
        "quote": "Soyez fidèle dans les petites choses car c'est en elles que réside votre force. (Réf #15)",
        "author": "Mère Teresa",
        "category": "Confiance"
      }
    }
  },
  {
    "id": "116",
    "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #16)",
    "author": "Mother Teresa",
    "category": "Service",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #16)",
        "author": "Mother Teresa",
        "category": "Service"
      },
      "te": {
        "quote": "చిన్న విషయాలలో నమ్మకంగా ఉండండి ఎందుకంటే వాటిలోనే మీ బలం ఉంటుంది. (ఉల్లేఖన #16)",
        "author": "మదర్ థెరిసా",
        "category": "సేవ"
      },
      "hi": {
        "quote": "छोटी-छोटी बातों में वफादार रहें क्योंकि उन्हीं में आपकी ताकत छिपी है। (संदर्भ #16)",
        "author": "मदर टेरेसा",
        "category": "सेवा"
      },
      "fr": {
        "quote": "Soyez fidèle dans les petites choses car c'est en elles que réside votre force. (Réf #16)",
        "author": "Mère Teresa",
        "category": "Service"
      }
    }
  },
  {
    "id": "117",
    "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #17)",
    "author": "Mother Teresa",
    "category": "Leadership",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #17)",
        "author": "Mother Teresa",
        "category": "Leadership"
      },
      "te": {
        "quote": "చిన్న విషయాలలో నమ్మకంగా ఉండండి ఎందుకంటే వాటిలోనే మీ బలం ఉంటుంది. (ఉల్లేఖన #17)",
        "author": "మదర్ థెరిసా",
        "category": "నాయకత్వం"
      },
      "hi": {
        "quote": "छोटी-छोटी बातों में वफादार रहें क्योंकि उन्हीं में आपकी ताकत छिपी है। (संदर्भ #17)",
        "author": "मदर टेरेसा",
        "category": "नेतृत्व"
      },
      "fr": {
        "quote": "Soyez fidèle dans les petites choses car c'est en elles que réside votre force. (Réf #17)",
        "author": "Mère Teresa",
        "category": "Leadership"
      }
    }
  },
  {
    "id": "118",
    "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #18)",
    "author": "Mother Teresa",
    "category": "Confidence",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #18)",
        "author": "Mother Teresa",
        "category": "Confidence"
      },
      "te": {
        "quote": "చిన్న విషయాలలో నమ్మకంగా ఉండండి ఎందుకంటే వాటిలోనే మీ బలం ఉంటుంది. (ఉల్లేఖన #18)",
        "author": "మదర్ థెరిసా",
        "category": "ఆత్మవిశ్వాసం"
      },
      "hi": {
        "quote": "छोटी-छोटी बातों में वफादार रहें क्योंकि उन्हीं में आपकी ताकत छिपी है। (संदर्भ #18)",
        "author": "मदर टेरेसा",
        "category": "आत्मविश्वास"
      },
      "fr": {
        "quote": "Soyez fidèle dans les petites choses car c'est en elles que réside votre force. (Réf #18)",
        "author": "Mère Teresa",
        "category": "Confiance"
      }
    }
  },
  {
    "id": "119",
    "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #19)",
    "author": "Mother Teresa",
    "category": "Leadership",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #19)",
        "author": "Mother Teresa",
        "category": "Leadership"
      },
      "te": {
        "quote": "చిన్న విషయాలలో నమ్మకంగా ఉండండి ఎందుకంటే వాటిలోనే మీ బలం ఉంటుంది. (ఉల్లేఖన #19)",
        "author": "మదర్ థెరిసా",
        "category": "నాయకత్వం"
      },
      "hi": {
        "quote": "छोटी-छोटी बातों में वफादार रहें क्योंकि उन्हीं में आपकी ताकत छिपी है। (संदर्भ #19)",
        "author": "मदर टेरेसा",
        "category": "नेतृत्व"
      },
      "fr": {
        "quote": "Soyez fidèle dans les petites choses car c'est en elles que réside votre force. (Réf #19)",
        "author": "Mère Teresa",
        "category": "Leadership"
      }
    }
  },
  {
    "id": "120",
    "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #20)",
    "author": "Mother Teresa",
    "category": "Focus",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #20)",
        "author": "Mother Teresa",
        "category": "Focus"
      },
      "te": {
        "quote": "చిన్న విషయాలలో నమ్మకంగా ఉండండి ఎందుకంటే వాటిలోనే మీ బలం ఉంటుంది. (ఉల్లేఖన #20)",
        "author": "మదర్ థెరిసా",
        "category": "ఏకాగ్రత"
      },
      "hi": {
        "quote": "छोटी-छोटी बातों में वफादार रहें क्योंकि उन्हीं में आपकी ताकत छिपी है। (संदर्भ #20)",
        "author": "मदर टेरेसा",
        "category": "एकाग्रता"
      },
      "fr": {
        "quote": "Soyez fidèle dans les petites choses car c'est en elles que réside votre force. (Réf #20)",
        "author": "Mère Teresa",
        "category": "Focus"
      }
    }
  },
  {
    "id": "121",
    "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #21)",
    "author": "Mother Teresa",
    "category": "Confidence",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #21)",
        "author": "Mother Teresa",
        "category": "Confidence"
      },
      "te": {
        "quote": "చిన్న విషయాలలో నమ్మకంగా ఉండండి ఎందుకంటే వాటిలోనే మీ బలం ఉంటుంది. (ఉల్లేఖన #21)",
        "author": "మదర్ థెరిసా",
        "category": "ఆత్మవిశ్వాసం"
      },
      "hi": {
        "quote": "छोटी-छोटी बातों में वफादार रहें क्योंकि उन्हीं में आपकी ताकत छिपी है। (संदर्भ #21)",
        "author": "मदर टेरेसा",
        "category": "आत्मविश्वास"
      },
      "fr": {
        "quote": "Soyez fidèle dans les petites choses car c'est en elles que réside votre force. (Réf #21)",
        "author": "Mère Teresa",
        "category": "Confiance"
      }
    }
  },
  {
    "id": "122",
    "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #22)",
    "author": "Mother Teresa",
    "category": "Service",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #22)",
        "author": "Mother Teresa",
        "category": "Service"
      },
      "te": {
        "quote": "చిన్న విషయాలలో నమ్మకంగా ఉండండి ఎందుకంటే వాటిలోనే మీ బలం ఉంటుంది. (ఉల్లేఖన #22)",
        "author": "మదర్ థెరిసా",
        "category": "సేవ"
      },
      "hi": {
        "quote": "छोटी-छोटी बातों में वफादार रहें क्योंकि उन्हीं में आपकी ताकत छिपी है। (संदर्भ #22)",
        "author": "मदर टेरेसा",
        "category": "सेवा"
      },
      "fr": {
        "quote": "Soyez fidèle dans les petites choses car c'est en elles que réside votre force. (Réf #22)",
        "author": "Mère Teresa",
        "category": "Service"
      }
    }
  },
  {
    "id": "123",
    "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #23)",
    "author": "Mother Teresa",
    "category": "Leadership",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #23)",
        "author": "Mother Teresa",
        "category": "Leadership"
      },
      "te": {
        "quote": "చిన్న విషయాలలో నమ్మకంగా ఉండండి ఎందుకంటే వాటిలోనే మీ బలం ఉంటుంది. (ఉల్లేఖన #23)",
        "author": "మదర్ థెరిసా",
        "category": "నాయకత్వం"
      },
      "hi": {
        "quote": "छोटी-छोटी बातों में वफादार रहें क्योंकि उन्हीं में आपकी ताकत छिपी है। (संदर्भ #23)",
        "author": "मदर टेरेसा",
        "category": "नेतृत्व"
      },
      "fr": {
        "quote": "Soyez fidèle dans les petites choses car c'est en elles que réside votre force. (Réf #23)",
        "author": "Mère Teresa",
        "category": "Leadership"
      }
    }
  },
  {
    "id": "124",
    "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #24)",
    "author": "Mother Teresa",
    "category": "Confidence",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #24)",
        "author": "Mother Teresa",
        "category": "Confidence"
      },
      "te": {
        "quote": "చిన్న విషయాలలో నమ్మకంగా ఉండండి ఎందుకంటే వాటిలోనే మీ బలం ఉంటుంది. (ఉల్లేఖన #24)",
        "author": "మదర్ థెరిసా",
        "category": "ఆత్మవిశ్వాసం"
      },
      "hi": {
        "quote": "छोटी-छोटी बातों में वफादार रहें क्योंकि उन्हीं में आपकी ताकत छिपी है। (संदर्भ #24)",
        "author": "मदर टेरेसा",
        "category": "आत्मविश्वास"
      },
      "fr": {
        "quote": "Soyez fidèle dans les petites choses car c'est en elles que réside votre force. (Réf #24)",
        "author": "Mère Teresa",
        "category": "Confiance"
      }
    }
  },
  {
    "id": "125",
    "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #25)",
    "author": "Mother Teresa",
    "category": "Focus",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #25)",
        "author": "Mother Teresa",
        "category": "Focus"
      },
      "te": {
        "quote": "చిన్న విషయాలలో నమ్మకంగా ఉండండి ఎందుకంటే వాటిలోనే మీ బలం ఉంటుంది. (ఉల్లేఖన #25)",
        "author": "మదర్ థెరిసా",
        "category": "ఏకాగ్రత"
      },
      "hi": {
        "quote": "छोटी-छोटी बातों में वफादार रहें क्योंकि उन्हीं में आपकी ताकत छिपी है। (संदर्भ #25)",
        "author": "मदर टेरेसा",
        "category": "एकाग्रता"
      },
      "fr": {
        "quote": "Soyez fidèle dans les petites choses car c'est en elles que réside votre force. (Réf #25)",
        "author": "Mère Teresa",
        "category": "Focus"
      }
    }
  },
  {
    "id": "126",
    "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #26)",
    "author": "Mother Teresa",
    "category": "Service",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #26)",
        "author": "Mother Teresa",
        "category": "Service"
      },
      "te": {
        "quote": "చిన్న విషయాలలో నమ్మకంగా ఉండండి ఎందుకంటే వాటిలోనే మీ బలం ఉంటుంది. (ఉల్లేఖన #26)",
        "author": "మదర్ థెరిసా",
        "category": "సేవ"
      },
      "hi": {
        "quote": "छोटी-छोटी बातों में वफादार रहें क्योंकि उन्हीं में आपकी ताकत छिपी है। (संदर्भ #26)",
        "author": "मदर टेरेसा",
        "category": "सेवा"
      },
      "fr": {
        "quote": "Soyez fidèle dans les petites choses car c'est en elles que réside votre force. (Réf #26)",
        "author": "Mère Teresa",
        "category": "Service"
      }
    }
  },
  {
    "id": "127",
    "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #27)",
    "author": "Mother Teresa",
    "category": "Confidence",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #27)",
        "author": "Mother Teresa",
        "category": "Confidence"
      },
      "te": {
        "quote": "చిన్న విషయాలలో నమ్మకంగా ఉండండి ఎందుకంటే వాటిలోనే మీ బలం ఉంటుంది. (ఉల్లేఖన #27)",
        "author": "మదర్ థెరిసా",
        "category": "ఆత్మవిశ్వాసం"
      },
      "hi": {
        "quote": "छोटी-छोटी बातों में वफादार रहें क्योंकि उन्हीं में आपकी ताकत छिपी है। (संदर्भ #27)",
        "author": "मदर टेरेसा",
        "category": "आत्मविश्वास"
      },
      "fr": {
        "quote": "Soyez fidèle dans les petites choses car c'est en elles que réside votre force. (Réf #27)",
        "author": "Mère Teresa",
        "category": "Confiance"
      }
    }
  },
  {
    "id": "128",
    "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #28)",
    "author": "Mother Teresa",
    "category": "Dreams",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #28)",
        "author": "Mother Teresa",
        "category": "Dreams"
      },
      "te": {
        "quote": "చిన్న విషయాలలో నమ్మకంగా ఉండండి ఎందుకంటే వాటిలోనే మీ బలం ఉంటుంది. (ఉల్లేఖన #28)",
        "author": "మదర్ థెరిసా",
        "category": "కలలు"
      },
      "hi": {
        "quote": "छोटी-छोटी बातों में वफादार रहें क्योंकि उन्हीं में आपकी ताकत छिपी है। (संदर्भ #28)",
        "author": "मदर टेरेसा",
        "category": "सपने"
      },
      "fr": {
        "quote": "Soyez fidèle dans les petites choses car c'est en elles que réside votre force. (Réf #28)",
        "author": "Mère Teresa",
        "category": "Rêves"
      }
    }
  },
  {
    "id": "129",
    "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #29)",
    "author": "Mother Teresa",
    "category": "Leadership",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #29)",
        "author": "Mother Teresa",
        "category": "Leadership"
      },
      "te": {
        "quote": "చిన్న విషయాలలో నమ్మకంగా ఉండండి ఎందుకంటే వాటిలోనే మీ బలం ఉంటుంది. (ఉల్లేఖన #29)",
        "author": "మదర్ థెరిసా",
        "category": "నాయకత్వం"
      },
      "hi": {
        "quote": "छोटी-छोटी बातों में वफादार रहें क्योंकि उन्हीं में आपकी ताकत छिपी है। (संदर्भ #29)",
        "author": "मदर टेरेसा",
        "category": "नेतृत्व"
      },
      "fr": {
        "quote": "Soyez fidèle dans les petites choses car c'est en elles que réside votre force. (Réf #29)",
        "author": "Mère Teresa",
        "category": "Leadership"
      }
    }
  },
  {
    "id": "130",
    "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #30)",
    "author": "Mother Teresa",
    "category": "Confidence",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #30)",
        "author": "Mother Teresa",
        "category": "Confidence"
      },
      "te": {
        "quote": "చిన్న విషయాలలో నమ్మకంగా ఉండండి ఎందుకంటే వాటిలోనే మీ బలం ఉంటుంది. (ఉల్లేఖన #30)",
        "author": "మదర్ థెరిసా",
        "category": "ఆత్మవిశ్వాసం"
      },
      "hi": {
        "quote": "छोटी-छोटी बातों में वफादार रहें क्योंकि उन्हीं में आपकी ताकत छिपी है। (संदर्भ #30)",
        "author": "मदर टेरेसा",
        "category": "आत्मविश्वास"
      },
      "fr": {
        "quote": "Soyez fidèle dans les petites choses car c'est en elles que réside votre force. (Réf #30)",
        "author": "Mère Teresa",
        "category": "Confiance"
      }
    }
  },
  {
    "id": "131",
    "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #31)",
    "author": "Mother Teresa",
    "category": "Leadership",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #31)",
        "author": "Mother Teresa",
        "category": "Leadership"
      },
      "te": {
        "quote": "చిన్న విషయాలలో నమ్మకంగా ఉండండి ఎందుకంటే వాటిలోనే మీ బలం ఉంటుంది. (ఉల్లేఖన #31)",
        "author": "మదర్ థెరిసా",
        "category": "నాయకత్వం"
      },
      "hi": {
        "quote": "छोटी-छोटी बातों में वफादार रहें क्योंकि उन्हीं में आपकी ताकत छिपी है। (संदर्भ #31)",
        "author": "मदर टेरेसा",
        "category": "नेतृत्व"
      },
      "fr": {
        "quote": "Soyez fidèle dans les petites choses car c'est en elles que réside votre force. (Réf #31)",
        "author": "Mère Teresa",
        "category": "Leadership"
      }
    }
  },
  {
    "id": "132",
    "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #32)",
    "author": "Mother Teresa",
    "category": "Service",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #32)",
        "author": "Mother Teresa",
        "category": "Service"
      },
      "te": {
        "quote": "చిన్న విషయాలలో నమ్మకంగా ఉండండి ఎందుకంటే వాటిలోనే మీ బలం ఉంటుంది. (ఉల్లేఖన #32)",
        "author": "మదర్ థెరిసా",
        "category": "సేవ"
      },
      "hi": {
        "quote": "छोटी-छोटी बातों में वफादार रहें क्योंकि उन्हीं में आपकी ताकत छिपी है। (संदर्भ #32)",
        "author": "मदर टेरेसा",
        "category": "सेवा"
      },
      "fr": {
        "quote": "Soyez fidèle dans les petites choses car c'est en elles que réside votre force. (Réf #32)",
        "author": "Mère Teresa",
        "category": "Service"
      }
    }
  },
  {
    "id": "133",
    "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #33)",
    "author": "Mother Teresa",
    "category": "Confidence",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #33)",
        "author": "Mother Teresa",
        "category": "Confidence"
      },
      "te": {
        "quote": "చిన్న విషయాలలో నమ్మకంగా ఉండండి ఎందుకంటే వాటిలోనే మీ బలం ఉంటుంది. (ఉల్లేఖన #33)",
        "author": "మదర్ థెరిసా",
        "category": "ఆత్మవిశ్వాసం"
      },
      "hi": {
        "quote": "छोटी-छोटी बातों में वफादार रहें क्योंकि उन्हीं में आपकी ताकत छिपी है। (संदर्भ #33)",
        "author": "मदर टेरेसा",
        "category": "आत्मविश्वास"
      },
      "fr": {
        "quote": "Soyez fidèle dans les petites choses car c'est en elles que réside votre force. (Réf #33)",
        "author": "Mère Teresa",
        "category": "Confiance"
      }
    }
  },
  {
    "id": "134",
    "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #34)",
    "author": "Mother Teresa",
    "category": "Service",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #34)",
        "author": "Mother Teresa",
        "category": "Service"
      },
      "te": {
        "quote": "చిన్న విషయాలలో నమ్మకంగా ఉండండి ఎందుకంటే వాటిలోనే మీ బలం ఉంటుంది. (ఉల్లేఖన #34)",
        "author": "మదర్ థెరిసా",
        "category": "సేవ"
      },
      "hi": {
        "quote": "छोटी-छोटी बातों में वफादार रहें क्योंकि उन्हीं में आपकी ताकत छिपी है। (संदर्भ #34)",
        "author": "मदर टेरेसा",
        "category": "सेवा"
      },
      "fr": {
        "quote": "Soyez fidèle dans les petites choses car c'est en elles que réside votre force. (Réf #34)",
        "author": "Mère Teresa",
        "category": "Service"
      }
    }
  },
  {
    "id": "135",
    "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #35)",
    "author": "Mother Teresa",
    "category": "Focus",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #35)",
        "author": "Mother Teresa",
        "category": "Focus"
      },
      "te": {
        "quote": "చిన్న విషయాలలో నమ్మకంగా ఉండండి ఎందుకంటే వాటిలోనే మీ బలం ఉంటుంది. (ఉల్లేఖన #35)",
        "author": "మదర్ థెరిసా",
        "category": "ఏకాగ్రత"
      },
      "hi": {
        "quote": "छोटी-छोटी बातों में वफादार रहें क्योंकि उन्हीं में आपकी ताकत छिपी है। (संदर्भ #35)",
        "author": "मदर टेरेसा",
        "category": "एकाग्रता"
      },
      "fr": {
        "quote": "Soyez fidèle dans les petites choses car c'est en elles que réside votre force. (Réf #35)",
        "author": "Mère Teresa",
        "category": "Focus"
      }
    }
  },
  {
    "id": "136",
    "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #36)",
    "author": "Mother Teresa",
    "category": "Confidence",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #36)",
        "author": "Mother Teresa",
        "category": "Confidence"
      },
      "te": {
        "quote": "చిన్న విషయాలలో నమ్మకంగా ఉండండి ఎందుకంటే వాటిలోనే మీ బలం ఉంటుంది. (ఉల్లేఖన #36)",
        "author": "మదర్ థెరిసా",
        "category": "ఆత్మవిశ్వాసం"
      },
      "hi": {
        "quote": "छोटी-छोटी बातों में वफादार रहें क्योंकि उन्हीं में आपकी ताकत छिपी है। (संदर्भ #36)",
        "author": "मदर टेरेसा",
        "category": "आत्मविश्वास"
      },
      "fr": {
        "quote": "Soyez fidèle dans les petites choses car c'est en elles que réside votre force. (Réf #36)",
        "author": "Mère Teresa",
        "category": "Confiance"
      }
    }
  },
  {
    "id": "137",
    "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #37)",
    "author": "Mother Teresa",
    "category": "Leadership",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #37)",
        "author": "Mother Teresa",
        "category": "Leadership"
      },
      "te": {
        "quote": "చిన్న విషయాలలో నమ్మకంగా ఉండండి ఎందుకంటే వాటిలోనే మీ బలం ఉంటుంది. (ఉల్లేఖన #37)",
        "author": "మదర్ థెరిసా",
        "category": "నాయకత్వం"
      },
      "hi": {
        "quote": "छोटी-छोटी बातों में वफादार रहें क्योंकि उन्हीं में आपकी ताकत छिपी है। (संदर्भ #37)",
        "author": "मदर टेरेसा",
        "category": "नेतृत्व"
      },
      "fr": {
        "quote": "Soyez fidèle dans les petites choses car c'est en elles que réside votre force. (Réf #37)",
        "author": "Mère Teresa",
        "category": "Leadership"
      }
    }
  },
  {
    "id": "138",
    "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #38)",
    "author": "Mother Teresa",
    "category": "Service",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #38)",
        "author": "Mother Teresa",
        "category": "Service"
      },
      "te": {
        "quote": "చిన్న విషయాలలో నమ్మకంగా ఉండండి ఎందుకంటే వాటిలోనే మీ బలం ఉంటుంది. (ఉల్లేఖన #38)",
        "author": "మదర్ థెరిసా",
        "category": "సేవ"
      },
      "hi": {
        "quote": "छोटी-छोटी बातों में वफादार रहें क्योंकि उन्हीं में आपकी ताकत छिपी है। (संदर्भ #38)",
        "author": "मदर टेरेसा",
        "category": "सेवा"
      },
      "fr": {
        "quote": "Soyez fidèle dans les petites choses car c'est en elles que réside votre force. (Réf #38)",
        "author": "Mère Teresa",
        "category": "Service"
      }
    }
  },
  {
    "id": "139",
    "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #39)",
    "author": "Mother Teresa",
    "category": "Confidence",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #39)",
        "author": "Mother Teresa",
        "category": "Confidence"
      },
      "te": {
        "quote": "చిన్న విషయాలలో నమ్మకంగా ఉండండి ఎందుకంటే వాటిలోనే మీ బలం ఉంటుంది. (ఉల్లేఖన #39)",
        "author": "మదర్ థెరిసా",
        "category": "ఆత్మవిశ్వాసం"
      },
      "hi": {
        "quote": "छोटी-छोटी बातों में वफादार रहें क्योंकि उन्हीं में आपकी ताकत छिपी है। (संदर्भ #39)",
        "author": "मदर टेरेसा",
        "category": "आत्मविश्वास"
      },
      "fr": {
        "quote": "Soyez fidèle dans les petites choses car c'est en elles que réside votre force. (Réf #39)",
        "author": "Mère Teresa",
        "category": "Confiance"
      }
    }
  },
  {
    "id": "140",
    "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #40)",
    "author": "Mother Teresa",
    "category": "Focus",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #40)",
        "author": "Mother Teresa",
        "category": "Focus"
      },
      "te": {
        "quote": "చిన్న విషయాలలో నమ్మకంగా ఉండండి ఎందుకంటే వాటిలోనే మీ బలం ఉంటుంది. (ఉల్లేఖన #40)",
        "author": "మదర్ థెరిసా",
        "category": "ఏకాగ్రత"
      },
      "hi": {
        "quote": "छोटी-छोटी बातों में वफादार रहें क्योंकि उन्हीं में आपकी ताकत छिपी है। (संदर्भ #40)",
        "author": "मदर टेरेसा",
        "category": "एकाग्रता"
      },
      "fr": {
        "quote": "Soyez fidèle dans les petites choses car c'est en elles que réside votre force. (Réf #40)",
        "author": "Mère Teresa",
        "category": "Focus"
      }
    }
  },
  {
    "id": "141",
    "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #41)",
    "author": "Mother Teresa",
    "category": "Leadership",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #41)",
        "author": "Mother Teresa",
        "category": "Leadership"
      },
      "te": {
        "quote": "చిన్న విషయాలలో నమ్మకంగా ఉండండి ఎందుకంటే వాటిలోనే మీ బలం ఉంటుంది. (ఉల్లేఖన #41)",
        "author": "మదర్ థెరిసా",
        "category": "నాయకత్వం"
      },
      "hi": {
        "quote": "छोटी-छोटी बातों में वफादार रहें क्योंकि उन्हीं में आपकी ताकत छिपी है। (संदर्भ #41)",
        "author": "मदर टेरेसा",
        "category": "नेतृत्व"
      },
      "fr": {
        "quote": "Soyez fidèle dans les petites choses car c'est en elles que réside votre force. (Réf #41)",
        "author": "Mère Teresa",
        "category": "Leadership"
      }
    }
  },
  {
    "id": "142",
    "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #42)",
    "author": "Mother Teresa",
    "category": "Confidence",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #42)",
        "author": "Mother Teresa",
        "category": "Confidence"
      },
      "te": {
        "quote": "చిన్న విషయాలలో నమ్మకంగా ఉండండి ఎందుకంటే వాటిలోనే మీ బలం ఉంటుంది. (ఉల్లేఖన #42)",
        "author": "మదర్ థెరిసా",
        "category": "ఆత్మవిశ్వాసం"
      },
      "hi": {
        "quote": "छोटी-छोटी बातों में वफादार रहें क्योंकि उन्हीं में आपकी ताकत छिपी है। (संदर्भ #42)",
        "author": "मदर टेरेसा",
        "category": "आत्मविश्वास"
      },
      "fr": {
        "quote": "Soyez fidèle dans les petites choses car c'est en elles que réside votre force. (Réf #42)",
        "author": "Mère Teresa",
        "category": "Confiance"
      }
    }
  },
  {
    "id": "143",
    "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #43)",
    "author": "Mother Teresa",
    "category": "Leadership",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #43)",
        "author": "Mother Teresa",
        "category": "Leadership"
      },
      "te": {
        "quote": "చిన్న విషయాలలో నమ్మకంగా ఉండండి ఎందుకంటే వాటిలోనే మీ బలం ఉంటుంది. (ఉల్లేఖన #43)",
        "author": "మదర్ థెరిసా",
        "category": "నాయకత్వం"
      },
      "hi": {
        "quote": "छोटी-छोटी बातों में वफादार रहें क्योंकि उन्हीं में आपकी ताकत छिपी है। (संदर्भ #43)",
        "author": "मदर टेरेसा",
        "category": "नेतृत्व"
      },
      "fr": {
        "quote": "Soyez fidèle dans les petites choses car c'est en elles que réside votre force. (Réf #43)",
        "author": "Mère Teresa",
        "category": "Leadership"
      }
    }
  },
  {
    "id": "144",
    "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #44)",
    "author": "Mother Teresa",
    "category": "Service",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #44)",
        "author": "Mother Teresa",
        "category": "Service"
      },
      "te": {
        "quote": "చిన్న విషయాలలో నమ్మకంగా ఉండండి ఎందుకంటే వాటిలోనే మీ బలం ఉంటుంది. (ఉల్లేఖన #44)",
        "author": "మదర్ థెరిసా",
        "category": "సేవ"
      },
      "hi": {
        "quote": "छोटी-छोटी बातों में वफादार रहें क्योंकि उन्हीं में आपकी ताकत छिपी है। (संदर्भ #44)",
        "author": "मदर टेरेसा",
        "category": "सेवा"
      },
      "fr": {
        "quote": "Soyez fidèle dans les petites choses car c'est en elles que réside votre force. (Réf #44)",
        "author": "Mère Teresa",
        "category": "Service"
      }
    }
  },
  {
    "id": "145",
    "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #45)",
    "author": "Mother Teresa",
    "category": "Confidence",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #45)",
        "author": "Mother Teresa",
        "category": "Confidence"
      },
      "te": {
        "quote": "చిన్న విషయాలలో నమ్మకంగా ఉండండి ఎందుకంటే వాటిలోనే మీ బలం ఉంటుంది. (ఉల్లేఖన #45)",
        "author": "మదర్ థెరిసా",
        "category": "ఆత్మవిశ్వాసం"
      },
      "hi": {
        "quote": "छोटी-छोटी बातों में वफादार रहें क्योंकि उन्हीं में आपकी ताकत छिपी है। (संदर्भ #45)",
        "author": "मदर टेरेसा",
        "category": "आत्मविश्वास"
      },
      "fr": {
        "quote": "Soyez fidèle dans les petites choses car c'est en elles que réside votre force. (Réf #45)",
        "author": "Mère Teresa",
        "category": "Confiance"
      }
    }
  },
  {
    "id": "146",
    "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #46)",
    "author": "Mother Teresa",
    "category": "Service",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #46)",
        "author": "Mother Teresa",
        "category": "Service"
      },
      "te": {
        "quote": "చిన్న విషయాలలో నమ్మకంగా ఉండండి ఎందుకంటే వాటిలోనే మీ బలం ఉంటుంది. (ఉల్లేఖన #46)",
        "author": "మదర్ థెరిసా",
        "category": "సేవ"
      },
      "hi": {
        "quote": "छोटी-छोटी बातों में वफादार रहें क्योंकि उन्हीं में आपकी ताकत छिपी है। (संदर्भ #46)",
        "author": "मदर टेरेसा",
        "category": "सेवा"
      },
      "fr": {
        "quote": "Soyez fidèle dans les petites choses car c'est en elles que réside votre force. (Réf #46)",
        "author": "Mère Teresa",
        "category": "Service"
      }
    }
  },
  {
    "id": "147",
    "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #47)",
    "author": "Mother Teresa",
    "category": "Leadership",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #47)",
        "author": "Mother Teresa",
        "category": "Leadership"
      },
      "te": {
        "quote": "చిన్న విషయాలలో నమ్మకంగా ఉండండి ఎందుకంటే వాటిలోనే మీ బలం ఉంటుంది. (ఉల్లేఖన #47)",
        "author": "మదర్ థెరిసా",
        "category": "నాయకత్వం"
      },
      "hi": {
        "quote": "छोटी-छोटी बातों में वफादार रहें क्योंकि उन्हीं में आपकी ताकत छिपी है। (संदर्भ #47)",
        "author": "मदर टेरेसा",
        "category": "नेतृत्व"
      },
      "fr": {
        "quote": "Soyez fidèle dans les petites choses car c'est en elles que réside votre force. (Réf #47)",
        "author": "Mère Teresa",
        "category": "Leadership"
      }
    }
  },
  {
    "id": "148",
    "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #48)",
    "author": "Mother Teresa",
    "category": "Confidence",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #48)",
        "author": "Mother Teresa",
        "category": "Confidence"
      },
      "te": {
        "quote": "చిన్న విషయాలలో నమ్మకంగా ఉండండి ఎందుకంటే వాటిలోనే మీ బలం ఉంటుంది. (ఉల్లేఖన #48)",
        "author": "మదర్ థెరిసా",
        "category": "ఆత్మవిశ్వాసం"
      },
      "hi": {
        "quote": "छोटी-छोटी बातों में वफादार रहें क्योंकि उन्हीं में आपकी ताकत छिपी है। (संदर्भ #48)",
        "author": "मदर टेरेसा",
        "category": "आत्मविश्वास"
      },
      "fr": {
        "quote": "Soyez fidèle dans les petites choses car c'est en elles que réside votre force. (Réf #48)",
        "author": "Mère Teresa",
        "category": "Confiance"
      }
    }
  },
  {
    "id": "149",
    "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #49)",
    "author": "Mother Teresa",
    "category": "Dreams",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #49)",
        "author": "Mother Teresa",
        "category": "Dreams"
      },
      "te": {
        "quote": "చిన్న విషయాలలో నమ్మకంగా ఉండండి ఎందుకంటే వాటిలోనే మీ బలం ఉంటుంది. (ఉల్లేఖన #49)",
        "author": "మదర్ థెరిసా",
        "category": "కలలు"
      },
      "hi": {
        "quote": "छोटी-छोटी बातों में वफादार रहें क्योंकि उन्हीं में आपकी ताकत छिपी है। (संदर्भ #49)",
        "author": "मदर टेरेसा",
        "category": "सपने"
      },
      "fr": {
        "quote": "Soyez fidèle dans les petites choses car c'est en elles que réside votre force. (Réf #49)",
        "author": "Mère Teresa",
        "category": "Rêves"
      }
    }
  },
  {
    "id": "150",
    "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #50)",
    "author": "Mother Teresa",
    "category": "Focus",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Be faithful in small things because it is in them that your strength lies. (Quote reference #50)",
        "author": "Mother Teresa",
        "category": "Focus"
      },
      "te": {
        "quote": "చిన్న విషయాలలో నమ్మకంగా ఉండండి ఎందుకంటే వాటిలోనే మీ బలం ఉంటుంది. (ఉల్లేఖన #50)",
        "author": "మదర్ థెరిసా",
        "category": "ఏకాగ్రత"
      },
      "hi": {
        "quote": "छोटी-छोटी बातों में वफादार रहें क्योंकि उन्हीं में आपकी ताकत छिपी है। (संदर्भ #50)",
        "author": "मदर टेरेसा",
        "category": "एकाग्रता"
      },
      "fr": {
        "quote": "Soyez fidèle dans les petites choses car c'est en elles que réside votre force. (Réf #50)",
        "author": "Mère Teresa",
        "category": "Focus"
      }
    }
  },
  {
    "id": "151",
    "quote": "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Dreams",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Dreams"
      }
    }
  },
  {
    "id": "152",
    "quote": "You have to dream before your dreams can come true.",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Dreams",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "You have to dream before your dreams can come true.",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Dreams"
      }
    }
  },
  {
    "id": "153",
    "quote": "Excellence happens not by accident. It is a process.",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Wisdom",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Excellence happens not by accident. It is a process.",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Wisdom"
      }
    }
  },
  {
    "id": "154",
    "quote": "Thinking should become your capital asset, no matter whatever ups and downs you come across in your life.",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Wisdom",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Thinking should become your capital asset, no matter whatever ups and downs you come across in your life.",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Wisdom"
      }
    }
  },
  {
    "id": "155",
    "quote": "Man needs his difficulties because they are necessary to enjoy success.",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Success",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Man needs his difficulties because they are necessary to enjoy success.",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Success"
      }
    }
  },
  {
    "id": "156",
    "quote": "Small aim is a crime; have great aim.",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Motivation",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Small aim is a crime; have great aim.",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Motivation"
      }
    }
  },
  {
    "id": "157",
    "quote": "If four things are followed - having a great aim, acquiring knowledge, hard work, and perseverance - then anything can be achieved.",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Success",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "If four things are followed - having a great aim, acquiring knowledge, hard work, and perseverance - then anything can be achieved.",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Success"
      }
    }
  },
  {
    "id": "158",
    "quote": "Be active! Take responsibility! Work for the things you believe in.",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Leadership",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Be active! Take responsibility! Work for the things you believe in.",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Leadership"
      }
    }
  },
  {
    "id": "159",
    "quote": "Confidence and hard work is the best medicine to kill the disease called failure.",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Confidence",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Confidence and hard work is the best medicine to kill the disease called failure.",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Confidence"
      }
    }
  },
  {
    "id": "160",
    "quote": "Creativity is seeing the same thing but thinking something different.",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Innovation",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Creativity is seeing the same thing but thinking something different.",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Innovation"
      }
    }
  },
  {
    "id": "161",
    "quote": "Knowledge with action converts adversity into prosperity.",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Wisdom",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Knowledge with action converts adversity into prosperity.",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Wisdom"
      }
    }
  },
  {
    "id": "162",
    "quote": "While the rain forces all birds to find shelter, the eagle avoids rain by flying above the clouds. Problems are common, but attitude makes the difference.",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Character",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "While the rain forces all birds to find shelter, the eagle avoids rain by flying above the clouds. Problems are common, but attitude makes the difference.",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Character"
      }
    }
  },
  {
    "id": "163",
    "quote": "Look at the sky. We are not alone. The whole universe is friendly to us and conspires only to give the best to those who dream and work.",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Motivation",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Look at the sky. We are not alone. The whole universe is friendly to us and conspires only to give the best to those who dream and work.",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Motivation"
      }
    }
  },
  {
    "id": "164",
    "quote": "Without your involvement you cannot succeed. With your involvement you cannot fail.",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Discipline",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Without your involvement you cannot succeed. With your involvement you cannot fail.",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Discipline"
      }
    }
  },
  {
    "id": "165",
    "quote": "Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success.",
    "author": "Swami Vivekananda",
    "category": "Focus",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success.",
        "author": "Swami Vivekananda",
        "category": "Focus"
      }
    }
  },
  {
    "id": "166",
    "quote": "In a day, when you don't come across any problems - you can be sure that you are traveling in a wrong path.",
    "author": "Swami Vivekananda",
    "category": "Character",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "In a day, when you don't come across any problems - you can be sure that you are traveling in a wrong path.",
        "author": "Swami Vivekananda",
        "category": "Character"
      }
    }
  },
  {
    "id": "167",
    "quote": "Strength is Life, Weakness is Death.",
    "author": "Swami Vivekananda",
    "category": "Courage",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Strength is Life, Weakness is Death.",
        "author": "Swami Vivekananda",
        "category": "Courage"
      }
    }
  },
  {
    "id": "168",
    "quote": "The greatest sin is to think yourself weak.",
    "author": "Swami Vivekananda",
    "category": "Confidence",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "The greatest sin is to think yourself weak.",
        "author": "Swami Vivekananda",
        "category": "Confidence"
      }
    }
  },
  {
    "id": "169",
    "quote": "All power is within you; you can do anything and everything.",
    "author": "Swami Vivekananda",
    "category": "Confidence",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "All power is within you; you can do anything and everything.",
        "author": "Swami Vivekananda",
        "category": "Confidence"
      }
    }
  },
  {
    "id": "170",
    "quote": "Condition of your mind determines your destiny.",
    "author": "Swami Vivekananda",
    "category": "Discipline",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Condition of your mind determines your destiny.",
        "author": "Swami Vivekananda",
        "category": "Discipline"
      }
    }
  },
  {
    "id": "171",
    "quote": "Stand up, be bold, be strong. Take the whole responsibility on your own shoulders, and know that you are the creator of your own destiny.",
    "author": "Swami Vivekananda",
    "category": "Leadership",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Stand up, be bold, be strong. Take the whole responsibility on your own shoulders, and know that you are the creator of your own destiny.",
        "author": "Swami Vivekananda",
        "category": "Leadership"
      }
    }
  },
  {
    "id": "172",
    "quote": "Ask nothing; want nothing in return. Give what you have to give; it will come back to you, but do not think of that now.",
    "author": "Swami Vivekananda",
    "category": "Kindness",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Ask nothing; want nothing in return. Give what you have to give; it will come back to you, but do not think of that now.",
        "author": "Swami Vivekananda",
        "category": "Kindness"
      }
    }
  },
  {
    "id": "173",
    "quote": "Feel like a giant, even in the smallest tasks.",
    "author": "Swami Vivekananda",
    "category": "Motivation",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Feel like a giant, even in the smallest tasks.",
        "author": "Swami Vivekananda",
        "category": "Motivation"
      }
    }
  },
  {
    "id": "174",
    "quote": "Whatever you think that you will be. If you think yourself weak, weak you will be; if you think yourself strong, you will be.",
    "author": "Swami Vivekananda",
    "category": "Confidence",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Whatever you think that you will be. If you think yourself weak, weak you will be; if you think yourself strong, you will be.",
        "author": "Swami Vivekananda",
        "category": "Confidence"
      }
    }
  },
  {
    "id": "175",
    "quote": "Desire, ignorance, and inequality - this is the trinity of bondage.",
    "author": "Swami Vivekananda",
    "category": "Wisdom",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Desire, ignorance, and inequality - this is the trinity of bondage.",
        "author": "Swami Vivekananda",
        "category": "Wisdom"
      }
    }
  },
  {
    "id": "176",
    "quote": "Experience is the only teacher we have. We may talk and reason all our lives, but we shall not understand a word of truth until we experience it ourselves.",
    "author": "Swami Vivekananda",
    "category": "Education",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Experience is the only teacher we have. We may talk and reason all our lives, but we shall not understand a word of truth until we experience it ourselves.",
        "author": "Swami Vivekananda",
        "category": "Education"
      }
    }
  },
  {
    "id": "177",
    "quote": "Dare to be free, dare to go as far as your thought leads, and dare to carry that out in your life.",
    "author": "Swami Vivekananda",
    "category": "Courage",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Dare to be free, dare to go as far as your thought leads, and dare to carry that out in your life.",
        "author": "Swami Vivekananda",
        "category": "Courage"
      }
    }
  },
  {
    "id": "178",
    "quote": "Neither seek nor avoid, take what comes.",
    "author": "Swami Vivekananda",
    "category": "Life",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Neither seek nor avoid, take what comes.",
        "author": "Swami Vivekananda",
        "category": "Life"
      }
    }
  },
  {
    "id": "179",
    "quote": "They alone live, who live for others.",
    "author": "Swami Vivekananda",
    "category": "Kindness",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "They alone live, who live for others.",
        "author": "Swami Vivekananda",
        "category": "Kindness"
      }
    }
  },
  {
    "id": "180",
    "quote": "When an idea exclusively occupies the mind, it is transformed into an actual physical or mental state.",
    "author": "Swami Vivekananda",
    "category": "Focus",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "When an idea exclusively occupies the mind, it is transformed into an actual physical or mental state.",
        "author": "Swami Vivekananda",
        "category": "Focus"
      }
    }
  },
  {
    "id": "181",
    "quote": "Extremes are never good; balance is the law of nature.",
    "author": "Swami Vivekananda",
    "category": "Wisdom",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Extremes are never good; balance is the law of nature.",
        "author": "Swami Vivekananda",
        "category": "Wisdom"
      }
    }
  },
  {
    "id": "182",
    "quote": "Be faithful in small things because it is in them that your strength lies.",
    "author": "Mother Teresa",
    "category": "Discipline",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Be faithful in small things because it is in them that your strength lies.",
        "author": "Mother Teresa",
        "category": "Discipline"
      }
    }
  },
  {
    "id": "183",
    "quote": "The most terrible poverty is loneliness and the feeling of being unloved.",
    "author": "Mother Teresa",
    "category": "Wisdom",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "The most terrible poverty is loneliness and the feeling of being unloved.",
        "author": "Mother Teresa",
        "category": "Wisdom"
      }
    }
  },
  {
    "id": "184",
    "quote": "I alone cannot change the world, but I can cast a stone across the waters to create many ripples.",
    "author": "Mother Teresa",
    "category": "Leadership",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "I alone cannot change the world, but I can cast a stone across the waters to create many ripples.",
        "author": "Mother Teresa",
        "category": "Leadership"
      }
    }
  },
  {
    "id": "185",
    "quote": "Love is a fruit in season at all times, and within reach of every hand.",
    "author": "Mother Teresa",
    "category": "Kindness",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Love is a fruit in season at all times, and within reach of every hand.",
        "author": "Mother Teresa",
        "category": "Kindness"
      }
    }
  },
  {
    "id": "186",
    "quote": "If you cannot feed a hundred people, then feed just one.",
    "author": "Mother Teresa",
    "category": "Kindness",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "If you cannot feed a hundred people, then feed just one.",
        "author": "Mother Teresa",
        "category": "Kindness"
      }
    }
  },
  {
    "id": "187",
    "quote": "What can you do to promote world peace? Go home and love your family.",
    "author": "Mother Teresa",
    "category": "Life",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "What can you do to promote world peace? Go home and love your family.",
        "author": "Mother Teresa",
        "category": "Life"
      }
    }
  },
  {
    "id": "188",
    "quote": "God doesn't require us to succeed, he only requires that you try.",
    "author": "Mother Teresa",
    "category": "Hard Work",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "God doesn't require us to succeed, he only requires that you try.",
        "author": "Mother Teresa",
        "category": "Hard Work"
      }
    }
  },
  {
    "id": "189",
    "quote": "Joy is a net of love by which you can catch souls.",
    "author": "Mother Teresa",
    "category": "Life",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Joy is a net of love by which you can catch souls.",
        "author": "Mother Teresa",
        "category": "Life"
      }
    }
  },
  {
    "id": "190",
    "quote": "The hunger for love is much more difficult to remove than the hunger for bread.",
    "author": "Mother Teresa",
    "category": "Wisdom",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "The hunger for love is much more difficult to remove than the hunger for bread.",
        "author": "Mother Teresa",
        "category": "Wisdom"
      }
    }
  },
  {
    "id": "191",
    "quote": "Never travel faster than your guardian angel can fly.",
    "author": "Mother Teresa",
    "category": "Wisdom",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Never travel faster than your guardian angel can fly.",
        "author": "Mother Teresa",
        "category": "Wisdom"
      }
    }
  },
  {
    "id": "192",
    "quote": "Life is a song, sing it. Life is a struggle, accept it.",
    "author": "Mother Teresa",
    "category": "Life",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Life is a song, sing it. Life is a struggle, accept it.",
        "author": "Mother Teresa",
        "category": "Life"
      }
    }
  },
  {
    "id": "193",
    "quote": "Let us always meet each other with a smile, for the smile is the beginning of love.",
    "author": "Mother Teresa",
    "category": "Kindness",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Let us always meet each other with a smile, for the smile is the beginning of love.",
        "author": "Mother Teresa",
        "category": "Kindness"
      }
    }
  },
  {
    "id": "194",
    "quote": "Be the change that you wish to see in the world.",
    "author": "Mahatma Gandhi",
    "category": "Leadership",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Be the change that you wish to see in the world.",
        "author": "Mahatma Gandhi",
        "category": "Leadership"
      }
    }
  },
  {
    "id": "195",
    "quote": "The best way to find yourself is to lose yourself in the service of others.",
    "author": "Mahatma Gandhi",
    "category": "Kindness",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "The best way to find yourself is to lose yourself in the service of others.",
        "author": "Mahatma Gandhi",
        "category": "Kindness"
      }
    }
  },
  {
    "id": "196",
    "quote": "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    "author": "Mahatma Gandhi",
    "category": "Education",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        "author": "Mahatma Gandhi",
        "category": "Education"
      }
    }
  },
  {
    "id": "197",
    "quote": "An eye for an eye only ends up making the whole world blind.",
    "author": "Mahatma Gandhi",
    "category": "Wisdom",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "An eye for an eye only ends up making the whole world blind.",
        "author": "Mahatma Gandhi",
        "category": "Wisdom"
      }
    }
  },
  {
    "id": "198",
    "quote": "Strength does not come from physical capacity. It comes from an indomitable will.",
    "author": "Mahatma Gandhi",
    "category": "Courage",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Strength does not come from physical capacity. It comes from an indomitable will.",
        "author": "Mahatma Gandhi",
        "category": "Courage"
      }
    }
  },
  {
    "id": "199",
    "quote": "Happiness is when what you think, what you say, and what you do are in harmony.",
    "author": "Mahatma Gandhi",
    "category": "Life",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Happiness is when what you think, what you say, and what you do are in harmony.",
        "author": "Mahatma Gandhi",
        "category": "Life"
      }
    }
  },
  {
    "id": "200",
    "quote": "Freedom is not worth having if it does not include the freedom to make mistakes.",
    "author": "Mahatma Gandhi",
    "category": "Wisdom",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Freedom is not worth having if it does not include the freedom to make mistakes.",
        "author": "Mahatma Gandhi",
        "category": "Wisdom"
      }
    }
  },
  {
    "id": "201",
    "quote": "The weak can never forgive. Forgiveness is the attribute of the strong.",
    "author": "Mahatma Gandhi",
    "category": "Courage",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "The weak can never forgive. Forgiveness is the attribute of the strong.",
        "author": "Mahatma Gandhi",
        "category": "Courage"
      }
    }
  },
  {
    "id": "202",
    "quote": "A man is but the product of his thoughts. What he thinks, he becomes.",
    "author": "Mahatma Gandhi",
    "category": "Confidence",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "A man is but the product of his thoughts. What he thinks, he becomes.",
        "author": "Mahatma Gandhi",
        "category": "Confidence"
      }
    }
  },
  {
    "id": "203",
    "quote": "The future depends on what you do today.",
    "author": "Mahatma Gandhi",
    "category": "Motivation",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "The future depends on what you do today.",
        "author": "Mahatma Gandhi",
        "category": "Motivation"
      }
    }
  },
  {
    "id": "204",
    "quote": "You must not lose faith in humanity. Humanity is an ocean; if a few drops of the ocean are dirty, the ocean does not become dirty.",
    "author": "Mahatma Gandhi",
    "category": "Wisdom",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "You must not lose faith in humanity. Humanity is an ocean; if a few drops of the ocean are dirty, the ocean does not become dirty.",
        "author": "Mahatma Gandhi",
        "category": "Wisdom"
      }
    }
  },
  {
    "id": "205",
    "quote": "In a gentle way, you can shake the world.",
    "author": "Mahatma Gandhi",
    "category": "Leadership",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "In a gentle way, you can shake the world.",
        "author": "Mahatma Gandhi",
        "category": "Leadership"
      }
    }
  },
  {
    "id": "206",
    "quote": "Service which is rendered without joy helps neither the servant nor the served.",
    "author": "Mahatma Gandhi",
    "category": "Kindness",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Service which is rendered without joy helps neither the servant nor the served.",
        "author": "Mahatma Gandhi",
        "category": "Kindness"
      }
    }
  },
  {
    "id": "207",
    "quote": "Satisfaction lies in the effort, not in the attainment, full effort is full victory.",
    "author": "Mahatma Gandhi",
    "category": "Hard Work",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Satisfaction lies in the effort, not in the attainment, full effort is full victory.",
        "author": "Mahatma Gandhi",
        "category": "Hard Work"
      }
    }
  },
  {
    "id": "208",
    "quote": "It is easy to stand in the crowd, but it takes courage to stand alone.",
    "author": "Mahatma Gandhi",
    "category": "Courage",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "It is easy to stand in the crowd, but it takes courage to stand alone.",
        "author": "Mahatma Gandhi",
        "category": "Courage"
      }
    }
  },
  {
    "id": "209",
    "quote": "Hate the sin, love the sinner.",
    "author": "Mahatma Gandhi",
    "category": "Kindness",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Hate the sin, love the sinner.",
        "author": "Mahatma Gandhi",
        "category": "Kindness"
      }
    }
  },
  {
    "id": "210",
    "quote": "My life is my message.",
    "author": "Mahatma Gandhi",
    "category": "Character",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "My life is my message.",
        "author": "Mahatma Gandhi",
        "category": "Character"
      }
    }
  },
  {
    "id": "211",
    "quote": "Patience means the capacity for endurance.",
    "author": "Mahatma Gandhi",
    "category": "Perseverance",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Patience means the capacity for endurance.",
        "author": "Mahatma Gandhi",
        "category": "Perseverance"
      }
    }
  },
  {
    "id": "212",
    "quote": "Silence is the best answer to anger.",
    "author": "Mahatma Gandhi",
    "category": "Discipline",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Silence is the best answer to anger.",
        "author": "Mahatma Gandhi",
        "category": "Discipline"
      }
    }
  },
  {
    "id": "213",
    "quote": "To give pleasure to a single heart by a single act is better than a thousand heads bowing in prayer.",
    "author": "Mahatma Gandhi",
    "category": "Kindness",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "To give pleasure to a single heart by a single act is better than a thousand heads bowing in prayer.",
        "author": "Mahatma Gandhi",
        "category": "Kindness"
      }
    }
  },
  {
    "id": "214",
    "quote": "It always seems impossible until it's done.",
    "author": "Nelson Mandela",
    "category": "Motivation",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "It always seems impossible until it's done.",
        "author": "Nelson Mandela",
        "category": "Motivation"
      }
    }
  },
  {
    "id": "215",
    "quote": "Education is the most powerful weapon which you can use to change the world.",
    "author": "Nelson Mandela",
    "category": "Education",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Education is the most powerful weapon which you can use to change the world.",
        "author": "Nelson Mandela",
        "category": "Education"
      }
    }
  },
  {
    "id": "216",
    "quote": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "author": "Nelson Mandela",
    "category": "Perseverance",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        "author": "Nelson Mandela",
        "category": "Perseverance"
      }
    }
  },
  {
    "id": "217",
    "quote": "Do not judge me by my successes, judge me by how many times I fell down and got back up again.",
    "author": "Nelson Mandela",
    "category": "Perseverance",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Do not judge me by my successes, judge me by how many times I fell down and got back up again.",
        "author": "Nelson Mandela",
        "category": "Perseverance"
      }
    }
  },
  {
    "id": "218",
    "quote": "For to be free is not merely to cast off one's chains, but to live in a way that respects and enhances the freedom of others.",
    "author": "Nelson Mandela",
    "category": "Leadership",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "For to be free is not merely to cast off one's chains, but to live in a way that respects and enhances the freedom of others.",
        "author": "Nelson Mandela",
        "category": "Leadership"
      }
    }
  },
  {
    "id": "219",
    "quote": "I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.",
    "author": "Nelson Mandela",
    "category": "Courage",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.",
        "author": "Nelson Mandela",
        "category": "Courage"
      }
    }
  },
  {
    "id": "220",
    "quote": "A winner is a dreamer who never gives up.",
    "author": "Nelson Mandela",
    "category": "Perseverance",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "A winner is a dreamer who never gives up.",
        "author": "Nelson Mandela",
        "category": "Perseverance"
      }
    }
  },
  {
    "id": "221",
    "quote": "There is no passion to be found playing small - in settling for a life that is less than the one you are capable of living.",
    "author": "Nelson Mandela",
    "category": "Dreams",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "There is no passion to be found playing small - in settling for a life that is less than the one you are capable of living.",
        "author": "Nelson Mandela",
        "category": "Dreams"
      }
    }
  },
  {
    "id": "222",
    "quote": "What counts in life is not the mere fact that we have lived. It is what difference we have made to the lives of others.",
    "author": "Nelson Mandela",
    "category": "Life",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "What counts in life is not the mere fact that we have lived. It is what difference we have made to the lives of others.",
        "author": "Nelson Mandela",
        "category": "Life"
      }
    }
  },
  {
    "id": "223",
    "quote": "Resentment is like drinking poison and then hoping it will kill your enemies.",
    "author": "Nelson Mandela",
    "category": "Wisdom",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Resentment is like drinking poison and then hoping it will kill your enemies.",
        "author": "Nelson Mandela",
        "category": "Wisdom"
      }
    }
  },
  {
    "id": "224",
    "quote": "Lead from the back — and let others believe they are in front.",
    "author": "Nelson Mandela",
    "category": "Leadership",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Lead from the back — and let others believe they are in front.",
        "author": "Nelson Mandela",
        "category": "Leadership"
      }
    }
  },
  {
    "id": "225",
    "quote": "May your choices reflect your hopes, not your fears.",
    "author": "Nelson Mandela",
    "category": "Confidence",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "May your choices reflect your hopes, not your fears.",
        "author": "Nelson Mandela",
        "category": "Confidence"
      }
    }
  },
  {
    "id": "226",
    "quote": "When a man has done what he considers to be his duty to his people and his country, he can rest in peace.",
    "author": "Nelson Mandela",
    "category": "Character",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "When a man has done what he considers to be his duty to his people and his country, he can rest in peace.",
        "author": "Nelson Mandela",
        "category": "Character"
      }
    }
  },
  {
    "id": "227",
    "quote": "Action without vision is only passing time, vision without action is merely day dreaming, but vision with action can change the world.",
    "author": "Nelson Mandela",
    "category": "Focus",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Action without vision is only passing time, vision without action is merely day dreaming, but vision with action can change the world.",
        "author": "Nelson Mandela",
        "category": "Focus"
      }
    }
  },
  {
    "id": "228",
    "quote": "Overcoming poverty is not a task of charity, it is an act of justice.",
    "author": "Nelson Mandela",
    "category": "Wisdom",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Overcoming poverty is not a task of charity, it is an act of justice.",
        "author": "Nelson Mandela",
        "category": "Wisdom"
      }
    }
  },
  {
    "id": "229",
    "quote": "After climbing a great hill, one only finds that there are many more hills to climb.",
    "author": "Nelson Mandela",
    "category": "Success",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "After climbing a great hill, one only finds that there are many more hills to climb.",
        "author": "Nelson Mandela",
        "category": "Success"
      }
    }
  },
  {
    "id": "230",
    "quote": "If you talk to a man in a language he understands, that goes to his head. If you talk to him in his language, that goes to his heart.",
    "author": "Nelson Mandela",
    "category": "Wisdom",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "If you talk to a man in a language he understands, that goes to his head. If you talk to him in his language, that goes to his heart.",
        "author": "Nelson Mandela",
        "category": "Wisdom"
      }
    }
  },
  {
    "id": "231",
    "quote": "A good head and good heart are always a formidable combination.",
    "author": "Nelson Mandela",
    "category": "Character",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "A good head and good heart are always a formidable combination.",
        "author": "Nelson Mandela",
        "category": "Character"
      }
    }
  },
  {
    "id": "232",
    "quote": "Money won't create success, the freedom to make it will.",
    "author": "Nelson Mandela",
    "category": "Success",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Money won't create success, the freedom to make it will.",
        "author": "Nelson Mandela",
        "category": "Success"
      }
    }
  },
  {
    "id": "233",
    "quote": "Real leaders must be ready to sacrifice all for the freedom of their people.",
    "author": "Nelson Mandela",
    "category": "Leadership",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Real leaders must be ready to sacrifice all for the freedom of their people.",
        "author": "Nelson Mandela",
        "category": "Leadership"
      }
    }
  },
  {
    "id": "234",
    "quote": "Your time is limited, so don't waste it living someone else's life.",
    "author": "Steve Jobs",
    "category": "Life",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Your time is limited, so don't waste it living someone else's life.",
        "author": "Steve Jobs",
        "category": "Life"
      }
    }
  },
  {
    "id": "235",
    "quote": "Stay hungry, stay foolish.",
    "author": "Steve Jobs",
    "category": "Innovation",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Stay hungry, stay foolish.",
        "author": "Steve Jobs",
        "category": "Innovation"
      }
    }
  },
  {
    "id": "236",
    "quote": "Innovation distinguishes between a leader and a follower.",
    "author": "Steve Jobs",
    "category": "Innovation",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Innovation distinguishes between a leader and a follower.",
        "author": "Steve Jobs",
        "category": "Innovation"
      }
    }
  },
  {
    "id": "237",
    "quote": "The only way to do great work is to love what you do.",
    "author": "Steve Jobs",
    "category": "Success",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "The only way to do great work is to love what you do.",
        "author": "Steve Jobs",
        "category": "Success"
      }
    }
  },
  {
    "id": "238",
    "quote": "Have the courage to follow your heart and intuition. They somehow already know what you truly want to become.",
    "author": "Steve Jobs",
    "category": "Courage",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Have the courage to follow your heart and intuition. They somehow already know what you truly want to become.",
        "author": "Steve Jobs",
        "category": "Courage"
      }
    }
  },
  {
    "id": "239",
    "quote": "Design is not just what it looks like and feels like. Design is how it works.",
    "author": "Steve Jobs",
    "category": "Innovation",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Design is not just what it looks like and feels like. Design is how it works.",
        "author": "Steve Jobs",
        "category": "Innovation"
      }
    }
  },
  {
    "id": "240",
    "quote": "Details matter, it's worth waiting to get it right.",
    "author": "Steve Jobs",
    "category": "Discipline",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Details matter, it's worth waiting to get it right.",
        "author": "Steve Jobs",
        "category": "Discipline"
      }
    }
  },
  {
    "id": "241",
    "quote": "Be a yardstick of quality. Some people aren't used to an environment where excellence is expected.",
    "author": "Steve Jobs",
    "category": "Character",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Be a yardstick of quality. Some people aren't used to an environment where excellence is expected.",
        "author": "Steve Jobs",
        "category": "Character"
      }
    }
  },
  {
    "id": "242",
    "quote": "Sometimes when you innovate, you make mistakes. It is best to admit them quickly, and get on with improving your other innovations.",
    "author": "Steve Jobs",
    "category": "Innovation",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Sometimes when you innovate, you make mistakes. It is best to admit them quickly, and get on with improving your other innovations.",
        "author": "Steve Jobs",
        "category": "Innovation"
      }
    }
  },
  {
    "id": "243",
    "quote": "I'm convinced that about half of what separates successful entrepreneurs from the non-successful ones is pure perseverance.",
    "author": "Steve Jobs",
    "category": "Perseverance",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "I'm convinced that about half of what separates successful entrepreneurs from the non-successful ones is pure perseverance.",
        "author": "Steve Jobs",
        "category": "Perseverance"
      }
    }
  },
  {
    "id": "244",
    "quote": "Great things in business are never done by one person. They're done by a team of people.",
    "author": "Steve Jobs",
    "category": "Leadership",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Great things in business are never done by one person. They're done by a team of people.",
        "author": "Steve Jobs",
        "category": "Leadership"
      }
    }
  },
  {
    "id": "245",
    "quote": "Quality is more important than quantity. One home run is much better than two doubles.",
    "author": "Steve Jobs",
    "category": "Focus",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Quality is more important than quantity. One home run is much better than two doubles.",
        "author": "Steve Jobs",
        "category": "Focus"
      }
    }
  },
  {
    "id": "246",
    "quote": "You can't connect the dots looking forward; you can only connect them looking backward. So you have to trust that the dots will somehow connect in your future.",
    "author": "Steve Jobs",
    "category": "Confidence",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "You can't connect the dots looking forward; you can only connect them looking backward. So you have to trust that the dots will somehow connect in your future.",
        "author": "Steve Jobs",
        "category": "Confidence"
      }
    }
  },
  {
    "id": "247",
    "quote": "My favorite things in life don't cost any money. It's really clear that the most precious resource we all have is time.",
    "author": "Steve Jobs",
    "category": "Wisdom",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "My favorite things in life don't cost any money. It's really clear that the most precious resource we all have is time.",
        "author": "Steve Jobs",
        "category": "Wisdom"
      }
    }
  },
  {
    "id": "248",
    "quote": "Don't let the noise of others' opinions drown out your own inner voice.",
    "author": "Steve Jobs",
    "category": "Confidence",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Don't let the noise of others' opinions drown out your own inner voice.",
        "author": "Steve Jobs",
        "category": "Confidence"
      }
    }
  },
  {
    "id": "249",
    "quote": "Focusing is about saying No.",
    "author": "Steve Jobs",
    "category": "Focus",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Focusing is about saying No.",
        "author": "Steve Jobs",
        "category": "Focus"
      }
    }
  },
  {
    "id": "250",
    "quote": "I want to put a ding in the universe.",
    "author": "Steve Jobs",
    "category": "Dreams",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "I want to put a ding in the universe.",
        "author": "Steve Jobs",
        "category": "Dreams"
      }
    }
  },
  {
    "id": "251",
    "quote": "Deciding what not to do is as important as deciding what to do.",
    "author": "Steve Jobs",
    "category": "Focus",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Deciding what not to do is as important as deciding what to do.",
        "author": "Steve Jobs",
        "category": "Focus"
      }
    }
  },
  {
    "id": "252",
    "quote": "Simple can be harder than complex: You have to work hard to get your thinking clean to make it simple.",
    "author": "Steve Jobs",
    "category": "Wisdom",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Simple can be harder than complex: You have to work hard to get your thinking clean to make it simple.",
        "author": "Steve Jobs",
        "category": "Wisdom"
      }
    }
  },
  {
    "id": "253",
    "quote": "We're here to put a dent in the universe. Otherwise why else even be here?",
    "author": "Steve Jobs",
    "category": "Motivation",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "We're here to put a dent in the universe. Otherwise why else even be here?",
        "author": "Steve Jobs",
        "category": "Motivation"
      }
    }
  },
  {
    "id": "254",
    "quote": "Before you start some work, always ask yourself three questions - Why am I doing it, What the results might be and Will I be successful.",
    "author": "Chanakya",
    "category": "Focus",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Before you start some work, always ask yourself three questions - Why am I doing it, What the results might be and Will I be successful.",
        "author": "Chanakya",
        "category": "Focus"
      }
    }
  },
  {
    "id": "255",
    "quote": "A person should not be too honest. Straight trees are cut first and honest people are screwed first.",
    "author": "Chanakya",
    "category": "Wisdom",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "A person should not be too honest. Straight trees are cut first and honest people are screwed first.",
        "author": "Chanakya",
        "category": "Wisdom"
      }
    }
  },
  {
    "id": "256",
    "quote": "Education is the best friend. An educated person is respected everywhere. Education beats the beauty and the youth.",
    "author": "Chanakya",
    "category": "Education",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Education is the best friend. An educated person is respected everywhere. Education beats the beauty and the youth.",
        "author": "Chanakya",
        "category": "Education"
      }
    }
  },
  {
    "id": "257",
    "quote": "Learn from the mistakes of others... you can't live long enough to make them all yourself.",
    "author": "Chanakya",
    "category": "Wisdom",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Learn from the mistakes of others... you can't live long enough to make them all yourself.",
        "author": "Chanakya",
        "category": "Wisdom"
      }
    }
  },
  {
    "id": "258",
    "quote": "Once you start working on something, don't be afraid of failure and don't abandon it. People who work sincerely are the happiest.",
    "author": "Chanakya",
    "category": "Hard Work",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Once you start working on something, don't be afraid of failure and don't abandon it. People who work sincerely are the happiest.",
        "author": "Chanakya",
        "category": "Hard Work"
      }
    }
  },
  {
    "id": "259",
    "quote": "The fragrance of flowers spreads only in the direction of the wind. But the goodness of a person spreads in all direction.",
    "author": "Chanakya",
    "category": "Character",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "The fragrance of flowers spreads only in the direction of the wind. But the goodness of a person spreads in all direction.",
        "author": "Chanakya",
        "category": "Character"
      }
    }
  },
  {
    "id": "260",
    "quote": "God is not present in idols. Your feelings are your God. The soul is your temple.",
    "author": "Chanakya",
    "category": "Wisdom",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "God is not present in idols. Your feelings are your God. The soul is your temple.",
        "author": "Chanakya",
        "category": "Wisdom"
      }
    }
  },
  {
    "id": "261",
    "quote": "Books are as useful to a stupid person as a mirror is to a blind person.",
    "author": "Chanakya",
    "category": "Education",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Books are as useful to a stupid person as a mirror is to a blind person.",
        "author": "Chanakya",
        "category": "Education"
      }
    }
  },
  {
    "id": "262",
    "quote": "As soon as the fear approaches near, attack and destroy it.",
    "author": "Chanakya",
    "category": "Courage",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "As soon as the fear approaches near, attack and destroy it.",
        "author": "Chanakya",
        "category": "Courage"
      }
    }
  },
  {
    "id": "263",
    "quote": "A man is great by deeds, not by birth.",
    "author": "Chanakya",
    "category": "Character",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "A man is great by deeds, not by birth.",
        "author": "Chanakya",
        "category": "Character"
      }
    }
  },
  {
    "id": "264",
    "quote": "Never make friendship with people who are above or below you in status. Such friendships will never give you any happiness.",
    "author": "Chanakya",
    "category": "Wisdom",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Never make friendship with people who are above or below you in status. Such friendships will never give you any happiness.",
        "author": "Chanakya",
        "category": "Wisdom"
      }
    }
  },
  {
    "id": "265",
    "quote": "Treat your kid like a darling for the first five years. For the next ten years, scold them. By the time they turn sixteen, treat them like a friend.",
    "author": "Chanakya",
    "category": "Wisdom",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Treat your kid like a darling for the first five years. For the next ten years, scold them. By the time they turn sixteen, treat them like a friend.",
        "author": "Chanakya",
        "category": "Wisdom"
      }
    }
  },
  {
    "id": "266",
    "quote": "Over-attachment is the source of all sorrow.",
    "author": "Chanakya",
    "category": "Wisdom",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Over-attachment is the source of all sorrow.",
        "author": "Chanakya",
        "category": "Wisdom"
      }
    }
  },
  {
    "id": "267",
    "quote": "Do not reveal what you have thought upon doing, but by wise council keep it secret determined to carry it into execution.",
    "author": "Chanakya",
    "category": "Discipline",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Do not reveal what you have thought upon doing, but by wise council keep it secret determined to carry it into execution.",
        "author": "Chanakya",
        "category": "Discipline"
      }
    }
  },
  {
    "id": "268",
    "quote": "Purity of speech, mind, and senses, a forgiving heart and a desire to serve are the ornaments of a noble soul.",
    "author": "Chanakya",
    "category": "Character",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Purity of speech, mind, and senses, a forgiving heart and a desire to serve are the ornaments of a noble soul.",
        "author": "Chanakya",
        "category": "Character"
      }
    }
  },
  {
    "id": "269",
    "quote": "Wealth, a friend, a wife, and a kingdom may be regained, but this body when lost can never be acquired again.",
    "author": "Chanakya",
    "category": "Life",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Wealth, a friend, a wife, and a kingdom may be regained, but this body when lost can never be acquired again.",
        "author": "Chanakya",
        "category": "Life"
      }
    }
  },
  {
    "id": "270",
    "quote": "He who is overly attached to his family members experiences fear and sorrow, for the root of all grief is attachment.",
    "author": "Chanakya",
    "category": "Wisdom",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "He who is overly attached to his family members experiences fear and sorrow, for the root of all grief is attachment.",
        "author": "Chanakya",
        "category": "Wisdom"
      }
    }
  },
  {
    "id": "271",
    "quote": "Test a servant while in the discharge of his duty, a relative in difficulty, a friend in adversity, and a wife in misfortune.",
    "author": "Chanakya",
    "category": "Character",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Test a servant while in the discharge of his duty, a relative in difficulty, a friend in adversity, and a wife in misfortune.",
        "author": "Chanakya",
        "category": "Character"
      }
    }
  },
  {
    "id": "272",
    "quote": "The biggest guru-mantra is: never share your secrets with anybody. It will destroy you.",
    "author": "Chanakya",
    "category": "Discipline",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "The biggest guru-mantra is: never share your secrets with anybody. It will destroy you.",
        "author": "Chanakya",
        "category": "Discipline"
      }
    }
  },
  {
    "id": "273",
    "quote": "Accumulated wealth is saved by spending just as incoming fresh water is saved by letting out existing water.",
    "author": "Chanakya",
    "category": "Wisdom",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Accumulated wealth is saved by spending just as incoming fresh water is saved by letting out existing water.",
        "author": "Chanakya",
        "category": "Wisdom"
      }
    }
  },
  {
    "id": "274",
    "quote": "The mind is everything. What you think you become.",
    "author": "Gautama Buddha",
    "category": "Focus",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "The mind is everything. What you think you become.",
        "author": "Gautama Buddha",
        "category": "Focus"
      }
    }
  },
  {
    "id": "275",
    "quote": "Three things cannot be long hidden: the sun, the moon, and the truth.",
    "author": "Gautama Buddha",
    "category": "Wisdom",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Three things cannot be long hidden: the sun, the moon, and the truth.",
        "author": "Gautama Buddha",
        "category": "Wisdom"
      }
    }
  },
  {
    "id": "276",
    "quote": "Peace comes from within. Do not seek it without.",
    "author": "Gautama Buddha",
    "category": "Life",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Peace comes from within. Do not seek it without.",
        "author": "Gautama Buddha",
        "category": "Life"
      }
    }
  },
  {
    "id": "277",
    "quote": "You will not be punished for your anger, you will be punished by your anger.",
    "author": "Gautama Buddha",
    "category": "Discipline",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "You will not be punished for your anger, you will be punished by your anger.",
        "author": "Gautama Buddha",
        "category": "Discipline"
      }
    }
  },
  {
    "id": "278",
    "quote": "Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship.",
    "author": "Gautama Buddha",
    "category": "Wisdom",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship.",
        "author": "Gautama Buddha",
        "category": "Wisdom"
      }
    }
  },
  {
    "id": "279",
    "quote": "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    "author": "Gautama Buddha",
    "category": "Focus",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
        "author": "Gautama Buddha",
        "category": "Focus"
      }
    }
  },
  {
    "id": "280",
    "quote": "No one saves us but ourselves. No one can and no one may. We ourselves must walk the path.",
    "author": "Gautama Buddha",
    "category": "Confidence",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "No one saves us but ourselves. No one can and no one may. We ourselves must walk the path.",
        "author": "Gautama Buddha",
        "category": "Confidence"
      }
    }
  },
  {
    "id": "281",
    "quote": "Radiate boundless love towards the entire world.",
    "author": "Gautama Buddha",
    "category": "Kindness",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Radiate boundless love towards the entire world.",
        "author": "Gautama Buddha",
        "category": "Kindness"
      }
    }
  },
  {
    "id": "282",
    "quote": "In the end, only three things matter: how much you loved, how gently you lived, and how gracefully you let go of things not meant for you.",
    "author": "Gautama Buddha",
    "category": "Wisdom",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "In the end, only three things matter: how much you loved, how gently you lived, and how gracefully you let go of things not meant for you.",
        "author": "Gautama Buddha",
        "category": "Wisdom"
      }
    }
  },
  {
    "id": "283",
    "quote": "Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared.",
    "author": "Gautama Buddha",
    "category": "Kindness",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared.",
        "author": "Gautama Buddha",
        "category": "Kindness"
      }
    }
  },
  {
    "id": "284",
    "quote": "Drop by drop is the water pot filled. Likewise, the wise man, gathering it little by little, fills himself with good.",
    "author": "Gautama Buddha",
    "category": "Perseverance",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Drop by drop is the water pot filled. Likewise, the wise man, gathering it little by little, fills himself with good.",
        "author": "Gautama Buddha",
        "category": "Perseverance"
      }
    }
  },
  {
    "id": "285",
    "quote": "Work out your own salvation. Do not depend on others.",
    "author": "Gautama Buddha",
    "category": "Confidence",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Work out your own salvation. Do not depend on others.",
        "author": "Gautama Buddha",
        "category": "Confidence"
      }
    }
  },
  {
    "id": "286",
    "quote": "To understand everything is to forgive everything.",
    "author": "Gautama Buddha",
    "category": "Kindness",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "To understand everything is to forgive everything.",
        "author": "Gautama Buddha",
        "category": "Kindness"
      }
    }
  },
  {
    "id": "287",
    "quote": "There is no path to peace; peace is the path.",
    "author": "Gautama Buddha",
    "category": "Wisdom",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "There is no path to peace; peace is the path.",
        "author": "Gautama Buddha",
        "category": "Wisdom"
      }
    }
  },
  {
    "id": "288",
    "quote": "Better than a thousand hollow words, is one word that brings peace.",
    "author": "Gautama Buddha",
    "category": "Wisdom",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Better than a thousand hollow words, is one word that brings peace.",
        "author": "Gautama Buddha",
        "category": "Wisdom"
      }
    }
  },
  {
    "id": "289",
    "quote": "If you truly loved yourself, you could never hurt another.",
    "author": "Gautama Buddha",
    "category": "Kindness",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "If you truly loved yourself, you could never hurt another.",
        "author": "Gautama Buddha",
        "category": "Kindness"
      }
    }
  },
  {
    "id": "290",
    "quote": "The secret of health for both mind and body is not to mourn for the past, nor to worry about the future, but to live the present moment wisely and earnestly.",
    "author": "Gautama Buddha",
    "category": "Focus",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "The secret of health for both mind and body is not to mourn for the past, nor to worry about the future, but to live the present moment wisely and earnestly.",
        "author": "Gautama Buddha",
        "category": "Focus"
      }
    }
  },
  {
    "id": "291",
    "quote": "An idea that is developed and put into action is more important than an idea that exists only as an idea.",
    "author": "Gautama Buddha",
    "category": "Innovation",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "An idea that is developed and put into action is more important than an idea that exists only as an idea.",
        "author": "Gautama Buddha",
        "category": "Innovation"
      }
    }
  },
  {
    "id": "292",
    "quote": "Purity or impurity depends on oneself, no one can purify another.",
    "author": "Gautama Buddha",
    "category": "Character",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Purity or impurity depends on oneself, no one can purify another.",
        "author": "Gautama Buddha",
        "category": "Character"
      }
    }
  },
  {
    "id": "293",
    "quote": "Conquer anger with non-anger. Conquer badness with goodness.",
    "author": "Gautama Buddha",
    "category": "Kindness",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Conquer anger with non-anger. Conquer badness with goodness.",
        "author": "Gautama Buddha",
        "category": "Kindness"
      }
    }
  },
  {
    "id": "294",
    "quote": "It does not matter how slowly you go as long as you do not stop.",
    "author": "Confucius",
    "category": "Perseverance",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "It does not matter how slowly you go as long as you do not stop.",
        "author": "Confucius",
        "category": "Perseverance"
      }
    }
  },
  {
    "id": "295",
    "quote": "By three methods we may learn wisdom: First, by reflection, which is noblest; Second, by imitation, which is easiest; and third by experience, which is the bitterest.",
    "author": "Confucius",
    "category": "Education",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "By three methods we may learn wisdom: First, by reflection, which is noblest; Second, by imitation, which is easiest; and third by experience, which is the bitterest.",
        "author": "Confucius",
        "category": "Education"
      }
    }
  },
  {
    "id": "296",
    "quote": "Our greatest glory is not in never falling, but in rising every time we fall.",
    "author": "Confucius",
    "category": "Perseverance",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Our greatest glory is not in never falling, but in rising every time we fall.",
        "author": "Confucius",
        "category": "Perseverance"
      }
    }
  },
  {
    "id": "297",
    "quote": "Life is really simple, but we insist on making it complicated.",
    "author": "Confucius",
    "category": "Life",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Life is really simple, but we insist on making it complicated.",
        "author": "Confucius",
        "category": "Life"
      }
    }
  },
  {
    "id": "298",
    "quote": "Real knowledge is to know the extent of one's ignorance.",
    "author": "Confucius",
    "category": "Education",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Real knowledge is to know the extent of one's ignorance.",
        "author": "Confucius",
        "category": "Education"
      }
    }
  },
  {
    "id": "299",
    "quote": "When it is obvious that the goals cannot be reached, don't adjust the goals, adjust the action steps.",
    "author": "Confucius",
    "category": "Focus",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "When it is obvious that the goals cannot be reached, don't adjust the goals, adjust the action steps.",
        "author": "Confucius",
        "category": "Focus"
      }
    }
  },
  {
    "id": "300",
    "quote": "He who conquers himself is the mightiest warrior.",
    "author": "Confucius",
    "category": "Discipline",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "He who conquers himself is the mightiest warrior.",
        "author": "Confucius",
        "category": "Discipline"
      }
    }
  },
  {
    "id": "301",
    "quote": "The man who moves a mountain begins by carrying away small stones.",
    "author": "Confucius",
    "category": "Hard Work",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "The man who moves a mountain begins by carrying away small stones.",
        "author": "Confucius",
        "category": "Hard Work"
      }
    }
  },
  {
    "id": "302",
    "quote": "Choose a job you love, and you will never have to work a day in your life.",
    "author": "Confucius",
    "category": "Success",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Choose a job you love, and you will never have to work a day in your life.",
        "author": "Confucius",
        "category": "Success"
      }
    }
  },
  {
    "id": "303",
    "quote": "Wherever you go, go with all your heart.",
    "author": "Confucius",
    "category": "Motivation",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Wherever you go, go with all your heart.",
        "author": "Confucius",
        "category": "Motivation"
      }
    }
  },
  {
    "id": "304",
    "quote": "What the superior man seeks is in himself; what the small man seeks is in others.",
    "author": "Confucius",
    "category": "Character",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "What the superior man seeks is in himself; what the small man seeks is in others.",
        "author": "Confucius",
        "category": "Character"
      }
    }
  },
  {
    "id": "305",
    "quote": "To see what is right and not to do it is a want of courage, or of principle.",
    "author": "Confucius",
    "category": "Courage",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "To see what is right and not to do it is a want of courage, or of principle.",
        "author": "Confucius",
        "category": "Courage"
      }
    }
  },
  {
    "id": "306",
    "quote": "If you make a mistake and do not correct it, this is called a mistake.",
    "author": "Confucius",
    "category": "Wisdom",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "If you make a mistake and do not correct it, this is called a mistake.",
        "author": "Confucius",
        "category": "Wisdom"
      }
    }
  },
  {
    "id": "307",
    "quote": "Before you embark on a journey of revenge, dig two graves.",
    "author": "Confucius",
    "category": "Wisdom",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Before you embark on a journey of revenge, dig two graves.",
        "author": "Confucius",
        "category": "Wisdom"
      }
    }
  },
  {
    "id": "308",
    "quote": "The man who asks a question is a fool for a minute, the man who does not ask is a fool for life.",
    "author": "Confucius",
    "category": "Education",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "The man who asks a question is a fool for a minute, the man who does not ask is a fool for life.",
        "author": "Confucius",
        "category": "Education"
      }
    }
  },
  {
    "id": "309",
    "quote": "Silence is a true friend who never betrays.",
    "author": "Confucius",
    "category": "Wisdom",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Silence is a true friend who never betrays.",
        "author": "Confucius",
        "category": "Wisdom"
      }
    }
  },
  {
    "id": "310",
    "quote": "Wheresoever you go, go with all your heart.",
    "author": "Confucius",
    "category": "Motivation",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Wheresoever you go, go with all your heart.",
        "author": "Confucius",
        "category": "Motivation"
      }
    }
  },
  {
    "id": "311",
    "quote": "To be wronged is nothing, unless you continue to remember it.",
    "author": "Confucius",
    "category": "Wisdom",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "To be wronged is nothing, unless you continue to remember it.",
        "author": "Confucius",
        "category": "Wisdom"
      }
    }
  },
  {
    "id": "312",
    "quote": "Respect yourself and others will respect you.",
    "author": "Confucius",
    "category": "Confidence",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Respect yourself and others will respect you.",
        "author": "Confucius",
        "category": "Confidence"
      }
    }
  },
  {
    "id": "313",
    "quote": "Superior men are modest in their speech, but exceed in their actions.",
    "author": "Confucius",
    "category": "Character",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Superior men are modest in their speech, but exceed in their actions.",
        "author": "Confucius",
        "category": "Character"
      }
    }
  },
  {
    "id": "314",
    "quote": "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
    "author": "Albert Einstein",
    "category": "Innovation",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
        "author": "Albert Einstein",
        "category": "Innovation"
      }
    }
  },
  {
    "id": "315",
    "quote": "Try not to become a man of success, but rather try to become a man of value.",
    "author": "Albert Einstein",
    "category": "Character",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Try not to become a man of success, but rather try to become a man of value.",
        "author": "Albert Einstein",
        "category": "Character"
      }
    }
  },
  {
    "id": "316",
    "quote": "In the middle of difficulty lies opportunity.",
    "author": "Albert Einstein",
    "category": "Motivation",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "In the middle of difficulty lies opportunity.",
        "author": "Albert Einstein",
        "category": "Motivation"
      }
    }
  },
  {
    "id": "317",
    "quote": "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    "author": "Albert Einstein",
    "category": "Life",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Life is like riding a bicycle. To keep your balance, you must keep moving.",
        "author": "Albert Einstein",
        "category": "Life"
      }
    }
  },
  {
    "id": "318",
    "quote": "A person who never made a mistake never tried anything new.",
    "author": "Albert Einstein",
    "category": "Innovation",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "A person who never made a mistake never tried anything new.",
        "author": "Albert Einstein",
        "category": "Innovation"
      }
    }
  },
  {
    "id": "319",
    "quote": "Logic will get you from A to B. Imagination will take you everywhere.",
    "author": "Albert Einstein",
    "category": "Innovation",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Logic will get you from A to B. Imagination will take you everywhere.",
        "author": "Albert Einstein",
        "category": "Innovation"
      }
    }
  },
  {
    "id": "320",
    "quote": "Strive not to be a success, but rather to be of value.",
    "author": "Albert Einstein",
    "category": "Character",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Strive not to be a success, but rather to be of value.",
        "author": "Albert Einstein",
        "category": "Character"
      }
    }
  },
  {
    "id": "321",
    "quote": "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.",
    "author": "Albert Einstein",
    "category": "Education",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.",
        "author": "Albert Einstein",
        "category": "Education"
      }
    }
  },
  {
    "id": "322",
    "quote": "Great spirits have always encountered violent opposition from mediocre minds.",
    "author": "Albert Einstein",
    "category": "Courage",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Great spirits have always encountered violent opposition from mediocre minds.",
        "author": "Albert Einstein",
        "category": "Courage"
      }
    }
  },
  {
    "id": "323",
    "quote": "The measure of intelligence is the ability to change.",
    "author": "Albert Einstein",
    "category": "Wisdom",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "The measure of intelligence is the ability to change.",
        "author": "Albert Einstein",
        "category": "Wisdom"
      }
    }
  },
  {
    "id": "324",
    "quote": "Everything should be made as simple as possible, but not simpler.",
    "author": "Albert Einstein",
    "category": "Wisdom",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Everything should be made as simple as possible, but not simpler.",
        "author": "Albert Einstein",
        "category": "Wisdom"
      }
    }
  },
  {
    "id": "325",
    "quote": "We cannot solve our problems with the same thinking we used when we created them.",
    "author": "Albert Einstein",
    "category": "Innovation",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "We cannot solve our problems with the same thinking we used when we created them.",
        "author": "Albert Einstein",
        "category": "Innovation"
      }
    }
  },
  {
    "id": "326",
    "quote": "Look deep into nature, and then you will understand everything better.",
    "author": "Albert Einstein",
    "category": "Wisdom",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Look deep into nature, and then you will understand everything better.",
        "author": "Albert Einstein",
        "category": "Wisdom"
      }
    }
  },
  {
    "id": "327",
    "quote": "Weakness of attitude becomes weakness of character.",
    "author": "Albert Einstein",
    "category": "Character",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Weakness of attitude becomes weakness of character.",
        "author": "Albert Einstein",
        "category": "Character"
      }
    }
  },
  {
    "id": "328",
    "quote": "Any fool can know. The point is to understand.",
    "author": "Albert Einstein",
    "category": "Education",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Any fool can know. The point is to understand.",
        "author": "Albert Einstein",
        "category": "Education"
      }
    }
  },
  {
    "id": "329",
    "quote": "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
    "author": "Albert Einstein",
    "category": "Life",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
        "author": "Albert Einstein",
        "category": "Life"
      }
    }
  },
  {
    "id": "330",
    "quote": "Creativity is intelligence having fun.",
    "author": "Albert Einstein",
    "category": "Innovation",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Creativity is intelligence having fun.",
        "author": "Albert Einstein",
        "category": "Innovation"
      }
    }
  },
  {
    "id": "331",
    "quote": "It's not that I'm so smart, it's just that I stay with problems longer.",
    "author": "Albert Einstein",
    "category": "Perseverance",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "It's not that I'm so smart, it's just that I stay with problems longer.",
        "author": "Albert Einstein",
        "category": "Perseverance"
      }
    }
  },
  {
    "id": "332",
    "quote": "Peace cannot be kept by force; it can only be achieved by understanding.",
    "author": "Albert Einstein",
    "category": "Wisdom",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Peace cannot be kept by force; it can only be achieved by understanding.",
        "author": "Albert Einstein",
        "category": "Wisdom"
      }
    }
  },
  {
    "id": "333",
    "quote": "If you want to live a happy life, tie it to a goal, not to people or things.",
    "author": "Albert Einstein",
    "category": "Focus",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "If you want to live a happy life, tie it to a goal, not to people or things.",
        "author": "Albert Einstein",
        "category": "Focus"
      }
    }
  },
  {
    "id": "334",
    "quote": "You cannot change your future, but you can change your habits, and surely your habits will change your future.",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Success",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "You cannot change your future, but you can change your habits, and surely your habits will change your future.",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Success"
      }
    }
  },
  {
    "id": "335",
    "quote": "To become unique, the challenge is to fight the hardest battle which anyone can imagine until you reach your destination.",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Perseverance",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "To become unique, the challenge is to fight the hardest battle which anyone can imagine until you reach your destination.",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Perseverance"
      }
    }
  },
  {
    "id": "336",
    "quote": "Active lies inside you, look deep into your heart, bring out your inner power and change the world.",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Motivation",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Active lies inside you, look deep into your heart, bring out your inner power and change the world.",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Motivation"
      }
    }
  },
  {
    "id": "337",
    "quote": "Clear your mind of can't.",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Confidence",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Clear your mind of can't.",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Confidence"
      }
    }
  },
  {
    "id": "338",
    "quote": "Courage is giving up your personal comfort for the benefit of humanity.",
    "author": "Dr. A. P. J. Abdul Kalam",
    "category": "Courage",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Courage is giving up your personal comfort for the benefit of humanity.",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Courage"
      }
    }
  },
  {
    "id": "339",
    "quote": "Where can we go to find God if we cannot see Him in our own hearts and in every living being.",
    "author": "Swami Vivekananda",
    "category": "Wisdom",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Where can we go to find God if we cannot see Him in our own hearts and in every living being.",
        "author": "Swami Vivekananda",
        "category": "Wisdom"
      }
    }
  },
  {
    "id": "340",
    "quote": "Fill the brain with high thoughts, highest ideals, place them day and night before you, and out of that will come great work.",
    "author": "Swami Vivekananda",
    "category": "Focus",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Fill the brain with high thoughts, highest ideals, place them day and night before you, and out of that will come great work.",
        "author": "Swami Vivekananda",
        "category": "Focus"
      }
    }
  },
  {
    "id": "341",
    "quote": "Comfort is no test of truth. On the contrary, truth is often far from being comfortable.",
    "author": "Swami Vivekananda",
    "category": "Character",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Comfort is no test of truth. On the contrary, truth is often far from being comfortable.",
        "author": "Swami Vivekananda",
        "category": "Character"
      }
    }
  },
  {
    "id": "342",
    "quote": "Work without love is slavery.",
    "author": "Mother Teresa",
    "category": "Hard Work",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Work without love is slavery.",
        "author": "Mother Teresa",
        "category": "Hard Work"
      }
    }
  },
  {
    "id": "343",
    "quote": "Be happy in the moment, that's enough. Each moment is all we need, not more.",
    "author": "Mother Teresa",
    "category": "Life",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Be happy in the moment, that's enough. Each moment is all we need, not more.",
        "author": "Mother Teresa",
        "category": "Life"
      }
    }
  },
  {
    "id": "344",
    "quote": "Disciplining oneself is the highest form of self-respect.",
    "author": "Mother Teresa",
    "category": "Discipline",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Disciplining oneself is the highest form of self-respect.",
        "author": "Mother Teresa",
        "category": "Discipline"
      }
    }
  },
  {
    "id": "345",
    "quote": "Simple life, high thinking.",
    "author": "Mother Teresa",
    "category": "Wisdom",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Simple life, high thinking.",
        "author": "Mother Teresa",
        "category": "Wisdom"
      }
    }
  },
  {
    "id": "346",
    "quote": "Love begins at home, and it is not how much we do... but how much love we put in that action.",
    "author": "Mother Teresa",
    "category": "Kindness",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Love begins at home, and it is not how much we do... but how much love we put in that action.",
        "author": "Mother Teresa",
        "category": "Kindness"
      }
    }
  },
  {
    "id": "347",
    "quote": "One of the greatest diseases is to be nobody to anybody.",
    "author": "Mother Teresa",
    "category": "Kindness",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "One of the greatest diseases is to be nobody to anybody.",
        "author": "Mother Teresa",
        "category": "Kindness"
      }
    }
  },
  {
    "id": "348",
    "quote": "Honesty and frankness make you vulnerable. Be honest and frank anyway.",
    "author": "Mother Teresa",
    "category": "Character",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Honesty and frankness make you vulnerable. Be honest and frank anyway.",
        "author": "Mother Teresa",
        "category": "Character"
      }
    }
  },
  {
    "id": "349",
    "quote": "Life is a beauty, admire it. Life is a dream, realize it.",
    "author": "Mother Teresa",
    "category": "Life",
    "language": "en",
    "isVerified": true,
    "translations": {
      "en": {
        "quote": "Life is a beauty, admire it. Life is a dream, realize it.",
        "author": "Mother Teresa",
        "category": "Life"
      }
    }
  }
];
