export default () => ({

  loading: true,

  siteOptions: {

    togglePlay: false,
    sideMenuOpen: false,
    bookingOpen: false,
    gridDebug: false,

    currentLang: 'en',
    languages: ['en', 'it'],

    currentSlug: '/'
  },
  mediaModal: {
    show:false,
    media: false,
    gallery: [],
    initial: 0
  },

  infoModal: {
    content: '',
    show: false
  },

  navigation: {},


  currentSection: '',
  currentEntry: '',
  pages: [],
  currentPage: [], //array of sections


  contents: {
    it: {
      section1: {
        title: 'Boutique hotel dal<br>fascino milanese.'
      },
      section2: {
        title: 'Milano da scoprire…',
        par1: 'Crossing Manzoni, la nuova proprietà del gruppo Crossing Collection, è pronta per aprire le sue porte e ospitarvi nel cuore della capitale della moda e del design! Si trova proprio al centro della cultura, della storia, dell\'arte, del design e dello spettacolo …. in pochi minuti a piedi potrete raggiungere luoghi iconici come Via Montenapoleone, il Teatro Alla Scala e il Duomo.',
        par2: 'Vista dalla<br>Montenapoleone<br>Double Twin'
      },
      section3: {
        title: 'Sei camere uniche, <br>unificate nell\'arte e nel design, <br>distinte nello stile.',
        par1: 'Gli spazi di Crossing Manzoni sono stati progettati mixando colori, texture, materiali, corpi illuminanti e arredi al fine di ottenere un risultato sorprendente e audace, ma con l’eleganza e la discrezione tipici di questa città. Ognuna delle sei stanze è stata allestita con uno stile unico ed è contraddistinta da una selezione di pezzi di design provenienti sia dai grandi maestri che da talenti emergenti. Opere d\'arte del passato sono accostate a opere contemporanee e a oggetti realizzati a mano da artigiani italiani.'
      },
      section4: {
        title: 'Contatti'
      },
      section5: {
        par1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
      }
    },
    en: {
      section1: {
        title: 'Boutique lodgings, <br>Milanese flair.'
      },
      section2: {
        title: 'Milano is in the air…',
        par1: 'Crossing Manzoni, the newest boutique property from the Crossing Collection group, in the heart of the fashion capital Milan, is ready to open its doors! We are located in the midst of Milanese fashion, culture, history, design, art and performance. Iconic locations such as Via Montenapoleone, La Scala Theatre and the Duomo are all within short walking distance.',
        par2: 'View from the<br>Montenapoleone<br>Double Twin'
      },
      section3: {
        title: 'Six unique rooms,<br>unified in art and design,<br>distinct in style.',
        par1: 'Crossing Manzoni spaces have been created by blending colours, textures, furniture, materials and lighting to create a striking impact that is quietly daring. Each room is carefully curated with an assortment of design pieces from both canonic names and lesser-known talents. Decades old art hangs next to contemporary works which are complimented by handmade items crafted by Italian artisans.'
      },
      section4: {
        title: 'Contacts'
      },
      section5: {
        par1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
      }
    }
  },


  gallery: [
    {filename: "manzoni_gal_01.jpg", description: "Spiga<br>Double Twin Deluxe", width: "418", width_perc: "29", height: "768", height_perc: "53.3333", ratio: "183.7320574"},
    {filename: "manzoni_gal_02.jpg", description: "Spiga<br>Double Twin Deluxe", width: "1006", width_perc: "71", height: "768", height_perc: "53.3333", ratio: "76.34194831"},

    {filename: "manzoni_gal_03.jpg", description: "Manzoni<br>Double Superior", width: "1440", width_perc: "100.0000", height: "768", height_perc: "53.3333", ratio: "53.33333333"},

    {filename: "manzoni_gal_04.jpg", description: "Manzoni<br>Double Superior", width: "810", width_perc: "56", height: "768", height_perc: "53.3333", ratio: "94.81481481"},
    {filename: "manzoni_gal_05.jpg", description: "Borgospesso<br>Double Superior", width: "614", width_perc: "44", height: "768", height_perc: "53.3333", ratio: "125.0814332"},

    {filename: "manzoni_gal_06.jpg", description: "Montenapoleone<br>Double Twin Deluxe", width: "761", width_perc: "53", height: "768", height_perc: "53.3333", ratio: "100.9198423"},
    {filename: "manzoni_gal_07.jpg", description: "Montenapoleone<br>Double Twin Deluxe", width: "664", width_perc: "47", height: "768", height_perc: "53.3333", ratio: "115.6626506"},

    {filename: "manzoni_gal_08.jpg", description: "Montenapoleone<br>Double Twin Deluxe", width: "1300", width_perc: "90", height: "768", height_perc: "53.3333", ratio: "59.07692308"},
    {filename: "", description: "", width: "127", width_perc: "10", height: "768", height_perc: "53.3333", ratio: "604.7244094"},

    {filename: "manzoni_gal_09.jpg", description: "Chat & Relax<br>Area", width: "418", width_perc: "29", height: "768", height_perc: "53.3333", ratio: "183.7320574"},
    {filename: "manzoni_gal_10.jpg", description: "Chat & Relax<br>Area", width: "572", width_perc: "42", height: "768", height_perc: "53.3333", ratio: "134.2657343"},
    {filename: "manzoni_gal_11.jpg", description: "Montenapoleone<br>Double Twin Deluxe", width: "418", width_perc: "29", height: "768", height_perc: "53.3333", ratio: "183.7320574"}
  ]


})
