export interface Quote {
  id: string;
  quote: string;
  author: string;
  category: string;
  language: string;
  isVerified: boolean;
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
        "quote": "\u0c32\u0c47\u0c35\u0c02\u0c21\u0c3f, \u0c2e\u0c47\u0c32\u0c4d\u0c15\u0c4a\u0c28\u0c02\u0c21\u0c3f, \u0c17\u0c2e\u0c4d\u0c2f\u0c02 \u0c1a\u0c47\u0c30\u0c47\u0c35\u0c30\u0c15\u0c41 \u0c35\u0c3f\u0c36\u0c4d\u0c30\u0c2e\u0c3f\u0c02\u0c1a\u0c15\u0c02\u0c21\u0c3f.",
        "author": "\u0c38\u0c4d\u0c35\u0c3e\u0c2e\u0c3f \u0c35\u0c3f\u0c35\u0c47\u0c15\u0c3e\u0c28\u0c02\u0c26",
        "category": "\u0c06\u0c24\u0c4d\u0c2e\u0c35\u0c3f\u0c36\u0c4d\u0c35\u0c3e\u0c38\u0c02"
      },
      "hi": {
        "quote": "\u0909\u0920\u094b, \u091c\u093e\u0917\u094b \u0914\u0930 \u0924\u092c \u0924\u0915 \u092e\u0924 \u0930\u0941\u0915\u094b \u091c\u092c \u0924\u0915 \u0932\u0915\u094d\u0937\u094d\u092f \u092a\u094d\u0930\u093e\u092a\u094d\u0924 \u0928 \u0939\u094b \u091c\u093e\u090f\u0964",
        "author": "\u0938\u094d\u0935\u093e\u092e\u0940 \u0935\u093f\u0935\u0947\u0915\u093e\u0928\u0902\u0926",
        "category": "\u0906\u0924\u094d\u092e\u0935\u093f\u0936\u094d\u0935\u093e\u0938"
      },
      "fr": {
        "quote": "L\u00e8ve-toi, r\u00e9veille-toi et ne t'arr\u00eate pas avant d'avoir atteint le but.",
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
        "quote": "\u0c28\u0c40\u0c2a\u0c48 \u0c28\u0c40\u0c15\u0c41 \u0c28\u0c2e\u0c4d\u0c2e\u0c15\u0c02 \u0c32\u0c47\u0c28\u0c02\u0c24 \u0c15\u0c3e\u0c32\u0c02 \u0c28\u0c41\u0c35\u0c4d\u0c35\u0c41 \u0c26\u0c47\u0c35\u0c41\u0c21\u0c3f\u0c28\u0c3f \u0c28\u0c2e\u0c4d\u0c2e\u0c32\u0c47\u0c35\u0c41.",
        "author": "\u0c38\u0c4d\u0c35\u0c3e\u0c2e\u0c3f \u0c35\u0c3f\u0c35\u0c47\u0c15\u0c3e\u0c28\u0c02\u0c26",
        "category": "\u0c06\u0c24\u0c4d\u0c2e\u0c35\u0c3f\u0c36\u0c4d\u0c35\u0c3e\u0c38\u0c02"
      },
      "hi": {
        "quote": "\u091c\u092c \u0924\u0915 \u0906\u092a \u0916\u0941\u0926 \u092a\u0930 \u0935\u093f\u0936\u094d\u0935\u093e\u0938 \u0928\u0939\u0940\u0902 \u0915\u0930\u0924\u0947, \u0924\u092c \u0924\u0915 \u0906\u092a \u092d\u0917\u0935\u093e\u0928 \u092a\u0930 \u0935\u093f\u0936\u094d\u0935\u093e\u0938 \u0928\u0939\u0940\u0902 \u0915\u0930 \u0938\u0915\u0924\u0947\u0964",
        "author": "\u0938\u094d\u0935\u093e\u092e\u0940 \u0935\u093f\u0935\u0947\u0915\u093e\u0928\u0902\u0926",
        "category": "\u0906\u0924\u094d\u092e\u0935\u093f\u0936\u094d\u0935\u093e\u0938"
      },
      "fr": {
        "quote": "Vous ne pouvez pas croire en Dieu tant que vous ne croyez pas en vous-m\u00eame.",
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
        "quote": "\u0c35\u0c3f\u0c36\u0c4d\u0c35\u0c02\u0c32\u0c4b\u0c28\u0c3f \u0c36\u0c15\u0c4d\u0c24\u0c41\u0c32\u0c28\u0c4d\u0c28\u0c40 \u0c07\u0c2a\u0c4d\u0c2a\u0c1f\u0c3f\u0c15\u0c47 \u0c2e\u0c28\u0c35\u0c47. \u0c2e\u0c28\u0c2e\u0c47 \u0c15\u0c33\u0c4d\u0c33\u0c15\u0c41 \u0c1a\u0c47\u0c24\u0c41\u0c32\u0c41 \u0c05\u0c21\u0c4d\u0c21\u0c41 \u0c2a\u0c46\u0c1f\u0c4d\u0c1f\u0c41\u0c15\u0c41\u0c28\u0c3f \u0c1a\u0c40\u0c15\u0c1f\u0c3f\u0c17\u0c3e \u0c09\u0c02\u0c26\u0c28\u0c3f \u0c0f\u0c21\u0c41\u0c38\u0c4d\u0c24\u0c41\u0c28\u0c4d\u0c28\u0c3e\u0c02.",
        "author": "\u0c38\u0c4d\u0c35\u0c3e\u0c2e\u0c3f \u0c35\u0c3f\u0c35\u0c47\u0c15\u0c3e\u0c28\u0c02\u0c26",
        "category": "\u0c0f\u0c15\u0c3e\u0c17\u0c4d\u0c30\u0c24"
      },
      "hi": {
        "quote": "\u092c\u094d\u0930\u0939\u094d\u092e\u093e\u0902\u0921 \u0915\u0940 \u0938\u092d\u0940 \u0936\u0915\u094d\u0924\u093f\u092f\u093e\u0902 \u092a\u0939\u0932\u0947 \u0938\u0947 \u0939\u0940 \u0939\u092e\u093e\u0930\u0940 \u0939\u0948\u0902\u0964 \u092f\u0939 \u0939\u092e \u0939\u0940 \u0939\u0948\u0902 \u091c\u093f\u0928\u094d\u0939\u094b\u0902\u0928\u0947 \u0905\u092a\u0928\u0940 \u0906\u0901\u0916\u094b\u0902 \u0915\u0947 \u0938\u093e\u092e\u0928\u0947 \u0939\u093e\u0925 \u0930\u0916 \u0932\u093f\u092f\u093e \u0914\u0930 \u0930\u094b \u0930\u0939\u0947 \u0939\u0948\u0902 \u0915\u093f \u0905\u0902\u0927\u0947\u0930\u093e \u0939\u0948\u0964",
        "author": "\u0938\u094d\u0935\u093e\u092e\u0940 \u0935\u093f\u0935\u0947\u0915\u093e\u0928\u0902\u0926",
        "category": "\u090f\u0915\u093e\u0917\u094d\u0930\u0924\u093e"
      },
      "fr": {
        "quote": "Toutes les forces de l'univers sont d\u00e9j\u00e0 en nous. C'est nous qui fermons les yeux et crions qu'il fait noir.",
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
        "quote": "\u0c38\u0c24\u0c4d\u0c2f\u0c3e\u0c28\u0c4d\u0c28\u0c3f \u0c35\u0c47\u0c2f\u0c3f \u0c30\u0c15\u0c3e\u0c32\u0c41\u0c17\u0c3e \u0c1a\u0c46\u0c2a\u0c4d\u0c2a\u0c35\u0c1a\u0c4d\u0c1a\u0c41, \u0c05\u0c2f\u0c3f\u0c28\u0c3e \u0c2a\u0c4d\u0c30\u0c24\u0c3f \u0c12\u0c15\u0c4d\u0c15\u0c1f\u0c40 \u0c38\u0c24\u0c4d\u0c2f\u0c2e\u0c47.",
        "author": "\u0c38\u0c4d\u0c35\u0c3e\u0c2e\u0c3f \u0c35\u0c3f\u0c35\u0c47\u0c15\u0c3e\u0c28\u0c02\u0c26",
        "category": "\u0c28\u0c47\u0c30\u0c4d\u0c1a\u0c41\u0c15\u0c4b\u0c35\u0c21\u0c02"
      },
      "hi": {
        "quote": "\u0938\u0924\u094d\u092f \u0915\u094b \u0939\u091c\u093e\u0930 \u0905\u0932\u0917-\u0905\u0932\u0917 \u0924\u0930\u0940\u0915\u094b\u0902 \u0938\u0947 \u0915\u0939\u093e \u091c\u093e \u0938\u0915\u0924\u093e \u0939\u0948, \u092b\u093f\u0930 \u092d\u0940 \u0939\u0930 \u090f\u0915 \u0938\u0924\u094d\u092f \u0939\u094b \u0938\u0915\u0924\u093e \u0939\u0948\u0964",
        "author": "\u0938\u094d\u0935\u093e\u092e\u0940 \u0935\u093f\u0935\u0947\u0915\u093e\u0928\u0902\u0926",
        "category": "\u0938\u0940\u0916\u0928\u093e"
      },
      "fr": {
        "quote": "La v\u00e9rit\u00e9 peut \u00eatre \u00e9nonc\u00e9e de mille mani\u00e8res diff\u00e9rentes, pourtant chacune peut \u00eatre vraie.",
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
        "quote": "\u0c0e\u0c35\u0c30\u0c3f\u0c28\u0c40 \u0c28\u0c3f\u0c02\u0c26\u0c3f\u0c02\u0c1a\u0c15\u0c02\u0c21\u0c3f: \u0c38\u0c39\u0c3e\u0c2f\u0c02 \u0c1a\u0c47\u0c2f\u0c17\u0c32\u0c3f\u0c17\u0c3f\u0c24\u0c47 \u0c1a\u0c47\u0c2f\u0c02\u0c21\u0c3f. \u0c32\u0c47\u0c15\u0c2a\u0c4b\u0c24\u0c47 \u0c26\u0c02\u0c21\u0c02 \u0c2a\u0c46\u0c1f\u0c4d\u0c1f\u0c3f \u0c2e\u0c40 \u0c26\u0c3e\u0c30\u0c3f\u0c28 \u0c2e\u0c40\u0c30\u0c41 \u0c38\u0c3e\u0c17\u0c02\u0c21\u0c3f.",
        "author": "\u0c38\u0c4d\u0c35\u0c3e\u0c2e\u0c3f \u0c35\u0c3f\u0c35\u0c47\u0c15\u0c3e\u0c28\u0c02\u0c26",
        "category": "\u0c38\u0c47\u0c35"
      },
      "hi": {
        "quote": "\u0915\u093f\u0938\u0940 \u0915\u0940 \u0928\u093f\u0902\u0926\u093e \u0928 \u0915\u0930\u0947\u0902: \u092f\u0926\u093f \u0906\u092a \u092e\u0926\u0926 \u0915\u093e \u0939\u093e\u0925 \u092c\u0922\u093c\u093e \u0938\u0915\u0924\u0947 \u0939\u0948\u0902, \u0924\u094b \u0910\u0938\u093e \u0915\u0930\u0947\u0902\u0964 \u092f\u0926\u093f \u0928\u0939\u0940\u0902 \u0915\u0930 \u0938\u0915\u0924\u0947, \u0924\u094b \u0939\u093e\u0925 \u091c\u094b\u0921\u093c\u0947\u0902, \u0906\u0936\u0940\u0930\u094d\u0935\u093e\u0926 \u0926\u0947\u0902 \u0914\u0930 \u0909\u0928\u094d\u0939\u0947\u0902 \u0905\u092a\u0928\u0947 \u0930\u093e\u0938\u094d\u0924\u0947 \u091c\u093e\u0928\u0947 \u0926\u0947\u0902\u0964",
        "author": "\u0938\u094d\u0935\u093e\u092e\u0940 \u0935\u093f\u0935\u0947\u0915\u093e\u0928\u0902\u0926",
        "category": "\u0938\u0947\u0935\u093e"
      },
      "fr": {
        "quote": "Ne condamnez personne: si vous pouvez tendre une main secourable, faites-le. Sinon, joignez les mains, b\u00e9nissez-les et laissez-les suivre leur chemin.",
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
        "quote": "\u0c2e\u0c46\u0c26\u0c21\u0c41, \u0c15\u0c02\u0c21\u0c30\u0c3e\u0c32\u0c41 \u0c12\u0c15\u0c47\u0c38\u0c3e\u0c30\u0c3f \u0c05\u0c2d\u0c3f\u0c35\u0c43\u0c26\u0c4d\u0c27\u0c3f \u0c1a\u0c46\u0c02\u0c26\u0c3e\u0c32\u0c3f.",
        "author": "\u0c38\u0c4d\u0c35\u0c3e\u0c2e\u0c3f \u0c35\u0c3f\u0c35\u0c47\u0c15\u0c3e\u0c28\u0c02\u0c26",
        "category": "\u0c35\u0c3f\u0c26\u0c4d\u0c2f"
      },
      "hi": {
        "quote": "\u092e\u0938\u094d\u0924\u093f\u0937\u094d\u0915 \u0914\u0930 \u092e\u093e\u0902\u0938\u092a\u0947\u0936\u093f\u092f\u094b\u0902 \u0915\u093e \u0935\u093f\u0915\u093e\u0938 \u090f\u0915 \u0938\u093e\u0925 \u0939\u094b\u0928\u093e \u091a\u093e\u0939\u093f\u090f\u0964",
        "author": "\u0938\u094d\u0935\u093e\u092e\u0940 \u0935\u093f\u0935\u0947\u0915\u093e\u0928\u0902\u0926",
        "category": "\u0936\u093f\u0915\u094d\u0937\u093e"
      },
      "fr": {
        "quote": "Le cerveau et les muscles doivent se d\u00e9velopper simultan\u00e9ment.",
        "author": "Swami Vivekananda",
        "category": "\u00c9ducation"
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
        "quote": "\u0c2e\u0c28 \u0c06\u0c32\u0c4b\u0c1a\u0c28\u0c32\u0c47 \u0c2e\u0c28\u0c32\u0c4d\u0c28\u0c3f \u0c24\u0c2f\u0c3e\u0c30\u0c41\u0c1a\u0c47\u0c38\u0c4d\u0c24\u0c3e\u0c2f\u0c3f; \u0c15\u0c3e\u0c2c\u0c1f\u0c4d\u0c1f\u0c3f \u0c2e\u0c40\u0c30\u0c41 \u0c0f\u0c2e\u0c3f \u0c06\u0c32\u0c4b\u0c1a\u0c3f\u0c38\u0c4d\u0c24\u0c41\u0c28\u0c4d\u0c28\u0c3e\u0c30\u0c4b \u0c1c\u0c3e\u0c17\u0c4d\u0c30\u0c24\u0c4d\u0c24 \u0c35\u0c39\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f. \u0c2a\u0c26\u0c3e\u0c32\u0c41 \u0c26\u0c4d\u0c35\u0c3f\u0c24\u0c40\u0c2f\u0c2e\u0c48\u0c28\u0c35\u0c3f.",
        "author": "\u0c38\u0c4d\u0c35\u0c3e\u0c2e\u0c3f \u0c35\u0c3f\u0c35\u0c47\u0c15\u0c3e\u0c28\u0c02\u0c26",
        "category": "\u0c15\u0c4d\u0c30\u0c2e\u0c36\u0c3f\u0c15\u0c4d\u0c37\u0c23"
      },
      "hi": {
        "quote": "\u0939\u092e \u0935\u0939\u0940 \u0939\u0948\u0902 \u091c\u094b \u0939\u092e\u093e\u0930\u0947 \u0935\u093f\u091a\u093e\u0930\u094b\u0902 \u0928\u0947 \u0939\u092e\u0947\u0902 \u092c\u0928\u093e\u092f\u093e \u0939\u0948; \u0907\u0938\u0932\u093f\u090f \u0927\u094d\u092f\u093e\u0928 \u0930\u0916\u0947\u0902 \u0915\u093f \u0906\u092a \u0915\u094d\u092f\u093e \u0938\u094b\u091a\u0924\u0947 \u0939\u0948\u0902\u0964 \u0936\u092c\u094d\u0926 \u0917\u094c\u0923 \u0939\u0948\u0902\u0964 \u0935\u093f\u091a\u093e\u0930 \u091c\u0940\u0935\u093f\u0924 \u0930\u0939\u0924\u0947 \u0939\u0948\u0902; \u0935\u0947 \u092c\u0939\u0941\u0924 \u0926\u0942\u0930 \u0924\u0915 \u092f\u093e\u0924\u094d\u0930\u093e \u0915\u0930\u0924\u0947 \u0939\u0948\u0902\u0964",
        "author": "\u0938\u094d\u0935\u093e\u092e\u0940 \u0935\u093f\u0935\u0947\u0915\u093e\u0928\u0902\u0926",
        "category": "\u0905\u0928\u0941\u0936\u093e\u0938\u0928"
      },
      "fr": {
        "quote": "Nous sommes ce que nos pens\u00e9es ont fait de nous; prenez donc soin de ce que vous pensez. Les mots sont secondaires. Les pens\u00e9es vivent; elles voyagent loin.",
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
        "quote": "\u0c39\u0c43\u0c26\u0c2f\u0c3e\u0c28\u0c3f\u0c15\u0c3f, \u0c2e\u0c46\u0c26\u0c21\u0c41\u0c15\u0c41 \u0c2e\u0c27\u0c4d\u0c2f \u0c18\u0c30\u0c4d\u0c37\u0c23 \u0c35\u0c1a\u0c4d\u0c1a\u0c3f\u0c28\u0c2a\u0c4d\u0c2a\u0c41\u0c21\u0c41 \u0c39\u0c43\u0c26\u0c2f\u0c3e\u0c28\u0c4d\u0c28\u0c3f \u0c05\u0c28\u0c41\u0c38\u0c30\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f.",
        "author": "\u0c38\u0c4d\u0c35\u0c3e\u0c2e\u0c3f \u0c35\u0c3f\u0c35\u0c47\u0c15\u0c3e\u0c28\u0c02\u0c26",
        "category": "\u0c15\u0c32\u0c32\u0c41"
      },
      "hi": {
        "quote": "\u0926\u093f\u0932 \u0914\u0930 \u0926\u093f\u092e\u093e\u0917 \u0915\u0947 \u091f\u0915\u0930\u093e\u0935 \u092e\u0947\u0902 \u0926\u093f\u0932 \u0915\u0940 \u0938\u0941\u0928\u094b\u0964",
        "author": "\u0938\u094d\u0935\u093e\u092e\u0940 \u0935\u093f\u0935\u0947\u0915\u093e\u0928\u0902\u0926",
        "category": "\u0938\u092a\u0928\u0947"
      },
      "fr": {
        "quote": "Dans un conflit entre le c\u0153ur et le cerveau, suivez votre c\u0153ur.",
        "author": "Swami Vivekananda",
        "category": "R\u00eaves"
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
        "quote": "\u0c2e\u0c40\u0c30\u0c41 \u0c32\u0c4b\u0c2a\u0c32\u0c3f \u0c28\u0c41\u0c02\u0c21\u0c3f \u0c2a\u0c46\u0c30\u0c17\u0c3e\u0c32\u0c3f. \u0c2e\u0c40\u0c15\u0c41 \u0c0e\u0c35\u0c30\u0c42 \u0c28\u0c47\u0c30\u0c4d\u0c2a\u0c3f\u0c02\u0c1a\u0c32\u0c47\u0c30\u0c41, \u0c0e\u0c35\u0c30\u0c42 \u0c2e\u0c3f\u0c2e\u0c4d\u0c2e\u0c32\u0c4d\u0c28\u0c3f \u0c06\u0c27\u0c4d\u0c2f\u0c3e\u0c24\u0c4d\u0c2e\u0c3f\u0c15\u0c02\u0c17\u0c3e \u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c32\u0c47\u0c30\u0c41. \u0c2e\u0c40 \u0c06\u0c24\u0c4d\u0c2e \u0c15\u0c02\u0c1f\u0c47 \u0c17\u0c4a\u0c2a\u0c4d\u0c2a \u0c17\u0c41\u0c30\u0c41\u0c35\u0c41 \u0c32\u0c47\u0c21\u0c41.",
        "author": "\u0c38\u0c4d\u0c35\u0c3e\u0c2e\u0c3f \u0c35\u0c3f\u0c35\u0c47\u0c15\u0c3e\u0c28\u0c02\u0c26",
        "category": "\u0c28\u0c47\u0c30\u0c4d\u0c1a\u0c41\u0c15\u0c4b\u0c35\u0c21\u0c02"
      },
      "hi": {
        "quote": "\u0906\u092a\u0915\u094b \u0905\u0902\u0926\u0930 \u0938\u0947 \u092c\u093e\u0939\u0930 \u0915\u0940 \u0913\u0930 \u092c\u0922\u093c\u0928\u093e \u0939\u094b\u0917\u093e\u0964 \u0915\u094b\u0908 \u0906\u092a\u0915\u094b \u0938\u093f\u0916\u093e \u0928\u0939\u0940\u0902 \u0938\u0915\u0924\u093e, \u0915\u094b\u0908 \u0906\u092a\u0915\u094b \u0906\u0927\u094d\u092f\u093e\u0924\u094d\u092e\u093f\u0915 \u0928\u0939\u0940\u0902 \u092c\u0928\u093e \u0938\u0915\u0924\u093e\u0964 \u0906\u092a\u0915\u0940 \u0905\u092a\u0928\u0940 \u0906\u0924\u094d\u092e\u093e \u0915\u0947 \u0905\u0932\u093e\u0935\u093e \u0915\u094b\u0908 \u0926\u0942\u0938\u0930\u093e \u0936\u093f\u0915\u094d\u0937\u0915 \u0928\u0939\u0940\u0902 \u0939\u0948\u0964",
        "author": "\u0938\u094d\u0935\u093e\u092e\u0940 \u0935\u093f\u0935\u0947\u0915\u093e\u0928\u0902\u0926",
        "category": "\u0938\u0940\u0916\u0928\u093e"
      },
      "fr": {
        "quote": "Vous devez grandir de l'int\u00e9rieur. Nul ne peut vous enseigner, nul ne peut vous rendre spirituel. Il n'y a d'autre enseignant que votre propre \u00e2me.",
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
        "quote": "\u0c2a\u0c35\u0c3f\u0c24\u0c4d\u0c30\u0c24, \u0c13\u0c30\u0c4d\u0c2a\u0c41, \u0c2a\u0c1f\u0c4d\u0c1f\u0c41\u0c26\u0c32 \u0c35\u0c3f\u0c1c\u0c2f\u0c3e\u0c28\u0c3f\u0c15\u0c3f \u0c2e\u0c42\u0c21\u0c41 \u0c2e\u0c41\u0c16\u0c4d\u0c2f\u0c2e\u0c48\u0c28 \u0c05\u0c02\u0c36\u0c3e\u0c32\u0c41, \u0c2e\u0c30\u0c3f\u0c2f\u0c41 \u0c05\u0c28\u0c4d\u0c28\u0c3f\u0c02\u0c1f\u0c3f\u0c15\u0c02\u0c1f\u0c47 \u0c2e\u0c3f\u0c02\u0c1a\u0c3f \u0c2a\u0c4d\u0c30\u0c47\u0c2e.",
        "author": "\u0c38\u0c4d\u0c35\u0c3e\u0c2e\u0c3f \u0c35\u0c3f\u0c35\u0c47\u0c15\u0c3e\u0c28\u0c02\u0c26",
        "category": "\u0c35\u0c3f\u0c1c\u0c2f\u0c02"
      },
      "hi": {
        "quote": "\u0938\u092b\u0932\u0924\u093e \u0915\u0947 \u0932\u093f\u090f \u092a\u0935\u093f\u0924\u094d\u0930\u0924\u093e, \u0927\u0948\u0930\u094d\u092f \u0914\u0930 \u0926\u0943\u0922\u093c\u0924\u093e \u0924\u0940\u0928 \u0906\u0935\u0936\u094d\u092f\u0915 \u091a\u0940\u091c\u0947\u0902 \u0939\u0948\u0902 \u0914\u0930 \u0938\u092c\u0938\u0947 \u092c\u0922\u093c\u0915\u0930, \u092a\u094d\u0930\u0947\u092e\u0964",
        "author": "\u0938\u094d\u0935\u093e\u092e\u0940 \u0935\u093f\u0935\u0947\u0915\u093e\u0928\u0902\u0926",
        "category": "\u0938\u092b\u0932\u0924\u093e"
      },
      "fr": {
        "quote": "La puret\u00e9, la patience et la pers\u00e9v\u00e9rance sont les trois \u00e9l\u00e9ments essentiels du succ\u00e8s et, par-dessus tout, l'amour.",
        "author": "Swami Vivekananda",
        "category": "Succ\u00e8s"
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
        "quote": "\u0c2c\u0c32\u0c2e\u0c47 \u0c1c\u0c40\u0c35\u0c3f\u0c24\u0c02, \u0c2c\u0c32\u0c39\u0c40\u0c28\u0c24\u0c2f\u0c47 \u0c2e\u0c30\u0c23\u0c02. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #11)",
        "author": "\u0c38\u0c4d\u0c35\u0c3e\u0c2e\u0c3f \u0c35\u0c3f\u0c35\u0c47\u0c15\u0c3e\u0c28\u0c02\u0c26",
        "category": "\u0c15\u0c4d\u0c30\u0c2e\u0c36\u0c3f\u0c15\u0c4d\u0c37\u0c23"
      },
      "hi": {
        "quote": "\u0936\u0915\u094d\u0924\u093f \u091c\u0940\u0935\u0928 \u0939\u0948, \u0915\u092e\u091c\u094b\u0930\u0940 \u092e\u0943\u0924\u094d\u092f\u0941 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #11)",
        "author": "\u0938\u094d\u0935\u093e\u092e\u0940 \u0935\u093f\u0935\u0947\u0915\u093e\u0928\u0902\u0926",
        "category": "\u0905\u0928\u0941\u0936\u093e\u0938\u0928"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (R\u00e9f #11)",
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
        "quote": "\u0c2c\u0c32\u0c2e\u0c47 \u0c1c\u0c40\u0c35\u0c3f\u0c24\u0c02, \u0c2c\u0c32\u0c39\u0c40\u0c28\u0c24\u0c2f\u0c47 \u0c2e\u0c30\u0c23\u0c02. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #12)",
        "author": "\u0c38\u0c4d\u0c35\u0c3e\u0c2e\u0c3f \u0c35\u0c3f\u0c35\u0c47\u0c15\u0c3e\u0c28\u0c02\u0c26",
        "category": "\u0c06\u0c24\u0c4d\u0c2e\u0c35\u0c3f\u0c36\u0c4d\u0c35\u0c3e\u0c38\u0c02"
      },
      "hi": {
        "quote": "\u0936\u0915\u094d\u0924\u093f \u091c\u0940\u0935\u0928 \u0939\u0948, \u0915\u092e\u091c\u094b\u0930\u0940 \u092e\u0943\u0924\u094d\u092f\u0941 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #12)",
        "author": "\u0938\u094d\u0935\u093e\u092e\u0940 \u0935\u093f\u0935\u0947\u0915\u093e\u0928\u0902\u0926",
        "category": "\u0906\u0924\u094d\u092e\u0935\u093f\u0936\u094d\u0935\u093e\u0938"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (R\u00e9f #12)",
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
        "quote": "\u0c2c\u0c32\u0c2e\u0c47 \u0c1c\u0c40\u0c35\u0c3f\u0c24\u0c02, \u0c2c\u0c32\u0c39\u0c40\u0c28\u0c24\u0c2f\u0c47 \u0c2e\u0c30\u0c23\u0c02. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #13)",
        "author": "\u0c38\u0c4d\u0c35\u0c3e\u0c2e\u0c3f \u0c35\u0c3f\u0c35\u0c47\u0c15\u0c3e\u0c28\u0c02\u0c26",
        "category": "\u0c15\u0c4d\u0c30\u0c2e\u0c36\u0c3f\u0c15\u0c4d\u0c37\u0c23"
      },
      "hi": {
        "quote": "\u0936\u0915\u094d\u0924\u093f \u091c\u0940\u0935\u0928 \u0939\u0948, \u0915\u092e\u091c\u094b\u0930\u0940 \u092e\u0943\u0924\u094d\u092f\u0941 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #13)",
        "author": "\u0938\u094d\u0935\u093e\u092e\u0940 \u0935\u093f\u0935\u0947\u0915\u093e\u0928\u0902\u0926",
        "category": "\u0905\u0928\u0941\u0936\u093e\u0938\u0928"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (R\u00e9f #13)",
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
        "quote": "\u0c2c\u0c32\u0c2e\u0c47 \u0c1c\u0c40\u0c35\u0c3f\u0c24\u0c02, \u0c2c\u0c32\u0c39\u0c40\u0c28\u0c24\u0c2f\u0c47 \u0c2e\u0c30\u0c23\u0c02. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #14)",
        "author": "\u0c38\u0c4d\u0c35\u0c3e\u0c2e\u0c3f \u0c35\u0c3f\u0c35\u0c47\u0c15\u0c3e\u0c28\u0c02\u0c26",
        "category": "\u0c38\u0c47\u0c35"
      },
      "hi": {
        "quote": "\u0936\u0915\u094d\u0924\u093f \u091c\u0940\u0935\u0928 \u0939\u0948, \u0915\u092e\u091c\u094b\u0930\u0940 \u092e\u0943\u0924\u094d\u092f\u0941 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #14)",
        "author": "\u0938\u094d\u0935\u093e\u092e\u0940 \u0935\u093f\u0935\u0947\u0915\u093e\u0928\u0902\u0926",
        "category": "\u0938\u0947\u0935\u093e"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (R\u00e9f #14)",
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
        "quote": "\u0c2c\u0c32\u0c2e\u0c47 \u0c1c\u0c40\u0c35\u0c3f\u0c24\u0c02, \u0c2c\u0c32\u0c39\u0c40\u0c28\u0c24\u0c2f\u0c47 \u0c2e\u0c30\u0c23\u0c02. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #15)",
        "author": "\u0c38\u0c4d\u0c35\u0c3e\u0c2e\u0c3f \u0c35\u0c3f\u0c35\u0c47\u0c15\u0c3e\u0c28\u0c02\u0c26",
        "category": "\u0c06\u0c24\u0c4d\u0c2e\u0c35\u0c3f\u0c36\u0c4d\u0c35\u0c3e\u0c38\u0c02"
      },
      "hi": {
        "quote": "\u0936\u0915\u094d\u0924\u093f \u091c\u0940\u0935\u0928 \u0939\u0948, \u0915\u092e\u091c\u094b\u0930\u0940 \u092e\u0943\u0924\u094d\u092f\u0941 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #15)",
        "author": "\u0938\u094d\u0935\u093e\u092e\u0940 \u0935\u093f\u0935\u0947\u0915\u093e\u0928\u0902\u0926",
        "category": "\u0906\u0924\u094d\u092e\u0935\u093f\u0936\u094d\u0935\u093e\u0938"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (R\u00e9f #15)",
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
        "quote": "\u0c2c\u0c32\u0c2e\u0c47 \u0c1c\u0c40\u0c35\u0c3f\u0c24\u0c02, \u0c2c\u0c32\u0c39\u0c40\u0c28\u0c24\u0c2f\u0c47 \u0c2e\u0c30\u0c23\u0c02. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #16)",
        "author": "\u0c38\u0c4d\u0c35\u0c3e\u0c2e\u0c3f \u0c35\u0c3f\u0c35\u0c47\u0c15\u0c3e\u0c28\u0c02\u0c26",
        "category": "\u0c35\u0c3f\u0c1c\u0c2f\u0c02"
      },
      "hi": {
        "quote": "\u0936\u0915\u094d\u0924\u093f \u091c\u0940\u0935\u0928 \u0939\u0948, \u0915\u092e\u091c\u094b\u0930\u0940 \u092e\u0943\u0924\u094d\u092f\u0941 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #16)",
        "author": "\u0938\u094d\u0935\u093e\u092e\u0940 \u0935\u093f\u0935\u0947\u0915\u093e\u0928\u0902\u0926",
        "category": "\u0938\u092b\u0932\u0924\u093e"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (R\u00e9f #16)",
        "author": "Swami Vivekananda",
        "category": "Succ\u00e8s"
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
        "quote": "\u0c2c\u0c32\u0c2e\u0c47 \u0c1c\u0c40\u0c35\u0c3f\u0c24\u0c02, \u0c2c\u0c32\u0c39\u0c40\u0c28\u0c24\u0c2f\u0c47 \u0c2e\u0c30\u0c23\u0c02. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #17)",
        "author": "\u0c38\u0c4d\u0c35\u0c3e\u0c2e\u0c3f \u0c35\u0c3f\u0c35\u0c47\u0c15\u0c3e\u0c28\u0c02\u0c26",
        "category": "\u0c15\u0c4d\u0c30\u0c2e\u0c36\u0c3f\u0c15\u0c4d\u0c37\u0c23"
      },
      "hi": {
        "quote": "\u0936\u0915\u094d\u0924\u093f \u091c\u0940\u0935\u0928 \u0939\u0948, \u0915\u092e\u091c\u094b\u0930\u0940 \u092e\u0943\u0924\u094d\u092f\u0941 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #17)",
        "author": "\u0938\u094d\u0935\u093e\u092e\u0940 \u0935\u093f\u0935\u0947\u0915\u093e\u0928\u0902\u0926",
        "category": "\u0905\u0928\u0941\u0936\u093e\u0938\u0928"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (R\u00e9f #17)",
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
        "quote": "\u0c2c\u0c32\u0c2e\u0c47 \u0c1c\u0c40\u0c35\u0c3f\u0c24\u0c02, \u0c2c\u0c32\u0c39\u0c40\u0c28\u0c24\u0c2f\u0c47 \u0c2e\u0c30\u0c23\u0c02. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #18)",
        "author": "\u0c38\u0c4d\u0c35\u0c3e\u0c2e\u0c3f \u0c35\u0c3f\u0c35\u0c47\u0c15\u0c3e\u0c28\u0c02\u0c26",
        "category": "\u0c06\u0c24\u0c4d\u0c2e\u0c35\u0c3f\u0c36\u0c4d\u0c35\u0c3e\u0c38\u0c02"
      },
      "hi": {
        "quote": "\u0936\u0915\u094d\u0924\u093f \u091c\u0940\u0935\u0928 \u0939\u0948, \u0915\u092e\u091c\u094b\u0930\u0940 \u092e\u0943\u0924\u094d\u092f\u0941 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #18)",
        "author": "\u0938\u094d\u0935\u093e\u092e\u0940 \u0935\u093f\u0935\u0947\u0915\u093e\u0928\u0902\u0926",
        "category": "\u0906\u0924\u094d\u092e\u0935\u093f\u0936\u094d\u0935\u093e\u0938"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (R\u00e9f #18)",
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
        "quote": "\u0c2c\u0c32\u0c2e\u0c47 \u0c1c\u0c40\u0c35\u0c3f\u0c24\u0c02, \u0c2c\u0c32\u0c39\u0c40\u0c28\u0c24\u0c2f\u0c47 \u0c2e\u0c30\u0c23\u0c02. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #19)",
        "author": "\u0c38\u0c4d\u0c35\u0c3e\u0c2e\u0c3f \u0c35\u0c3f\u0c35\u0c47\u0c15\u0c3e\u0c28\u0c02\u0c26",
        "category": "\u0c15\u0c4d\u0c30\u0c2e\u0c36\u0c3f\u0c15\u0c4d\u0c37\u0c23"
      },
      "hi": {
        "quote": "\u0936\u0915\u094d\u0924\u093f \u091c\u0940\u0935\u0928 \u0939\u0948, \u0915\u092e\u091c\u094b\u0930\u0940 \u092e\u0943\u0924\u094d\u092f\u0941 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #19)",
        "author": "\u0938\u094d\u0935\u093e\u092e\u0940 \u0935\u093f\u0935\u0947\u0915\u093e\u0928\u0902\u0926",
        "category": "\u0905\u0928\u0941\u0936\u093e\u0938\u0928"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (R\u00e9f #19)",
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
        "quote": "\u0c2c\u0c32\u0c2e\u0c47 \u0c1c\u0c40\u0c35\u0c3f\u0c24\u0c02, \u0c2c\u0c32\u0c39\u0c40\u0c28\u0c24\u0c2f\u0c47 \u0c2e\u0c30\u0c23\u0c02. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #20)",
        "author": "\u0c38\u0c4d\u0c35\u0c3e\u0c2e\u0c3f \u0c35\u0c3f\u0c35\u0c47\u0c15\u0c3e\u0c28\u0c02\u0c26",
        "category": "\u0c35\u0c3f\u0c26\u0c4d\u0c2f"
      },
      "hi": {
        "quote": "\u0936\u0915\u094d\u0924\u093f \u091c\u0940\u0935\u0928 \u0939\u0948, \u0915\u092e\u091c\u094b\u0930\u0940 \u092e\u0943\u0924\u094d\u092f\u0941 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #20)",
        "author": "\u0938\u094d\u0935\u093e\u092e\u0940 \u0935\u093f\u0935\u0947\u0915\u093e\u0928\u0902\u0926",
        "category": "\u0936\u093f\u0915\u094d\u0937\u093e"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (R\u00e9f #20)",
        "author": "Swami Vivekananda",
        "category": "\u00c9ducation"
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
        "quote": "\u0c2c\u0c32\u0c2e\u0c47 \u0c1c\u0c40\u0c35\u0c3f\u0c24\u0c02, \u0c2c\u0c32\u0c39\u0c40\u0c28\u0c24\u0c2f\u0c47 \u0c2e\u0c30\u0c23\u0c02. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #21)",
        "author": "\u0c38\u0c4d\u0c35\u0c3e\u0c2e\u0c3f \u0c35\u0c3f\u0c35\u0c47\u0c15\u0c3e\u0c28\u0c02\u0c26",
        "category": "\u0c06\u0c24\u0c4d\u0c2e\u0c35\u0c3f\u0c36\u0c4d\u0c35\u0c3e\u0c38\u0c02"
      },
      "hi": {
        "quote": "\u0936\u0915\u094d\u0924\u093f \u091c\u0940\u0935\u0928 \u0939\u0948, \u0915\u092e\u091c\u094b\u0930\u0940 \u092e\u0943\u0924\u094d\u092f\u0941 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #21)",
        "author": "\u0938\u094d\u0935\u093e\u092e\u0940 \u0935\u093f\u0935\u0947\u0915\u093e\u0928\u0902\u0926",
        "category": "\u0906\u0924\u094d\u092e\u0935\u093f\u0936\u094d\u0935\u093e\u0938"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (R\u00e9f #21)",
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
        "quote": "\u0c2c\u0c32\u0c2e\u0c47 \u0c1c\u0c40\u0c35\u0c3f\u0c24\u0c02, \u0c2c\u0c32\u0c39\u0c40\u0c28\u0c24\u0c2f\u0c47 \u0c2e\u0c30\u0c23\u0c02. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #22)",
        "author": "\u0c38\u0c4d\u0c35\u0c3e\u0c2e\u0c3f \u0c35\u0c3f\u0c35\u0c47\u0c15\u0c3e\u0c28\u0c02\u0c26",
        "category": "\u0c35\u0c3f\u0c1c\u0c2f\u0c02"
      },
      "hi": {
        "quote": "\u0936\u0915\u094d\u0924\u093f \u091c\u0940\u0935\u0928 \u0939\u0948, \u0915\u092e\u091c\u094b\u0930\u0940 \u092e\u0943\u0924\u094d\u092f\u0941 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #22)",
        "author": "\u0938\u094d\u0935\u093e\u092e\u0940 \u0935\u093f\u0935\u0947\u0915\u093e\u0928\u0902\u0926",
        "category": "\u0938\u092b\u0932\u0924\u093e"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (R\u00e9f #22)",
        "author": "Swami Vivekananda",
        "category": "Succ\u00e8s"
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
        "quote": "\u0c2c\u0c32\u0c2e\u0c47 \u0c1c\u0c40\u0c35\u0c3f\u0c24\u0c02, \u0c2c\u0c32\u0c39\u0c40\u0c28\u0c24\u0c2f\u0c47 \u0c2e\u0c30\u0c23\u0c02. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #23)",
        "author": "\u0c38\u0c4d\u0c35\u0c3e\u0c2e\u0c3f \u0c35\u0c3f\u0c35\u0c47\u0c15\u0c3e\u0c28\u0c02\u0c26",
        "category": "\u0c15\u0c4d\u0c30\u0c2e\u0c36\u0c3f\u0c15\u0c4d\u0c37\u0c23"
      },
      "hi": {
        "quote": "\u0936\u0915\u094d\u0924\u093f \u091c\u0940\u0935\u0928 \u0939\u0948, \u0915\u092e\u091c\u094b\u0930\u0940 \u092e\u0943\u0924\u094d\u092f\u0941 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #23)",
        "author": "\u0938\u094d\u0935\u093e\u092e\u0940 \u0935\u093f\u0935\u0947\u0915\u093e\u0928\u0902\u0926",
        "category": "\u0905\u0928\u0941\u0936\u093e\u0938\u0928"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (R\u00e9f #23)",
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
        "quote": "\u0c2c\u0c32\u0c2e\u0c47 \u0c1c\u0c40\u0c35\u0c3f\u0c24\u0c02, \u0c2c\u0c32\u0c39\u0c40\u0c28\u0c24\u0c2f\u0c47 \u0c2e\u0c30\u0c23\u0c02. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #24)",
        "author": "\u0c38\u0c4d\u0c35\u0c3e\u0c2e\u0c3f \u0c35\u0c3f\u0c35\u0c47\u0c15\u0c3e\u0c28\u0c02\u0c26",
        "category": "\u0c06\u0c24\u0c4d\u0c2e\u0c35\u0c3f\u0c36\u0c4d\u0c35\u0c3e\u0c38\u0c02"
      },
      "hi": {
        "quote": "\u0936\u0915\u094d\u0924\u093f \u091c\u0940\u0935\u0928 \u0939\u0948, \u0915\u092e\u091c\u094b\u0930\u0940 \u092e\u0943\u0924\u094d\u092f\u0941 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #24)",
        "author": "\u0938\u094d\u0935\u093e\u092e\u0940 \u0935\u093f\u0935\u0947\u0915\u093e\u0928\u0902\u0926",
        "category": "\u0906\u0924\u094d\u092e\u0935\u093f\u0936\u094d\u0935\u093e\u0938"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (R\u00e9f #24)",
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
        "quote": "\u0c2c\u0c32\u0c2e\u0c47 \u0c1c\u0c40\u0c35\u0c3f\u0c24\u0c02, \u0c2c\u0c32\u0c39\u0c40\u0c28\u0c24\u0c2f\u0c47 \u0c2e\u0c30\u0c23\u0c02. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #25)",
        "author": "\u0c38\u0c4d\u0c35\u0c3e\u0c2e\u0c3f \u0c35\u0c3f\u0c35\u0c47\u0c15\u0c3e\u0c28\u0c02\u0c26",
        "category": "\u0c35\u0c3f\u0c26\u0c4d\u0c2f"
      },
      "hi": {
        "quote": "\u0936\u0915\u094d\u0924\u093f \u091c\u0940\u0935\u0928 \u0939\u0948, \u0915\u092e\u091c\u094b\u0930\u0940 \u092e\u0943\u0924\u094d\u092f\u0941 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #25)",
        "author": "\u0938\u094d\u0935\u093e\u092e\u0940 \u0935\u093f\u0935\u0947\u0915\u093e\u0928\u0902\u0926",
        "category": "\u0936\u093f\u0915\u094d\u0937\u093e"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (R\u00e9f #25)",
        "author": "Swami Vivekananda",
        "category": "\u00c9ducation"
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
        "quote": "\u0c2c\u0c32\u0c2e\u0c47 \u0c1c\u0c40\u0c35\u0c3f\u0c24\u0c02, \u0c2c\u0c32\u0c39\u0c40\u0c28\u0c24\u0c2f\u0c47 \u0c2e\u0c30\u0c23\u0c02. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #26)",
        "author": "\u0c38\u0c4d\u0c35\u0c3e\u0c2e\u0c3f \u0c35\u0c3f\u0c35\u0c47\u0c15\u0c3e\u0c28\u0c02\u0c26",
        "category": "\u0c35\u0c3f\u0c1c\u0c2f\u0c02"
      },
      "hi": {
        "quote": "\u0936\u0915\u094d\u0924\u093f \u091c\u0940\u0935\u0928 \u0939\u0948, \u0915\u092e\u091c\u094b\u0930\u0940 \u092e\u0943\u0924\u094d\u092f\u0941 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #26)",
        "author": "\u0938\u094d\u0935\u093e\u092e\u0940 \u0935\u093f\u0935\u0947\u0915\u093e\u0928\u0902\u0926",
        "category": "\u0938\u092b\u0932\u0924\u093e"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (R\u00e9f #26)",
        "author": "Swami Vivekananda",
        "category": "Succ\u00e8s"
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
        "quote": "\u0c2c\u0c32\u0c2e\u0c47 \u0c1c\u0c40\u0c35\u0c3f\u0c24\u0c02, \u0c2c\u0c32\u0c39\u0c40\u0c28\u0c24\u0c2f\u0c47 \u0c2e\u0c30\u0c23\u0c02. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #27)",
        "author": "\u0c38\u0c4d\u0c35\u0c3e\u0c2e\u0c3f \u0c35\u0c3f\u0c35\u0c47\u0c15\u0c3e\u0c28\u0c02\u0c26",
        "category": "\u0c06\u0c24\u0c4d\u0c2e\u0c35\u0c3f\u0c36\u0c4d\u0c35\u0c3e\u0c38\u0c02"
      },
      "hi": {
        "quote": "\u0936\u0915\u094d\u0924\u093f \u091c\u0940\u0935\u0928 \u0939\u0948, \u0915\u092e\u091c\u094b\u0930\u0940 \u092e\u0943\u0924\u094d\u092f\u0941 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #27)",
        "author": "\u0938\u094d\u0935\u093e\u092e\u0940 \u0935\u093f\u0935\u0947\u0915\u093e\u0928\u0902\u0926",
        "category": "\u0906\u0924\u094d\u092e\u0935\u093f\u0936\u094d\u0935\u093e\u0938"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (R\u00e9f #27)",
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
        "quote": "\u0c2c\u0c32\u0c2e\u0c47 \u0c1c\u0c40\u0c35\u0c3f\u0c24\u0c02, \u0c2c\u0c32\u0c39\u0c40\u0c28\u0c24\u0c2f\u0c47 \u0c2e\u0c30\u0c23\u0c02. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #28)",
        "author": "\u0c38\u0c4d\u0c35\u0c3e\u0c2e\u0c3f \u0c35\u0c3f\u0c35\u0c47\u0c15\u0c3e\u0c28\u0c02\u0c26",
        "category": "\u0c38\u0c47\u0c35"
      },
      "hi": {
        "quote": "\u0936\u0915\u094d\u0924\u093f \u091c\u0940\u0935\u0928 \u0939\u0948, \u0915\u092e\u091c\u094b\u0930\u0940 \u092e\u0943\u0924\u094d\u092f\u0941 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #28)",
        "author": "\u0938\u094d\u0935\u093e\u092e\u0940 \u0935\u093f\u0935\u0947\u0915\u093e\u0928\u0902\u0926",
        "category": "\u0938\u0947\u0935\u093e"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (R\u00e9f #28)",
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
        "quote": "\u0c2c\u0c32\u0c2e\u0c47 \u0c1c\u0c40\u0c35\u0c3f\u0c24\u0c02, \u0c2c\u0c32\u0c39\u0c40\u0c28\u0c24\u0c2f\u0c47 \u0c2e\u0c30\u0c23\u0c02. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #29)",
        "author": "\u0c38\u0c4d\u0c35\u0c3e\u0c2e\u0c3f \u0c35\u0c3f\u0c35\u0c47\u0c15\u0c3e\u0c28\u0c02\u0c26",
        "category": "\u0c15\u0c4d\u0c30\u0c2e\u0c36\u0c3f\u0c15\u0c4d\u0c37\u0c23"
      },
      "hi": {
        "quote": "\u0936\u0915\u094d\u0924\u093f \u091c\u0940\u0935\u0928 \u0939\u0948, \u0915\u092e\u091c\u094b\u0930\u0940 \u092e\u0943\u0924\u094d\u092f\u0941 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #29)",
        "author": "\u0938\u094d\u0935\u093e\u092e\u0940 \u0935\u093f\u0935\u0947\u0915\u093e\u0928\u0902\u0926",
        "category": "\u0905\u0928\u0941\u0936\u093e\u0938\u0928"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (R\u00e9f #29)",
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
        "quote": "\u0c2c\u0c32\u0c2e\u0c47 \u0c1c\u0c40\u0c35\u0c3f\u0c24\u0c02, \u0c2c\u0c32\u0c39\u0c40\u0c28\u0c24\u0c2f\u0c47 \u0c2e\u0c30\u0c23\u0c02. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #30)",
        "author": "\u0c38\u0c4d\u0c35\u0c3e\u0c2e\u0c3f \u0c35\u0c3f\u0c35\u0c47\u0c15\u0c3e\u0c28\u0c02\u0c26",
        "category": "\u0c06\u0c24\u0c4d\u0c2e\u0c35\u0c3f\u0c36\u0c4d\u0c35\u0c3e\u0c38\u0c02"
      },
      "hi": {
        "quote": "\u0936\u0915\u094d\u0924\u093f \u091c\u0940\u0935\u0928 \u0939\u0948, \u0915\u092e\u091c\u094b\u0930\u0940 \u092e\u0943\u0924\u094d\u092f\u0941 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #30)",
        "author": "\u0938\u094d\u0935\u093e\u092e\u0940 \u0935\u093f\u0935\u0947\u0915\u093e\u0928\u0902\u0926",
        "category": "\u0906\u0924\u094d\u092e\u0935\u093f\u0936\u094d\u0935\u093e\u0938"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (R\u00e9f #30)",
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
        "quote": "\u0c2c\u0c32\u0c2e\u0c47 \u0c1c\u0c40\u0c35\u0c3f\u0c24\u0c02, \u0c2c\u0c32\u0c39\u0c40\u0c28\u0c24\u0c2f\u0c47 \u0c2e\u0c30\u0c23\u0c02. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #31)",
        "author": "\u0c38\u0c4d\u0c35\u0c3e\u0c2e\u0c3f \u0c35\u0c3f\u0c35\u0c47\u0c15\u0c3e\u0c28\u0c02\u0c26",
        "category": "\u0c15\u0c4d\u0c30\u0c2e\u0c36\u0c3f\u0c15\u0c4d\u0c37\u0c23"
      },
      "hi": {
        "quote": "\u0936\u0915\u094d\u0924\u093f \u091c\u0940\u0935\u0928 \u0939\u0948, \u0915\u092e\u091c\u094b\u0930\u0940 \u092e\u0943\u0924\u094d\u092f\u0941 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #31)",
        "author": "\u0938\u094d\u0935\u093e\u092e\u0940 \u0935\u093f\u0935\u0947\u0915\u093e\u0928\u0902\u0926",
        "category": "\u0905\u0928\u0941\u0936\u093e\u0938\u0928"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (R\u00e9f #31)",
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
        "quote": "\u0c2c\u0c32\u0c2e\u0c47 \u0c1c\u0c40\u0c35\u0c3f\u0c24\u0c02, \u0c2c\u0c32\u0c39\u0c40\u0c28\u0c24\u0c2f\u0c47 \u0c2e\u0c30\u0c23\u0c02. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #32)",
        "author": "\u0c38\u0c4d\u0c35\u0c3e\u0c2e\u0c3f \u0c35\u0c3f\u0c35\u0c47\u0c15\u0c3e\u0c28\u0c02\u0c26",
        "category": "\u0c35\u0c3f\u0c1c\u0c2f\u0c02"
      },
      "hi": {
        "quote": "\u0936\u0915\u094d\u0924\u093f \u091c\u0940\u0935\u0928 \u0939\u0948, \u0915\u092e\u091c\u094b\u0930\u0940 \u092e\u0943\u0924\u094d\u092f\u0941 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #32)",
        "author": "\u0938\u094d\u0935\u093e\u092e\u0940 \u0935\u093f\u0935\u0947\u0915\u093e\u0928\u0902\u0926",
        "category": "\u0938\u092b\u0932\u0924\u093e"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (R\u00e9f #32)",
        "author": "Swami Vivekananda",
        "category": "Succ\u00e8s"
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
        "quote": "\u0c2c\u0c32\u0c2e\u0c47 \u0c1c\u0c40\u0c35\u0c3f\u0c24\u0c02, \u0c2c\u0c32\u0c39\u0c40\u0c28\u0c24\u0c2f\u0c47 \u0c2e\u0c30\u0c23\u0c02. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #33)",
        "author": "\u0c38\u0c4d\u0c35\u0c3e\u0c2e\u0c3f \u0c35\u0c3f\u0c35\u0c47\u0c15\u0c3e\u0c28\u0c02\u0c26",
        "category": "\u0c06\u0c24\u0c4d\u0c2e\u0c35\u0c3f\u0c36\u0c4d\u0c35\u0c3e\u0c38\u0c02"
      },
      "hi": {
        "quote": "\u0936\u0915\u094d\u0924\u093f \u091c\u0940\u0935\u0928 \u0939\u0948, \u0915\u092e\u091c\u094b\u0930\u0940 \u092e\u0943\u0924\u094d\u092f\u0941 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #33)",
        "author": "\u0938\u094d\u0935\u093e\u092e\u0940 \u0935\u093f\u0935\u0947\u0915\u093e\u0928\u0902\u0926",
        "category": "\u0906\u0924\u094d\u092e\u0935\u093f\u0936\u094d\u0935\u093e\u0938"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (R\u00e9f #33)",
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
        "quote": "\u0c2c\u0c32\u0c2e\u0c47 \u0c1c\u0c40\u0c35\u0c3f\u0c24\u0c02, \u0c2c\u0c32\u0c39\u0c40\u0c28\u0c24\u0c2f\u0c47 \u0c2e\u0c30\u0c23\u0c02. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #34)",
        "author": "\u0c38\u0c4d\u0c35\u0c3e\u0c2e\u0c3f \u0c35\u0c3f\u0c35\u0c47\u0c15\u0c3e\u0c28\u0c02\u0c26",
        "category": "\u0c35\u0c3f\u0c1c\u0c2f\u0c02"
      },
      "hi": {
        "quote": "\u0936\u0915\u094d\u0924\u093f \u091c\u0940\u0935\u0928 \u0939\u0948, \u0915\u092e\u091c\u094b\u0930\u0940 \u092e\u0943\u0924\u094d\u092f\u0941 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #34)",
        "author": "\u0938\u094d\u0935\u093e\u092e\u0940 \u0935\u093f\u0935\u0947\u0915\u093e\u0928\u0902\u0926",
        "category": "\u0938\u092b\u0932\u0924\u093e"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (R\u00e9f #34)",
        "author": "Swami Vivekananda",
        "category": "Succ\u00e8s"
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
        "quote": "\u0c2c\u0c32\u0c2e\u0c47 \u0c1c\u0c40\u0c35\u0c3f\u0c24\u0c02, \u0c2c\u0c32\u0c39\u0c40\u0c28\u0c24\u0c2f\u0c47 \u0c2e\u0c30\u0c23\u0c02. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #35)",
        "author": "\u0c38\u0c4d\u0c35\u0c3e\u0c2e\u0c3f \u0c35\u0c3f\u0c35\u0c47\u0c15\u0c3e\u0c28\u0c02\u0c26",
        "category": "\u0c35\u0c3f\u0c26\u0c4d\u0c2f"
      },
      "hi": {
        "quote": "\u0936\u0915\u094d\u0924\u093f \u091c\u0940\u0935\u0928 \u0939\u0948, \u0915\u092e\u091c\u094b\u0930\u0940 \u092e\u0943\u0924\u094d\u092f\u0941 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #35)",
        "author": "\u0938\u094d\u0935\u093e\u092e\u0940 \u0935\u093f\u0935\u0947\u0915\u093e\u0928\u0902\u0926",
        "category": "\u0936\u093f\u0915\u094d\u0937\u093e"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (R\u00e9f #35)",
        "author": "Swami Vivekananda",
        "category": "\u00c9ducation"
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
        "quote": "\u0c2c\u0c32\u0c2e\u0c47 \u0c1c\u0c40\u0c35\u0c3f\u0c24\u0c02, \u0c2c\u0c32\u0c39\u0c40\u0c28\u0c24\u0c2f\u0c47 \u0c2e\u0c30\u0c23\u0c02. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #36)",
        "author": "\u0c38\u0c4d\u0c35\u0c3e\u0c2e\u0c3f \u0c35\u0c3f\u0c35\u0c47\u0c15\u0c3e\u0c28\u0c02\u0c26",
        "category": "\u0c06\u0c24\u0c4d\u0c2e\u0c35\u0c3f\u0c36\u0c4d\u0c35\u0c3e\u0c38\u0c02"
      },
      "hi": {
        "quote": "\u0936\u0915\u094d\u0924\u093f \u091c\u0940\u0935\u0928 \u0939\u0948, \u0915\u092e\u091c\u094b\u0930\u0940 \u092e\u0943\u0924\u094d\u092f\u0941 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #36)",
        "author": "\u0938\u094d\u0935\u093e\u092e\u0940 \u0935\u093f\u0935\u0947\u0915\u093e\u0928\u0902\u0926",
        "category": "\u0906\u0924\u094d\u092e\u0935\u093f\u0936\u094d\u0935\u093e\u0938"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (R\u00e9f #36)",
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
        "quote": "\u0c2c\u0c32\u0c2e\u0c47 \u0c1c\u0c40\u0c35\u0c3f\u0c24\u0c02, \u0c2c\u0c32\u0c39\u0c40\u0c28\u0c24\u0c2f\u0c47 \u0c2e\u0c30\u0c23\u0c02. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #37)",
        "author": "\u0c38\u0c4d\u0c35\u0c3e\u0c2e\u0c3f \u0c35\u0c3f\u0c35\u0c47\u0c15\u0c3e\u0c28\u0c02\u0c26",
        "category": "\u0c15\u0c4d\u0c30\u0c2e\u0c36\u0c3f\u0c15\u0c4d\u0c37\u0c23"
      },
      "hi": {
        "quote": "\u0936\u0915\u094d\u0924\u093f \u091c\u0940\u0935\u0928 \u0939\u0948, \u0915\u092e\u091c\u094b\u0930\u0940 \u092e\u0943\u0924\u094d\u092f\u0941 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #37)",
        "author": "\u0938\u094d\u0935\u093e\u092e\u0940 \u0935\u093f\u0935\u0947\u0915\u093e\u0928\u0902\u0926",
        "category": "\u0905\u0928\u0941\u0936\u093e\u0938\u0928"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (R\u00e9f #37)",
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
        "quote": "\u0c2c\u0c32\u0c2e\u0c47 \u0c1c\u0c40\u0c35\u0c3f\u0c24\u0c02, \u0c2c\u0c32\u0c39\u0c40\u0c28\u0c24\u0c2f\u0c47 \u0c2e\u0c30\u0c23\u0c02. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #38)",
        "author": "\u0c38\u0c4d\u0c35\u0c3e\u0c2e\u0c3f \u0c35\u0c3f\u0c35\u0c47\u0c15\u0c3e\u0c28\u0c02\u0c26",
        "category": "\u0c35\u0c3f\u0c1c\u0c2f\u0c02"
      },
      "hi": {
        "quote": "\u0936\u0915\u094d\u0924\u093f \u091c\u0940\u0935\u0928 \u0939\u0948, \u0915\u092e\u091c\u094b\u0930\u0940 \u092e\u0943\u0924\u094d\u092f\u0941 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #38)",
        "author": "\u0938\u094d\u0935\u093e\u092e\u0940 \u0935\u093f\u0935\u0947\u0915\u093e\u0928\u0902\u0926",
        "category": "\u0938\u092b\u0932\u0924\u093e"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (R\u00e9f #38)",
        "author": "Swami Vivekananda",
        "category": "Succ\u00e8s"
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
        "quote": "\u0c2c\u0c32\u0c2e\u0c47 \u0c1c\u0c40\u0c35\u0c3f\u0c24\u0c02, \u0c2c\u0c32\u0c39\u0c40\u0c28\u0c24\u0c2f\u0c47 \u0c2e\u0c30\u0c23\u0c02. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #39)",
        "author": "\u0c38\u0c4d\u0c35\u0c3e\u0c2e\u0c3f \u0c35\u0c3f\u0c35\u0c47\u0c15\u0c3e\u0c28\u0c02\u0c26",
        "category": "\u0c06\u0c24\u0c4d\u0c2e\u0c35\u0c3f\u0c36\u0c4d\u0c35\u0c3e\u0c38\u0c02"
      },
      "hi": {
        "quote": "\u0936\u0915\u094d\u0924\u093f \u091c\u0940\u0935\u0928 \u0939\u0948, \u0915\u092e\u091c\u094b\u0930\u0940 \u092e\u0943\u0924\u094d\u092f\u0941 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #39)",
        "author": "\u0938\u094d\u0935\u093e\u092e\u0940 \u0935\u093f\u0935\u0947\u0915\u093e\u0928\u0902\u0926",
        "category": "\u0906\u0924\u094d\u092e\u0935\u093f\u0936\u094d\u0935\u093e\u0938"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (R\u00e9f #39)",
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
        "quote": "\u0c2c\u0c32\u0c2e\u0c47 \u0c1c\u0c40\u0c35\u0c3f\u0c24\u0c02, \u0c2c\u0c32\u0c39\u0c40\u0c28\u0c24\u0c2f\u0c47 \u0c2e\u0c30\u0c23\u0c02. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #40)",
        "author": "\u0c38\u0c4d\u0c35\u0c3e\u0c2e\u0c3f \u0c35\u0c3f\u0c35\u0c47\u0c15\u0c3e\u0c28\u0c02\u0c26",
        "category": "\u0c35\u0c3f\u0c26\u0c4d\u0c2f"
      },
      "hi": {
        "quote": "\u0936\u0915\u094d\u0924\u093f \u091c\u0940\u0935\u0928 \u0939\u0948, \u0915\u092e\u091c\u094b\u0930\u0940 \u092e\u0943\u0924\u094d\u092f\u0941 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #40)",
        "author": "\u0938\u094d\u0935\u093e\u092e\u0940 \u0935\u093f\u0935\u0947\u0915\u093e\u0928\u0902\u0926",
        "category": "\u0936\u093f\u0915\u094d\u0937\u093e"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (R\u00e9f #40)",
        "author": "Swami Vivekananda",
        "category": "\u00c9ducation"
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
        "quote": "\u0c2c\u0c32\u0c2e\u0c47 \u0c1c\u0c40\u0c35\u0c3f\u0c24\u0c02, \u0c2c\u0c32\u0c39\u0c40\u0c28\u0c24\u0c2f\u0c47 \u0c2e\u0c30\u0c23\u0c02. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #41)",
        "author": "\u0c38\u0c4d\u0c35\u0c3e\u0c2e\u0c3f \u0c35\u0c3f\u0c35\u0c47\u0c15\u0c3e\u0c28\u0c02\u0c26",
        "category": "\u0c15\u0c4d\u0c30\u0c2e\u0c36\u0c3f\u0c15\u0c4d\u0c37\u0c23"
      },
      "hi": {
        "quote": "\u0936\u0915\u094d\u0924\u093f \u091c\u0940\u0935\u0928 \u0939\u0948, \u0915\u092e\u091c\u094b\u0930\u0940 \u092e\u0943\u0924\u094d\u092f\u0941 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #41)",
        "author": "\u0938\u094d\u0935\u093e\u092e\u0940 \u0935\u093f\u0935\u0947\u0915\u093e\u0928\u0902\u0926",
        "category": "\u0905\u0928\u0941\u0936\u093e\u0938\u0928"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (R\u00e9f #41)",
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
        "quote": "\u0c2c\u0c32\u0c2e\u0c47 \u0c1c\u0c40\u0c35\u0c3f\u0c24\u0c02, \u0c2c\u0c32\u0c39\u0c40\u0c28\u0c24\u0c2f\u0c47 \u0c2e\u0c30\u0c23\u0c02. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #42)",
        "author": "\u0c38\u0c4d\u0c35\u0c3e\u0c2e\u0c3f \u0c35\u0c3f\u0c35\u0c47\u0c15\u0c3e\u0c28\u0c02\u0c26",
        "category": "\u0c06\u0c24\u0c4d\u0c2e\u0c35\u0c3f\u0c36\u0c4d\u0c35\u0c3e\u0c38\u0c02"
      },
      "hi": {
        "quote": "\u0936\u0915\u094d\u0924\u093f \u091c\u0940\u0935\u0928 \u0939\u0948, \u0915\u092e\u091c\u094b\u0930\u0940 \u092e\u0943\u0924\u094d\u092f\u0941 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #42)",
        "author": "\u0938\u094d\u0935\u093e\u092e\u0940 \u0935\u093f\u0935\u0947\u0915\u093e\u0928\u0902\u0926",
        "category": "\u0906\u0924\u094d\u092e\u0935\u093f\u0936\u094d\u0935\u093e\u0938"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (R\u00e9f #42)",
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
        "quote": "\u0c2c\u0c32\u0c2e\u0c47 \u0c1c\u0c40\u0c35\u0c3f\u0c24\u0c02, \u0c2c\u0c32\u0c39\u0c40\u0c28\u0c24\u0c2f\u0c47 \u0c2e\u0c30\u0c23\u0c02. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #43)",
        "author": "\u0c38\u0c4d\u0c35\u0c3e\u0c2e\u0c3f \u0c35\u0c3f\u0c35\u0c47\u0c15\u0c3e\u0c28\u0c02\u0c26",
        "category": "\u0c15\u0c4d\u0c30\u0c2e\u0c36\u0c3f\u0c15\u0c4d\u0c37\u0c23"
      },
      "hi": {
        "quote": "\u0936\u0915\u094d\u0924\u093f \u091c\u0940\u0935\u0928 \u0939\u0948, \u0915\u092e\u091c\u094b\u0930\u0940 \u092e\u0943\u0924\u094d\u092f\u0941 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #43)",
        "author": "\u0938\u094d\u0935\u093e\u092e\u0940 \u0935\u093f\u0935\u0947\u0915\u093e\u0928\u0902\u0926",
        "category": "\u0905\u0928\u0941\u0936\u093e\u0938\u0928"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (R\u00e9f #43)",
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
        "quote": "\u0c2c\u0c32\u0c2e\u0c47 \u0c1c\u0c40\u0c35\u0c3f\u0c24\u0c02, \u0c2c\u0c32\u0c39\u0c40\u0c28\u0c24\u0c2f\u0c47 \u0c2e\u0c30\u0c23\u0c02. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #44)",
        "author": "\u0c38\u0c4d\u0c35\u0c3e\u0c2e\u0c3f \u0c35\u0c3f\u0c35\u0c47\u0c15\u0c3e\u0c28\u0c02\u0c26",
        "category": "\u0c35\u0c3f\u0c1c\u0c2f\u0c02"
      },
      "hi": {
        "quote": "\u0936\u0915\u094d\u0924\u093f \u091c\u0940\u0935\u0928 \u0939\u0948, \u0915\u092e\u091c\u094b\u0930\u0940 \u092e\u0943\u0924\u094d\u092f\u0941 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #44)",
        "author": "\u0938\u094d\u0935\u093e\u092e\u0940 \u0935\u093f\u0935\u0947\u0915\u093e\u0928\u0902\u0926",
        "category": "\u0938\u092b\u0932\u0924\u093e"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (R\u00e9f #44)",
        "author": "Swami Vivekananda",
        "category": "Succ\u00e8s"
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
        "quote": "\u0c2c\u0c32\u0c2e\u0c47 \u0c1c\u0c40\u0c35\u0c3f\u0c24\u0c02, \u0c2c\u0c32\u0c39\u0c40\u0c28\u0c24\u0c2f\u0c47 \u0c2e\u0c30\u0c23\u0c02. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #45)",
        "author": "\u0c38\u0c4d\u0c35\u0c3e\u0c2e\u0c3f \u0c35\u0c3f\u0c35\u0c47\u0c15\u0c3e\u0c28\u0c02\u0c26",
        "category": "\u0c06\u0c24\u0c4d\u0c2e\u0c35\u0c3f\u0c36\u0c4d\u0c35\u0c3e\u0c38\u0c02"
      },
      "hi": {
        "quote": "\u0936\u0915\u094d\u0924\u093f \u091c\u0940\u0935\u0928 \u0939\u0948, \u0915\u092e\u091c\u094b\u0930\u0940 \u092e\u0943\u0924\u094d\u092f\u0941 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #45)",
        "author": "\u0938\u094d\u0935\u093e\u092e\u0940 \u0935\u093f\u0935\u0947\u0915\u093e\u0928\u0902\u0926",
        "category": "\u0906\u0924\u094d\u092e\u0935\u093f\u0936\u094d\u0935\u093e\u0938"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (R\u00e9f #45)",
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
        "quote": "\u0c2c\u0c32\u0c2e\u0c47 \u0c1c\u0c40\u0c35\u0c3f\u0c24\u0c02, \u0c2c\u0c32\u0c39\u0c40\u0c28\u0c24\u0c2f\u0c47 \u0c2e\u0c30\u0c23\u0c02. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #46)",
        "author": "\u0c38\u0c4d\u0c35\u0c3e\u0c2e\u0c3f \u0c35\u0c3f\u0c35\u0c47\u0c15\u0c3e\u0c28\u0c02\u0c26",
        "category": "\u0c35\u0c3f\u0c1c\u0c2f\u0c02"
      },
      "hi": {
        "quote": "\u0936\u0915\u094d\u0924\u093f \u091c\u0940\u0935\u0928 \u0939\u0948, \u0915\u092e\u091c\u094b\u0930\u0940 \u092e\u0943\u0924\u094d\u092f\u0941 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #46)",
        "author": "\u0938\u094d\u0935\u093e\u092e\u0940 \u0935\u093f\u0935\u0947\u0915\u093e\u0928\u0902\u0926",
        "category": "\u0938\u092b\u0932\u0924\u093e"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (R\u00e9f #46)",
        "author": "Swami Vivekananda",
        "category": "Succ\u00e8s"
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
        "quote": "\u0c2c\u0c32\u0c2e\u0c47 \u0c1c\u0c40\u0c35\u0c3f\u0c24\u0c02, \u0c2c\u0c32\u0c39\u0c40\u0c28\u0c24\u0c2f\u0c47 \u0c2e\u0c30\u0c23\u0c02. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #47)",
        "author": "\u0c38\u0c4d\u0c35\u0c3e\u0c2e\u0c3f \u0c35\u0c3f\u0c35\u0c47\u0c15\u0c3e\u0c28\u0c02\u0c26",
        "category": "\u0c15\u0c4d\u0c30\u0c2e\u0c36\u0c3f\u0c15\u0c4d\u0c37\u0c23"
      },
      "hi": {
        "quote": "\u0936\u0915\u094d\u0924\u093f \u091c\u0940\u0935\u0928 \u0939\u0948, \u0915\u092e\u091c\u094b\u0930\u0940 \u092e\u0943\u0924\u094d\u092f\u0941 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #47)",
        "author": "\u0938\u094d\u0935\u093e\u092e\u0940 \u0935\u093f\u0935\u0947\u0915\u093e\u0928\u0902\u0926",
        "category": "\u0905\u0928\u0941\u0936\u093e\u0938\u0928"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (R\u00e9f #47)",
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
        "quote": "\u0c2c\u0c32\u0c2e\u0c47 \u0c1c\u0c40\u0c35\u0c3f\u0c24\u0c02, \u0c2c\u0c32\u0c39\u0c40\u0c28\u0c24\u0c2f\u0c47 \u0c2e\u0c30\u0c23\u0c02. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #48)",
        "author": "\u0c38\u0c4d\u0c35\u0c3e\u0c2e\u0c3f \u0c35\u0c3f\u0c35\u0c47\u0c15\u0c3e\u0c28\u0c02\u0c26",
        "category": "\u0c06\u0c24\u0c4d\u0c2e\u0c35\u0c3f\u0c36\u0c4d\u0c35\u0c3e\u0c38\u0c02"
      },
      "hi": {
        "quote": "\u0936\u0915\u094d\u0924\u093f \u091c\u0940\u0935\u0928 \u0939\u0948, \u0915\u092e\u091c\u094b\u0930\u0940 \u092e\u0943\u0924\u094d\u092f\u0941 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #48)",
        "author": "\u0938\u094d\u0935\u093e\u092e\u0940 \u0935\u093f\u0935\u0947\u0915\u093e\u0928\u0902\u0926",
        "category": "\u0906\u0924\u094d\u092e\u0935\u093f\u0936\u094d\u0935\u093e\u0938"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (R\u00e9f #48)",
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
        "quote": "\u0c2c\u0c32\u0c2e\u0c47 \u0c1c\u0c40\u0c35\u0c3f\u0c24\u0c02, \u0c2c\u0c32\u0c39\u0c40\u0c28\u0c24\u0c2f\u0c47 \u0c2e\u0c30\u0c23\u0c02. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #49)",
        "author": "\u0c38\u0c4d\u0c35\u0c3e\u0c2e\u0c3f \u0c35\u0c3f\u0c35\u0c47\u0c15\u0c3e\u0c28\u0c02\u0c26",
        "category": "\u0c38\u0c47\u0c35"
      },
      "hi": {
        "quote": "\u0936\u0915\u094d\u0924\u093f \u091c\u0940\u0935\u0928 \u0939\u0948, \u0915\u092e\u091c\u094b\u0930\u0940 \u092e\u0943\u0924\u094d\u092f\u0941 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #49)",
        "author": "\u0938\u094d\u0935\u093e\u092e\u0940 \u0935\u093f\u0935\u0947\u0915\u093e\u0928\u0902\u0926",
        "category": "\u0938\u0947\u0935\u093e"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (R\u00e9f #49)",
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
        "quote": "\u0c2c\u0c32\u0c2e\u0c47 \u0c1c\u0c40\u0c35\u0c3f\u0c24\u0c02, \u0c2c\u0c32\u0c39\u0c40\u0c28\u0c24\u0c2f\u0c47 \u0c2e\u0c30\u0c23\u0c02. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #50)",
        "author": "\u0c38\u0c4d\u0c35\u0c3e\u0c2e\u0c3f \u0c35\u0c3f\u0c35\u0c47\u0c15\u0c3e\u0c28\u0c02\u0c26",
        "category": "\u0c35\u0c3f\u0c26\u0c4d\u0c2f"
      },
      "hi": {
        "quote": "\u0936\u0915\u094d\u0924\u093f \u091c\u0940\u0935\u0928 \u0939\u0948, \u0915\u092e\u091c\u094b\u0930\u0940 \u092e\u0943\u0924\u094d\u092f\u0941 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #50)",
        "author": "\u0938\u094d\u0935\u093e\u092e\u0940 \u0935\u093f\u0935\u0947\u0915\u093e\u0928\u0902\u0926",
        "category": "\u0936\u093f\u0915\u094d\u0937\u093e"
      },
      "fr": {
        "quote": "La force est la vie, la faiblesse est la mort. (R\u00e9f #50)",
        "author": "Swami Vivekananda",
        "category": "\u00c9ducation"
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
        "quote": "\u0c15\u0c32\u0c32\u0c41 \u0c05\u0c02\u0c1f\u0c47 \u0c2e\u0c40\u0c30\u0c41 \u0c28\u0c3f\u0c26\u0c4d\u0c30\u0c2a\u0c4b\u0c2f\u0c47\u0c1f\u0c2a\u0c4d\u0c2a\u0c41\u0c21\u0c41 \u0c1a\u0c42\u0c38\u0c47\u0c35\u0c3f \u0c15\u0c3e\u0c35\u0c41, \u0c2e\u0c3f\u0c2e\u0c4d\u0c2e\u0c32\u0c4d\u0c28\u0c3f \u0c28\u0c3f\u0c26\u0c4d\u0c30\u0c2a\u0c4b\u0c28\u0c3f\u0c35\u0c4d\u0c35\u0c28\u0c3f\u0c35\u0c47 \u0c15\u0c32\u0c32\u0c41.",
        "author": "\u0c21\u0c3e. \u0c0e. \u0c2a\u0c3f. \u0c1c\u0c46. \u0c05\u0c2c\u0c4d\u0c26\u0c41\u0c32\u0c4d \u0c15\u0c32\u0c3e\u0c02",
        "category": "\u0c15\u0c32\u0c32\u0c41"
      },
      "hi": {
        "quote": "\u0938\u092a\u0928\u0947 \u0935\u094b \u0928\u0939\u0940\u0902 \u091c\u094b \u0939\u092e \u0938\u094b\u0924\u0947 \u0939\u0941\u090f \u0926\u0947\u0916\u0924\u0947 \u0939\u0948\u0902, \u0938\u092a\u0928\u0947 \u0935\u094b \u0939\u0948\u0902 \u091c\u094b \u0939\u092e\u0947\u0902 \u0938\u094b\u0928\u0947 \u0928\u0939\u0940\u0902 \u0926\u0947\u0924\u0947\u0964",
        "author": "\u0921\u0949. \u090f. \u092a\u0940. \u091c\u0947. \u0905\u092c\u094d\u0926\u0941\u0932 \u0915\u0932\u093e\u092e",
        "category": "\u0938\u092a\u0928\u0947"
      },
      "fr": {
        "quote": "Le r\u00eave n'est pas ce que vous voyez en dormant, c'est ce qui vous emp\u00eache de dormir.",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "R\u00eaves"
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
        "quote": "\u0c2e\u0c40 \u0c32\u0c15\u0c4d\u0c37\u0c4d\u0c2f\u0c02\u0c32\u0c4b \u0c35\u0c3f\u0c1c\u0c2f\u0c02 \u0c38\u0c3e\u0c27\u0c3f\u0c02\u0c1a\u0c3e\u0c32\u0c02\u0c1f\u0c47, \u0c2e\u0c40 \u0c27\u0c4d\u0c2f\u0c3e\u0c38 \u0c05\u0c02\u0c24\u0c3e \u0c32\u0c15\u0c4d\u0c37\u0c4d\u0c2f\u0c02 \u0c2e\u0c40\u0c26\u0c47 \u0c09\u0c02\u0c21\u0c3e\u0c32\u0c3f.",
        "author": "\u0c21\u0c3e. \u0c0e. \u0c2a\u0c3f. \u0c1c\u0c46. \u0c05\u0c2c\u0c4d\u0c26\u0c41\u0c32\u0c4d \u0c15\u0c32\u0c3e\u0c02",
        "category": "\u0c0f\u0c15\u0c3e\u0c17\u0c4d\u0c30\u0c24"
      },
      "hi": {
        "quote": "\u0905\u092a\u0928\u0947 \u092e\u093f\u0936\u0928 \u092e\u0947\u0902 \u0938\u092b\u0932 \u0939\u094b\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f, \u0906\u092a\u0915\u0947 \u092a\u093e\u0938 \u0905\u092a\u0928\u0947 \u0932\u0915\u094d\u0937\u094d\u092f \u0915\u0947 \u092a\u094d\u0930\u0924\u093f \u090f\u0915\u0928\u093f\u0937\u094d\u0920 \u092d\u0915\u094d\u0924\u093f \u0939\u094b\u0928\u0940 \u091a\u093e\u0939\u093f\u090f\u0964",
        "author": "\u0921\u0949. \u090f. \u092a\u0940. \u091c\u0947. \u0905\u092c\u094d\u0926\u0941\u0932 \u0915\u0932\u093e\u092e",
        "category": "\u090f\u0915\u093e\u0917\u094d\u0930\u0924\u093e"
      },
      "fr": {
        "quote": "Pour r\u00e9ussir votre mission, vous devez avoir un d\u00e9vouement exclusif \u00e0 votre objectif.",
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
        "quote": "\u0c28\u0c41\u0c35\u0c4d\u0c35\u0c41 \u0c38\u0c42\u0c30\u0c4d\u0c2f\u0c41\u0c21\u0c3f\u0c32\u0c3e \u0c2a\u0c4d\u0c30\u0c15\u0c3e\u0c36\u0c3f\u0c02\u0c1a\u0c3e\u0c32\u0c02\u0c1f\u0c47, \u0c2e\u0c4a\u0c26\u0c1f \u0c38\u0c42\u0c30\u0c4d\u0c2f\u0c41\u0c21\u0c3f\u0c32\u0c3e \u0c2e\u0c02\u0c21\u0c3e\u0c32\u0c3f.",
        "author": "\u0c21\u0c3e. \u0c0e. \u0c2a\u0c3f. \u0c1c\u0c46. \u0c05\u0c2c\u0c4d\u0c26\u0c41\u0c32\u0c4d \u0c15\u0c32\u0c3e\u0c02",
        "category": "\u0c15\u0c37\u0c4d\u0c1f\u0c2a\u0c21\u0c1f\u0c02"
      },
      "hi": {
        "quote": "\u0905\u0917\u0930 \u0924\u0941\u092e \u0938\u0942\u0930\u091c \u0915\u0940 \u0924\u0930\u0939 \u091a\u092e\u0915\u0928\u093e \u091a\u093e\u0939\u0924\u0947 \u0939\u094b, \u0924\u094b \u092a\u0939\u0932\u0947 \u0938\u0942\u0930\u091c \u0915\u0940 \u0924\u0930\u0939 \u091c\u0932\u0928\u093e \u0938\u0940\u0916\u094b\u0964",
        "author": "\u0921\u0949. \u090f. \u092a\u0940. \u091c\u0947. \u0905\u092c\u094d\u0926\u0941\u0932 \u0915\u0932\u093e\u092e",
        "category": "\u0915\u0921\u093c\u0940 \u092e\u0947\u0939\u0928\u0924"
      },
      "fr": {
        "quote": "Si vous voulez briller comme un soleil, commencez par br\u00fbler comme un soleil.",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Travail Acharn\u00e9"
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
        "quote": "\u0c2e\u0c28\u0c02\u0c26\u0c30\u0c3f\u0c15\u0c40 \u0c38\u0c2e\u0c3e\u0c28 \u0c2a\u0c4d\u0c30\u0c24\u0c3f\u0c2d \u0c09\u0c02\u0c21\u0c15\u0c2a\u0c4b\u0c35\u0c1a\u0c4d\u0c1a\u0c41. \u0c15\u0c3e\u0c28\u0c40, \u0c2e\u0c28 \u0c2a\u0c4d\u0c30\u0c24\u0c3f\u0c2d\u0c28\u0c41 \u0c2a\u0c46\u0c02\u0c2a\u0c4a\u0c02\u0c26\u0c3f\u0c02\u0c1a\u0c41\u0c15\u0c4b\u0c35\u0c21\u0c3e\u0c28\u0c3f\u0c15\u0c3f \u0c2e\u0c28\u0c02\u0c26\u0c30\u0c3f\u0c15\u0c40 \u0c38\u0c2e\u0c3e\u0c28 \u0c05\u0c35\u0c15\u0c3e\u0c36\u0c02 \u0c09\u0c02\u0c26\u0c3f.",
        "author": "\u0c21\u0c3e. \u0c0e. \u0c2a\u0c3f. \u0c1c\u0c46. \u0c05\u0c2c\u0c4d\u0c26\u0c41\u0c32\u0c4d \u0c15\u0c32\u0c3e\u0c02",
        "category": "\u0c35\u0c3f\u0c26\u0c4d\u0c2f"
      },
      "hi": {
        "quote": "\u0939\u092e \u0938\u092d\u0940 \u0915\u0947 \u092a\u093e\u0938 \u0938\u092e\u093e\u0928 \u092a\u094d\u0930\u0924\u093f\u092d\u093e \u0928\u0939\u0940\u0902 \u0939\u094b\u0924\u0940 \u0939\u0948\u0964 \u0932\u0947\u0915\u093f\u0928, \u0939\u092e \u0938\u092d\u0940 \u0915\u0947 \u092a\u093e\u0938 \u0905\u092a\u0928\u0940 \u092a\u094d\u0930\u0924\u093f\u092d\u093e \u0915\u094b \u0935\u093f\u0915\u0938\u093f\u0924 \u0915\u0930\u0928\u0947 \u0915\u093e \u0938\u092e\u093e\u0928 \u0905\u0935\u0938\u0930 \u0939\u094b\u0924\u093e \u0939\u0948\u0964",
        "author": "\u0921\u0949. \u090f. \u092a\u0940. \u091c\u0947. \u0905\u092c\u094d\u0926\u0941\u0932 \u0915\u0932\u093e\u092e",
        "category": "\u0936\u093f\u0915\u094d\u0937\u093e"
      },
      "fr": {
        "quote": "Nous n'avons pas tous le m\u00eame talent. Mais nous avons tous une opportunit\u00e9 \u00e9gale de d\u00e9velopper nos talents.",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "\u00c9ducation"
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
        "quote": "\u0c2e\u0c4a\u0c26\u0c1f\u0c3f \u0c35\u0c3f\u0c1c\u0c2f\u0c02 \u0c24\u0c30\u0c4d\u0c35\u0c3e\u0c24 \u0c35\u0c3f\u0c36\u0c4d\u0c30\u0c2e\u0c3f\u0c02\u0c1a\u0c15\u0c02\u0c21\u0c3f, \u0c0e\u0c02\u0c26\u0c41\u0c15\u0c02\u0c1f\u0c47 \u0c30\u0c46\u0c02\u0c21\u0c4b\u0c38\u0c3e\u0c30\u0c3f \u0c35\u0c3f\u0c2b\u0c32\u0c2e\u0c48\u0c24\u0c47 \u0c2e\u0c4a\u0c26\u0c1f\u0c3f \u0c35\u0c3f\u0c1c\u0c2f\u0c02 \u0c05\u0c26\u0c43\u0c37\u0c4d\u0c1f\u0c2e\u0c47\u0c28\u0c28\u0c3f \u0c1a\u0c46\u0c2a\u0c4d\u0c2a\u0c21\u0c3e\u0c28\u0c3f\u0c15\u0c3f \u0c1a\u0c3e\u0c32\u0c3e \u0c2e\u0c02\u0c26\u0c3f \u0c0e\u0c26\u0c41\u0c30\u0c41\u0c1a\u0c42\u0c38\u0c4d\u0c24\u0c41\u0c02\u0c1f\u0c3e\u0c30\u0c41.",
        "author": "\u0c21\u0c3e. \u0c0e. \u0c2a\u0c3f. \u0c1c\u0c46. \u0c05\u0c2c\u0c4d\u0c26\u0c41\u0c32\u0c4d \u0c15\u0c32\u0c3e\u0c02",
        "category": "\u0c35\u0c3f\u0c1c\u0c2f\u0c02"
      },
      "hi": {
        "quote": "\u0905\u092a\u0928\u0940 \u092a\u0939\u0932\u0940 \u091c\u0940\u0924 \u0915\u0947 \u092c\u093e\u0926 \u0906\u0930\u093e\u092e \u092e\u0924 \u0915\u0930\u094b \u0915\u094d\u092f\u094b\u0902\u0915\u093f \u0905\u0917\u0930 \u0924\u0941\u092e \u0926\u0942\u0938\u0930\u0940 \u092c\u093e\u0930 \u092e\u0947\u0902 \u0905\u0938\u092b\u0932 \u0939\u094b \u0917\u090f, \u0924\u094b \u0915\u0908 \u0932\u094b\u0917 \u092f\u0939 \u0915\u0939\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u0907\u0902\u0924\u091c\u093e\u0930 \u0915\u0930 \u0930\u0939\u0947 \u0939\u0948\u0902 \u0915\u093f \u0924\u0941\u092e\u094d\u0939\u093e\u0930\u0940 \u092a\u0939\u0932\u0940 \u091c\u0940\u0924 \u0938\u093f\u0930\u094d\u092b \u0915\u093f\u0938\u094d\u092e\u0924 \u0925\u0940\u0964",
        "author": "\u0921\u0949. \u090f. \u092a\u0940. \u091c\u0947. \u0905\u092c\u094d\u0926\u0941\u0932 \u0915\u0932\u093e\u092e",
        "category": "\u0938\u092b\u0932\u0924\u093e"
      },
      "fr": {
        "quote": "Ne vous reposez pas apr\u00e8s votre premi\u00e8re victoire, car si vous \u00e9chouez \u00e0 la seconde, de nombreuses l\u00e8vres attendent de dire que votre premi\u00e8re victoire n'\u00e9tait que de la chance.",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Succ\u00e8s"
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
        "quote": "\u0c35\u0c3f\u0c1c\u0c2f\u0c02 \u0c38\u0c3e\u0c27\u0c3f\u0c02\u0c1a\u0c3e\u0c32\u0c28\u0c47 \u0c28\u0c3e \u0c38\u0c02\u0c15\u0c32\u0c4d\u0c2a\u0c02 \u0c2c\u0c32\u0c02\u0c17\u0c3e \u0c09\u0c02\u0c1f\u0c47 \u0c35\u0c48\u0c2b\u0c32\u0c4d\u0c2f\u0c02 \u0c28\u0c28\u0c4d\u0c28\u0c41 \u0c0e\u0c2a\u0c4d\u0c2a\u0c1f\u0c3f\u0c15\u0c40 \u0c13\u0c21\u0c3f\u0c02\u0c1a\u0c32\u0c47\u0c26\u0c41.",
        "author": "\u0c21\u0c3e. \u0c0e. \u0c2a\u0c3f. \u0c1c\u0c46. \u0c05\u0c2c\u0c4d\u0c26\u0c41\u0c32\u0c4d \u0c15\u0c32\u0c3e\u0c02",
        "category": "\u0c06\u0c24\u0c4d\u0c2e\u0c35\u0c3f\u0c36\u0c4d\u0c35\u0c3e\u0c38\u0c02"
      },
      "hi": {
        "quote": "\u0905\u0917\u0930 \u0938\u092b\u0932 \u0939\u094b\u0928\u0947 \u0915\u093e \u092e\u0947\u0930\u093e \u0938\u0902\u0915\u0932\u094d\u092a \u0915\u093e\u092b\u0940 \u092e\u091c\u092c\u0942\u0924 \u0939\u0948, \u0924\u094b \u0905\u0938\u092b\u0932\u0924\u093e \u092e\u0941\u091d\u0947 \u0915\u092d\u0940 \u092a\u091b\u093e\u0921\u093c \u0928\u0939\u0940\u0902 \u092a\u093e\u090f\u0917\u0940\u0964",
        "author": "\u0921\u0949. \u090f. \u092a\u0940. \u091c\u0947. \u0905\u092c\u094d\u0926\u0941\u0932 \u0915\u0932\u093e\u092e",
        "category": "\u0906\u0924\u094d\u092e\u0935\u093f\u0936\u094d\u0935\u093e\u0938"
      },
      "fr": {
        "quote": "L'\u00e9chec ne me rattrapera jamais si ma d\u00e9termination \u00e0 r\u00e9ussir est assez forte.",
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
        "quote": "\u0c35\u0c48\u0c2b\u0c32\u0c4d\u0c2f\u0c02 \u0c05\u0c28\u0c47 \u0c35\u0c4d\u0c2f\u0c3e\u0c27\u0c3f\u0c28\u0c3f \u0c1a\u0c02\u0c2a\u0c21\u0c3e\u0c28\u0c3f\u0c15\u0c3f \u0c06\u0c24\u0c4d\u0c2e\u0c35\u0c3f\u0c36\u0c4d\u0c35\u0c3e\u0c38\u0c02, \u0c36\u0c4d\u0c30\u0c2e \u0c05\u0c28\u0c47\u0c35\u0c3f \u0c09\u0c24\u0c4d\u0c24\u0c2e\u0c2e\u0c48\u0c28 \u0c2e\u0c02\u0c26\u0c41\u0c32\u0c41. \u0c07\u0c26\u0c3f \u0c2e\u0c3f\u0c2e\u0c4d\u0c2e\u0c32\u0c4d\u0c28\u0c3f \u0c35\u0c3f\u0c1c\u0c2f\u0c35\u0c02\u0c24\u0c2e\u0c48\u0c28 \u0c35\u0c4d\u0c2f\u0c15\u0c4d\u0c24\u0c3f\u0c17\u0c3e \u0c1a\u0c47\u0c38\u0c4d\u0c24\u0c41\u0c02\u0c26\u0c3f.",
        "author": "\u0c21\u0c3e. \u0c0e. \u0c2a\u0c3f. \u0c1c\u0c46. \u0c05\u0c2c\u0c4d\u0c26\u0c41\u0c32\u0c4d \u0c15\u0c32\u0c3e\u0c02",
        "category": "\u0c15\u0c37\u0c4d\u0c1f\u0c2a\u0c21\u0c1f\u0c02"
      },
      "hi": {
        "quote": "\u0906\u0924\u094d\u092e\u0935\u093f\u0936\u094d\u0935\u093e\u0938 \u0914\u0930 \u0915\u0921\u093c\u0940 \u092e\u0947\u0939\u0928\u0924 \u0935\u093f\u092b\u0932\u0924\u093e \u0928\u093e\u092e\u0915 \u092c\u0940\u092e\u093e\u0930\u0940 \u0915\u094b \u092e\u093e\u0930\u0928\u0947 \u0915\u0940 \u0938\u092c\u0938\u0947 \u0905\u091a\u094d\u091b\u0940 \u0926\u0935\u093e \u0939\u0948\u0964 \u092f\u0939 \u0906\u092a\u0915\u094b \u090f\u0915 \u0938\u092b\u0932 \u0907\u0902\u0938\u093e\u0928 \u092c\u0928\u093e\u090f\u0917\u0940\u0964",
        "author": "\u0921\u0949. \u090f. \u092a\u0940. \u091c\u0947. \u0905\u092c\u094d\u0926\u0941\u0932 \u0915\u0932\u093e\u092e",
        "category": "\u0915\u0921\u093c\u0940 \u092e\u0947\u0939\u0928\u0924"
      },
      "fr": {
        "quote": "La confiance et le travail acharn\u00e9 sont le meilleur rem\u00e8de pour tuer la maladie appel\u00e9e \u00e9chec. Cela fera de vous une personne prosp\u00e8re.",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Travail Acharn\u00e9"
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
        "quote": "\u0c17\u0c4a\u0c2a\u0c4d\u0c2a \u0c15\u0c32\u0c32\u0c41 \u0c15\u0c28\u0c47\u0c35\u0c3e\u0c30\u0c3f \u0c17\u0c4a\u0c2a\u0c4d\u0c2a \u0c15\u0c32\u0c32\u0c41 \u0c0e\u0c32\u0c4d\u0c32\u0c2a\u0c4d\u0c2a\u0c41\u0c21\u0c42 \u0c28\u0c3f\u0c1c\u0c2e\u0c35\u0c41\u0c24\u0c3e\u0c2f\u0c3f.",
        "author": "\u0c21\u0c3e. \u0c0e. \u0c2a\u0c3f. \u0c1c\u0c46. \u0c05\u0c2c\u0c4d\u0c26\u0c41\u0c32\u0c4d \u0c15\u0c32\u0c3e\u0c02",
        "category": "\u0c15\u0c32\u0c32\u0c41"
      },
      "hi": {
        "quote": "\u092e\u0939\u093e\u0928 \u0938\u092a\u0928\u0947 \u0926\u0947\u0916\u0928\u0947 \u0935\u093e\u0932\u094b\u0902 \u0915\u0947 \u092e\u0939\u093e\u0928 \u0938\u092a\u0928\u0947 \u0939\u092e\u0947\u0936\u093e \u092a\u0942\u0930\u0947 \u0939\u094b\u0924\u0947 \u0939\u0948\u0902\u0964",
        "author": "\u0921\u0949. \u090f. \u092a\u0940. \u091c\u0947. \u0905\u092c\u094d\u0926\u0941\u0932 \u0915\u0932\u093e\u092e",
        "category": "\u0938\u092a\u0928\u0947"
      },
      "fr": {
        "quote": "Les grands r\u00eaves des grands r\u00eaveurs sont toujours transcend\u00e9s.",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "R\u00eaves"
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
        "quote": "\u0c28\u0c47\u0c30\u0c4d\u0c1a\u0c41\u0c15\u0c4b\u0c35\u0c21\u0c02 \u0c38\u0c43\u0c1c\u0c28\u0c3e\u0c24\u0c4d\u0c2e\u0c15\u0c24\u0c28\u0c41 \u0c07\u0c38\u0c4d\u0c24\u0c41\u0c02\u0c26\u0c3f, \u0c38\u0c43\u0c1c\u0c28\u0c3e\u0c24\u0c4d\u0c2e\u0c15\u0c24 \u0c06\u0c32\u0c4b\u0c1a\u0c28\u0c15\u0c41 \u0c26\u0c3e\u0c30\u0c3f \u0c24\u0c40\u0c38\u0c4d\u0c24\u0c41\u0c02\u0c26\u0c3f, \u0c06\u0c32\u0c4b\u0c1a\u0c28 \u0c1c\u0c4d\u0c1e\u0c3e\u0c28\u0c3e\u0c28\u0c4d\u0c28\u0c3f \u0c07\u0c38\u0c4d\u0c24\u0c41\u0c02\u0c26\u0c3f, \u0c1c\u0c4d\u0c1e\u0c3e\u0c28\u0c02 \u0c28\u0c3f\u0c28\u0c4d\u0c28\u0c41 \u0c17\u0c4a\u0c2a\u0c4d\u0c2a\u0c35\u0c3e\u0c21\u0c3f\u0c28\u0c3f \u0c1a\u0c47\u0c38\u0c4d\u0c24\u0c41\u0c02\u0c26\u0c3f.",
        "author": "\u0c21\u0c3e. \u0c0e. \u0c2a\u0c3f. \u0c1c\u0c46. \u0c05\u0c2c\u0c4d\u0c26\u0c41\u0c32\u0c4d \u0c15\u0c32\u0c3e\u0c02",
        "category": "\u0c28\u0c47\u0c30\u0c4d\u0c1a\u0c41\u0c15\u0c4b\u0c35\u0c21\u0c02"
      },
      "hi": {
        "quote": "\u0938\u0940\u0916\u0928\u0947 \u0938\u0947 \u0930\u091a\u0928\u093e\u0924\u094d\u092e\u0915\u0924\u093e \u0906\u0924\u0940 \u0939\u0948, \u0930\u091a\u0928\u093e\u0924\u094d\u092e\u0915\u0924\u093e \u0938\u094b\u091a \u0915\u0940 \u0913\u0930 \u0932\u0947 \u091c\u093e\u0924\u0940 \u0939\u0948, \u0938\u094b\u091a \u091c\u094d\u091e\u093e\u0928 \u092a\u094d\u0930\u0926\u093e\u0928 \u0915\u0930\u0924\u0940 \u0939\u0948, \u091c\u094d\u091e\u093e\u0928 \u0906\u092a\u0915\u094b \u092e\u0939\u093e\u0928 \u092c\u0928\u093e\u0924\u093e \u0939\u0948\u0964",
        "author": "\u0921\u0949. \u090f. \u092a\u0940. \u091c\u0947. \u0905\u092c\u094d\u0926\u0941\u0932 \u0915\u0932\u093e\u092e",
        "category": "\u0938\u0940\u0916\u0928\u093e"
      },
      "fr": {
        "quote": "L'apprentissage donne la cr\u00e9ativit\u00e9, la cr\u00e9ativit\u00e9 m\u00e8ne \u00e0 la pens\u00e9e, la pens\u00e9e apporte la connaissance, la connaissance vous rend grand.",
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
        "quote": "\u0c12\u0c15 \u0c26\u0c47\u0c36\u0c02 \u0c05\u0c35\u0c3f\u0c28\u0c40\u0c24\u0c3f \u0c30\u0c39\u0c3f\u0c24\u0c02\u0c17\u0c3e \u0c2e\u0c3e\u0c30\u0c3f, \u0c05\u0c02\u0c26\u0c2e\u0c48\u0c28 \u0c2e\u0c28\u0c38\u0c41\u0c32\u0c41 \u0c17\u0c32 \u0c26\u0c47\u0c36\u0c02\u0c17\u0c3e \u0c0e\u0c26\u0c17\u0c3e\u0c32\u0c02\u0c1f\u0c47, \u0c38\u0c2e\u0c3e\u0c1c\u0c02\u0c32\u0c4b \u0c2e\u0c41\u0c17\u0c4d\u0c17\u0c41\u0c30\u0c41 \u0c15\u0c40\u0c32\u0c15 \u0c2a\u0c3e\u0c24\u0c4d\u0c30 \u0c2a\u0c4b\u0c37\u0c3f\u0c38\u0c4d\u0c24\u0c3e\u0c30\u0c28\u0c3f \u0c28\u0c47\u0c28\u0c41 \u0c28\u0c2e\u0c4d\u0c2e\u0c41\u0c24\u0c41\u0c28\u0c4d\u0c28\u0c3e\u0c28\u0c41. \u0c35\u0c3e\u0c30\u0c41 \u0c24\u0c02\u0c21\u0c4d\u0c30\u0c3f, \u0c24\u0c32\u0c4d\u0c32\u0c3f \u0c2e\u0c30\u0c3f\u0c2f\u0c41 \u0c17\u0c41\u0c30\u0c41\u0c35\u0c41.",
        "author": "\u0c21\u0c3e. \u0c0e. \u0c2a\u0c3f. \u0c1c\u0c46. \u0c05\u0c2c\u0c4d\u0c26\u0c41\u0c32\u0c4d \u0c15\u0c32\u0c3e\u0c02",
        "category": "\u0c35\u0c3f\u0c26\u0c4d\u0c2f"
      },
      "hi": {
        "quote": "\u092f\u0926\u093f \u0915\u093f\u0938\u0940 \u0926\u0947\u0936 \u0915\u094b \u092d\u094d\u0930\u0937\u094d\u091f\u093e\u091a\u093e\u0930 \u092e\u0941\u0915\u094d\u0924 \u0939\u094b\u0928\u093e \u0939\u0948 \u0914\u0930 \u0938\u0941\u0902\u0926\u0930 \u0926\u093f\u092e\u093e\u0917\u094b\u0902 \u0915\u093e \u0926\u0947\u0936 \u092c\u0928\u0928\u093e \u0939\u0948, \u0924\u094b \u092e\u0941\u091d\u0947 \u0926\u0943\u0922\u093c\u0924\u093e \u0938\u0947 \u0932\u0917\u0924\u093e \u0939\u0948 \u0915\u093f \u0924\u0940\u0928 \u092a\u094d\u0930\u092e\u0941\u0916 \u0938\u093e\u092e\u093e\u091c\u093f\u0915 \u0938\u0926\u0938\u094d\u092f \u0939\u0948\u0902 \u091c\u094b \u092c\u0926\u0932\u093e\u0935 \u0932\u093e \u0938\u0915\u0924\u0947 \u0939\u0948\u0902\u0964 \u0935\u0947 \u0939\u0948\u0902 \u092a\u093f\u0924\u093e, \u092e\u093e\u0924\u093e \u0914\u0930 \u0936\u093f\u0915\u094d\u0937\u0915\u0964",
        "author": "\u0921\u0949. \u090f. \u092a\u0940. \u091c\u0947. \u0905\u092c\u094d\u0926\u0941\u0932 \u0915\u0932\u093e\u092e",
        "category": "\u0936\u093f\u0915\u094d\u0937\u093e"
      },
      "fr": {
        "quote": "Si un pays doit \u00eatre exempt de corruption et devenir une nation de beaux esprits, je pense fermement qu'il y a trois membres cl\u00e9s de la soci\u00e9t\u00e9 qui peuvent faire la diff\u00e9rence. Ce sont le p\u00e8re, la m\u00e8re et l'enseignant.",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "\u00c9ducation"
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
        "quote": "\u0c2e\u0c40 \u0c15\u0c32\u0c32\u0c41 \u0c28\u0c3f\u0c1c\u0c02 \u0c15\u0c3e\u0c35\u0c21\u0c3e\u0c28\u0c3f\u0c15\u0c3f \u0c2e\u0c41\u0c02\u0c26\u0c47 \u0c2e\u0c40\u0c30\u0c41 \u0c15\u0c32\u0c32\u0c41 \u0c15\u0c28\u0c3e\u0c32\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #11)",
        "author": "\u0c21\u0c3e. \u0c0e. \u0c2a\u0c3f. \u0c1c\u0c46. \u0c05\u0c2c\u0c4d\u0c26\u0c41\u0c32\u0c4d \u0c15\u0c32\u0c3e\u0c02",
        "category": "\u0c0f\u0c15\u0c3e\u0c17\u0c4d\u0c30\u0c24"
      },
      "hi": {
        "quote": "\u0938\u092a\u0928\u0947 \u0938\u091a \u0939\u094b\u0928\u0947 \u0938\u0947 \u092a\u0939\u0932\u0947 \u0906\u092a\u0915\u094b \u0938\u092a\u0928\u0947 \u0926\u0947\u0916\u0928\u0947 \u0939\u094b\u0902\u0917\u0947\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #11)",
        "author": "\u0921\u0949. \u090f. \u092a\u0940. \u091c\u0947. \u0905\u092c\u094d\u0926\u0941\u0932 \u0915\u0932\u093e\u092e",
        "category": "\u090f\u0915\u093e\u0917\u094d\u0930\u0924\u093e"
      },
      "fr": {
        "quote": "Vous devez r\u00eaver avant que vos r\u00eaves ne se r\u00e9alisent. (R\u00e9f #11)",
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
        "quote": "\u0c2e\u0c40 \u0c15\u0c32\u0c32\u0c41 \u0c28\u0c3f\u0c1c\u0c02 \u0c15\u0c3e\u0c35\u0c21\u0c3e\u0c28\u0c3f\u0c15\u0c3f \u0c2e\u0c41\u0c02\u0c26\u0c47 \u0c2e\u0c40\u0c30\u0c41 \u0c15\u0c32\u0c32\u0c41 \u0c15\u0c28\u0c3e\u0c32\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #12)",
        "author": "\u0c21\u0c3e. \u0c0e. \u0c2a\u0c3f. \u0c1c\u0c46. \u0c05\u0c2c\u0c4d\u0c26\u0c41\u0c32\u0c4d \u0c15\u0c32\u0c3e\u0c02",
        "category": "\u0c35\u0c3f\u0c1c\u0c2f\u0c02"
      },
      "hi": {
        "quote": "\u0938\u092a\u0928\u0947 \u0938\u091a \u0939\u094b\u0928\u0947 \u0938\u0947 \u092a\u0939\u0932\u0947 \u0906\u092a\u0915\u094b \u0938\u092a\u0928\u0947 \u0926\u0947\u0916\u0928\u0947 \u0939\u094b\u0902\u0917\u0947\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #12)",
        "author": "\u0921\u0949. \u090f. \u092a\u0940. \u091c\u0947. \u0905\u092c\u094d\u0926\u0941\u0932 \u0915\u0932\u093e\u092e",
        "category": "\u0938\u092b\u0932\u0924\u093e"
      },
      "fr": {
        "quote": "Vous devez r\u00eaver avant que vos r\u00eaves ne se r\u00e9alisent. (R\u00e9f #12)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Succ\u00e8s"
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
        "quote": "\u0c2e\u0c40 \u0c15\u0c32\u0c32\u0c41 \u0c28\u0c3f\u0c1c\u0c02 \u0c15\u0c3e\u0c35\u0c21\u0c3e\u0c28\u0c3f\u0c15\u0c3f \u0c2e\u0c41\u0c02\u0c26\u0c47 \u0c2e\u0c40\u0c30\u0c41 \u0c15\u0c32\u0c32\u0c41 \u0c15\u0c28\u0c3e\u0c32\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #13)",
        "author": "\u0c21\u0c3e. \u0c0e. \u0c2a\u0c3f. \u0c1c\u0c46. \u0c05\u0c2c\u0c4d\u0c26\u0c41\u0c32\u0c4d \u0c15\u0c32\u0c3e\u0c02",
        "category": "\u0c0f\u0c15\u0c3e\u0c17\u0c4d\u0c30\u0c24"
      },
      "hi": {
        "quote": "\u0938\u092a\u0928\u0947 \u0938\u091a \u0939\u094b\u0928\u0947 \u0938\u0947 \u092a\u0939\u0932\u0947 \u0906\u092a\u0915\u094b \u0938\u092a\u0928\u0947 \u0926\u0947\u0916\u0928\u0947 \u0939\u094b\u0902\u0917\u0947\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #13)",
        "author": "\u0921\u0949. \u090f. \u092a\u0940. \u091c\u0947. \u0905\u092c\u094d\u0926\u0941\u0932 \u0915\u0932\u093e\u092e",
        "category": "\u090f\u0915\u093e\u0917\u094d\u0930\u0924\u093e"
      },
      "fr": {
        "quote": "Vous devez r\u00eaver avant que vos r\u00eaves ne se r\u00e9alisent. (R\u00e9f #13)",
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
        "quote": "\u0c2e\u0c40 \u0c15\u0c32\u0c32\u0c41 \u0c28\u0c3f\u0c1c\u0c02 \u0c15\u0c3e\u0c35\u0c21\u0c3e\u0c28\u0c3f\u0c15\u0c3f \u0c2e\u0c41\u0c02\u0c26\u0c47 \u0c2e\u0c40\u0c30\u0c41 \u0c15\u0c32\u0c32\u0c41 \u0c15\u0c28\u0c3e\u0c32\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #14)",
        "author": "\u0c21\u0c3e. \u0c0e. \u0c2a\u0c3f. \u0c1c\u0c46. \u0c05\u0c2c\u0c4d\u0c26\u0c41\u0c32\u0c4d \u0c15\u0c32\u0c3e\u0c02",
        "category": "\u0c35\u0c3f\u0c26\u0c4d\u0c2f"
      },
      "hi": {
        "quote": "\u0938\u092a\u0928\u0947 \u0938\u091a \u0939\u094b\u0928\u0947 \u0938\u0947 \u092a\u0939\u0932\u0947 \u0906\u092a\u0915\u094b \u0938\u092a\u0928\u0947 \u0926\u0947\u0916\u0928\u0947 \u0939\u094b\u0902\u0917\u0947\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #14)",
        "author": "\u0921\u0949. \u090f. \u092a\u0940. \u091c\u0947. \u0905\u092c\u094d\u0926\u0941\u0932 \u0915\u0932\u093e\u092e",
        "category": "\u0936\u093f\u0915\u094d\u0937\u093e"
      },
      "fr": {
        "quote": "Vous devez r\u00eaver avant que vos r\u00eaves ne se r\u00e9alisent. (R\u00e9f #14)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "\u00c9ducation"
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
        "quote": "\u0c2e\u0c40 \u0c15\u0c32\u0c32\u0c41 \u0c28\u0c3f\u0c1c\u0c02 \u0c15\u0c3e\u0c35\u0c21\u0c3e\u0c28\u0c3f\u0c15\u0c3f \u0c2e\u0c41\u0c02\u0c26\u0c47 \u0c2e\u0c40\u0c30\u0c41 \u0c15\u0c32\u0c32\u0c41 \u0c15\u0c28\u0c3e\u0c32\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #15)",
        "author": "\u0c21\u0c3e. \u0c0e. \u0c2a\u0c3f. \u0c1c\u0c46. \u0c05\u0c2c\u0c4d\u0c26\u0c41\u0c32\u0c4d \u0c15\u0c32\u0c3e\u0c02",
        "category": "\u0c35\u0c3f\u0c1c\u0c2f\u0c02"
      },
      "hi": {
        "quote": "\u0938\u092a\u0928\u0947 \u0938\u091a \u0939\u094b\u0928\u0947 \u0938\u0947 \u092a\u0939\u0932\u0947 \u0906\u092a\u0915\u094b \u0938\u092a\u0928\u0947 \u0926\u0947\u0916\u0928\u0947 \u0939\u094b\u0902\u0917\u0947\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #15)",
        "author": "\u0921\u0949. \u090f. \u092a\u0940. \u091c\u0947. \u0905\u092c\u094d\u0926\u0941\u0932 \u0915\u0932\u093e\u092e",
        "category": "\u0938\u092b\u0932\u0924\u093e"
      },
      "fr": {
        "quote": "Vous devez r\u00eaver avant que vos r\u00eaves ne se r\u00e9alisent. (R\u00e9f #15)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Succ\u00e8s"
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
        "quote": "\u0c2e\u0c40 \u0c15\u0c32\u0c32\u0c41 \u0c28\u0c3f\u0c1c\u0c02 \u0c15\u0c3e\u0c35\u0c21\u0c3e\u0c28\u0c3f\u0c15\u0c3f \u0c2e\u0c41\u0c02\u0c26\u0c47 \u0c2e\u0c40\u0c30\u0c41 \u0c15\u0c32\u0c32\u0c41 \u0c15\u0c28\u0c3e\u0c32\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #16)",
        "author": "\u0c21\u0c3e. \u0c0e. \u0c2a\u0c3f. \u0c1c\u0c46. \u0c05\u0c2c\u0c4d\u0c26\u0c41\u0c32\u0c4d \u0c15\u0c32\u0c3e\u0c02",
        "category": "\u0c15\u0c32\u0c32\u0c41"
      },
      "hi": {
        "quote": "\u0938\u092a\u0928\u0947 \u0938\u091a \u0939\u094b\u0928\u0947 \u0938\u0947 \u092a\u0939\u0932\u0947 \u0906\u092a\u0915\u094b \u0938\u092a\u0928\u0947 \u0926\u0947\u0916\u0928\u0947 \u0939\u094b\u0902\u0917\u0947\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #16)",
        "author": "\u0921\u0949. \u090f. \u092a\u0940. \u091c\u0947. \u0905\u092c\u094d\u0926\u0941\u0932 \u0915\u0932\u093e\u092e",
        "category": "\u0938\u092a\u0928\u0947"
      },
      "fr": {
        "quote": "Vous devez r\u00eaver avant que vos r\u00eaves ne se r\u00e9alisent. (R\u00e9f #16)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "R\u00eaves"
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
        "quote": "\u0c2e\u0c40 \u0c15\u0c32\u0c32\u0c41 \u0c28\u0c3f\u0c1c\u0c02 \u0c15\u0c3e\u0c35\u0c21\u0c3e\u0c28\u0c3f\u0c15\u0c3f \u0c2e\u0c41\u0c02\u0c26\u0c47 \u0c2e\u0c40\u0c30\u0c41 \u0c15\u0c32\u0c32\u0c41 \u0c15\u0c28\u0c3e\u0c32\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #17)",
        "author": "\u0c21\u0c3e. \u0c0e. \u0c2a\u0c3f. \u0c1c\u0c46. \u0c05\u0c2c\u0c4d\u0c26\u0c41\u0c32\u0c4d \u0c15\u0c32\u0c3e\u0c02",
        "category": "\u0c0f\u0c15\u0c3e\u0c17\u0c4d\u0c30\u0c24"
      },
      "hi": {
        "quote": "\u0938\u092a\u0928\u0947 \u0938\u091a \u0939\u094b\u0928\u0947 \u0938\u0947 \u092a\u0939\u0932\u0947 \u0906\u092a\u0915\u094b \u0938\u092a\u0928\u0947 \u0926\u0947\u0916\u0928\u0947 \u0939\u094b\u0902\u0917\u0947\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #17)",
        "author": "\u0921\u0949. \u090f. \u092a\u0940. \u091c\u0947. \u0905\u092c\u094d\u0926\u0941\u0932 \u0915\u0932\u093e\u092e",
        "category": "\u090f\u0915\u093e\u0917\u094d\u0930\u0924\u093e"
      },
      "fr": {
        "quote": "Vous devez r\u00eaver avant que vos r\u00eaves ne se r\u00e9alisent. (R\u00e9f #17)",
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
        "quote": "\u0c2e\u0c40 \u0c15\u0c32\u0c32\u0c41 \u0c28\u0c3f\u0c1c\u0c02 \u0c15\u0c3e\u0c35\u0c21\u0c3e\u0c28\u0c3f\u0c15\u0c3f \u0c2e\u0c41\u0c02\u0c26\u0c47 \u0c2e\u0c40\u0c30\u0c41 \u0c15\u0c32\u0c32\u0c41 \u0c15\u0c28\u0c3e\u0c32\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #18)",
        "author": "\u0c21\u0c3e. \u0c0e. \u0c2a\u0c3f. \u0c1c\u0c46. \u0c05\u0c2c\u0c4d\u0c26\u0c41\u0c32\u0c4d \u0c15\u0c32\u0c3e\u0c02",
        "category": "\u0c35\u0c3f\u0c1c\u0c2f\u0c02"
      },
      "hi": {
        "quote": "\u0938\u092a\u0928\u0947 \u0938\u091a \u0939\u094b\u0928\u0947 \u0938\u0947 \u092a\u0939\u0932\u0947 \u0906\u092a\u0915\u094b \u0938\u092a\u0928\u0947 \u0926\u0947\u0916\u0928\u0947 \u0939\u094b\u0902\u0917\u0947\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #18)",
        "author": "\u0921\u0949. \u090f. \u092a\u0940. \u091c\u0947. \u0905\u092c\u094d\u0926\u0941\u0932 \u0915\u0932\u093e\u092e",
        "category": "\u0938\u092b\u0932\u0924\u093e"
      },
      "fr": {
        "quote": "Vous devez r\u00eaver avant que vos r\u00eaves ne se r\u00e9alisent. (R\u00e9f #18)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Succ\u00e8s"
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
        "quote": "\u0c2e\u0c40 \u0c15\u0c32\u0c32\u0c41 \u0c28\u0c3f\u0c1c\u0c02 \u0c15\u0c3e\u0c35\u0c21\u0c3e\u0c28\u0c3f\u0c15\u0c3f \u0c2e\u0c41\u0c02\u0c26\u0c47 \u0c2e\u0c40\u0c30\u0c41 \u0c15\u0c32\u0c32\u0c41 \u0c15\u0c28\u0c3e\u0c32\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #19)",
        "author": "\u0c21\u0c3e. \u0c0e. \u0c2a\u0c3f. \u0c1c\u0c46. \u0c05\u0c2c\u0c4d\u0c26\u0c41\u0c32\u0c4d \u0c15\u0c32\u0c3e\u0c02",
        "category": "\u0c0f\u0c15\u0c3e\u0c17\u0c4d\u0c30\u0c24"
      },
      "hi": {
        "quote": "\u0938\u092a\u0928\u0947 \u0938\u091a \u0939\u094b\u0928\u0947 \u0938\u0947 \u092a\u0939\u0932\u0947 \u0906\u092a\u0915\u094b \u0938\u092a\u0928\u0947 \u0926\u0947\u0916\u0928\u0947 \u0939\u094b\u0902\u0917\u0947\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #19)",
        "author": "\u0921\u0949. \u090f. \u092a\u0940. \u091c\u0947. \u0905\u092c\u094d\u0926\u0941\u0932 \u0915\u0932\u093e\u092e",
        "category": "\u090f\u0915\u093e\u0917\u094d\u0930\u0924\u093e"
      },
      "fr": {
        "quote": "Vous devez r\u00eaver avant que vos r\u00eaves ne se r\u00e9alisent. (R\u00e9f #19)",
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
        "quote": "\u0c2e\u0c40 \u0c15\u0c32\u0c32\u0c41 \u0c28\u0c3f\u0c1c\u0c02 \u0c15\u0c3e\u0c35\u0c21\u0c3e\u0c28\u0c3f\u0c15\u0c3f \u0c2e\u0c41\u0c02\u0c26\u0c47 \u0c2e\u0c40\u0c30\u0c41 \u0c15\u0c32\u0c32\u0c41 \u0c15\u0c28\u0c3e\u0c32\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #20)",
        "author": "\u0c21\u0c3e. \u0c0e. \u0c2a\u0c3f. \u0c1c\u0c46. \u0c05\u0c2c\u0c4d\u0c26\u0c41\u0c32\u0c4d \u0c15\u0c32\u0c3e\u0c02",
        "category": "\u0c15\u0c37\u0c4d\u0c1f\u0c2a\u0c21\u0c1f\u0c02"
      },
      "hi": {
        "quote": "\u0938\u092a\u0928\u0947 \u0938\u091a \u0939\u094b\u0928\u0947 \u0938\u0947 \u092a\u0939\u0932\u0947 \u0906\u092a\u0915\u094b \u0938\u092a\u0928\u0947 \u0926\u0947\u0916\u0928\u0947 \u0939\u094b\u0902\u0917\u0947\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #20)",
        "author": "\u0921\u0949. \u090f. \u092a\u0940. \u091c\u0947. \u0905\u092c\u094d\u0926\u0941\u0932 \u0915\u0932\u093e\u092e",
        "category": "\u0915\u0921\u093c\u0940 \u092e\u0947\u0939\u0928\u0924"
      },
      "fr": {
        "quote": "Vous devez r\u00eaver avant que vos r\u00eaves ne se r\u00e9alisent. (R\u00e9f #20)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Travail Acharn\u00e9"
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
        "quote": "\u0c2e\u0c40 \u0c15\u0c32\u0c32\u0c41 \u0c28\u0c3f\u0c1c\u0c02 \u0c15\u0c3e\u0c35\u0c21\u0c3e\u0c28\u0c3f\u0c15\u0c3f \u0c2e\u0c41\u0c02\u0c26\u0c47 \u0c2e\u0c40\u0c30\u0c41 \u0c15\u0c32\u0c32\u0c41 \u0c15\u0c28\u0c3e\u0c32\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #21)",
        "author": "\u0c21\u0c3e. \u0c0e. \u0c2a\u0c3f. \u0c1c\u0c46. \u0c05\u0c2c\u0c4d\u0c26\u0c41\u0c32\u0c4d \u0c15\u0c32\u0c3e\u0c02",
        "category": "\u0c35\u0c3f\u0c1c\u0c2f\u0c02"
      },
      "hi": {
        "quote": "\u0938\u092a\u0928\u0947 \u0938\u091a \u0939\u094b\u0928\u0947 \u0938\u0947 \u092a\u0939\u0932\u0947 \u0906\u092a\u0915\u094b \u0938\u092a\u0928\u0947 \u0926\u0947\u0916\u0928\u0947 \u0939\u094b\u0902\u0917\u0947\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #21)",
        "author": "\u0921\u0949. \u090f. \u092a\u0940. \u091c\u0947. \u0905\u092c\u094d\u0926\u0941\u0932 \u0915\u0932\u093e\u092e",
        "category": "\u0938\u092b\u0932\u0924\u093e"
      },
      "fr": {
        "quote": "Vous devez r\u00eaver avant que vos r\u00eaves ne se r\u00e9alisent. (R\u00e9f #21)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Succ\u00e8s"
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
        "quote": "\u0c2e\u0c40 \u0c15\u0c32\u0c32\u0c41 \u0c28\u0c3f\u0c1c\u0c02 \u0c15\u0c3e\u0c35\u0c21\u0c3e\u0c28\u0c3f\u0c15\u0c3f \u0c2e\u0c41\u0c02\u0c26\u0c47 \u0c2e\u0c40\u0c30\u0c41 \u0c15\u0c32\u0c32\u0c41 \u0c15\u0c28\u0c3e\u0c32\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #22)",
        "author": "\u0c21\u0c3e. \u0c0e. \u0c2a\u0c3f. \u0c1c\u0c46. \u0c05\u0c2c\u0c4d\u0c26\u0c41\u0c32\u0c4d \u0c15\u0c32\u0c3e\u0c02",
        "category": "\u0c15\u0c32\u0c32\u0c41"
      },
      "hi": {
        "quote": "\u0938\u092a\u0928\u0947 \u0938\u091a \u0939\u094b\u0928\u0947 \u0938\u0947 \u092a\u0939\u0932\u0947 \u0906\u092a\u0915\u094b \u0938\u092a\u0928\u0947 \u0926\u0947\u0916\u0928\u0947 \u0939\u094b\u0902\u0917\u0947\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #22)",
        "author": "\u0921\u0949. \u090f. \u092a\u0940. \u091c\u0947. \u0905\u092c\u094d\u0926\u0941\u0932 \u0915\u0932\u093e\u092e",
        "category": "\u0938\u092a\u0928\u0947"
      },
      "fr": {
        "quote": "Vous devez r\u00eaver avant que vos r\u00eaves ne se r\u00e9alisent. (R\u00e9f #22)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "R\u00eaves"
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
        "quote": "\u0c2e\u0c40 \u0c15\u0c32\u0c32\u0c41 \u0c28\u0c3f\u0c1c\u0c02 \u0c15\u0c3e\u0c35\u0c21\u0c3e\u0c28\u0c3f\u0c15\u0c3f \u0c2e\u0c41\u0c02\u0c26\u0c47 \u0c2e\u0c40\u0c30\u0c41 \u0c15\u0c32\u0c32\u0c41 \u0c15\u0c28\u0c3e\u0c32\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #23)",
        "author": "\u0c21\u0c3e. \u0c0e. \u0c2a\u0c3f. \u0c1c\u0c46. \u0c05\u0c2c\u0c4d\u0c26\u0c41\u0c32\u0c4d \u0c15\u0c32\u0c3e\u0c02",
        "category": "\u0c0f\u0c15\u0c3e\u0c17\u0c4d\u0c30\u0c24"
      },
      "hi": {
        "quote": "\u0938\u092a\u0928\u0947 \u0938\u091a \u0939\u094b\u0928\u0947 \u0938\u0947 \u092a\u0939\u0932\u0947 \u0906\u092a\u0915\u094b \u0938\u092a\u0928\u0947 \u0926\u0947\u0916\u0928\u0947 \u0939\u094b\u0902\u0917\u0947\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #23)",
        "author": "\u0921\u0949. \u090f. \u092a\u0940. \u091c\u0947. \u0905\u092c\u094d\u0926\u0941\u0932 \u0915\u0932\u093e\u092e",
        "category": "\u090f\u0915\u093e\u0917\u094d\u0930\u0924\u093e"
      },
      "fr": {
        "quote": "Vous devez r\u00eaver avant que vos r\u00eaves ne se r\u00e9alisent. (R\u00e9f #23)",
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
        "quote": "\u0c2e\u0c40 \u0c15\u0c32\u0c32\u0c41 \u0c28\u0c3f\u0c1c\u0c02 \u0c15\u0c3e\u0c35\u0c21\u0c3e\u0c28\u0c3f\u0c15\u0c3f \u0c2e\u0c41\u0c02\u0c26\u0c47 \u0c2e\u0c40\u0c30\u0c41 \u0c15\u0c32\u0c32\u0c41 \u0c15\u0c28\u0c3e\u0c32\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #24)",
        "author": "\u0c21\u0c3e. \u0c0e. \u0c2a\u0c3f. \u0c1c\u0c46. \u0c05\u0c2c\u0c4d\u0c26\u0c41\u0c32\u0c4d \u0c15\u0c32\u0c3e\u0c02",
        "category": "\u0c35\u0c3f\u0c1c\u0c2f\u0c02"
      },
      "hi": {
        "quote": "\u0938\u092a\u0928\u0947 \u0938\u091a \u0939\u094b\u0928\u0947 \u0938\u0947 \u092a\u0939\u0932\u0947 \u0906\u092a\u0915\u094b \u0938\u092a\u0928\u0947 \u0926\u0947\u0916\u0928\u0947 \u0939\u094b\u0902\u0917\u0947\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #24)",
        "author": "\u0921\u0949. \u090f. \u092a\u0940. \u091c\u0947. \u0905\u092c\u094d\u0926\u0941\u0932 \u0915\u0932\u093e\u092e",
        "category": "\u0938\u092b\u0932\u0924\u093e"
      },
      "fr": {
        "quote": "Vous devez r\u00eaver avant que vos r\u00eaves ne se r\u00e9alisent. (R\u00e9f #24)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Succ\u00e8s"
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
        "quote": "\u0c2e\u0c40 \u0c15\u0c32\u0c32\u0c41 \u0c28\u0c3f\u0c1c\u0c02 \u0c15\u0c3e\u0c35\u0c21\u0c3e\u0c28\u0c3f\u0c15\u0c3f \u0c2e\u0c41\u0c02\u0c26\u0c47 \u0c2e\u0c40\u0c30\u0c41 \u0c15\u0c32\u0c32\u0c41 \u0c15\u0c28\u0c3e\u0c32\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #25)",
        "author": "\u0c21\u0c3e. \u0c0e. \u0c2a\u0c3f. \u0c1c\u0c46. \u0c05\u0c2c\u0c4d\u0c26\u0c41\u0c32\u0c4d \u0c15\u0c32\u0c3e\u0c02",
        "category": "\u0c15\u0c37\u0c4d\u0c1f\u0c2a\u0c21\u0c1f\u0c02"
      },
      "hi": {
        "quote": "\u0938\u092a\u0928\u0947 \u0938\u091a \u0939\u094b\u0928\u0947 \u0938\u0947 \u092a\u0939\u0932\u0947 \u0906\u092a\u0915\u094b \u0938\u092a\u0928\u0947 \u0926\u0947\u0916\u0928\u0947 \u0939\u094b\u0902\u0917\u0947\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #25)",
        "author": "\u0921\u0949. \u090f. \u092a\u0940. \u091c\u0947. \u0905\u092c\u094d\u0926\u0941\u0932 \u0915\u0932\u093e\u092e",
        "category": "\u0915\u0921\u093c\u0940 \u092e\u0947\u0939\u0928\u0924"
      },
      "fr": {
        "quote": "Vous devez r\u00eaver avant que vos r\u00eaves ne se r\u00e9alisent. (R\u00e9f #25)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Travail Acharn\u00e9"
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
        "quote": "\u0c2e\u0c40 \u0c15\u0c32\u0c32\u0c41 \u0c28\u0c3f\u0c1c\u0c02 \u0c15\u0c3e\u0c35\u0c21\u0c3e\u0c28\u0c3f\u0c15\u0c3f \u0c2e\u0c41\u0c02\u0c26\u0c47 \u0c2e\u0c40\u0c30\u0c41 \u0c15\u0c32\u0c32\u0c41 \u0c15\u0c28\u0c3e\u0c32\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #26)",
        "author": "\u0c21\u0c3e. \u0c0e. \u0c2a\u0c3f. \u0c1c\u0c46. \u0c05\u0c2c\u0c4d\u0c26\u0c41\u0c32\u0c4d \u0c15\u0c32\u0c3e\u0c02",
        "category": "\u0c15\u0c32\u0c32\u0c41"
      },
      "hi": {
        "quote": "\u0938\u092a\u0928\u0947 \u0938\u091a \u0939\u094b\u0928\u0947 \u0938\u0947 \u092a\u0939\u0932\u0947 \u0906\u092a\u0915\u094b \u0938\u092a\u0928\u0947 \u0926\u0947\u0916\u0928\u0947 \u0939\u094b\u0902\u0917\u0947\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #26)",
        "author": "\u0921\u0949. \u090f. \u092a\u0940. \u091c\u0947. \u0905\u092c\u094d\u0926\u0941\u0932 \u0915\u0932\u093e\u092e",
        "category": "\u0938\u092a\u0928\u0947"
      },
      "fr": {
        "quote": "Vous devez r\u00eaver avant que vos r\u00eaves ne se r\u00e9alisent. (R\u00e9f #26)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "R\u00eaves"
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
        "quote": "\u0c2e\u0c40 \u0c15\u0c32\u0c32\u0c41 \u0c28\u0c3f\u0c1c\u0c02 \u0c15\u0c3e\u0c35\u0c21\u0c3e\u0c28\u0c3f\u0c15\u0c3f \u0c2e\u0c41\u0c02\u0c26\u0c47 \u0c2e\u0c40\u0c30\u0c41 \u0c15\u0c32\u0c32\u0c41 \u0c15\u0c28\u0c3e\u0c32\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #27)",
        "author": "\u0c21\u0c3e. \u0c0e. \u0c2a\u0c3f. \u0c1c\u0c46. \u0c05\u0c2c\u0c4d\u0c26\u0c41\u0c32\u0c4d \u0c15\u0c32\u0c3e\u0c02",
        "category": "\u0c35\u0c3f\u0c1c\u0c2f\u0c02"
      },
      "hi": {
        "quote": "\u0938\u092a\u0928\u0947 \u0938\u091a \u0939\u094b\u0928\u0947 \u0938\u0947 \u092a\u0939\u0932\u0947 \u0906\u092a\u0915\u094b \u0938\u092a\u0928\u0947 \u0926\u0947\u0916\u0928\u0947 \u0939\u094b\u0902\u0917\u0947\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #27)",
        "author": "\u0921\u0949. \u090f. \u092a\u0940. \u091c\u0947. \u0905\u092c\u094d\u0926\u0941\u0932 \u0915\u0932\u093e\u092e",
        "category": "\u0938\u092b\u0932\u0924\u093e"
      },
      "fr": {
        "quote": "Vous devez r\u00eaver avant que vos r\u00eaves ne se r\u00e9alisent. (R\u00e9f #27)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Succ\u00e8s"
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
        "quote": "\u0c2e\u0c40 \u0c15\u0c32\u0c32\u0c41 \u0c28\u0c3f\u0c1c\u0c02 \u0c15\u0c3e\u0c35\u0c21\u0c3e\u0c28\u0c3f\u0c15\u0c3f \u0c2e\u0c41\u0c02\u0c26\u0c47 \u0c2e\u0c40\u0c30\u0c41 \u0c15\u0c32\u0c32\u0c41 \u0c15\u0c28\u0c3e\u0c32\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #28)",
        "author": "\u0c21\u0c3e. \u0c0e. \u0c2a\u0c3f. \u0c1c\u0c46. \u0c05\u0c2c\u0c4d\u0c26\u0c41\u0c32\u0c4d \u0c15\u0c32\u0c3e\u0c02",
        "category": "\u0c35\u0c3f\u0c26\u0c4d\u0c2f"
      },
      "hi": {
        "quote": "\u0938\u092a\u0928\u0947 \u0938\u091a \u0939\u094b\u0928\u0947 \u0938\u0947 \u092a\u0939\u0932\u0947 \u0906\u092a\u0915\u094b \u0938\u092a\u0928\u0947 \u0926\u0947\u0916\u0928\u0947 \u0939\u094b\u0902\u0917\u0947\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #28)",
        "author": "\u0921\u0949. \u090f. \u092a\u0940. \u091c\u0947. \u0905\u092c\u094d\u0926\u0941\u0932 \u0915\u0932\u093e\u092e",
        "category": "\u0936\u093f\u0915\u094d\u0937\u093e"
      },
      "fr": {
        "quote": "Vous devez r\u00eaver avant que vos r\u00eaves ne se r\u00e9alisent. (R\u00e9f #28)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "\u00c9ducation"
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
        "quote": "\u0c2e\u0c40 \u0c15\u0c32\u0c32\u0c41 \u0c28\u0c3f\u0c1c\u0c02 \u0c15\u0c3e\u0c35\u0c21\u0c3e\u0c28\u0c3f\u0c15\u0c3f \u0c2e\u0c41\u0c02\u0c26\u0c47 \u0c2e\u0c40\u0c30\u0c41 \u0c15\u0c32\u0c32\u0c41 \u0c15\u0c28\u0c3e\u0c32\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #29)",
        "author": "\u0c21\u0c3e. \u0c0e. \u0c2a\u0c3f. \u0c1c\u0c46. \u0c05\u0c2c\u0c4d\u0c26\u0c41\u0c32\u0c4d \u0c15\u0c32\u0c3e\u0c02",
        "category": "\u0c0f\u0c15\u0c3e\u0c17\u0c4d\u0c30\u0c24"
      },
      "hi": {
        "quote": "\u0938\u092a\u0928\u0947 \u0938\u091a \u0939\u094b\u0928\u0947 \u0938\u0947 \u092a\u0939\u0932\u0947 \u0906\u092a\u0915\u094b \u0938\u092a\u0928\u0947 \u0926\u0947\u0916\u0928\u0947 \u0939\u094b\u0902\u0917\u0947\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #29)",
        "author": "\u0921\u0949. \u090f. \u092a\u0940. \u091c\u0947. \u0905\u092c\u094d\u0926\u0941\u0932 \u0915\u0932\u093e\u092e",
        "category": "\u090f\u0915\u093e\u0917\u094d\u0930\u0924\u093e"
      },
      "fr": {
        "quote": "Vous devez r\u00eaver avant que vos r\u00eaves ne se r\u00e9alisent. (R\u00e9f #29)",
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
        "quote": "\u0c2e\u0c40 \u0c15\u0c32\u0c32\u0c41 \u0c28\u0c3f\u0c1c\u0c02 \u0c15\u0c3e\u0c35\u0c21\u0c3e\u0c28\u0c3f\u0c15\u0c3f \u0c2e\u0c41\u0c02\u0c26\u0c47 \u0c2e\u0c40\u0c30\u0c41 \u0c15\u0c32\u0c32\u0c41 \u0c15\u0c28\u0c3e\u0c32\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #30)",
        "author": "\u0c21\u0c3e. \u0c0e. \u0c2a\u0c3f. \u0c1c\u0c46. \u0c05\u0c2c\u0c4d\u0c26\u0c41\u0c32\u0c4d \u0c15\u0c32\u0c3e\u0c02",
        "category": "\u0c35\u0c3f\u0c1c\u0c2f\u0c02"
      },
      "hi": {
        "quote": "\u0938\u092a\u0928\u0947 \u0938\u091a \u0939\u094b\u0928\u0947 \u0938\u0947 \u092a\u0939\u0932\u0947 \u0906\u092a\u0915\u094b \u0938\u092a\u0928\u0947 \u0926\u0947\u0916\u0928\u0947 \u0939\u094b\u0902\u0917\u0947\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #30)",
        "author": "\u0921\u0949. \u090f. \u092a\u0940. \u091c\u0947. \u0905\u092c\u094d\u0926\u0941\u0932 \u0915\u0932\u093e\u092e",
        "category": "\u0938\u092b\u0932\u0924\u093e"
      },
      "fr": {
        "quote": "Vous devez r\u00eaver avant que vos r\u00eaves ne se r\u00e9alisent. (R\u00e9f #30)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Succ\u00e8s"
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
        "quote": "\u0c2e\u0c40 \u0c15\u0c32\u0c32\u0c41 \u0c28\u0c3f\u0c1c\u0c02 \u0c15\u0c3e\u0c35\u0c21\u0c3e\u0c28\u0c3f\u0c15\u0c3f \u0c2e\u0c41\u0c02\u0c26\u0c47 \u0c2e\u0c40\u0c30\u0c41 \u0c15\u0c32\u0c32\u0c41 \u0c15\u0c28\u0c3e\u0c32\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #31)",
        "author": "\u0c21\u0c3e. \u0c0e. \u0c2a\u0c3f. \u0c1c\u0c46. \u0c05\u0c2c\u0c4d\u0c26\u0c41\u0c32\u0c4d \u0c15\u0c32\u0c3e\u0c02",
        "category": "\u0c0f\u0c15\u0c3e\u0c17\u0c4d\u0c30\u0c24"
      },
      "hi": {
        "quote": "\u0938\u092a\u0928\u0947 \u0938\u091a \u0939\u094b\u0928\u0947 \u0938\u0947 \u092a\u0939\u0932\u0947 \u0906\u092a\u0915\u094b \u0938\u092a\u0928\u0947 \u0926\u0947\u0916\u0928\u0947 \u0939\u094b\u0902\u0917\u0947\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #31)",
        "author": "\u0921\u0949. \u090f. \u092a\u0940. \u091c\u0947. \u0905\u092c\u094d\u0926\u0941\u0932 \u0915\u0932\u093e\u092e",
        "category": "\u090f\u0915\u093e\u0917\u094d\u0930\u0924\u093e"
      },
      "fr": {
        "quote": "Vous devez r\u00eaver avant que vos r\u00eaves ne se r\u00e9alisent. (R\u00e9f #31)",
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
        "quote": "\u0c2e\u0c40 \u0c15\u0c32\u0c32\u0c41 \u0c28\u0c3f\u0c1c\u0c02 \u0c15\u0c3e\u0c35\u0c21\u0c3e\u0c28\u0c3f\u0c15\u0c3f \u0c2e\u0c41\u0c02\u0c26\u0c47 \u0c2e\u0c40\u0c30\u0c41 \u0c15\u0c32\u0c32\u0c41 \u0c15\u0c28\u0c3e\u0c32\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #32)",
        "author": "\u0c21\u0c3e. \u0c0e. \u0c2a\u0c3f. \u0c1c\u0c46. \u0c05\u0c2c\u0c4d\u0c26\u0c41\u0c32\u0c4d \u0c15\u0c32\u0c3e\u0c02",
        "category": "\u0c15\u0c32\u0c32\u0c41"
      },
      "hi": {
        "quote": "\u0938\u092a\u0928\u0947 \u0938\u091a \u0939\u094b\u0928\u0947 \u0938\u0947 \u092a\u0939\u0932\u0947 \u0906\u092a\u0915\u094b \u0938\u092a\u0928\u0947 \u0926\u0947\u0916\u0928\u0947 \u0939\u094b\u0902\u0917\u0947\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #32)",
        "author": "\u0921\u0949. \u090f. \u092a\u0940. \u091c\u0947. \u0905\u092c\u094d\u0926\u0941\u0932 \u0915\u0932\u093e\u092e",
        "category": "\u0938\u092a\u0928\u0947"
      },
      "fr": {
        "quote": "Vous devez r\u00eaver avant que vos r\u00eaves ne se r\u00e9alisent. (R\u00e9f #32)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "R\u00eaves"
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
        "quote": "\u0c2e\u0c40 \u0c15\u0c32\u0c32\u0c41 \u0c28\u0c3f\u0c1c\u0c02 \u0c15\u0c3e\u0c35\u0c21\u0c3e\u0c28\u0c3f\u0c15\u0c3f \u0c2e\u0c41\u0c02\u0c26\u0c47 \u0c2e\u0c40\u0c30\u0c41 \u0c15\u0c32\u0c32\u0c41 \u0c15\u0c28\u0c3e\u0c32\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #33)",
        "author": "\u0c21\u0c3e. \u0c0e. \u0c2a\u0c3f. \u0c1c\u0c46. \u0c05\u0c2c\u0c4d\u0c26\u0c41\u0c32\u0c4d \u0c15\u0c32\u0c3e\u0c02",
        "category": "\u0c35\u0c3f\u0c1c\u0c2f\u0c02"
      },
      "hi": {
        "quote": "\u0938\u092a\u0928\u0947 \u0938\u091a \u0939\u094b\u0928\u0947 \u0938\u0947 \u092a\u0939\u0932\u0947 \u0906\u092a\u0915\u094b \u0938\u092a\u0928\u0947 \u0926\u0947\u0916\u0928\u0947 \u0939\u094b\u0902\u0917\u0947\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #33)",
        "author": "\u0921\u0949. \u090f. \u092a\u0940. \u091c\u0947. \u0905\u092c\u094d\u0926\u0941\u0932 \u0915\u0932\u093e\u092e",
        "category": "\u0938\u092b\u0932\u0924\u093e"
      },
      "fr": {
        "quote": "Vous devez r\u00eaver avant que vos r\u00eaves ne se r\u00e9alisent. (R\u00e9f #33)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Succ\u00e8s"
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
        "quote": "\u0c2e\u0c40 \u0c15\u0c32\u0c32\u0c41 \u0c28\u0c3f\u0c1c\u0c02 \u0c15\u0c3e\u0c35\u0c21\u0c3e\u0c28\u0c3f\u0c15\u0c3f \u0c2e\u0c41\u0c02\u0c26\u0c47 \u0c2e\u0c40\u0c30\u0c41 \u0c15\u0c32\u0c32\u0c41 \u0c15\u0c28\u0c3e\u0c32\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #34)",
        "author": "\u0c21\u0c3e. \u0c0e. \u0c2a\u0c3f. \u0c1c\u0c46. \u0c05\u0c2c\u0c4d\u0c26\u0c41\u0c32\u0c4d \u0c15\u0c32\u0c3e\u0c02",
        "category": "\u0c15\u0c32\u0c32\u0c41"
      },
      "hi": {
        "quote": "\u0938\u092a\u0928\u0947 \u0938\u091a \u0939\u094b\u0928\u0947 \u0938\u0947 \u092a\u0939\u0932\u0947 \u0906\u092a\u0915\u094b \u0938\u092a\u0928\u0947 \u0926\u0947\u0916\u0928\u0947 \u0939\u094b\u0902\u0917\u0947\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #34)",
        "author": "\u0921\u0949. \u090f. \u092a\u0940. \u091c\u0947. \u0905\u092c\u094d\u0926\u0941\u0932 \u0915\u0932\u093e\u092e",
        "category": "\u0938\u092a\u0928\u0947"
      },
      "fr": {
        "quote": "Vous devez r\u00eaver avant que vos r\u00eaves ne se r\u00e9alisent. (R\u00e9f #34)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "R\u00eaves"
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
        "quote": "\u0c2e\u0c40 \u0c15\u0c32\u0c32\u0c41 \u0c28\u0c3f\u0c1c\u0c02 \u0c15\u0c3e\u0c35\u0c21\u0c3e\u0c28\u0c3f\u0c15\u0c3f \u0c2e\u0c41\u0c02\u0c26\u0c47 \u0c2e\u0c40\u0c30\u0c41 \u0c15\u0c32\u0c32\u0c41 \u0c15\u0c28\u0c3e\u0c32\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #35)",
        "author": "\u0c21\u0c3e. \u0c0e. \u0c2a\u0c3f. \u0c1c\u0c46. \u0c05\u0c2c\u0c4d\u0c26\u0c41\u0c32\u0c4d \u0c15\u0c32\u0c3e\u0c02",
        "category": "\u0c15\u0c37\u0c4d\u0c1f\u0c2a\u0c21\u0c1f\u0c02"
      },
      "hi": {
        "quote": "\u0938\u092a\u0928\u0947 \u0938\u091a \u0939\u094b\u0928\u0947 \u0938\u0947 \u092a\u0939\u0932\u0947 \u0906\u092a\u0915\u094b \u0938\u092a\u0928\u0947 \u0926\u0947\u0916\u0928\u0947 \u0939\u094b\u0902\u0917\u0947\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #35)",
        "author": "\u0921\u0949. \u090f. \u092a\u0940. \u091c\u0947. \u0905\u092c\u094d\u0926\u0941\u0932 \u0915\u0932\u093e\u092e",
        "category": "\u0915\u0921\u093c\u0940 \u092e\u0947\u0939\u0928\u0924"
      },
      "fr": {
        "quote": "Vous devez r\u00eaver avant que vos r\u00eaves ne se r\u00e9alisent. (R\u00e9f #35)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Travail Acharn\u00e9"
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
        "quote": "\u0c2e\u0c40 \u0c15\u0c32\u0c32\u0c41 \u0c28\u0c3f\u0c1c\u0c02 \u0c15\u0c3e\u0c35\u0c21\u0c3e\u0c28\u0c3f\u0c15\u0c3f \u0c2e\u0c41\u0c02\u0c26\u0c47 \u0c2e\u0c40\u0c30\u0c41 \u0c15\u0c32\u0c32\u0c41 \u0c15\u0c28\u0c3e\u0c32\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #36)",
        "author": "\u0c21\u0c3e. \u0c0e. \u0c2a\u0c3f. \u0c1c\u0c46. \u0c05\u0c2c\u0c4d\u0c26\u0c41\u0c32\u0c4d \u0c15\u0c32\u0c3e\u0c02",
        "category": "\u0c35\u0c3f\u0c1c\u0c2f\u0c02"
      },
      "hi": {
        "quote": "\u0938\u092a\u0928\u0947 \u0938\u091a \u0939\u094b\u0928\u0947 \u0938\u0947 \u092a\u0939\u0932\u0947 \u0906\u092a\u0915\u094b \u0938\u092a\u0928\u0947 \u0926\u0947\u0916\u0928\u0947 \u0939\u094b\u0902\u0917\u0947\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #36)",
        "author": "\u0921\u0949. \u090f. \u092a\u0940. \u091c\u0947. \u0905\u092c\u094d\u0926\u0941\u0932 \u0915\u0932\u093e\u092e",
        "category": "\u0938\u092b\u0932\u0924\u093e"
      },
      "fr": {
        "quote": "Vous devez r\u00eaver avant que vos r\u00eaves ne se r\u00e9alisent. (R\u00e9f #36)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Succ\u00e8s"
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
        "quote": "\u0c2e\u0c40 \u0c15\u0c32\u0c32\u0c41 \u0c28\u0c3f\u0c1c\u0c02 \u0c15\u0c3e\u0c35\u0c21\u0c3e\u0c28\u0c3f\u0c15\u0c3f \u0c2e\u0c41\u0c02\u0c26\u0c47 \u0c2e\u0c40\u0c30\u0c41 \u0c15\u0c32\u0c32\u0c41 \u0c15\u0c28\u0c3e\u0c32\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #37)",
        "author": "\u0c21\u0c3e. \u0c0e. \u0c2a\u0c3f. \u0c1c\u0c46. \u0c05\u0c2c\u0c4d\u0c26\u0c41\u0c32\u0c4d \u0c15\u0c32\u0c3e\u0c02",
        "category": "\u0c0f\u0c15\u0c3e\u0c17\u0c4d\u0c30\u0c24"
      },
      "hi": {
        "quote": "\u0938\u092a\u0928\u0947 \u0938\u091a \u0939\u094b\u0928\u0947 \u0938\u0947 \u092a\u0939\u0932\u0947 \u0906\u092a\u0915\u094b \u0938\u092a\u0928\u0947 \u0926\u0947\u0916\u0928\u0947 \u0939\u094b\u0902\u0917\u0947\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #37)",
        "author": "\u0921\u0949. \u090f. \u092a\u0940. \u091c\u0947. \u0905\u092c\u094d\u0926\u0941\u0932 \u0915\u0932\u093e\u092e",
        "category": "\u090f\u0915\u093e\u0917\u094d\u0930\u0924\u093e"
      },
      "fr": {
        "quote": "Vous devez r\u00eaver avant que vos r\u00eaves ne se r\u00e9alisent. (R\u00e9f #37)",
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
        "quote": "\u0c2e\u0c40 \u0c15\u0c32\u0c32\u0c41 \u0c28\u0c3f\u0c1c\u0c02 \u0c15\u0c3e\u0c35\u0c21\u0c3e\u0c28\u0c3f\u0c15\u0c3f \u0c2e\u0c41\u0c02\u0c26\u0c47 \u0c2e\u0c40\u0c30\u0c41 \u0c15\u0c32\u0c32\u0c41 \u0c15\u0c28\u0c3e\u0c32\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #38)",
        "author": "\u0c21\u0c3e. \u0c0e. \u0c2a\u0c3f. \u0c1c\u0c46. \u0c05\u0c2c\u0c4d\u0c26\u0c41\u0c32\u0c4d \u0c15\u0c32\u0c3e\u0c02",
        "category": "\u0c15\u0c32\u0c32\u0c41"
      },
      "hi": {
        "quote": "\u0938\u092a\u0928\u0947 \u0938\u091a \u0939\u094b\u0928\u0947 \u0938\u0947 \u092a\u0939\u0932\u0947 \u0906\u092a\u0915\u094b \u0938\u092a\u0928\u0947 \u0926\u0947\u0916\u0928\u0947 \u0939\u094b\u0902\u0917\u0947\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #38)",
        "author": "\u0921\u0949. \u090f. \u092a\u0940. \u091c\u0947. \u0905\u092c\u094d\u0926\u0941\u0932 \u0915\u0932\u093e\u092e",
        "category": "\u0938\u092a\u0928\u0947"
      },
      "fr": {
        "quote": "Vous devez r\u00eaver avant que vos r\u00eaves ne se r\u00e9alisent. (R\u00e9f #38)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "R\u00eaves"
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
        "quote": "\u0c2e\u0c40 \u0c15\u0c32\u0c32\u0c41 \u0c28\u0c3f\u0c1c\u0c02 \u0c15\u0c3e\u0c35\u0c21\u0c3e\u0c28\u0c3f\u0c15\u0c3f \u0c2e\u0c41\u0c02\u0c26\u0c47 \u0c2e\u0c40\u0c30\u0c41 \u0c15\u0c32\u0c32\u0c41 \u0c15\u0c28\u0c3e\u0c32\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #39)",
        "author": "\u0c21\u0c3e. \u0c0e. \u0c2a\u0c3f. \u0c1c\u0c46. \u0c05\u0c2c\u0c4d\u0c26\u0c41\u0c32\u0c4d \u0c15\u0c32\u0c3e\u0c02",
        "category": "\u0c35\u0c3f\u0c1c\u0c2f\u0c02"
      },
      "hi": {
        "quote": "\u0938\u092a\u0928\u0947 \u0938\u091a \u0939\u094b\u0928\u0947 \u0938\u0947 \u092a\u0939\u0932\u0947 \u0906\u092a\u0915\u094b \u0938\u092a\u0928\u0947 \u0926\u0947\u0916\u0928\u0947 \u0939\u094b\u0902\u0917\u0947\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #39)",
        "author": "\u0921\u0949. \u090f. \u092a\u0940. \u091c\u0947. \u0905\u092c\u094d\u0926\u0941\u0932 \u0915\u0932\u093e\u092e",
        "category": "\u0938\u092b\u0932\u0924\u093e"
      },
      "fr": {
        "quote": "Vous devez r\u00eaver avant que vos r\u00eaves ne se r\u00e9alisent. (R\u00e9f #39)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Succ\u00e8s"
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
        "quote": "\u0c2e\u0c40 \u0c15\u0c32\u0c32\u0c41 \u0c28\u0c3f\u0c1c\u0c02 \u0c15\u0c3e\u0c35\u0c21\u0c3e\u0c28\u0c3f\u0c15\u0c3f \u0c2e\u0c41\u0c02\u0c26\u0c47 \u0c2e\u0c40\u0c30\u0c41 \u0c15\u0c32\u0c32\u0c41 \u0c15\u0c28\u0c3e\u0c32\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #40)",
        "author": "\u0c21\u0c3e. \u0c0e. \u0c2a\u0c3f. \u0c1c\u0c46. \u0c05\u0c2c\u0c4d\u0c26\u0c41\u0c32\u0c4d \u0c15\u0c32\u0c3e\u0c02",
        "category": "\u0c15\u0c37\u0c4d\u0c1f\u0c2a\u0c21\u0c1f\u0c02"
      },
      "hi": {
        "quote": "\u0938\u092a\u0928\u0947 \u0938\u091a \u0939\u094b\u0928\u0947 \u0938\u0947 \u092a\u0939\u0932\u0947 \u0906\u092a\u0915\u094b \u0938\u092a\u0928\u0947 \u0926\u0947\u0916\u0928\u0947 \u0939\u094b\u0902\u0917\u0947\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #40)",
        "author": "\u0921\u0949. \u090f. \u092a\u0940. \u091c\u0947. \u0905\u092c\u094d\u0926\u0941\u0932 \u0915\u0932\u093e\u092e",
        "category": "\u0915\u0921\u093c\u0940 \u092e\u0947\u0939\u0928\u0924"
      },
      "fr": {
        "quote": "Vous devez r\u00eaver avant que vos r\u00eaves ne se r\u00e9alisent. (R\u00e9f #40)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Travail Acharn\u00e9"
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
        "quote": "\u0c2e\u0c40 \u0c15\u0c32\u0c32\u0c41 \u0c28\u0c3f\u0c1c\u0c02 \u0c15\u0c3e\u0c35\u0c21\u0c3e\u0c28\u0c3f\u0c15\u0c3f \u0c2e\u0c41\u0c02\u0c26\u0c47 \u0c2e\u0c40\u0c30\u0c41 \u0c15\u0c32\u0c32\u0c41 \u0c15\u0c28\u0c3e\u0c32\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #41)",
        "author": "\u0c21\u0c3e. \u0c0e. \u0c2a\u0c3f. \u0c1c\u0c46. \u0c05\u0c2c\u0c4d\u0c26\u0c41\u0c32\u0c4d \u0c15\u0c32\u0c3e\u0c02",
        "category": "\u0c0f\u0c15\u0c3e\u0c17\u0c4d\u0c30\u0c24"
      },
      "hi": {
        "quote": "\u0938\u092a\u0928\u0947 \u0938\u091a \u0939\u094b\u0928\u0947 \u0938\u0947 \u092a\u0939\u0932\u0947 \u0906\u092a\u0915\u094b \u0938\u092a\u0928\u0947 \u0926\u0947\u0916\u0928\u0947 \u0939\u094b\u0902\u0917\u0947\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #41)",
        "author": "\u0921\u0949. \u090f. \u092a\u0940. \u091c\u0947. \u0905\u092c\u094d\u0926\u0941\u0932 \u0915\u0932\u093e\u092e",
        "category": "\u090f\u0915\u093e\u0917\u094d\u0930\u0924\u093e"
      },
      "fr": {
        "quote": "Vous devez r\u00eaver avant que vos r\u00eaves ne se r\u00e9alisent. (R\u00e9f #41)",
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
        "quote": "\u0c2e\u0c40 \u0c15\u0c32\u0c32\u0c41 \u0c28\u0c3f\u0c1c\u0c02 \u0c15\u0c3e\u0c35\u0c21\u0c3e\u0c28\u0c3f\u0c15\u0c3f \u0c2e\u0c41\u0c02\u0c26\u0c47 \u0c2e\u0c40\u0c30\u0c41 \u0c15\u0c32\u0c32\u0c41 \u0c15\u0c28\u0c3e\u0c32\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #42)",
        "author": "\u0c21\u0c3e. \u0c0e. \u0c2a\u0c3f. \u0c1c\u0c46. \u0c05\u0c2c\u0c4d\u0c26\u0c41\u0c32\u0c4d \u0c15\u0c32\u0c3e\u0c02",
        "category": "\u0c35\u0c3f\u0c1c\u0c2f\u0c02"
      },
      "hi": {
        "quote": "\u0938\u092a\u0928\u0947 \u0938\u091a \u0939\u094b\u0928\u0947 \u0938\u0947 \u092a\u0939\u0932\u0947 \u0906\u092a\u0915\u094b \u0938\u092a\u0928\u0947 \u0926\u0947\u0916\u0928\u0947 \u0939\u094b\u0902\u0917\u0947\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #42)",
        "author": "\u0921\u0949. \u090f. \u092a\u0940. \u091c\u0947. \u0905\u092c\u094d\u0926\u0941\u0932 \u0915\u0932\u093e\u092e",
        "category": "\u0938\u092b\u0932\u0924\u093e"
      },
      "fr": {
        "quote": "Vous devez r\u00eaver avant que vos r\u00eaves ne se r\u00e9alisent. (R\u00e9f #42)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Succ\u00e8s"
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
        "quote": "\u0c2e\u0c40 \u0c15\u0c32\u0c32\u0c41 \u0c28\u0c3f\u0c1c\u0c02 \u0c15\u0c3e\u0c35\u0c21\u0c3e\u0c28\u0c3f\u0c15\u0c3f \u0c2e\u0c41\u0c02\u0c26\u0c47 \u0c2e\u0c40\u0c30\u0c41 \u0c15\u0c32\u0c32\u0c41 \u0c15\u0c28\u0c3e\u0c32\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #43)",
        "author": "\u0c21\u0c3e. \u0c0e. \u0c2a\u0c3f. \u0c1c\u0c46. \u0c05\u0c2c\u0c4d\u0c26\u0c41\u0c32\u0c4d \u0c15\u0c32\u0c3e\u0c02",
        "category": "\u0c0f\u0c15\u0c3e\u0c17\u0c4d\u0c30\u0c24"
      },
      "hi": {
        "quote": "\u0938\u092a\u0928\u0947 \u0938\u091a \u0939\u094b\u0928\u0947 \u0938\u0947 \u092a\u0939\u0932\u0947 \u0906\u092a\u0915\u094b \u0938\u092a\u0928\u0947 \u0926\u0947\u0916\u0928\u0947 \u0939\u094b\u0902\u0917\u0947\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #43)",
        "author": "\u0921\u0949. \u090f. \u092a\u0940. \u091c\u0947. \u0905\u092c\u094d\u0926\u0941\u0932 \u0915\u0932\u093e\u092e",
        "category": "\u090f\u0915\u093e\u0917\u094d\u0930\u0924\u093e"
      },
      "fr": {
        "quote": "Vous devez r\u00eaver avant que vos r\u00eaves ne se r\u00e9alisent. (R\u00e9f #43)",
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
        "quote": "\u0c2e\u0c40 \u0c15\u0c32\u0c32\u0c41 \u0c28\u0c3f\u0c1c\u0c02 \u0c15\u0c3e\u0c35\u0c21\u0c3e\u0c28\u0c3f\u0c15\u0c3f \u0c2e\u0c41\u0c02\u0c26\u0c47 \u0c2e\u0c40\u0c30\u0c41 \u0c15\u0c32\u0c32\u0c41 \u0c15\u0c28\u0c3e\u0c32\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #44)",
        "author": "\u0c21\u0c3e. \u0c0e. \u0c2a\u0c3f. \u0c1c\u0c46. \u0c05\u0c2c\u0c4d\u0c26\u0c41\u0c32\u0c4d \u0c15\u0c32\u0c3e\u0c02",
        "category": "\u0c15\u0c32\u0c32\u0c41"
      },
      "hi": {
        "quote": "\u0938\u092a\u0928\u0947 \u0938\u091a \u0939\u094b\u0928\u0947 \u0938\u0947 \u092a\u0939\u0932\u0947 \u0906\u092a\u0915\u094b \u0938\u092a\u0928\u0947 \u0926\u0947\u0916\u0928\u0947 \u0939\u094b\u0902\u0917\u0947\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #44)",
        "author": "\u0921\u0949. \u090f. \u092a\u0940. \u091c\u0947. \u0905\u092c\u094d\u0926\u0941\u0932 \u0915\u0932\u093e\u092e",
        "category": "\u0938\u092a\u0928\u0947"
      },
      "fr": {
        "quote": "Vous devez r\u00eaver avant que vos r\u00eaves ne se r\u00e9alisent. (R\u00e9f #44)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "R\u00eaves"
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
        "quote": "\u0c2e\u0c40 \u0c15\u0c32\u0c32\u0c41 \u0c28\u0c3f\u0c1c\u0c02 \u0c15\u0c3e\u0c35\u0c21\u0c3e\u0c28\u0c3f\u0c15\u0c3f \u0c2e\u0c41\u0c02\u0c26\u0c47 \u0c2e\u0c40\u0c30\u0c41 \u0c15\u0c32\u0c32\u0c41 \u0c15\u0c28\u0c3e\u0c32\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #45)",
        "author": "\u0c21\u0c3e. \u0c0e. \u0c2a\u0c3f. \u0c1c\u0c46. \u0c05\u0c2c\u0c4d\u0c26\u0c41\u0c32\u0c4d \u0c15\u0c32\u0c3e\u0c02",
        "category": "\u0c35\u0c3f\u0c1c\u0c2f\u0c02"
      },
      "hi": {
        "quote": "\u0938\u092a\u0928\u0947 \u0938\u091a \u0939\u094b\u0928\u0947 \u0938\u0947 \u092a\u0939\u0932\u0947 \u0906\u092a\u0915\u094b \u0938\u092a\u0928\u0947 \u0926\u0947\u0916\u0928\u0947 \u0939\u094b\u0902\u0917\u0947\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #45)",
        "author": "\u0921\u0949. \u090f. \u092a\u0940. \u091c\u0947. \u0905\u092c\u094d\u0926\u0941\u0932 \u0915\u0932\u093e\u092e",
        "category": "\u0938\u092b\u0932\u0924\u093e"
      },
      "fr": {
        "quote": "Vous devez r\u00eaver avant que vos r\u00eaves ne se r\u00e9alisent. (R\u00e9f #45)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Succ\u00e8s"
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
        "quote": "\u0c2e\u0c40 \u0c15\u0c32\u0c32\u0c41 \u0c28\u0c3f\u0c1c\u0c02 \u0c15\u0c3e\u0c35\u0c21\u0c3e\u0c28\u0c3f\u0c15\u0c3f \u0c2e\u0c41\u0c02\u0c26\u0c47 \u0c2e\u0c40\u0c30\u0c41 \u0c15\u0c32\u0c32\u0c41 \u0c15\u0c28\u0c3e\u0c32\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #46)",
        "author": "\u0c21\u0c3e. \u0c0e. \u0c2a\u0c3f. \u0c1c\u0c46. \u0c05\u0c2c\u0c4d\u0c26\u0c41\u0c32\u0c4d \u0c15\u0c32\u0c3e\u0c02",
        "category": "\u0c15\u0c32\u0c32\u0c41"
      },
      "hi": {
        "quote": "\u0938\u092a\u0928\u0947 \u0938\u091a \u0939\u094b\u0928\u0947 \u0938\u0947 \u092a\u0939\u0932\u0947 \u0906\u092a\u0915\u094b \u0938\u092a\u0928\u0947 \u0926\u0947\u0916\u0928\u0947 \u0939\u094b\u0902\u0917\u0947\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #46)",
        "author": "\u0921\u0949. \u090f. \u092a\u0940. \u091c\u0947. \u0905\u092c\u094d\u0926\u0941\u0932 \u0915\u0932\u093e\u092e",
        "category": "\u0938\u092a\u0928\u0947"
      },
      "fr": {
        "quote": "Vous devez r\u00eaver avant que vos r\u00eaves ne se r\u00e9alisent. (R\u00e9f #46)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "R\u00eaves"
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
        "quote": "\u0c2e\u0c40 \u0c15\u0c32\u0c32\u0c41 \u0c28\u0c3f\u0c1c\u0c02 \u0c15\u0c3e\u0c35\u0c21\u0c3e\u0c28\u0c3f\u0c15\u0c3f \u0c2e\u0c41\u0c02\u0c26\u0c47 \u0c2e\u0c40\u0c30\u0c41 \u0c15\u0c32\u0c32\u0c41 \u0c15\u0c28\u0c3e\u0c32\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #47)",
        "author": "\u0c21\u0c3e. \u0c0e. \u0c2a\u0c3f. \u0c1c\u0c46. \u0c05\u0c2c\u0c4d\u0c26\u0c41\u0c32\u0c4d \u0c15\u0c32\u0c3e\u0c02",
        "category": "\u0c0f\u0c15\u0c3e\u0c17\u0c4d\u0c30\u0c24"
      },
      "hi": {
        "quote": "\u0938\u092a\u0928\u0947 \u0938\u091a \u0939\u094b\u0928\u0947 \u0938\u0947 \u092a\u0939\u0932\u0947 \u0906\u092a\u0915\u094b \u0938\u092a\u0928\u0947 \u0926\u0947\u0916\u0928\u0947 \u0939\u094b\u0902\u0917\u0947\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #47)",
        "author": "\u0921\u0949. \u090f. \u092a\u0940. \u091c\u0947. \u0905\u092c\u094d\u0926\u0941\u0932 \u0915\u0932\u093e\u092e",
        "category": "\u090f\u0915\u093e\u0917\u094d\u0930\u0924\u093e"
      },
      "fr": {
        "quote": "Vous devez r\u00eaver avant que vos r\u00eaves ne se r\u00e9alisent. (R\u00e9f #47)",
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
        "quote": "\u0c2e\u0c40 \u0c15\u0c32\u0c32\u0c41 \u0c28\u0c3f\u0c1c\u0c02 \u0c15\u0c3e\u0c35\u0c21\u0c3e\u0c28\u0c3f\u0c15\u0c3f \u0c2e\u0c41\u0c02\u0c26\u0c47 \u0c2e\u0c40\u0c30\u0c41 \u0c15\u0c32\u0c32\u0c41 \u0c15\u0c28\u0c3e\u0c32\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #48)",
        "author": "\u0c21\u0c3e. \u0c0e. \u0c2a\u0c3f. \u0c1c\u0c46. \u0c05\u0c2c\u0c4d\u0c26\u0c41\u0c32\u0c4d \u0c15\u0c32\u0c3e\u0c02",
        "category": "\u0c35\u0c3f\u0c1c\u0c2f\u0c02"
      },
      "hi": {
        "quote": "\u0938\u092a\u0928\u0947 \u0938\u091a \u0939\u094b\u0928\u0947 \u0938\u0947 \u092a\u0939\u0932\u0947 \u0906\u092a\u0915\u094b \u0938\u092a\u0928\u0947 \u0926\u0947\u0916\u0928\u0947 \u0939\u094b\u0902\u0917\u0947\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #48)",
        "author": "\u0921\u0949. \u090f. \u092a\u0940. \u091c\u0947. \u0905\u092c\u094d\u0926\u0941\u0932 \u0915\u0932\u093e\u092e",
        "category": "\u0938\u092b\u0932\u0924\u093e"
      },
      "fr": {
        "quote": "Vous devez r\u00eaver avant que vos r\u00eaves ne se r\u00e9alisent. (R\u00e9f #48)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Succ\u00e8s"
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
        "quote": "\u0c2e\u0c40 \u0c15\u0c32\u0c32\u0c41 \u0c28\u0c3f\u0c1c\u0c02 \u0c15\u0c3e\u0c35\u0c21\u0c3e\u0c28\u0c3f\u0c15\u0c3f \u0c2e\u0c41\u0c02\u0c26\u0c47 \u0c2e\u0c40\u0c30\u0c41 \u0c15\u0c32\u0c32\u0c41 \u0c15\u0c28\u0c3e\u0c32\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #49)",
        "author": "\u0c21\u0c3e. \u0c0e. \u0c2a\u0c3f. \u0c1c\u0c46. \u0c05\u0c2c\u0c4d\u0c26\u0c41\u0c32\u0c4d \u0c15\u0c32\u0c3e\u0c02",
        "category": "\u0c35\u0c3f\u0c26\u0c4d\u0c2f"
      },
      "hi": {
        "quote": "\u0938\u092a\u0928\u0947 \u0938\u091a \u0939\u094b\u0928\u0947 \u0938\u0947 \u092a\u0939\u0932\u0947 \u0906\u092a\u0915\u094b \u0938\u092a\u0928\u0947 \u0926\u0947\u0916\u0928\u0947 \u0939\u094b\u0902\u0917\u0947\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #49)",
        "author": "\u0921\u0949. \u090f. \u092a\u0940. \u091c\u0947. \u0905\u092c\u094d\u0926\u0941\u0932 \u0915\u0932\u093e\u092e",
        "category": "\u0936\u093f\u0915\u094d\u0937\u093e"
      },
      "fr": {
        "quote": "Vous devez r\u00eaver avant que vos r\u00eaves ne se r\u00e9alisent. (R\u00e9f #49)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "\u00c9ducation"
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
        "quote": "\u0c2e\u0c40 \u0c15\u0c32\u0c32\u0c41 \u0c28\u0c3f\u0c1c\u0c02 \u0c15\u0c3e\u0c35\u0c21\u0c3e\u0c28\u0c3f\u0c15\u0c3f \u0c2e\u0c41\u0c02\u0c26\u0c47 \u0c2e\u0c40\u0c30\u0c41 \u0c15\u0c32\u0c32\u0c41 \u0c15\u0c28\u0c3e\u0c32\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #50)",
        "author": "\u0c21\u0c3e. \u0c0e. \u0c2a\u0c3f. \u0c1c\u0c46. \u0c05\u0c2c\u0c4d\u0c26\u0c41\u0c32\u0c4d \u0c15\u0c32\u0c3e\u0c02",
        "category": "\u0c15\u0c37\u0c4d\u0c1f\u0c2a\u0c21\u0c1f\u0c02"
      },
      "hi": {
        "quote": "\u0938\u092a\u0928\u0947 \u0938\u091a \u0939\u094b\u0928\u0947 \u0938\u0947 \u092a\u0939\u0932\u0947 \u0906\u092a\u0915\u094b \u0938\u092a\u0928\u0947 \u0926\u0947\u0916\u0928\u0947 \u0939\u094b\u0902\u0917\u0947\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #50)",
        "author": "\u0921\u0949. \u090f. \u092a\u0940. \u091c\u0947. \u0905\u092c\u094d\u0926\u0941\u0932 \u0915\u0932\u093e\u092e",
        "category": "\u0915\u0921\u093c\u0940 \u092e\u0947\u0939\u0928\u0924"
      },
      "fr": {
        "quote": "Vous devez r\u00eaver avant que vos r\u00eaves ne se r\u00e9alisent. (R\u00e9f #50)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Travail Acharn\u00e9"
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
        "quote": "\u0c2e\u0c40\u0c30\u0c41 \u0c35\u0c46\u0c33\u0c4d\u0c33\u0c3f\u0c28 \u0c2a\u0c4d\u0c30\u0c24\u0c3f\u0c1a\u0c4b\u0c1f\u0c3e \u0c2a\u0c4d\u0c30\u0c47\u0c2e\u0c28\u0c41 \u0c2a\u0c02\u0c1a\u0c02\u0c21\u0c3f. \u0c2e\u0c40 \u0c26\u0c17\u0c4d\u0c17\u0c30\u0c15\u0c41 \u0c35\u0c1a\u0c4d\u0c1a\u0c3f\u0c28 \u0c2a\u0c4d\u0c30\u0c24\u0c3f \u0c12\u0c15\u0c4d\u0c15\u0c30\u0c42 \u0c38\u0c02\u0c24\u0c4b\u0c37\u0c02\u0c17\u0c3e \u0c35\u0c46\u0c33\u0c4d\u0c33\u0c47\u0c32\u0c3e \u0c1a\u0c47\u0c2f\u0c02\u0c21\u0c3f.",
        "author": "\u0c2e\u0c26\u0c30\u0c4d \u0c25\u0c46\u0c30\u0c3f\u0c38\u0c3e",
        "category": "\u0c38\u0c47\u0c35"
      },
      "hi": {
        "quote": "\u0906\u092a \u091c\u0939\u093e\u0902 \u092d\u0940 \u091c\u093e\u090f\u0902 \u092a\u094d\u092f\u093e\u0930 \u092b\u0948\u0932\u093e\u090f\u0902\u0964 \u0915\u094b\u0908 \u092d\u0940 \u0906\u092a\u0915\u0947 \u092a\u093e\u0938 \u0938\u0947 \u092c\u093f\u0928\u093e \u0916\u0941\u0936 \u0939\u0941\u090f \u0928 \u091c\u093e\u090f\u0964",
        "author": "\u092e\u0926\u0930 \u091f\u0947\u0930\u0947\u0938\u093e",
        "category": "\u0938\u0947\u0935\u093e"
      },
      "fr": {
        "quote": "R\u00e9pandez l'amour partout o\u00f9 vous allez. Que personne ne vienne \u00e0 vous sans repartir plus heureux.",
        "author": "M\u00e8re Teresa",
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
        "quote": "\u0c2a\u0c4d\u0c30\u0c36\u0c3e\u0c02\u0c24\u0c24 \u0c05\u0c28\u0c47\u0c26\u0c3f \u0c1a\u0c3f\u0c30\u0c41\u0c28\u0c35\u0c4d\u0c35\u0c41\u0c24\u0c4b \u0c2a\u0c4d\u0c30\u0c3e\u0c30\u0c02\u0c2d\u0c2e\u0c35\u0c41\u0c24\u0c41\u0c02\u0c26\u0c3f.",
        "author": "\u0c2e\u0c26\u0c30\u0c4d \u0c25\u0c46\u0c30\u0c3f\u0c38\u0c3e",
        "category": "\u0c38\u0c47\u0c35"
      },
      "hi": {
        "quote": "\u0936\u093e\u0902\u0924\u093f \u0915\u0940 \u0936\u0941\u0930\u0941\u0906\u0924 \u090f\u0915 \u092e\u0941\u0938\u094d\u0915\u093e\u0928 \u0938\u0947 \u0939\u094b\u0924\u0940 \u0939\u0948\u0964",
        "author": "\u092e\u0926\u0930 \u091f\u0947\u0930\u0947\u0938\u093e",
        "category": "\u0938\u0947\u0935\u093e"
      },
      "fr": {
        "quote": "La paix commence par un sourire.",
        "author": "M\u00e8re Teresa",
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
        "quote": "\u0c2e\u0c28\u0c02 \u0c1a\u0c47\u0c38\u0c4d\u0c24\u0c41\u0c28\u0c4d\u0c28\u0c26\u0c3f \u0c38\u0c2e\u0c41\u0c26\u0c4d\u0c30\u0c02\u0c32\u0c4b \u0c15\u0c47\u0c35\u0c32\u0c02 \u0c12\u0c15 \u0c1a\u0c41\u0c15\u0c4d\u0c15 \u0c2e\u0c3e\u0c24\u0c4d\u0c30\u0c2e\u0c47 \u0c05\u0c28\u0c3f \u0c2e\u0c28\u0c02 \u0c2d\u0c3e\u0c35\u0c3f\u0c38\u0c4d\u0c24\u0c3e\u0c02. \u0c15\u0c3e\u0c28\u0c40 \u0c06 \u0c12\u0c15\u0c4d\u0c15 \u0c1a\u0c41\u0c15\u0c4d\u0c15 \u0c32\u0c47\u0c15\u0c2a\u0c4b\u0c24\u0c47 \u0c38\u0c2e\u0c41\u0c26\u0c4d\u0c30\u0c02 \u0c35\u0c3f\u0c32\u0c41\u0c35 \u0c24\u0c17\u0c4d\u0c17\u0c41\u0c24\u0c41\u0c02\u0c26\u0c3f.",
        "author": "\u0c2e\u0c26\u0c30\u0c4d \u0c25\u0c46\u0c30\u0c3f\u0c38\u0c3e",
        "category": "\u0c38\u0c47\u0c35"
      },
      "hi": {
        "quote": "\u0939\u092e \u0916\u0941\u0926 \u092e\u0939\u0938\u0942\u0938 \u0915\u0930\u0924\u0947 \u0939\u0948\u0902 \u0915\u093f \u091c\u094b \u0939\u092e \u0915\u0930 \u0930\u0939\u0947 \u0939\u0948\u0902 \u0935\u0939 \u0938\u092e\u0941\u0926\u094d\u0930 \u092e\u0947\u0902 \u090f\u0915 \u092c\u0942\u0902\u0926 \u092e\u093e\u0924\u094d\u0930 \u0939\u0948\u0964 \u0932\u0947\u0915\u093f\u0928 \u0909\u0938 \u090f\u0915 \u092c\u0942\u0902\u0926 \u0915\u0947 \u0928 \u0939\u094b\u0928\u0947 \u0938\u0947 \u0938\u092e\u0941\u0926\u094d\u0930 \u091b\u094b\u091f\u093e \u0939\u094b \u091c\u093e\u090f\u0917\u093e\u0964",
        "author": "\u092e\u0926\u0930 \u091f\u0947\u0930\u0947\u0938\u093e",
        "category": "\u0938\u0947\u0935\u093e"
      },
      "fr": {
        "quote": "Nous sentons nous-m\u00eames que ce que nous faisons n'est qu'une goutte d'eau dans l'oc\u00e9an. Mais l'oc\u00e9an serait plus petit sans cette goutte manquante.",
        "author": "M\u00e8re Teresa",
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
        "quote": "\u0c26\u0c2f\u0c17\u0c32 \u0c2e\u0c3e\u0c1f\u0c32\u0c41 \u0c1a\u0c3f\u0c28\u0c4d\u0c28\u0c35\u0c3f\u0c17\u0c3e \u0c2e\u0c30\u0c3f\u0c2f\u0c41 \u0c2e\u0c3e\u0c1f\u0c4d\u0c32\u0c3e\u0c21\u0c1f\u0c3e\u0c28\u0c3f\u0c15\u0c3f \u0c38\u0c41\u0c32\u0c2d\u0c02\u0c17\u0c3e \u0c09\u0c02\u0c21\u0c35\u0c1a\u0c4d\u0c1a\u0c41, \u0c15\u0c3e\u0c28\u0c40 \u0c35\u0c3e\u0c1f\u0c3f \u0c2a\u0c4d\u0c30\u0c24\u0c3f\u0c27\u0c4d\u0c35\u0c28\u0c3f \u0c28\u0c3f\u0c1c\u0c02\u0c17\u0c3e \u0c05\u0c28\u0c02\u0c24\u0c02.",
        "author": "\u0c2e\u0c26\u0c30\u0c4d \u0c25\u0c46\u0c30\u0c3f\u0c38\u0c3e",
        "category": "\u0c28\u0c3e\u0c2f\u0c15\u0c24\u0c4d\u0c35\u0c02"
      },
      "hi": {
        "quote": "\u0926\u092f\u093e\u0932\u0941 \u0936\u092c\u094d\u0926 \u091b\u094b\u091f\u0947 \u0914\u0930 \u092c\u094b\u0932\u0928\u0947 \u092e\u0947\u0902 \u0906\u0938\u093e\u0928 \u0939\u094b \u0938\u0915\u0924\u0947 \u0939\u0948\u0902, \u0932\u0947\u0915\u093f\u0928 \u0909\u0928\u0915\u0940 \u0917\u0942\u0902\u091c \u0935\u093e\u0938\u094d\u0924\u0935 \u092e\u0947\u0902 \u0905\u0928\u0902\u0924 \u0939\u094b\u0924\u0940 \u0939\u0948\u0964",
        "author": "\u092e\u0926\u0930 \u091f\u0947\u0930\u0947\u0938\u093e",
        "category": "\u0928\u0947\u0924\u0943\u0924\u094d\u0935"
      },
      "fr": {
        "quote": "Les mots doux peuvent \u00eatre courts et faciles \u00e0 prononcer, mais leur \u00e9cho est \u00e9ternel.",
        "author": "M\u00e8re Teresa",
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
        "quote": "\u0c2e\u0c40\u0c30\u0c41 \u0c2a\u0c4d\u0c30\u0c1c\u0c32 \u0c24\u0c2a\u0c4d\u0c2a\u0c41\u0c32\u0c28\u0c41 \u0c32\u0c46\u0c15\u0c4d\u0c15\u0c3f\u0c38\u0c4d\u0c24\u0c41\u0c02\u0c1f\u0c47, \u0c35\u0c3e\u0c30\u0c3f\u0c28\u0c3f \u0c2a\u0c4d\u0c30\u0c47\u0c2e\u0c3f\u0c02\u0c1a\u0c21\u0c3e\u0c28\u0c3f\u0c15\u0c3f \u0c2e\u0c40\u0c15\u0c41 \u0c38\u0c2e\u0c2f\u0c02 \u0c09\u0c02\u0c21\u0c26\u0c41.",
        "author": "\u0c2e\u0c26\u0c30\u0c4d \u0c25\u0c46\u0c30\u0c3f\u0c38\u0c3e",
        "category": "\u0c38\u0c47\u0c35"
      },
      "hi": {
        "quote": "\u092f\u0926\u093f \u0906\u092a \u0932\u094b\u0917\u094b\u0902 \u0915\u093e \u0928\u094d\u092f\u093e\u092f \u0915\u0930\u0924\u0947 \u0939\u0948\u0902, \u0924\u094b \u0906\u092a\u0915\u0947 \u092a\u093e\u0938 \u0909\u0928\u094d\u0939\u0947\u0902 \u092a\u094d\u092f\u093e\u0930 \u0915\u0930\u0928\u0947 \u0915\u093e \u0938\u092e\u092f \u0928\u0939\u0940\u0902 \u0939\u0948\u0964",
        "author": "\u092e\u0926\u0930 \u091f\u0947\u0930\u0947\u0938\u093e",
        "category": "\u0938\u0947\u0935\u093e"
      },
      "fr": {
        "quote": "Si vous jugez les gens, vous n'avez pas le temps de les aimer.",
        "author": "M\u00e8re Teresa",
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
        "quote": "\u0c24\u0c40\u0c35\u0c4d\u0c30\u0c2e\u0c48\u0c28 \u0c2a\u0c4d\u0c30\u0c47\u0c2e \u0c32\u0c46\u0c15\u0c4d\u0c15\u0c3f\u0c02\u0c1a\u0c26\u0c41, \u0c05\u0c26\u0c3f \u0c15\u0c47\u0c35\u0c32\u0c02 \u0c07\u0c38\u0c4d\u0c24\u0c41\u0c02\u0c26\u0c3f.",
        "author": "\u0c2e\u0c26\u0c30\u0c4d \u0c25\u0c46\u0c30\u0c3f\u0c38\u0c3e",
        "category": "\u0c38\u0c47\u0c35"
      },
      "hi": {
        "quote": "\u0924\u0940\u0935\u094d\u0930 \u092a\u094d\u0930\u0947\u092e \u092e\u093e\u092a\u0924\u093e \u0928\u0939\u0940\u0902 \u0939\u0948, \u0935\u0939 \u092c\u0938 \u0926\u0947\u0924\u093e \u0939\u0948\u0964",
        "author": "\u092e\u0926\u0930 \u091f\u0947\u0930\u0947\u0938\u093e",
        "category": "\u0938\u0947\u0935\u093e"
      },
      "fr": {
        "quote": "L'amour intense ne mesure pas, il donne tout simplement.",
        "author": "M\u00e8re Teresa",
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
        "quote": "\u0c2e\u0c28\u0c15\u0c41 \u0c2a\u0c4d\u0c30\u0c36\u0c3e\u0c02\u0c24\u0c24 \u0c32\u0c47\u0c15\u0c2a\u0c4b\u0c24\u0c47, \u0c2e\u0c28\u0c02 \u0c12\u0c15\u0c30\u0c3f\u0c15\u0c4a\u0c15\u0c30\u0c41 \u0c1a\u0c46\u0c02\u0c26\u0c41\u0c24\u0c3e\u0c2e\u0c28\u0c47 \u0c35\u0c3f\u0c37\u0c2f\u0c02 \u0c2e\u0c30\u0c4d\u0c1a\u0c3f\u0c2a\u0c4b\u0c2f\u0c3e\u0c2e\u0c28\u0c3f \u0c05\u0c30\u0c4d\u0c25\u0c02.",
        "author": "\u0c2e\u0c26\u0c30\u0c4d \u0c25\u0c46\u0c30\u0c3f\u0c38\u0c3e",
        "category": "\u0c28\u0c3e\u0c2f\u0c15\u0c24\u0c4d\u0c35\u0c02"
      },
      "hi": {
        "quote": "\u092f\u0926\u093f \u0939\u092e\u093e\u0930\u0947 \u092a\u093e\u0938 \u0936\u093e\u0902\u0924\u093f \u0928\u0939\u0940\u0902 \u0939\u0948, \u0924\u094b \u0907\u0938\u0915\u093e \u0915\u093e\u0930\u0923 \u092f\u0939 \u0939\u0948 \u0915\u093f \u0939\u092e \u092d\u0942\u0932 \u0917\u090f \u0939\u0948\u0902 \u0915\u093f \u0939\u092e \u090f\u0915 \u0926\u0942\u0938\u0930\u0947 \u0915\u0947 \u0939\u0948\u0902\u0964",
        "author": "\u092e\u0926\u0930 \u091f\u0947\u0930\u0947\u0938\u093e",
        "category": "\u0928\u0947\u0924\u0943\u0924\u094d\u0935"
      },
      "fr": {
        "quote": "Si nous n'avons pas la paix, c'est parce que nous avons oubli\u00e9 que nous appartenons les uns aux autres.",
        "author": "M\u00e8re Teresa",
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
        "quote": "\u0c28\u0c3f\u0c28\u0c4d\u0c28 \u0c17\u0c21\u0c3f\u0c1a\u0c3f\u0c2a\u0c4b\u0c2f\u0c3f\u0c02\u0c26\u0c3f. \u0c30\u0c47\u0c2a\u0c41 \u0c07\u0c02\u0c15\u0c3e \u0c30\u0c3e\u0c32\u0c47\u0c26\u0c41. \u0c2e\u0c28\u0c15\u0c41 \u0c09\u0c28\u0c4d\u0c28\u0c26\u0c3f \u0c08\u0c30\u0c4b\u0c1c\u0c41 \u0c2e\u0c3e\u0c24\u0c4d\u0c30\u0c2e\u0c47. \u0c2a\u0c4d\u0c30\u0c3e\u0c30\u0c02\u0c2d\u0c3f\u0c26\u0c4d\u0c26\u0c3e\u0c02.",
        "author": "\u0c2e\u0c26\u0c30\u0c4d \u0c25\u0c46\u0c30\u0c3f\u0c38\u0c3e",
        "category": "\u0c0f\u0c15\u0c3e\u0c17\u0c4d\u0c30\u0c24"
      },
      "hi": {
        "quote": "\u0915\u0932 \u092c\u0940\u0924 \u091a\u0941\u0915\u093e \u0939\u0948\u0964 \u0915\u0932 \u0905\u092d\u0940 \u0906\u092f\u093e \u0928\u0939\u0940\u0902 \u0939\u0948\u0964 \u0939\u092e\u093e\u0930\u0947 \u092a\u093e\u0938 \u0915\u0947\u0935\u0932 \u0906\u091c \u0915\u093e \u0926\u093f\u0928 \u0939\u0948\u0964 \u0906\u0907\u090f \u0936\u0941\u0930\u0941\u0906\u0924 \u0915\u0930\u0947\u0902\u0964",
        "author": "\u092e\u0926\u0930 \u091f\u0947\u0930\u0947\u0938\u093e",
        "category": "\u090f\u0915\u093e\u0917\u094d\u0930\u0924\u093e"
      },
      "fr": {
        "quote": "Hier est pass\u00e9. Demain n'est pas encore l\u00e0. Nous n'avons que d'aujourd'hui. Commen\u00e7ons.",
        "author": "M\u00e8re Teresa",
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
        "quote": "\u0c2e\u0c28\u0c02 \u0c0e\u0c02\u0c24 \u0c1a\u0c47\u0c38\u0c3e\u0c2e\u0c41 \u0c05\u0c28\u0c47\u0c26\u0c3f \u0c2e\u0c41\u0c16\u0c4d\u0c2f\u0c02 \u0c15\u0c3e\u0c26\u0c41, \u0c2e\u0c28\u0c02 \u0c1a\u0c47\u0c38\u0c47 \u0c2a\u0c28\u0c3f\u0c32\u0c4b \u0c0e\u0c02\u0c24 \u0c2a\u0c4d\u0c30\u0c47\u0c2e\u0c28\u0c41 \u0c09\u0c02\u0c1a\u0c3e\u0c2e\u0c41 \u0c05\u0c28\u0c47\u0c26\u0c3f \u0c2e\u0c41\u0c16\u0c4d\u0c2f\u0c02.",
        "author": "\u0c2e\u0c26\u0c30\u0c4d \u0c25\u0c46\u0c30\u0c3f\u0c38\u0c3e",
        "category": "\u0c38\u0c47\u0c35"
      },
      "hi": {
        "quote": "\u092f\u0939 \u092e\u0939\u0924\u094d\u0935\u092a\u0942\u0930\u094d\u0923 \u0928\u0939\u0940\u0902 \u0939\u0948 \u0915\u093f \u0939\u092e \u0915\u093f\u0924\u0928\u093e \u0915\u093e\u092e \u0915\u0930\u0924\u0947 \u0939\u0948\u0902, \u092c\u0932\u094d\u0915\u093f \u092f\u0939 \u092e\u0939\u0924\u094d\u0935\u092a\u0942\u0930\u094d\u0923 \u0939\u0948 \u0915\u093f \u0939\u092e \u0909\u0938 \u0915\u093e\u092e \u092e\u0947\u0902 \u0915\u093f\u0924\u0928\u093e \u092a\u094d\u092f\u093e\u0930 \u0921\u093e\u0932\u0924\u0947 \u0939\u0948\u0902\u0964",
        "author": "\u092e\u0926\u0930 \u091f\u0947\u0930\u0947\u0938\u093e",
        "category": "\u0938\u0947\u0935\u093e"
      },
      "fr": {
        "quote": "Ce n'est pas tant ce que nous faisons, mais le degr\u00e9 d'amour que nous y mettons.",
        "author": "M\u00e8re Teresa",
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
        "quote": "\u0c2e\u0c28\u0c02\u0c26\u0c30\u0c02 \u0c17\u0c4a\u0c2a\u0c4d\u0c2a \u0c2a\u0c28\u0c41\u0c32\u0c41 \u0c1a\u0c47\u0c2f\u0c32\u0c47\u0c15\u0c2a\u0c4b\u0c35\u0c1a\u0c4d\u0c1a\u0c41. \u0c15\u0c3e\u0c28\u0c40 \u0c2e\u0c28\u0c02 \u0c1a\u0c3f\u0c28\u0c4d\u0c28 \u0c2a\u0c28\u0c41\u0c32\u0c28\u0c41 \u0c17\u0c4a\u0c2a\u0c4d\u0c2a \u0c2a\u0c4d\u0c30\u0c47\u0c2e\u0c24\u0c4b \u0c1a\u0c47\u0c2f\u0c35\u0c1a\u0c4d\u0c1a\u0c41.",
        "author": "\u0c2e\u0c26\u0c30\u0c4d \u0c25\u0c46\u0c30\u0c3f\u0c38\u0c3e",
        "category": "\u0c38\u0c47\u0c35"
      },
      "hi": {
        "quote": "\u0939\u092e \u0938\u092d\u0940 \u092e\u0939\u093e\u0928 \u0915\u093e\u0930\u094d\u092f \u0928\u0939\u0940\u0902 \u0915\u0930 \u0938\u0915\u0924\u0947\u0964 \u0932\u0947\u0915\u093f\u0928 \u0939\u092e \u091b\u094b\u091f\u0947 \u0915\u093e\u0930\u094d\u092f\u094b\u0902 \u0915\u094b \u092c\u0921\u093c\u0947 \u092a\u094d\u092f\u093e\u0930 \u0938\u0947 \u0915\u0930 \u0938\u0915\u0924\u0947 \u0939\u0948\u0902\u0964",
        "author": "\u092e\u0926\u0930 \u091f\u0947\u0930\u0947\u0938\u093e",
        "category": "\u0938\u0947\u0935\u093e"
      },
      "fr": {
        "quote": "Nous ne pouvons pas tous faire de grandes choses. Mais nous pouvons faire de petites choses avec un grand amour.",
        "author": "M\u00e8re Teresa",
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
        "quote": "\u0c1a\u0c3f\u0c28\u0c4d\u0c28 \u0c35\u0c3f\u0c37\u0c2f\u0c3e\u0c32\u0c32\u0c4b \u0c28\u0c2e\u0c4d\u0c2e\u0c15\u0c02\u0c17\u0c3e \u0c09\u0c02\u0c21\u0c02\u0c21\u0c3f \u0c0e\u0c02\u0c26\u0c41\u0c15\u0c02\u0c1f\u0c47 \u0c35\u0c3e\u0c1f\u0c3f\u0c32\u0c4b\u0c28\u0c47 \u0c2e\u0c40 \u0c2c\u0c32\u0c02 \u0c09\u0c02\u0c1f\u0c41\u0c02\u0c26\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #11)",
        "author": "\u0c2e\u0c26\u0c30\u0c4d \u0c25\u0c46\u0c30\u0c3f\u0c38\u0c3e",
        "category": "\u0c28\u0c3e\u0c2f\u0c15\u0c24\u0c4d\u0c35\u0c02"
      },
      "hi": {
        "quote": "\u091b\u094b\u091f\u0940-\u091b\u094b\u091f\u0940 \u092c\u093e\u0924\u094b\u0902 \u092e\u0947\u0902 \u0935\u092b\u093e\u0926\u093e\u0930 \u0930\u0939\u0947\u0902 \u0915\u094d\u092f\u094b\u0902\u0915\u093f \u0909\u0928\u094d\u0939\u0940\u0902 \u092e\u0947\u0902 \u0906\u092a\u0915\u0940 \u0924\u093e\u0915\u0924 \u091b\u093f\u092a\u0940 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #11)",
        "author": "\u092e\u0926\u0930 \u091f\u0947\u0930\u0947\u0938\u093e",
        "category": "\u0928\u0947\u0924\u0943\u0924\u094d\u0935"
      },
      "fr": {
        "quote": "Soyez fid\u00e8le dans les petites choses car c'est en elles que r\u00e9side votre force. (R\u00e9f #11)",
        "author": "M\u00e8re Teresa",
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
        "quote": "\u0c1a\u0c3f\u0c28\u0c4d\u0c28 \u0c35\u0c3f\u0c37\u0c2f\u0c3e\u0c32\u0c32\u0c4b \u0c28\u0c2e\u0c4d\u0c2e\u0c15\u0c02\u0c17\u0c3e \u0c09\u0c02\u0c21\u0c02\u0c21\u0c3f \u0c0e\u0c02\u0c26\u0c41\u0c15\u0c02\u0c1f\u0c47 \u0c35\u0c3e\u0c1f\u0c3f\u0c32\u0c4b\u0c28\u0c47 \u0c2e\u0c40 \u0c2c\u0c32\u0c02 \u0c09\u0c02\u0c1f\u0c41\u0c02\u0c26\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #12)",
        "author": "\u0c2e\u0c26\u0c30\u0c4d \u0c25\u0c46\u0c30\u0c3f\u0c38\u0c3e",
        "category": "\u0c06\u0c24\u0c4d\u0c2e\u0c35\u0c3f\u0c36\u0c4d\u0c35\u0c3e\u0c38\u0c02"
      },
      "hi": {
        "quote": "\u091b\u094b\u091f\u0940-\u091b\u094b\u091f\u0940 \u092c\u093e\u0924\u094b\u0902 \u092e\u0947\u0902 \u0935\u092b\u093e\u0926\u093e\u0930 \u0930\u0939\u0947\u0902 \u0915\u094d\u092f\u094b\u0902\u0915\u093f \u0909\u0928\u094d\u0939\u0940\u0902 \u092e\u0947\u0902 \u0906\u092a\u0915\u0940 \u0924\u093e\u0915\u0924 \u091b\u093f\u092a\u0940 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #12)",
        "author": "\u092e\u0926\u0930 \u091f\u0947\u0930\u0947\u0938\u093e",
        "category": "\u0906\u0924\u094d\u092e\u0935\u093f\u0936\u094d\u0935\u093e\u0938"
      },
      "fr": {
        "quote": "Soyez fid\u00e8le dans les petites choses car c'est en elles que r\u00e9side votre force. (R\u00e9f #12)",
        "author": "M\u00e8re Teresa",
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
        "quote": "\u0c1a\u0c3f\u0c28\u0c4d\u0c28 \u0c35\u0c3f\u0c37\u0c2f\u0c3e\u0c32\u0c32\u0c4b \u0c28\u0c2e\u0c4d\u0c2e\u0c15\u0c02\u0c17\u0c3e \u0c09\u0c02\u0c21\u0c02\u0c21\u0c3f \u0c0e\u0c02\u0c26\u0c41\u0c15\u0c02\u0c1f\u0c47 \u0c35\u0c3e\u0c1f\u0c3f\u0c32\u0c4b\u0c28\u0c47 \u0c2e\u0c40 \u0c2c\u0c32\u0c02 \u0c09\u0c02\u0c1f\u0c41\u0c02\u0c26\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #13)",
        "author": "\u0c2e\u0c26\u0c30\u0c4d \u0c25\u0c46\u0c30\u0c3f\u0c38\u0c3e",
        "category": "\u0c28\u0c3e\u0c2f\u0c15\u0c24\u0c4d\u0c35\u0c02"
      },
      "hi": {
        "quote": "\u091b\u094b\u091f\u0940-\u091b\u094b\u091f\u0940 \u092c\u093e\u0924\u094b\u0902 \u092e\u0947\u0902 \u0935\u092b\u093e\u0926\u093e\u0930 \u0930\u0939\u0947\u0902 \u0915\u094d\u092f\u094b\u0902\u0915\u093f \u0909\u0928\u094d\u0939\u0940\u0902 \u092e\u0947\u0902 \u0906\u092a\u0915\u0940 \u0924\u093e\u0915\u0924 \u091b\u093f\u092a\u0940 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #13)",
        "author": "\u092e\u0926\u0930 \u091f\u0947\u0930\u0947\u0938\u093e",
        "category": "\u0928\u0947\u0924\u0943\u0924\u094d\u0935"
      },
      "fr": {
        "quote": "Soyez fid\u00e8le dans les petites choses car c'est en elles que r\u00e9side votre force. (R\u00e9f #13)",
        "author": "M\u00e8re Teresa",
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
        "quote": "\u0c1a\u0c3f\u0c28\u0c4d\u0c28 \u0c35\u0c3f\u0c37\u0c2f\u0c3e\u0c32\u0c32\u0c4b \u0c28\u0c2e\u0c4d\u0c2e\u0c15\u0c02\u0c17\u0c3e \u0c09\u0c02\u0c21\u0c02\u0c21\u0c3f \u0c0e\u0c02\u0c26\u0c41\u0c15\u0c02\u0c1f\u0c47 \u0c35\u0c3e\u0c1f\u0c3f\u0c32\u0c4b\u0c28\u0c47 \u0c2e\u0c40 \u0c2c\u0c32\u0c02 \u0c09\u0c02\u0c1f\u0c41\u0c02\u0c26\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #14)",
        "author": "\u0c2e\u0c26\u0c30\u0c4d \u0c25\u0c46\u0c30\u0c3f\u0c38\u0c3e",
        "category": "\u0c15\u0c32\u0c32\u0c41"
      },
      "hi": {
        "quote": "\u091b\u094b\u091f\u0940-\u091b\u094b\u091f\u0940 \u092c\u093e\u0924\u094b\u0902 \u092e\u0947\u0902 \u0935\u092b\u093e\u0926\u093e\u0930 \u0930\u0939\u0947\u0902 \u0915\u094d\u092f\u094b\u0902\u0915\u093f \u0909\u0928\u094d\u0939\u0940\u0902 \u092e\u0947\u0902 \u0906\u092a\u0915\u0940 \u0924\u093e\u0915\u0924 \u091b\u093f\u092a\u0940 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #14)",
        "author": "\u092e\u0926\u0930 \u091f\u0947\u0930\u0947\u0938\u093e",
        "category": "\u0938\u092a\u0928\u0947"
      },
      "fr": {
        "quote": "Soyez fid\u00e8le dans les petites choses car c'est en elles que r\u00e9side votre force. (R\u00e9f #14)",
        "author": "M\u00e8re Teresa",
        "category": "R\u00eaves"
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
        "quote": "\u0c1a\u0c3f\u0c28\u0c4d\u0c28 \u0c35\u0c3f\u0c37\u0c2f\u0c3e\u0c32\u0c32\u0c4b \u0c28\u0c2e\u0c4d\u0c2e\u0c15\u0c02\u0c17\u0c3e \u0c09\u0c02\u0c21\u0c02\u0c21\u0c3f \u0c0e\u0c02\u0c26\u0c41\u0c15\u0c02\u0c1f\u0c47 \u0c35\u0c3e\u0c1f\u0c3f\u0c32\u0c4b\u0c28\u0c47 \u0c2e\u0c40 \u0c2c\u0c32\u0c02 \u0c09\u0c02\u0c1f\u0c41\u0c02\u0c26\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #15)",
        "author": "\u0c2e\u0c26\u0c30\u0c4d \u0c25\u0c46\u0c30\u0c3f\u0c38\u0c3e",
        "category": "\u0c06\u0c24\u0c4d\u0c2e\u0c35\u0c3f\u0c36\u0c4d\u0c35\u0c3e\u0c38\u0c02"
      },
      "hi": {
        "quote": "\u091b\u094b\u091f\u0940-\u091b\u094b\u091f\u0940 \u092c\u093e\u0924\u094b\u0902 \u092e\u0947\u0902 \u0935\u092b\u093e\u0926\u093e\u0930 \u0930\u0939\u0947\u0902 \u0915\u094d\u092f\u094b\u0902\u0915\u093f \u0909\u0928\u094d\u0939\u0940\u0902 \u092e\u0947\u0902 \u0906\u092a\u0915\u0940 \u0924\u093e\u0915\u0924 \u091b\u093f\u092a\u0940 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #15)",
        "author": "\u092e\u0926\u0930 \u091f\u0947\u0930\u0947\u0938\u093e",
        "category": "\u0906\u0924\u094d\u092e\u0935\u093f\u0936\u094d\u0935\u093e\u0938"
      },
      "fr": {
        "quote": "Soyez fid\u00e8le dans les petites choses car c'est en elles que r\u00e9side votre force. (R\u00e9f #15)",
        "author": "M\u00e8re Teresa",
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
        "quote": "\u0c1a\u0c3f\u0c28\u0c4d\u0c28 \u0c35\u0c3f\u0c37\u0c2f\u0c3e\u0c32\u0c32\u0c4b \u0c28\u0c2e\u0c4d\u0c2e\u0c15\u0c02\u0c17\u0c3e \u0c09\u0c02\u0c21\u0c02\u0c21\u0c3f \u0c0e\u0c02\u0c26\u0c41\u0c15\u0c02\u0c1f\u0c47 \u0c35\u0c3e\u0c1f\u0c3f\u0c32\u0c4b\u0c28\u0c47 \u0c2e\u0c40 \u0c2c\u0c32\u0c02 \u0c09\u0c02\u0c1f\u0c41\u0c02\u0c26\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #16)",
        "author": "\u0c2e\u0c26\u0c30\u0c4d \u0c25\u0c46\u0c30\u0c3f\u0c38\u0c3e",
        "category": "\u0c38\u0c47\u0c35"
      },
      "hi": {
        "quote": "\u091b\u094b\u091f\u0940-\u091b\u094b\u091f\u0940 \u092c\u093e\u0924\u094b\u0902 \u092e\u0947\u0902 \u0935\u092b\u093e\u0926\u093e\u0930 \u0930\u0939\u0947\u0902 \u0915\u094d\u092f\u094b\u0902\u0915\u093f \u0909\u0928\u094d\u0939\u0940\u0902 \u092e\u0947\u0902 \u0906\u092a\u0915\u0940 \u0924\u093e\u0915\u0924 \u091b\u093f\u092a\u0940 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #16)",
        "author": "\u092e\u0926\u0930 \u091f\u0947\u0930\u0947\u0938\u093e",
        "category": "\u0938\u0947\u0935\u093e"
      },
      "fr": {
        "quote": "Soyez fid\u00e8le dans les petites choses car c'est en elles que r\u00e9side votre force. (R\u00e9f #16)",
        "author": "M\u00e8re Teresa",
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
        "quote": "\u0c1a\u0c3f\u0c28\u0c4d\u0c28 \u0c35\u0c3f\u0c37\u0c2f\u0c3e\u0c32\u0c32\u0c4b \u0c28\u0c2e\u0c4d\u0c2e\u0c15\u0c02\u0c17\u0c3e \u0c09\u0c02\u0c21\u0c02\u0c21\u0c3f \u0c0e\u0c02\u0c26\u0c41\u0c15\u0c02\u0c1f\u0c47 \u0c35\u0c3e\u0c1f\u0c3f\u0c32\u0c4b\u0c28\u0c47 \u0c2e\u0c40 \u0c2c\u0c32\u0c02 \u0c09\u0c02\u0c1f\u0c41\u0c02\u0c26\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #17)",
        "author": "\u0c2e\u0c26\u0c30\u0c4d \u0c25\u0c46\u0c30\u0c3f\u0c38\u0c3e",
        "category": "\u0c28\u0c3e\u0c2f\u0c15\u0c24\u0c4d\u0c35\u0c02"
      },
      "hi": {
        "quote": "\u091b\u094b\u091f\u0940-\u091b\u094b\u091f\u0940 \u092c\u093e\u0924\u094b\u0902 \u092e\u0947\u0902 \u0935\u092b\u093e\u0926\u093e\u0930 \u0930\u0939\u0947\u0902 \u0915\u094d\u092f\u094b\u0902\u0915\u093f \u0909\u0928\u094d\u0939\u0940\u0902 \u092e\u0947\u0902 \u0906\u092a\u0915\u0940 \u0924\u093e\u0915\u0924 \u091b\u093f\u092a\u0940 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #17)",
        "author": "\u092e\u0926\u0930 \u091f\u0947\u0930\u0947\u0938\u093e",
        "category": "\u0928\u0947\u0924\u0943\u0924\u094d\u0935"
      },
      "fr": {
        "quote": "Soyez fid\u00e8le dans les petites choses car c'est en elles que r\u00e9side votre force. (R\u00e9f #17)",
        "author": "M\u00e8re Teresa",
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
        "quote": "\u0c1a\u0c3f\u0c28\u0c4d\u0c28 \u0c35\u0c3f\u0c37\u0c2f\u0c3e\u0c32\u0c32\u0c4b \u0c28\u0c2e\u0c4d\u0c2e\u0c15\u0c02\u0c17\u0c3e \u0c09\u0c02\u0c21\u0c02\u0c21\u0c3f \u0c0e\u0c02\u0c26\u0c41\u0c15\u0c02\u0c1f\u0c47 \u0c35\u0c3e\u0c1f\u0c3f\u0c32\u0c4b\u0c28\u0c47 \u0c2e\u0c40 \u0c2c\u0c32\u0c02 \u0c09\u0c02\u0c1f\u0c41\u0c02\u0c26\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #18)",
        "author": "\u0c2e\u0c26\u0c30\u0c4d \u0c25\u0c46\u0c30\u0c3f\u0c38\u0c3e",
        "category": "\u0c06\u0c24\u0c4d\u0c2e\u0c35\u0c3f\u0c36\u0c4d\u0c35\u0c3e\u0c38\u0c02"
      },
      "hi": {
        "quote": "\u091b\u094b\u091f\u0940-\u091b\u094b\u091f\u0940 \u092c\u093e\u0924\u094b\u0902 \u092e\u0947\u0902 \u0935\u092b\u093e\u0926\u093e\u0930 \u0930\u0939\u0947\u0902 \u0915\u094d\u092f\u094b\u0902\u0915\u093f \u0909\u0928\u094d\u0939\u0940\u0902 \u092e\u0947\u0902 \u0906\u092a\u0915\u0940 \u0924\u093e\u0915\u0924 \u091b\u093f\u092a\u0940 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #18)",
        "author": "\u092e\u0926\u0930 \u091f\u0947\u0930\u0947\u0938\u093e",
        "category": "\u0906\u0924\u094d\u092e\u0935\u093f\u0936\u094d\u0935\u093e\u0938"
      },
      "fr": {
        "quote": "Soyez fid\u00e8le dans les petites choses car c'est en elles que r\u00e9side votre force. (R\u00e9f #18)",
        "author": "M\u00e8re Teresa",
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
        "quote": "\u0c1a\u0c3f\u0c28\u0c4d\u0c28 \u0c35\u0c3f\u0c37\u0c2f\u0c3e\u0c32\u0c32\u0c4b \u0c28\u0c2e\u0c4d\u0c2e\u0c15\u0c02\u0c17\u0c3e \u0c09\u0c02\u0c21\u0c02\u0c21\u0c3f \u0c0e\u0c02\u0c26\u0c41\u0c15\u0c02\u0c1f\u0c47 \u0c35\u0c3e\u0c1f\u0c3f\u0c32\u0c4b\u0c28\u0c47 \u0c2e\u0c40 \u0c2c\u0c32\u0c02 \u0c09\u0c02\u0c1f\u0c41\u0c02\u0c26\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #19)",
        "author": "\u0c2e\u0c26\u0c30\u0c4d \u0c25\u0c46\u0c30\u0c3f\u0c38\u0c3e",
        "category": "\u0c28\u0c3e\u0c2f\u0c15\u0c24\u0c4d\u0c35\u0c02"
      },
      "hi": {
        "quote": "\u091b\u094b\u091f\u0940-\u091b\u094b\u091f\u0940 \u092c\u093e\u0924\u094b\u0902 \u092e\u0947\u0902 \u0935\u092b\u093e\u0926\u093e\u0930 \u0930\u0939\u0947\u0902 \u0915\u094d\u092f\u094b\u0902\u0915\u093f \u0909\u0928\u094d\u0939\u0940\u0902 \u092e\u0947\u0902 \u0906\u092a\u0915\u0940 \u0924\u093e\u0915\u0924 \u091b\u093f\u092a\u0940 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #19)",
        "author": "\u092e\u0926\u0930 \u091f\u0947\u0930\u0947\u0938\u093e",
        "category": "\u0928\u0947\u0924\u0943\u0924\u094d\u0935"
      },
      "fr": {
        "quote": "Soyez fid\u00e8le dans les petites choses car c'est en elles que r\u00e9side votre force. (R\u00e9f #19)",
        "author": "M\u00e8re Teresa",
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
        "quote": "\u0c1a\u0c3f\u0c28\u0c4d\u0c28 \u0c35\u0c3f\u0c37\u0c2f\u0c3e\u0c32\u0c32\u0c4b \u0c28\u0c2e\u0c4d\u0c2e\u0c15\u0c02\u0c17\u0c3e \u0c09\u0c02\u0c21\u0c02\u0c21\u0c3f \u0c0e\u0c02\u0c26\u0c41\u0c15\u0c02\u0c1f\u0c47 \u0c35\u0c3e\u0c1f\u0c3f\u0c32\u0c4b\u0c28\u0c47 \u0c2e\u0c40 \u0c2c\u0c32\u0c02 \u0c09\u0c02\u0c1f\u0c41\u0c02\u0c26\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #20)",
        "author": "\u0c2e\u0c26\u0c30\u0c4d \u0c25\u0c46\u0c30\u0c3f\u0c38\u0c3e",
        "category": "\u0c0f\u0c15\u0c3e\u0c17\u0c4d\u0c30\u0c24"
      },
      "hi": {
        "quote": "\u091b\u094b\u091f\u0940-\u091b\u094b\u091f\u0940 \u092c\u093e\u0924\u094b\u0902 \u092e\u0947\u0902 \u0935\u092b\u093e\u0926\u093e\u0930 \u0930\u0939\u0947\u0902 \u0915\u094d\u092f\u094b\u0902\u0915\u093f \u0909\u0928\u094d\u0939\u0940\u0902 \u092e\u0947\u0902 \u0906\u092a\u0915\u0940 \u0924\u093e\u0915\u0924 \u091b\u093f\u092a\u0940 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #20)",
        "author": "\u092e\u0926\u0930 \u091f\u0947\u0930\u0947\u0938\u093e",
        "category": "\u090f\u0915\u093e\u0917\u094d\u0930\u0924\u093e"
      },
      "fr": {
        "quote": "Soyez fid\u00e8le dans les petites choses car c'est en elles que r\u00e9side votre force. (R\u00e9f #20)",
        "author": "M\u00e8re Teresa",
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
        "quote": "\u0c1a\u0c3f\u0c28\u0c4d\u0c28 \u0c35\u0c3f\u0c37\u0c2f\u0c3e\u0c32\u0c32\u0c4b \u0c28\u0c2e\u0c4d\u0c2e\u0c15\u0c02\u0c17\u0c3e \u0c09\u0c02\u0c21\u0c02\u0c21\u0c3f \u0c0e\u0c02\u0c26\u0c41\u0c15\u0c02\u0c1f\u0c47 \u0c35\u0c3e\u0c1f\u0c3f\u0c32\u0c4b\u0c28\u0c47 \u0c2e\u0c40 \u0c2c\u0c32\u0c02 \u0c09\u0c02\u0c1f\u0c41\u0c02\u0c26\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #21)",
        "author": "\u0c2e\u0c26\u0c30\u0c4d \u0c25\u0c46\u0c30\u0c3f\u0c38\u0c3e",
        "category": "\u0c06\u0c24\u0c4d\u0c2e\u0c35\u0c3f\u0c36\u0c4d\u0c35\u0c3e\u0c38\u0c02"
      },
      "hi": {
        "quote": "\u091b\u094b\u091f\u0940-\u091b\u094b\u091f\u0940 \u092c\u093e\u0924\u094b\u0902 \u092e\u0947\u0902 \u0935\u092b\u093e\u0926\u093e\u0930 \u0930\u0939\u0947\u0902 \u0915\u094d\u092f\u094b\u0902\u0915\u093f \u0909\u0928\u094d\u0939\u0940\u0902 \u092e\u0947\u0902 \u0906\u092a\u0915\u0940 \u0924\u093e\u0915\u0924 \u091b\u093f\u092a\u0940 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #21)",
        "author": "\u092e\u0926\u0930 \u091f\u0947\u0930\u0947\u0938\u093e",
        "category": "\u0906\u0924\u094d\u092e\u0935\u093f\u0936\u094d\u0935\u093e\u0938"
      },
      "fr": {
        "quote": "Soyez fid\u00e8le dans les petites choses car c'est en elles que r\u00e9side votre force. (R\u00e9f #21)",
        "author": "M\u00e8re Teresa",
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
        "quote": "\u0c1a\u0c3f\u0c28\u0c4d\u0c28 \u0c35\u0c3f\u0c37\u0c2f\u0c3e\u0c32\u0c32\u0c4b \u0c28\u0c2e\u0c4d\u0c2e\u0c15\u0c02\u0c17\u0c3e \u0c09\u0c02\u0c21\u0c02\u0c21\u0c3f \u0c0e\u0c02\u0c26\u0c41\u0c15\u0c02\u0c1f\u0c47 \u0c35\u0c3e\u0c1f\u0c3f\u0c32\u0c4b\u0c28\u0c47 \u0c2e\u0c40 \u0c2c\u0c32\u0c02 \u0c09\u0c02\u0c1f\u0c41\u0c02\u0c26\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #22)",
        "author": "\u0c2e\u0c26\u0c30\u0c4d \u0c25\u0c46\u0c30\u0c3f\u0c38\u0c3e",
        "category": "\u0c38\u0c47\u0c35"
      },
      "hi": {
        "quote": "\u091b\u094b\u091f\u0940-\u091b\u094b\u091f\u0940 \u092c\u093e\u0924\u094b\u0902 \u092e\u0947\u0902 \u0935\u092b\u093e\u0926\u093e\u0930 \u0930\u0939\u0947\u0902 \u0915\u094d\u092f\u094b\u0902\u0915\u093f \u0909\u0928\u094d\u0939\u0940\u0902 \u092e\u0947\u0902 \u0906\u092a\u0915\u0940 \u0924\u093e\u0915\u0924 \u091b\u093f\u092a\u0940 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #22)",
        "author": "\u092e\u0926\u0930 \u091f\u0947\u0930\u0947\u0938\u093e",
        "category": "\u0938\u0947\u0935\u093e"
      },
      "fr": {
        "quote": "Soyez fid\u00e8le dans les petites choses car c'est en elles que r\u00e9side votre force. (R\u00e9f #22)",
        "author": "M\u00e8re Teresa",
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
        "quote": "\u0c1a\u0c3f\u0c28\u0c4d\u0c28 \u0c35\u0c3f\u0c37\u0c2f\u0c3e\u0c32\u0c32\u0c4b \u0c28\u0c2e\u0c4d\u0c2e\u0c15\u0c02\u0c17\u0c3e \u0c09\u0c02\u0c21\u0c02\u0c21\u0c3f \u0c0e\u0c02\u0c26\u0c41\u0c15\u0c02\u0c1f\u0c47 \u0c35\u0c3e\u0c1f\u0c3f\u0c32\u0c4b\u0c28\u0c47 \u0c2e\u0c40 \u0c2c\u0c32\u0c02 \u0c09\u0c02\u0c1f\u0c41\u0c02\u0c26\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #23)",
        "author": "\u0c2e\u0c26\u0c30\u0c4d \u0c25\u0c46\u0c30\u0c3f\u0c38\u0c3e",
        "category": "\u0c28\u0c3e\u0c2f\u0c15\u0c24\u0c4d\u0c35\u0c02"
      },
      "hi": {
        "quote": "\u091b\u094b\u091f\u0940-\u091b\u094b\u091f\u0940 \u092c\u093e\u0924\u094b\u0902 \u092e\u0947\u0902 \u0935\u092b\u093e\u0926\u093e\u0930 \u0930\u0939\u0947\u0902 \u0915\u094d\u092f\u094b\u0902\u0915\u093f \u0909\u0928\u094d\u0939\u0940\u0902 \u092e\u0947\u0902 \u0906\u092a\u0915\u0940 \u0924\u093e\u0915\u0924 \u091b\u093f\u092a\u0940 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #23)",
        "author": "\u092e\u0926\u0930 \u091f\u0947\u0930\u0947\u0938\u093e",
        "category": "\u0928\u0947\u0924\u0943\u0924\u094d\u0935"
      },
      "fr": {
        "quote": "Soyez fid\u00e8le dans les petites choses car c'est en elles que r\u00e9side votre force. (R\u00e9f #23)",
        "author": "M\u00e8re Teresa",
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
        "quote": "\u0c1a\u0c3f\u0c28\u0c4d\u0c28 \u0c35\u0c3f\u0c37\u0c2f\u0c3e\u0c32\u0c32\u0c4b \u0c28\u0c2e\u0c4d\u0c2e\u0c15\u0c02\u0c17\u0c3e \u0c09\u0c02\u0c21\u0c02\u0c21\u0c3f \u0c0e\u0c02\u0c26\u0c41\u0c15\u0c02\u0c1f\u0c47 \u0c35\u0c3e\u0c1f\u0c3f\u0c32\u0c4b\u0c28\u0c47 \u0c2e\u0c40 \u0c2c\u0c32\u0c02 \u0c09\u0c02\u0c1f\u0c41\u0c02\u0c26\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #24)",
        "author": "\u0c2e\u0c26\u0c30\u0c4d \u0c25\u0c46\u0c30\u0c3f\u0c38\u0c3e",
        "category": "\u0c06\u0c24\u0c4d\u0c2e\u0c35\u0c3f\u0c36\u0c4d\u0c35\u0c3e\u0c38\u0c02"
      },
      "hi": {
        "quote": "\u091b\u094b\u091f\u0940-\u091b\u094b\u091f\u0940 \u092c\u093e\u0924\u094b\u0902 \u092e\u0947\u0902 \u0935\u092b\u093e\u0926\u093e\u0930 \u0930\u0939\u0947\u0902 \u0915\u094d\u092f\u094b\u0902\u0915\u093f \u0909\u0928\u094d\u0939\u0940\u0902 \u092e\u0947\u0902 \u0906\u092a\u0915\u0940 \u0924\u093e\u0915\u0924 \u091b\u093f\u092a\u0940 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #24)",
        "author": "\u092e\u0926\u0930 \u091f\u0947\u0930\u0947\u0938\u093e",
        "category": "\u0906\u0924\u094d\u092e\u0935\u093f\u0936\u094d\u0935\u093e\u0938"
      },
      "fr": {
        "quote": "Soyez fid\u00e8le dans les petites choses car c'est en elles que r\u00e9side votre force. (R\u00e9f #24)",
        "author": "M\u00e8re Teresa",
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
        "quote": "\u0c1a\u0c3f\u0c28\u0c4d\u0c28 \u0c35\u0c3f\u0c37\u0c2f\u0c3e\u0c32\u0c32\u0c4b \u0c28\u0c2e\u0c4d\u0c2e\u0c15\u0c02\u0c17\u0c3e \u0c09\u0c02\u0c21\u0c02\u0c21\u0c3f \u0c0e\u0c02\u0c26\u0c41\u0c15\u0c02\u0c1f\u0c47 \u0c35\u0c3e\u0c1f\u0c3f\u0c32\u0c4b\u0c28\u0c47 \u0c2e\u0c40 \u0c2c\u0c32\u0c02 \u0c09\u0c02\u0c1f\u0c41\u0c02\u0c26\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #25)",
        "author": "\u0c2e\u0c26\u0c30\u0c4d \u0c25\u0c46\u0c30\u0c3f\u0c38\u0c3e",
        "category": "\u0c0f\u0c15\u0c3e\u0c17\u0c4d\u0c30\u0c24"
      },
      "hi": {
        "quote": "\u091b\u094b\u091f\u0940-\u091b\u094b\u091f\u0940 \u092c\u093e\u0924\u094b\u0902 \u092e\u0947\u0902 \u0935\u092b\u093e\u0926\u093e\u0930 \u0930\u0939\u0947\u0902 \u0915\u094d\u092f\u094b\u0902\u0915\u093f \u0909\u0928\u094d\u0939\u0940\u0902 \u092e\u0947\u0902 \u0906\u092a\u0915\u0940 \u0924\u093e\u0915\u0924 \u091b\u093f\u092a\u0940 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #25)",
        "author": "\u092e\u0926\u0930 \u091f\u0947\u0930\u0947\u0938\u093e",
        "category": "\u090f\u0915\u093e\u0917\u094d\u0930\u0924\u093e"
      },
      "fr": {
        "quote": "Soyez fid\u00e8le dans les petites choses car c'est en elles que r\u00e9side votre force. (R\u00e9f #25)",
        "author": "M\u00e8re Teresa",
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
        "quote": "\u0c1a\u0c3f\u0c28\u0c4d\u0c28 \u0c35\u0c3f\u0c37\u0c2f\u0c3e\u0c32\u0c32\u0c4b \u0c28\u0c2e\u0c4d\u0c2e\u0c15\u0c02\u0c17\u0c3e \u0c09\u0c02\u0c21\u0c02\u0c21\u0c3f \u0c0e\u0c02\u0c26\u0c41\u0c15\u0c02\u0c1f\u0c47 \u0c35\u0c3e\u0c1f\u0c3f\u0c32\u0c4b\u0c28\u0c47 \u0c2e\u0c40 \u0c2c\u0c32\u0c02 \u0c09\u0c02\u0c1f\u0c41\u0c02\u0c26\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #26)",
        "author": "\u0c2e\u0c26\u0c30\u0c4d \u0c25\u0c46\u0c30\u0c3f\u0c38\u0c3e",
        "category": "\u0c38\u0c47\u0c35"
      },
      "hi": {
        "quote": "\u091b\u094b\u091f\u0940-\u091b\u094b\u091f\u0940 \u092c\u093e\u0924\u094b\u0902 \u092e\u0947\u0902 \u0935\u092b\u093e\u0926\u093e\u0930 \u0930\u0939\u0947\u0902 \u0915\u094d\u092f\u094b\u0902\u0915\u093f \u0909\u0928\u094d\u0939\u0940\u0902 \u092e\u0947\u0902 \u0906\u092a\u0915\u0940 \u0924\u093e\u0915\u0924 \u091b\u093f\u092a\u0940 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #26)",
        "author": "\u092e\u0926\u0930 \u091f\u0947\u0930\u0947\u0938\u093e",
        "category": "\u0938\u0947\u0935\u093e"
      },
      "fr": {
        "quote": "Soyez fid\u00e8le dans les petites choses car c'est en elles que r\u00e9side votre force. (R\u00e9f #26)",
        "author": "M\u00e8re Teresa",
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
        "quote": "\u0c1a\u0c3f\u0c28\u0c4d\u0c28 \u0c35\u0c3f\u0c37\u0c2f\u0c3e\u0c32\u0c32\u0c4b \u0c28\u0c2e\u0c4d\u0c2e\u0c15\u0c02\u0c17\u0c3e \u0c09\u0c02\u0c21\u0c02\u0c21\u0c3f \u0c0e\u0c02\u0c26\u0c41\u0c15\u0c02\u0c1f\u0c47 \u0c35\u0c3e\u0c1f\u0c3f\u0c32\u0c4b\u0c28\u0c47 \u0c2e\u0c40 \u0c2c\u0c32\u0c02 \u0c09\u0c02\u0c1f\u0c41\u0c02\u0c26\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #27)",
        "author": "\u0c2e\u0c26\u0c30\u0c4d \u0c25\u0c46\u0c30\u0c3f\u0c38\u0c3e",
        "category": "\u0c06\u0c24\u0c4d\u0c2e\u0c35\u0c3f\u0c36\u0c4d\u0c35\u0c3e\u0c38\u0c02"
      },
      "hi": {
        "quote": "\u091b\u094b\u091f\u0940-\u091b\u094b\u091f\u0940 \u092c\u093e\u0924\u094b\u0902 \u092e\u0947\u0902 \u0935\u092b\u093e\u0926\u093e\u0930 \u0930\u0939\u0947\u0902 \u0915\u094d\u092f\u094b\u0902\u0915\u093f \u0909\u0928\u094d\u0939\u0940\u0902 \u092e\u0947\u0902 \u0906\u092a\u0915\u0940 \u0924\u093e\u0915\u0924 \u091b\u093f\u092a\u0940 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #27)",
        "author": "\u092e\u0926\u0930 \u091f\u0947\u0930\u0947\u0938\u093e",
        "category": "\u0906\u0924\u094d\u092e\u0935\u093f\u0936\u094d\u0935\u093e\u0938"
      },
      "fr": {
        "quote": "Soyez fid\u00e8le dans les petites choses car c'est en elles que r\u00e9side votre force. (R\u00e9f #27)",
        "author": "M\u00e8re Teresa",
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
        "quote": "\u0c1a\u0c3f\u0c28\u0c4d\u0c28 \u0c35\u0c3f\u0c37\u0c2f\u0c3e\u0c32\u0c32\u0c4b \u0c28\u0c2e\u0c4d\u0c2e\u0c15\u0c02\u0c17\u0c3e \u0c09\u0c02\u0c21\u0c02\u0c21\u0c3f \u0c0e\u0c02\u0c26\u0c41\u0c15\u0c02\u0c1f\u0c47 \u0c35\u0c3e\u0c1f\u0c3f\u0c32\u0c4b\u0c28\u0c47 \u0c2e\u0c40 \u0c2c\u0c32\u0c02 \u0c09\u0c02\u0c1f\u0c41\u0c02\u0c26\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #28)",
        "author": "\u0c2e\u0c26\u0c30\u0c4d \u0c25\u0c46\u0c30\u0c3f\u0c38\u0c3e",
        "category": "\u0c15\u0c32\u0c32\u0c41"
      },
      "hi": {
        "quote": "\u091b\u094b\u091f\u0940-\u091b\u094b\u091f\u0940 \u092c\u093e\u0924\u094b\u0902 \u092e\u0947\u0902 \u0935\u092b\u093e\u0926\u093e\u0930 \u0930\u0939\u0947\u0902 \u0915\u094d\u092f\u094b\u0902\u0915\u093f \u0909\u0928\u094d\u0939\u0940\u0902 \u092e\u0947\u0902 \u0906\u092a\u0915\u0940 \u0924\u093e\u0915\u0924 \u091b\u093f\u092a\u0940 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #28)",
        "author": "\u092e\u0926\u0930 \u091f\u0947\u0930\u0947\u0938\u093e",
        "category": "\u0938\u092a\u0928\u0947"
      },
      "fr": {
        "quote": "Soyez fid\u00e8le dans les petites choses car c'est en elles que r\u00e9side votre force. (R\u00e9f #28)",
        "author": "M\u00e8re Teresa",
        "category": "R\u00eaves"
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
        "quote": "\u0c1a\u0c3f\u0c28\u0c4d\u0c28 \u0c35\u0c3f\u0c37\u0c2f\u0c3e\u0c32\u0c32\u0c4b \u0c28\u0c2e\u0c4d\u0c2e\u0c15\u0c02\u0c17\u0c3e \u0c09\u0c02\u0c21\u0c02\u0c21\u0c3f \u0c0e\u0c02\u0c26\u0c41\u0c15\u0c02\u0c1f\u0c47 \u0c35\u0c3e\u0c1f\u0c3f\u0c32\u0c4b\u0c28\u0c47 \u0c2e\u0c40 \u0c2c\u0c32\u0c02 \u0c09\u0c02\u0c1f\u0c41\u0c02\u0c26\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #29)",
        "author": "\u0c2e\u0c26\u0c30\u0c4d \u0c25\u0c46\u0c30\u0c3f\u0c38\u0c3e",
        "category": "\u0c28\u0c3e\u0c2f\u0c15\u0c24\u0c4d\u0c35\u0c02"
      },
      "hi": {
        "quote": "\u091b\u094b\u091f\u0940-\u091b\u094b\u091f\u0940 \u092c\u093e\u0924\u094b\u0902 \u092e\u0947\u0902 \u0935\u092b\u093e\u0926\u093e\u0930 \u0930\u0939\u0947\u0902 \u0915\u094d\u092f\u094b\u0902\u0915\u093f \u0909\u0928\u094d\u0939\u0940\u0902 \u092e\u0947\u0902 \u0906\u092a\u0915\u0940 \u0924\u093e\u0915\u0924 \u091b\u093f\u092a\u0940 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #29)",
        "author": "\u092e\u0926\u0930 \u091f\u0947\u0930\u0947\u0938\u093e",
        "category": "\u0928\u0947\u0924\u0943\u0924\u094d\u0935"
      },
      "fr": {
        "quote": "Soyez fid\u00e8le dans les petites choses car c'est en elles que r\u00e9side votre force. (R\u00e9f #29)",
        "author": "M\u00e8re Teresa",
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
        "quote": "\u0c1a\u0c3f\u0c28\u0c4d\u0c28 \u0c35\u0c3f\u0c37\u0c2f\u0c3e\u0c32\u0c32\u0c4b \u0c28\u0c2e\u0c4d\u0c2e\u0c15\u0c02\u0c17\u0c3e \u0c09\u0c02\u0c21\u0c02\u0c21\u0c3f \u0c0e\u0c02\u0c26\u0c41\u0c15\u0c02\u0c1f\u0c47 \u0c35\u0c3e\u0c1f\u0c3f\u0c32\u0c4b\u0c28\u0c47 \u0c2e\u0c40 \u0c2c\u0c32\u0c02 \u0c09\u0c02\u0c1f\u0c41\u0c02\u0c26\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #30)",
        "author": "\u0c2e\u0c26\u0c30\u0c4d \u0c25\u0c46\u0c30\u0c3f\u0c38\u0c3e",
        "category": "\u0c06\u0c24\u0c4d\u0c2e\u0c35\u0c3f\u0c36\u0c4d\u0c35\u0c3e\u0c38\u0c02"
      },
      "hi": {
        "quote": "\u091b\u094b\u091f\u0940-\u091b\u094b\u091f\u0940 \u092c\u093e\u0924\u094b\u0902 \u092e\u0947\u0902 \u0935\u092b\u093e\u0926\u093e\u0930 \u0930\u0939\u0947\u0902 \u0915\u094d\u092f\u094b\u0902\u0915\u093f \u0909\u0928\u094d\u0939\u0940\u0902 \u092e\u0947\u0902 \u0906\u092a\u0915\u0940 \u0924\u093e\u0915\u0924 \u091b\u093f\u092a\u0940 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #30)",
        "author": "\u092e\u0926\u0930 \u091f\u0947\u0930\u0947\u0938\u093e",
        "category": "\u0906\u0924\u094d\u092e\u0935\u093f\u0936\u094d\u0935\u093e\u0938"
      },
      "fr": {
        "quote": "Soyez fid\u00e8le dans les petites choses car c'est en elles que r\u00e9side votre force. (R\u00e9f #30)",
        "author": "M\u00e8re Teresa",
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
        "quote": "\u0c1a\u0c3f\u0c28\u0c4d\u0c28 \u0c35\u0c3f\u0c37\u0c2f\u0c3e\u0c32\u0c32\u0c4b \u0c28\u0c2e\u0c4d\u0c2e\u0c15\u0c02\u0c17\u0c3e \u0c09\u0c02\u0c21\u0c02\u0c21\u0c3f \u0c0e\u0c02\u0c26\u0c41\u0c15\u0c02\u0c1f\u0c47 \u0c35\u0c3e\u0c1f\u0c3f\u0c32\u0c4b\u0c28\u0c47 \u0c2e\u0c40 \u0c2c\u0c32\u0c02 \u0c09\u0c02\u0c1f\u0c41\u0c02\u0c26\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #31)",
        "author": "\u0c2e\u0c26\u0c30\u0c4d \u0c25\u0c46\u0c30\u0c3f\u0c38\u0c3e",
        "category": "\u0c28\u0c3e\u0c2f\u0c15\u0c24\u0c4d\u0c35\u0c02"
      },
      "hi": {
        "quote": "\u091b\u094b\u091f\u0940-\u091b\u094b\u091f\u0940 \u092c\u093e\u0924\u094b\u0902 \u092e\u0947\u0902 \u0935\u092b\u093e\u0926\u093e\u0930 \u0930\u0939\u0947\u0902 \u0915\u094d\u092f\u094b\u0902\u0915\u093f \u0909\u0928\u094d\u0939\u0940\u0902 \u092e\u0947\u0902 \u0906\u092a\u0915\u0940 \u0924\u093e\u0915\u0924 \u091b\u093f\u092a\u0940 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #31)",
        "author": "\u092e\u0926\u0930 \u091f\u0947\u0930\u0947\u0938\u093e",
        "category": "\u0928\u0947\u0924\u0943\u0924\u094d\u0935"
      },
      "fr": {
        "quote": "Soyez fid\u00e8le dans les petites choses car c'est en elles que r\u00e9side votre force. (R\u00e9f #31)",
        "author": "M\u00e8re Teresa",
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
        "quote": "\u0c1a\u0c3f\u0c28\u0c4d\u0c28 \u0c35\u0c3f\u0c37\u0c2f\u0c3e\u0c32\u0c32\u0c4b \u0c28\u0c2e\u0c4d\u0c2e\u0c15\u0c02\u0c17\u0c3e \u0c09\u0c02\u0c21\u0c02\u0c21\u0c3f \u0c0e\u0c02\u0c26\u0c41\u0c15\u0c02\u0c1f\u0c47 \u0c35\u0c3e\u0c1f\u0c3f\u0c32\u0c4b\u0c28\u0c47 \u0c2e\u0c40 \u0c2c\u0c32\u0c02 \u0c09\u0c02\u0c1f\u0c41\u0c02\u0c26\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #32)",
        "author": "\u0c2e\u0c26\u0c30\u0c4d \u0c25\u0c46\u0c30\u0c3f\u0c38\u0c3e",
        "category": "\u0c38\u0c47\u0c35"
      },
      "hi": {
        "quote": "\u091b\u094b\u091f\u0940-\u091b\u094b\u091f\u0940 \u092c\u093e\u0924\u094b\u0902 \u092e\u0947\u0902 \u0935\u092b\u093e\u0926\u093e\u0930 \u0930\u0939\u0947\u0902 \u0915\u094d\u092f\u094b\u0902\u0915\u093f \u0909\u0928\u094d\u0939\u0940\u0902 \u092e\u0947\u0902 \u0906\u092a\u0915\u0940 \u0924\u093e\u0915\u0924 \u091b\u093f\u092a\u0940 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #32)",
        "author": "\u092e\u0926\u0930 \u091f\u0947\u0930\u0947\u0938\u093e",
        "category": "\u0938\u0947\u0935\u093e"
      },
      "fr": {
        "quote": "Soyez fid\u00e8le dans les petites choses car c'est en elles que r\u00e9side votre force. (R\u00e9f #32)",
        "author": "M\u00e8re Teresa",
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
        "quote": "\u0c1a\u0c3f\u0c28\u0c4d\u0c28 \u0c35\u0c3f\u0c37\u0c2f\u0c3e\u0c32\u0c32\u0c4b \u0c28\u0c2e\u0c4d\u0c2e\u0c15\u0c02\u0c17\u0c3e \u0c09\u0c02\u0c21\u0c02\u0c21\u0c3f \u0c0e\u0c02\u0c26\u0c41\u0c15\u0c02\u0c1f\u0c47 \u0c35\u0c3e\u0c1f\u0c3f\u0c32\u0c4b\u0c28\u0c47 \u0c2e\u0c40 \u0c2c\u0c32\u0c02 \u0c09\u0c02\u0c1f\u0c41\u0c02\u0c26\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #33)",
        "author": "\u0c2e\u0c26\u0c30\u0c4d \u0c25\u0c46\u0c30\u0c3f\u0c38\u0c3e",
        "category": "\u0c06\u0c24\u0c4d\u0c2e\u0c35\u0c3f\u0c36\u0c4d\u0c35\u0c3e\u0c38\u0c02"
      },
      "hi": {
        "quote": "\u091b\u094b\u091f\u0940-\u091b\u094b\u091f\u0940 \u092c\u093e\u0924\u094b\u0902 \u092e\u0947\u0902 \u0935\u092b\u093e\u0926\u093e\u0930 \u0930\u0939\u0947\u0902 \u0915\u094d\u092f\u094b\u0902\u0915\u093f \u0909\u0928\u094d\u0939\u0940\u0902 \u092e\u0947\u0902 \u0906\u092a\u0915\u0940 \u0924\u093e\u0915\u0924 \u091b\u093f\u092a\u0940 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #33)",
        "author": "\u092e\u0926\u0930 \u091f\u0947\u0930\u0947\u0938\u093e",
        "category": "\u0906\u0924\u094d\u092e\u0935\u093f\u0936\u094d\u0935\u093e\u0938"
      },
      "fr": {
        "quote": "Soyez fid\u00e8le dans les petites choses car c'est en elles que r\u00e9side votre force. (R\u00e9f #33)",
        "author": "M\u00e8re Teresa",
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
        "quote": "\u0c1a\u0c3f\u0c28\u0c4d\u0c28 \u0c35\u0c3f\u0c37\u0c2f\u0c3e\u0c32\u0c32\u0c4b \u0c28\u0c2e\u0c4d\u0c2e\u0c15\u0c02\u0c17\u0c3e \u0c09\u0c02\u0c21\u0c02\u0c21\u0c3f \u0c0e\u0c02\u0c26\u0c41\u0c15\u0c02\u0c1f\u0c47 \u0c35\u0c3e\u0c1f\u0c3f\u0c32\u0c4b\u0c28\u0c47 \u0c2e\u0c40 \u0c2c\u0c32\u0c02 \u0c09\u0c02\u0c1f\u0c41\u0c02\u0c26\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #34)",
        "author": "\u0c2e\u0c26\u0c30\u0c4d \u0c25\u0c46\u0c30\u0c3f\u0c38\u0c3e",
        "category": "\u0c38\u0c47\u0c35"
      },
      "hi": {
        "quote": "\u091b\u094b\u091f\u0940-\u091b\u094b\u091f\u0940 \u092c\u093e\u0924\u094b\u0902 \u092e\u0947\u0902 \u0935\u092b\u093e\u0926\u093e\u0930 \u0930\u0939\u0947\u0902 \u0915\u094d\u092f\u094b\u0902\u0915\u093f \u0909\u0928\u094d\u0939\u0940\u0902 \u092e\u0947\u0902 \u0906\u092a\u0915\u0940 \u0924\u093e\u0915\u0924 \u091b\u093f\u092a\u0940 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #34)",
        "author": "\u092e\u0926\u0930 \u091f\u0947\u0930\u0947\u0938\u093e",
        "category": "\u0938\u0947\u0935\u093e"
      },
      "fr": {
        "quote": "Soyez fid\u00e8le dans les petites choses car c'est en elles que r\u00e9side votre force. (R\u00e9f #34)",
        "author": "M\u00e8re Teresa",
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
        "quote": "\u0c1a\u0c3f\u0c28\u0c4d\u0c28 \u0c35\u0c3f\u0c37\u0c2f\u0c3e\u0c32\u0c32\u0c4b \u0c28\u0c2e\u0c4d\u0c2e\u0c15\u0c02\u0c17\u0c3e \u0c09\u0c02\u0c21\u0c02\u0c21\u0c3f \u0c0e\u0c02\u0c26\u0c41\u0c15\u0c02\u0c1f\u0c47 \u0c35\u0c3e\u0c1f\u0c3f\u0c32\u0c4b\u0c28\u0c47 \u0c2e\u0c40 \u0c2c\u0c32\u0c02 \u0c09\u0c02\u0c1f\u0c41\u0c02\u0c26\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #35)",
        "author": "\u0c2e\u0c26\u0c30\u0c4d \u0c25\u0c46\u0c30\u0c3f\u0c38\u0c3e",
        "category": "\u0c0f\u0c15\u0c3e\u0c17\u0c4d\u0c30\u0c24"
      },
      "hi": {
        "quote": "\u091b\u094b\u091f\u0940-\u091b\u094b\u091f\u0940 \u092c\u093e\u0924\u094b\u0902 \u092e\u0947\u0902 \u0935\u092b\u093e\u0926\u093e\u0930 \u0930\u0939\u0947\u0902 \u0915\u094d\u092f\u094b\u0902\u0915\u093f \u0909\u0928\u094d\u0939\u0940\u0902 \u092e\u0947\u0902 \u0906\u092a\u0915\u0940 \u0924\u093e\u0915\u0924 \u091b\u093f\u092a\u0940 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #35)",
        "author": "\u092e\u0926\u0930 \u091f\u0947\u0930\u0947\u0938\u093e",
        "category": "\u090f\u0915\u093e\u0917\u094d\u0930\u0924\u093e"
      },
      "fr": {
        "quote": "Soyez fid\u00e8le dans les petites choses car c'est en elles que r\u00e9side votre force. (R\u00e9f #35)",
        "author": "M\u00e8re Teresa",
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
        "quote": "\u0c1a\u0c3f\u0c28\u0c4d\u0c28 \u0c35\u0c3f\u0c37\u0c2f\u0c3e\u0c32\u0c32\u0c4b \u0c28\u0c2e\u0c4d\u0c2e\u0c15\u0c02\u0c17\u0c3e \u0c09\u0c02\u0c21\u0c02\u0c21\u0c3f \u0c0e\u0c02\u0c26\u0c41\u0c15\u0c02\u0c1f\u0c47 \u0c35\u0c3e\u0c1f\u0c3f\u0c32\u0c4b\u0c28\u0c47 \u0c2e\u0c40 \u0c2c\u0c32\u0c02 \u0c09\u0c02\u0c1f\u0c41\u0c02\u0c26\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #36)",
        "author": "\u0c2e\u0c26\u0c30\u0c4d \u0c25\u0c46\u0c30\u0c3f\u0c38\u0c3e",
        "category": "\u0c06\u0c24\u0c4d\u0c2e\u0c35\u0c3f\u0c36\u0c4d\u0c35\u0c3e\u0c38\u0c02"
      },
      "hi": {
        "quote": "\u091b\u094b\u091f\u0940-\u091b\u094b\u091f\u0940 \u092c\u093e\u0924\u094b\u0902 \u092e\u0947\u0902 \u0935\u092b\u093e\u0926\u093e\u0930 \u0930\u0939\u0947\u0902 \u0915\u094d\u092f\u094b\u0902\u0915\u093f \u0909\u0928\u094d\u0939\u0940\u0902 \u092e\u0947\u0902 \u0906\u092a\u0915\u0940 \u0924\u093e\u0915\u0924 \u091b\u093f\u092a\u0940 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #36)",
        "author": "\u092e\u0926\u0930 \u091f\u0947\u0930\u0947\u0938\u093e",
        "category": "\u0906\u0924\u094d\u092e\u0935\u093f\u0936\u094d\u0935\u093e\u0938"
      },
      "fr": {
        "quote": "Soyez fid\u00e8le dans les petites choses car c'est en elles que r\u00e9side votre force. (R\u00e9f #36)",
        "author": "M\u00e8re Teresa",
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
        "quote": "\u0c1a\u0c3f\u0c28\u0c4d\u0c28 \u0c35\u0c3f\u0c37\u0c2f\u0c3e\u0c32\u0c32\u0c4b \u0c28\u0c2e\u0c4d\u0c2e\u0c15\u0c02\u0c17\u0c3e \u0c09\u0c02\u0c21\u0c02\u0c21\u0c3f \u0c0e\u0c02\u0c26\u0c41\u0c15\u0c02\u0c1f\u0c47 \u0c35\u0c3e\u0c1f\u0c3f\u0c32\u0c4b\u0c28\u0c47 \u0c2e\u0c40 \u0c2c\u0c32\u0c02 \u0c09\u0c02\u0c1f\u0c41\u0c02\u0c26\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #37)",
        "author": "\u0c2e\u0c26\u0c30\u0c4d \u0c25\u0c46\u0c30\u0c3f\u0c38\u0c3e",
        "category": "\u0c28\u0c3e\u0c2f\u0c15\u0c24\u0c4d\u0c35\u0c02"
      },
      "hi": {
        "quote": "\u091b\u094b\u091f\u0940-\u091b\u094b\u091f\u0940 \u092c\u093e\u0924\u094b\u0902 \u092e\u0947\u0902 \u0935\u092b\u093e\u0926\u093e\u0930 \u0930\u0939\u0947\u0902 \u0915\u094d\u092f\u094b\u0902\u0915\u093f \u0909\u0928\u094d\u0939\u0940\u0902 \u092e\u0947\u0902 \u0906\u092a\u0915\u0940 \u0924\u093e\u0915\u0924 \u091b\u093f\u092a\u0940 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #37)",
        "author": "\u092e\u0926\u0930 \u091f\u0947\u0930\u0947\u0938\u093e",
        "category": "\u0928\u0947\u0924\u0943\u0924\u094d\u0935"
      },
      "fr": {
        "quote": "Soyez fid\u00e8le dans les petites choses car c'est en elles que r\u00e9side votre force. (R\u00e9f #37)",
        "author": "M\u00e8re Teresa",
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
        "quote": "\u0c1a\u0c3f\u0c28\u0c4d\u0c28 \u0c35\u0c3f\u0c37\u0c2f\u0c3e\u0c32\u0c32\u0c4b \u0c28\u0c2e\u0c4d\u0c2e\u0c15\u0c02\u0c17\u0c3e \u0c09\u0c02\u0c21\u0c02\u0c21\u0c3f \u0c0e\u0c02\u0c26\u0c41\u0c15\u0c02\u0c1f\u0c47 \u0c35\u0c3e\u0c1f\u0c3f\u0c32\u0c4b\u0c28\u0c47 \u0c2e\u0c40 \u0c2c\u0c32\u0c02 \u0c09\u0c02\u0c1f\u0c41\u0c02\u0c26\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #38)",
        "author": "\u0c2e\u0c26\u0c30\u0c4d \u0c25\u0c46\u0c30\u0c3f\u0c38\u0c3e",
        "category": "\u0c38\u0c47\u0c35"
      },
      "hi": {
        "quote": "\u091b\u094b\u091f\u0940-\u091b\u094b\u091f\u0940 \u092c\u093e\u0924\u094b\u0902 \u092e\u0947\u0902 \u0935\u092b\u093e\u0926\u093e\u0930 \u0930\u0939\u0947\u0902 \u0915\u094d\u092f\u094b\u0902\u0915\u093f \u0909\u0928\u094d\u0939\u0940\u0902 \u092e\u0947\u0902 \u0906\u092a\u0915\u0940 \u0924\u093e\u0915\u0924 \u091b\u093f\u092a\u0940 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #38)",
        "author": "\u092e\u0926\u0930 \u091f\u0947\u0930\u0947\u0938\u093e",
        "category": "\u0938\u0947\u0935\u093e"
      },
      "fr": {
        "quote": "Soyez fid\u00e8le dans les petites choses car c'est en elles que r\u00e9side votre force. (R\u00e9f #38)",
        "author": "M\u00e8re Teresa",
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
        "quote": "\u0c1a\u0c3f\u0c28\u0c4d\u0c28 \u0c35\u0c3f\u0c37\u0c2f\u0c3e\u0c32\u0c32\u0c4b \u0c28\u0c2e\u0c4d\u0c2e\u0c15\u0c02\u0c17\u0c3e \u0c09\u0c02\u0c21\u0c02\u0c21\u0c3f \u0c0e\u0c02\u0c26\u0c41\u0c15\u0c02\u0c1f\u0c47 \u0c35\u0c3e\u0c1f\u0c3f\u0c32\u0c4b\u0c28\u0c47 \u0c2e\u0c40 \u0c2c\u0c32\u0c02 \u0c09\u0c02\u0c1f\u0c41\u0c02\u0c26\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #39)",
        "author": "\u0c2e\u0c26\u0c30\u0c4d \u0c25\u0c46\u0c30\u0c3f\u0c38\u0c3e",
        "category": "\u0c06\u0c24\u0c4d\u0c2e\u0c35\u0c3f\u0c36\u0c4d\u0c35\u0c3e\u0c38\u0c02"
      },
      "hi": {
        "quote": "\u091b\u094b\u091f\u0940-\u091b\u094b\u091f\u0940 \u092c\u093e\u0924\u094b\u0902 \u092e\u0947\u0902 \u0935\u092b\u093e\u0926\u093e\u0930 \u0930\u0939\u0947\u0902 \u0915\u094d\u092f\u094b\u0902\u0915\u093f \u0909\u0928\u094d\u0939\u0940\u0902 \u092e\u0947\u0902 \u0906\u092a\u0915\u0940 \u0924\u093e\u0915\u0924 \u091b\u093f\u092a\u0940 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #39)",
        "author": "\u092e\u0926\u0930 \u091f\u0947\u0930\u0947\u0938\u093e",
        "category": "\u0906\u0924\u094d\u092e\u0935\u093f\u0936\u094d\u0935\u093e\u0938"
      },
      "fr": {
        "quote": "Soyez fid\u00e8le dans les petites choses car c'est en elles que r\u00e9side votre force. (R\u00e9f #39)",
        "author": "M\u00e8re Teresa",
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
        "quote": "\u0c1a\u0c3f\u0c28\u0c4d\u0c28 \u0c35\u0c3f\u0c37\u0c2f\u0c3e\u0c32\u0c32\u0c4b \u0c28\u0c2e\u0c4d\u0c2e\u0c15\u0c02\u0c17\u0c3e \u0c09\u0c02\u0c21\u0c02\u0c21\u0c3f \u0c0e\u0c02\u0c26\u0c41\u0c15\u0c02\u0c1f\u0c47 \u0c35\u0c3e\u0c1f\u0c3f\u0c32\u0c4b\u0c28\u0c47 \u0c2e\u0c40 \u0c2c\u0c32\u0c02 \u0c09\u0c02\u0c1f\u0c41\u0c02\u0c26\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #40)",
        "author": "\u0c2e\u0c26\u0c30\u0c4d \u0c25\u0c46\u0c30\u0c3f\u0c38\u0c3e",
        "category": "\u0c0f\u0c15\u0c3e\u0c17\u0c4d\u0c30\u0c24"
      },
      "hi": {
        "quote": "\u091b\u094b\u091f\u0940-\u091b\u094b\u091f\u0940 \u092c\u093e\u0924\u094b\u0902 \u092e\u0947\u0902 \u0935\u092b\u093e\u0926\u093e\u0930 \u0930\u0939\u0947\u0902 \u0915\u094d\u092f\u094b\u0902\u0915\u093f \u0909\u0928\u094d\u0939\u0940\u0902 \u092e\u0947\u0902 \u0906\u092a\u0915\u0940 \u0924\u093e\u0915\u0924 \u091b\u093f\u092a\u0940 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #40)",
        "author": "\u092e\u0926\u0930 \u091f\u0947\u0930\u0947\u0938\u093e",
        "category": "\u090f\u0915\u093e\u0917\u094d\u0930\u0924\u093e"
      },
      "fr": {
        "quote": "Soyez fid\u00e8le dans les petites choses car c'est en elles que r\u00e9side votre force. (R\u00e9f #40)",
        "author": "M\u00e8re Teresa",
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
        "quote": "\u0c1a\u0c3f\u0c28\u0c4d\u0c28 \u0c35\u0c3f\u0c37\u0c2f\u0c3e\u0c32\u0c32\u0c4b \u0c28\u0c2e\u0c4d\u0c2e\u0c15\u0c02\u0c17\u0c3e \u0c09\u0c02\u0c21\u0c02\u0c21\u0c3f \u0c0e\u0c02\u0c26\u0c41\u0c15\u0c02\u0c1f\u0c47 \u0c35\u0c3e\u0c1f\u0c3f\u0c32\u0c4b\u0c28\u0c47 \u0c2e\u0c40 \u0c2c\u0c32\u0c02 \u0c09\u0c02\u0c1f\u0c41\u0c02\u0c26\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #41)",
        "author": "\u0c2e\u0c26\u0c30\u0c4d \u0c25\u0c46\u0c30\u0c3f\u0c38\u0c3e",
        "category": "\u0c28\u0c3e\u0c2f\u0c15\u0c24\u0c4d\u0c35\u0c02"
      },
      "hi": {
        "quote": "\u091b\u094b\u091f\u0940-\u091b\u094b\u091f\u0940 \u092c\u093e\u0924\u094b\u0902 \u092e\u0947\u0902 \u0935\u092b\u093e\u0926\u093e\u0930 \u0930\u0939\u0947\u0902 \u0915\u094d\u092f\u094b\u0902\u0915\u093f \u0909\u0928\u094d\u0939\u0940\u0902 \u092e\u0947\u0902 \u0906\u092a\u0915\u0940 \u0924\u093e\u0915\u0924 \u091b\u093f\u092a\u0940 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #41)",
        "author": "\u092e\u0926\u0930 \u091f\u0947\u0930\u0947\u0938\u093e",
        "category": "\u0928\u0947\u0924\u0943\u0924\u094d\u0935"
      },
      "fr": {
        "quote": "Soyez fid\u00e8le dans les petites choses car c'est en elles que r\u00e9side votre force. (R\u00e9f #41)",
        "author": "M\u00e8re Teresa",
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
        "quote": "\u0c1a\u0c3f\u0c28\u0c4d\u0c28 \u0c35\u0c3f\u0c37\u0c2f\u0c3e\u0c32\u0c32\u0c4b \u0c28\u0c2e\u0c4d\u0c2e\u0c15\u0c02\u0c17\u0c3e \u0c09\u0c02\u0c21\u0c02\u0c21\u0c3f \u0c0e\u0c02\u0c26\u0c41\u0c15\u0c02\u0c1f\u0c47 \u0c35\u0c3e\u0c1f\u0c3f\u0c32\u0c4b\u0c28\u0c47 \u0c2e\u0c40 \u0c2c\u0c32\u0c02 \u0c09\u0c02\u0c1f\u0c41\u0c02\u0c26\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #42)",
        "author": "\u0c2e\u0c26\u0c30\u0c4d \u0c25\u0c46\u0c30\u0c3f\u0c38\u0c3e",
        "category": "\u0c06\u0c24\u0c4d\u0c2e\u0c35\u0c3f\u0c36\u0c4d\u0c35\u0c3e\u0c38\u0c02"
      },
      "hi": {
        "quote": "\u091b\u094b\u091f\u0940-\u091b\u094b\u091f\u0940 \u092c\u093e\u0924\u094b\u0902 \u092e\u0947\u0902 \u0935\u092b\u093e\u0926\u093e\u0930 \u0930\u0939\u0947\u0902 \u0915\u094d\u092f\u094b\u0902\u0915\u093f \u0909\u0928\u094d\u0939\u0940\u0902 \u092e\u0947\u0902 \u0906\u092a\u0915\u0940 \u0924\u093e\u0915\u0924 \u091b\u093f\u092a\u0940 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #42)",
        "author": "\u092e\u0926\u0930 \u091f\u0947\u0930\u0947\u0938\u093e",
        "category": "\u0906\u0924\u094d\u092e\u0935\u093f\u0936\u094d\u0935\u093e\u0938"
      },
      "fr": {
        "quote": "Soyez fid\u00e8le dans les petites choses car c'est en elles que r\u00e9side votre force. (R\u00e9f #42)",
        "author": "M\u00e8re Teresa",
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
        "quote": "\u0c1a\u0c3f\u0c28\u0c4d\u0c28 \u0c35\u0c3f\u0c37\u0c2f\u0c3e\u0c32\u0c32\u0c4b \u0c28\u0c2e\u0c4d\u0c2e\u0c15\u0c02\u0c17\u0c3e \u0c09\u0c02\u0c21\u0c02\u0c21\u0c3f \u0c0e\u0c02\u0c26\u0c41\u0c15\u0c02\u0c1f\u0c47 \u0c35\u0c3e\u0c1f\u0c3f\u0c32\u0c4b\u0c28\u0c47 \u0c2e\u0c40 \u0c2c\u0c32\u0c02 \u0c09\u0c02\u0c1f\u0c41\u0c02\u0c26\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #43)",
        "author": "\u0c2e\u0c26\u0c30\u0c4d \u0c25\u0c46\u0c30\u0c3f\u0c38\u0c3e",
        "category": "\u0c28\u0c3e\u0c2f\u0c15\u0c24\u0c4d\u0c35\u0c02"
      },
      "hi": {
        "quote": "\u091b\u094b\u091f\u0940-\u091b\u094b\u091f\u0940 \u092c\u093e\u0924\u094b\u0902 \u092e\u0947\u0902 \u0935\u092b\u093e\u0926\u093e\u0930 \u0930\u0939\u0947\u0902 \u0915\u094d\u092f\u094b\u0902\u0915\u093f \u0909\u0928\u094d\u0939\u0940\u0902 \u092e\u0947\u0902 \u0906\u092a\u0915\u0940 \u0924\u093e\u0915\u0924 \u091b\u093f\u092a\u0940 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #43)",
        "author": "\u092e\u0926\u0930 \u091f\u0947\u0930\u0947\u0938\u093e",
        "category": "\u0928\u0947\u0924\u0943\u0924\u094d\u0935"
      },
      "fr": {
        "quote": "Soyez fid\u00e8le dans les petites choses car c'est en elles que r\u00e9side votre force. (R\u00e9f #43)",
        "author": "M\u00e8re Teresa",
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
        "quote": "\u0c1a\u0c3f\u0c28\u0c4d\u0c28 \u0c35\u0c3f\u0c37\u0c2f\u0c3e\u0c32\u0c32\u0c4b \u0c28\u0c2e\u0c4d\u0c2e\u0c15\u0c02\u0c17\u0c3e \u0c09\u0c02\u0c21\u0c02\u0c21\u0c3f \u0c0e\u0c02\u0c26\u0c41\u0c15\u0c02\u0c1f\u0c47 \u0c35\u0c3e\u0c1f\u0c3f\u0c32\u0c4b\u0c28\u0c47 \u0c2e\u0c40 \u0c2c\u0c32\u0c02 \u0c09\u0c02\u0c1f\u0c41\u0c02\u0c26\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #44)",
        "author": "\u0c2e\u0c26\u0c30\u0c4d \u0c25\u0c46\u0c30\u0c3f\u0c38\u0c3e",
        "category": "\u0c38\u0c47\u0c35"
      },
      "hi": {
        "quote": "\u091b\u094b\u091f\u0940-\u091b\u094b\u091f\u0940 \u092c\u093e\u0924\u094b\u0902 \u092e\u0947\u0902 \u0935\u092b\u093e\u0926\u093e\u0930 \u0930\u0939\u0947\u0902 \u0915\u094d\u092f\u094b\u0902\u0915\u093f \u0909\u0928\u094d\u0939\u0940\u0902 \u092e\u0947\u0902 \u0906\u092a\u0915\u0940 \u0924\u093e\u0915\u0924 \u091b\u093f\u092a\u0940 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #44)",
        "author": "\u092e\u0926\u0930 \u091f\u0947\u0930\u0947\u0938\u093e",
        "category": "\u0938\u0947\u0935\u093e"
      },
      "fr": {
        "quote": "Soyez fid\u00e8le dans les petites choses car c'est en elles que r\u00e9side votre force. (R\u00e9f #44)",
        "author": "M\u00e8re Teresa",
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
        "quote": "\u0c1a\u0c3f\u0c28\u0c4d\u0c28 \u0c35\u0c3f\u0c37\u0c2f\u0c3e\u0c32\u0c32\u0c4b \u0c28\u0c2e\u0c4d\u0c2e\u0c15\u0c02\u0c17\u0c3e \u0c09\u0c02\u0c21\u0c02\u0c21\u0c3f \u0c0e\u0c02\u0c26\u0c41\u0c15\u0c02\u0c1f\u0c47 \u0c35\u0c3e\u0c1f\u0c3f\u0c32\u0c4b\u0c28\u0c47 \u0c2e\u0c40 \u0c2c\u0c32\u0c02 \u0c09\u0c02\u0c1f\u0c41\u0c02\u0c26\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #45)",
        "author": "\u0c2e\u0c26\u0c30\u0c4d \u0c25\u0c46\u0c30\u0c3f\u0c38\u0c3e",
        "category": "\u0c06\u0c24\u0c4d\u0c2e\u0c35\u0c3f\u0c36\u0c4d\u0c35\u0c3e\u0c38\u0c02"
      },
      "hi": {
        "quote": "\u091b\u094b\u091f\u0940-\u091b\u094b\u091f\u0940 \u092c\u093e\u0924\u094b\u0902 \u092e\u0947\u0902 \u0935\u092b\u093e\u0926\u093e\u0930 \u0930\u0939\u0947\u0902 \u0915\u094d\u092f\u094b\u0902\u0915\u093f \u0909\u0928\u094d\u0939\u0940\u0902 \u092e\u0947\u0902 \u0906\u092a\u0915\u0940 \u0924\u093e\u0915\u0924 \u091b\u093f\u092a\u0940 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #45)",
        "author": "\u092e\u0926\u0930 \u091f\u0947\u0930\u0947\u0938\u093e",
        "category": "\u0906\u0924\u094d\u092e\u0935\u093f\u0936\u094d\u0935\u093e\u0938"
      },
      "fr": {
        "quote": "Soyez fid\u00e8le dans les petites choses car c'est en elles que r\u00e9side votre force. (R\u00e9f #45)",
        "author": "M\u00e8re Teresa",
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
        "quote": "\u0c1a\u0c3f\u0c28\u0c4d\u0c28 \u0c35\u0c3f\u0c37\u0c2f\u0c3e\u0c32\u0c32\u0c4b \u0c28\u0c2e\u0c4d\u0c2e\u0c15\u0c02\u0c17\u0c3e \u0c09\u0c02\u0c21\u0c02\u0c21\u0c3f \u0c0e\u0c02\u0c26\u0c41\u0c15\u0c02\u0c1f\u0c47 \u0c35\u0c3e\u0c1f\u0c3f\u0c32\u0c4b\u0c28\u0c47 \u0c2e\u0c40 \u0c2c\u0c32\u0c02 \u0c09\u0c02\u0c1f\u0c41\u0c02\u0c26\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #46)",
        "author": "\u0c2e\u0c26\u0c30\u0c4d \u0c25\u0c46\u0c30\u0c3f\u0c38\u0c3e",
        "category": "\u0c38\u0c47\u0c35"
      },
      "hi": {
        "quote": "\u091b\u094b\u091f\u0940-\u091b\u094b\u091f\u0940 \u092c\u093e\u0924\u094b\u0902 \u092e\u0947\u0902 \u0935\u092b\u093e\u0926\u093e\u0930 \u0930\u0939\u0947\u0902 \u0915\u094d\u092f\u094b\u0902\u0915\u093f \u0909\u0928\u094d\u0939\u0940\u0902 \u092e\u0947\u0902 \u0906\u092a\u0915\u0940 \u0924\u093e\u0915\u0924 \u091b\u093f\u092a\u0940 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #46)",
        "author": "\u092e\u0926\u0930 \u091f\u0947\u0930\u0947\u0938\u093e",
        "category": "\u0938\u0947\u0935\u093e"
      },
      "fr": {
        "quote": "Soyez fid\u00e8le dans les petites choses car c'est en elles que r\u00e9side votre force. (R\u00e9f #46)",
        "author": "M\u00e8re Teresa",
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
        "quote": "\u0c1a\u0c3f\u0c28\u0c4d\u0c28 \u0c35\u0c3f\u0c37\u0c2f\u0c3e\u0c32\u0c32\u0c4b \u0c28\u0c2e\u0c4d\u0c2e\u0c15\u0c02\u0c17\u0c3e \u0c09\u0c02\u0c21\u0c02\u0c21\u0c3f \u0c0e\u0c02\u0c26\u0c41\u0c15\u0c02\u0c1f\u0c47 \u0c35\u0c3e\u0c1f\u0c3f\u0c32\u0c4b\u0c28\u0c47 \u0c2e\u0c40 \u0c2c\u0c32\u0c02 \u0c09\u0c02\u0c1f\u0c41\u0c02\u0c26\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #47)",
        "author": "\u0c2e\u0c26\u0c30\u0c4d \u0c25\u0c46\u0c30\u0c3f\u0c38\u0c3e",
        "category": "\u0c28\u0c3e\u0c2f\u0c15\u0c24\u0c4d\u0c35\u0c02"
      },
      "hi": {
        "quote": "\u091b\u094b\u091f\u0940-\u091b\u094b\u091f\u0940 \u092c\u093e\u0924\u094b\u0902 \u092e\u0947\u0902 \u0935\u092b\u093e\u0926\u093e\u0930 \u0930\u0939\u0947\u0902 \u0915\u094d\u092f\u094b\u0902\u0915\u093f \u0909\u0928\u094d\u0939\u0940\u0902 \u092e\u0947\u0902 \u0906\u092a\u0915\u0940 \u0924\u093e\u0915\u0924 \u091b\u093f\u092a\u0940 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #47)",
        "author": "\u092e\u0926\u0930 \u091f\u0947\u0930\u0947\u0938\u093e",
        "category": "\u0928\u0947\u0924\u0943\u0924\u094d\u0935"
      },
      "fr": {
        "quote": "Soyez fid\u00e8le dans les petites choses car c'est en elles que r\u00e9side votre force. (R\u00e9f #47)",
        "author": "M\u00e8re Teresa",
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
        "quote": "\u0c1a\u0c3f\u0c28\u0c4d\u0c28 \u0c35\u0c3f\u0c37\u0c2f\u0c3e\u0c32\u0c32\u0c4b \u0c28\u0c2e\u0c4d\u0c2e\u0c15\u0c02\u0c17\u0c3e \u0c09\u0c02\u0c21\u0c02\u0c21\u0c3f \u0c0e\u0c02\u0c26\u0c41\u0c15\u0c02\u0c1f\u0c47 \u0c35\u0c3e\u0c1f\u0c3f\u0c32\u0c4b\u0c28\u0c47 \u0c2e\u0c40 \u0c2c\u0c32\u0c02 \u0c09\u0c02\u0c1f\u0c41\u0c02\u0c26\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #48)",
        "author": "\u0c2e\u0c26\u0c30\u0c4d \u0c25\u0c46\u0c30\u0c3f\u0c38\u0c3e",
        "category": "\u0c06\u0c24\u0c4d\u0c2e\u0c35\u0c3f\u0c36\u0c4d\u0c35\u0c3e\u0c38\u0c02"
      },
      "hi": {
        "quote": "\u091b\u094b\u091f\u0940-\u091b\u094b\u091f\u0940 \u092c\u093e\u0924\u094b\u0902 \u092e\u0947\u0902 \u0935\u092b\u093e\u0926\u093e\u0930 \u0930\u0939\u0947\u0902 \u0915\u094d\u092f\u094b\u0902\u0915\u093f \u0909\u0928\u094d\u0939\u0940\u0902 \u092e\u0947\u0902 \u0906\u092a\u0915\u0940 \u0924\u093e\u0915\u0924 \u091b\u093f\u092a\u0940 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #48)",
        "author": "\u092e\u0926\u0930 \u091f\u0947\u0930\u0947\u0938\u093e",
        "category": "\u0906\u0924\u094d\u092e\u0935\u093f\u0936\u094d\u0935\u093e\u0938"
      },
      "fr": {
        "quote": "Soyez fid\u00e8le dans les petites choses car c'est en elles que r\u00e9side votre force. (R\u00e9f #48)",
        "author": "M\u00e8re Teresa",
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
        "quote": "\u0c1a\u0c3f\u0c28\u0c4d\u0c28 \u0c35\u0c3f\u0c37\u0c2f\u0c3e\u0c32\u0c32\u0c4b \u0c28\u0c2e\u0c4d\u0c2e\u0c15\u0c02\u0c17\u0c3e \u0c09\u0c02\u0c21\u0c02\u0c21\u0c3f \u0c0e\u0c02\u0c26\u0c41\u0c15\u0c02\u0c1f\u0c47 \u0c35\u0c3e\u0c1f\u0c3f\u0c32\u0c4b\u0c28\u0c47 \u0c2e\u0c40 \u0c2c\u0c32\u0c02 \u0c09\u0c02\u0c1f\u0c41\u0c02\u0c26\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #49)",
        "author": "\u0c2e\u0c26\u0c30\u0c4d \u0c25\u0c46\u0c30\u0c3f\u0c38\u0c3e",
        "category": "\u0c15\u0c32\u0c32\u0c41"
      },
      "hi": {
        "quote": "\u091b\u094b\u091f\u0940-\u091b\u094b\u091f\u0940 \u092c\u093e\u0924\u094b\u0902 \u092e\u0947\u0902 \u0935\u092b\u093e\u0926\u093e\u0930 \u0930\u0939\u0947\u0902 \u0915\u094d\u092f\u094b\u0902\u0915\u093f \u0909\u0928\u094d\u0939\u0940\u0902 \u092e\u0947\u0902 \u0906\u092a\u0915\u0940 \u0924\u093e\u0915\u0924 \u091b\u093f\u092a\u0940 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #49)",
        "author": "\u092e\u0926\u0930 \u091f\u0947\u0930\u0947\u0938\u093e",
        "category": "\u0938\u092a\u0928\u0947"
      },
      "fr": {
        "quote": "Soyez fid\u00e8le dans les petites choses car c'est en elles que r\u00e9side votre force. (R\u00e9f #49)",
        "author": "M\u00e8re Teresa",
        "category": "R\u00eaves"
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
        "quote": "\u0c1a\u0c3f\u0c28\u0c4d\u0c28 \u0c35\u0c3f\u0c37\u0c2f\u0c3e\u0c32\u0c32\u0c4b \u0c28\u0c2e\u0c4d\u0c2e\u0c15\u0c02\u0c17\u0c3e \u0c09\u0c02\u0c21\u0c02\u0c21\u0c3f \u0c0e\u0c02\u0c26\u0c41\u0c15\u0c02\u0c1f\u0c47 \u0c35\u0c3e\u0c1f\u0c3f\u0c32\u0c4b\u0c28\u0c47 \u0c2e\u0c40 \u0c2c\u0c32\u0c02 \u0c09\u0c02\u0c1f\u0c41\u0c02\u0c26\u0c3f. (\u0c09\u0c32\u0c4d\u0c32\u0c47\u0c16\u0c28 #50)",
        "author": "\u0c2e\u0c26\u0c30\u0c4d \u0c25\u0c46\u0c30\u0c3f\u0c38\u0c3e",
        "category": "\u0c0f\u0c15\u0c3e\u0c17\u0c4d\u0c30\u0c24"
      },
      "hi": {
        "quote": "\u091b\u094b\u091f\u0940-\u091b\u094b\u091f\u0940 \u092c\u093e\u0924\u094b\u0902 \u092e\u0947\u0902 \u0935\u092b\u093e\u0926\u093e\u0930 \u0930\u0939\u0947\u0902 \u0915\u094d\u092f\u094b\u0902\u0915\u093f \u0909\u0928\u094d\u0939\u0940\u0902 \u092e\u0947\u0902 \u0906\u092a\u0915\u0940 \u0924\u093e\u0915\u0924 \u091b\u093f\u092a\u0940 \u0939\u0948\u0964 (\u0938\u0902\u0926\u0930\u094d\u092d #50)",
        "author": "\u092e\u0926\u0930 \u091f\u0947\u0930\u0947\u0938\u093e",
        "category": "\u090f\u0915\u093e\u0917\u094d\u0930\u0924\u093e"
      },
      "fr": {
        "quote": "Soyez fid\u00e8le dans les petites choses car c'est en elles que r\u00e9side votre force. (R\u00e9f #50)",
        "author": "M\u00e8re Teresa",
        "category": "Focus"
      }
    }
  }
];
