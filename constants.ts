
import { Product, SocialLinkInfo, Testimonial } from './types';

export const APP_NAME = "Champagne Portier";

export const NAVIGATION_LINKS = [
  { name: "Notre Collection", href: "#collection" },
  { name: "Notre Histoire", href: "#histoire" },
  { name: "Témoignages", href: "#temoignages" },
  { name: "Contact", href: "#contact" },
];

export const PRODUCTS: Product[] = [
  { 
    id: '1', 
    name: 'Cuvée Royale Brut', 
    description: 'Un champagne vif et élégant, parfait pour toutes les célébrations. Fines bulles et arômes d\'agrumes.', 
    price: '45,00 €', 
    imageUrl: 'https://i.ibb.co/gbG7QQRz/Capture-d-e-cran-2025-06-13-a-00-57-56.png', 
    altText: 'Bouteille élégante de champagne Cuvée Royale Brut avec reflets dorés et bulles fines visibles'
  },
  { 
    id: '2', 
    name: 'Grand Millésime 2015', 
    description: 'Une expression complexe et riche d\'une année exceptionnelle. Notes de fruits mûrs et de brioche.', 
    price: '75,00 €', 
    imageUrl: 'https://i.ibb.co/gbG7QQRz/Capture-d-e-cran-2025-06-13-a-00-57-56.png', 
    altText: 'Prestigieuse bouteille de champagne Grand Millésime 2015, idéalement sur un fond sombre et luxueux'
  },
  { 
    id: '3', 
    name: 'Rosé Impérial', 
    description: 'Frais et fruité, ce rosé séduit par sa finesse et ses arômes délicats de fruits rouges.', 
    price: '55,00 €', 
    imageUrl: 'https://i.ibb.co/gbG7QQRz/Capture-d-e-cran-2025-06-13-a-00-57-56.png', 
    altText: 'Flûtes remplies de champagne Rosé Impérial pétillant, évoquant la fraîcheur et les fruits rouges'
  },
  { 
    id: '4', 
    name: 'Blanc de Blancs Prestige', 
    description: 'Élaboré exclusivement à partir de Chardonnay, ce champagne offre une pureté et une minéralité remarquables.', 
    price: '65,00 €', 
    imageUrl: 'https://i.ibb.co/gbG7QQRz/Capture-d-e-cran-2025-06-13-a-00-57-56.png', 
    altText: 'Bouteille de champagne Blanc de Blancs Prestige, mettant en avant sa pâleur et son élégance'
  },
];

export const HERO_CONTENT = {
  title: "L'Art de Célébrer",
  subtitle: "Découvrez l'excellence de nos champagnes, fruits d'un savoir-faire ancestral et d'une passion inégalée.",
  ctaButtonText: "Découvrir Notre Collection",
  backgroundImageUrl: "https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-6/471161971_1112022667383480_3964415269496962761_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=fODkVBC4H8AQ7kNvwFGIp7u&_nc_oc=Adk9Ga31XzIXp73vnuUCDvEE3Gk4EHfcWJ8vS8n5dU-F0TMoz8uukL50tBW04WWU1d3xNpKesrwGRlhsZ3zETXVd&_nc_zt=23&_nc_ht=scontent-cdg4-2.xx&_nc_gid=jzROvgSSNjKgYNCG3mxddw&oh=00_AfNm4n79gGQ2cb88o5MZlf5koVagEfKqpw8bCEmqIAMiZw&oe=68511121",
  altText: "Paysage de vignobles champenois baignés de lumière dorée au lever ou coucher du soleil"
};

export const ABOUT_CONTENT = {
  title: "Notre Maison, Votre Émotion",
  paragraph1: "Fondée en 1888, la maison Portier perpétue la tradition champenoise avec une quête constante de perfection. Chaque bouteille est le reflet de notre terroir unique et de l'engagement passionné de nos vignerons.",
  paragraph2: "Nous croyons que le champagne est plus qu'une boisson; c'est une expérience, une célébration des moments précieux de la vie. Partagez ces instants inoubliables avec Éclat Doré.",
  imageUrl: "https://scontent-cdg4-1.xx.fbcdn.net/v/t39.30808-6/480890056_1157993386119741_4966440340084487017_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=E6BxyxwDjmMQ7kNvwHNgFj1&_nc_oc=AdnSt1zrFRUNZqqWq0wtSFPCB8aDvc60zRPhU20hqswNH84VI806KWa7YiCOwo4K-GtrdmqU7gR7phSe3FbVcHsK&_nc_zt=23&_nc_ht=scontent-cdg4-1.xx&_nc_gid=Br1tBGHwr4W31Y7fLmDL-Q&oh=00_AfNLxFdVgMgeACzgQoPG2tnVliT6JuJKr_-cYRjC16zbRg&oe=68511825",
  altText: "Intérieur d'une cave de vieillissement de champagne traditionnelle avec des pupitres et des bouteilles"
};

export const TESTIMONIALS_SECTION_CONTENT = {
  title: "Ce que nos clients en disent",
};

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    quote: "Une dégustation inoubliable ! Le Cuvée Royale Brut est simplement divin. Service client impeccable et livraison rapide.",
    author: "Sophie L.",
    location: "Paris, France"
  },
  {
    id: 't2',
    quote: "Le Grand Millésime 2015 a sublimé notre anniversaire de mariage. Une pure merveille de complexité et d'élégance.",
    author: "Marc D.",
    location: "Lyon, France"
  },
  {
    id: 't3',
    quote: "J'ai découvert Éclat Doré lors d'un événement et suis tombée sous le charme du Rosé Impérial. Parfait pour l'apéritif.",
    author: "Isabelle R.",
    location: "Bordeaux, France"
  },
];


export const CONTACT_CONTENT = {
    title: "Contactez-Nous",
    intro: "Pour toute question, commande spéciale ou si vous souhaitez organiser une visite de notre domaine, n'hésitez pas à nous joindre. Notre équipe se fera un plaisir de vous assister.",
    email: "contact@blabla",
    phone: "+33 3 26 01 23 45",
    address: "1 ruelle montgarnier - Vanault"
};

export const FOOTER_CONTENT = {
    copyright: `© ${new Date().getFullYear()} ${APP_NAME} Champagne. Tous droits réservés. L'abus d'alcool est dangereux pour la santé, à consommer avec modération.`,
    socialLinks: [
        { name: 'Facebook', url: 'https://facebook.com', iconId: 'facebook' as const },
        { name: 'Instagram', url: 'https://instagram.com', iconId: 'instagram' as const },
        { name: 'Twitter', url: 'https://twitter.com', iconId: 'twitter' as const },
    ] as SocialLinkInfo[]
};
