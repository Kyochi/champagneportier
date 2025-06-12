
import { Product, SocialLinkInfo } from './types';

export const APP_NAME = "Éclat Doré";

export const NAVIGATION_LINKS = [
  { name: "Notre Collection", href: "#collection" },
  { name: "Notre Histoire", href: "#histoire" },
  { name: "Contact", href: "#contact" },
];

export const PRODUCTS: Product[] = [
  { 
    id: '1', 
    name: 'Cuvée Royale Brut', 
    description: 'Un champagne vif et élégant, parfait pour toutes les célébrations. Fines bulles et arômes d\'agrumes.', 
    price: '45,00 €', 
    imageUrl: 'https://picsum.photos/seed/champagne1/400/600', 
    altText: 'Bouteille de champagne Cuvée Royale Brut' 
  },
  { 
    id: '2', 
    name: 'Grand Millésime 2015', 
    description: 'Une expression complexe et riche d\'une année exceptionnelle. Notes de fruits mûrs et de brioche.', 
    price: '75,00 €', 
    imageUrl: 'https://picsum.photos/seed/champagne2/400/600', 
    altText: 'Bouteille de champagne Grand Millésime 2015' 
  },
  { 
    id: '3', 
    name: 'Rosé Impérial', 
    description: 'Frais et fruité, ce rosé séduit par sa finesse et ses arômes délicats de fruits rouges.', 
    price: '55,00 €', 
    imageUrl: 'https://picsum.photos/seed/champagne3/400/600', 
    altText: 'Bouteille de champagne Rosé Impérial' 
  },
  { 
    id: '4', 
    name: 'Blanc de Blancs Prestige', 
    description: 'Élaboré exclusivement à partir de Chardonnay, ce champagne offre une pureté et une minéralité remarquables.', 
    price: '65,00 €', 
    imageUrl: 'https://picsum.photos/seed/champagne4/400/600', 
    altText: 'Bouteille de champagne Blanc de Blancs Prestige' 
  },
];

export const HERO_CONTENT = {
  title: "L'Art de Célébrer",
  subtitle: "Découvrez l'excellence de nos champagnes, fruits d'un savoir-faire ancestral et d'une passion inégalée.",
  ctaButtonText: "Découvrir Notre Collection",
  backgroundImageUrl: "https://picsum.photos/seed/heroimage/1920/1080",
  altText: "Vignes de champagne baignées de lumière dorée"
};

export const ABOUT_CONTENT = {
  title: "Notre Maison, Votre Émotion",
  paragraph1: "Fondée en 1888, la maison Éclat Doré perpétue la tradition champenoise avec une quête constante de perfection. Chaque bouteille est le reflet de notre terroir unique et de l'engagement passionné de nos vignerons.",
  paragraph2: "Nous croyons que le champagne est plus qu'une boisson; c'est une expérience, une célébration des moments précieux de la vie. Partagez ces instants inoubliables avec Éclat Doré.",
  imageUrl: "https://picsum.photos/seed/aboutimage/800/600",
  altText: "Cave de champagne traditionnelle avec des tonneaux en bois"
};

export const CONTACT_CONTENT = {
    title: "Contactez-Nous",
    intro: "Pour toute question, commande spéciale ou si vous souhaitez organiser une visite de notre domaine, n'hésitez pas à nous joindre. Notre équipe se fera un plaisir de vous assister.",
    email: "contact@eclatdore-champagne.fr",
    phone: "+33 3 26 01 23 45",
    address: "123 Rue du Vignoble, 51200 Épernay, France"
};

export const FOOTER_CONTENT = {
    copyright: `© ${new Date().getFullYear()} ${APP_NAME} Champagne. Tous droits réservés. L'abus d'alcool est dangereux pour la santé, à consommer avec modération.`,
    socialLinks: [
        { name: 'Facebook', url: 'https://facebook.com', iconId: 'facebook' as const },
        { name: 'Instagram', url: 'https://instagram.com', iconId: 'instagram' as const },
        { name: 'Twitter', url: 'https://twitter.com', iconId: 'twitter' as const },
    ] as SocialLinkInfo[]
};
