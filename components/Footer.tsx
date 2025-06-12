
import React from 'react';
import { SocialLinkInfo, SocialIconId } from '../types';
import { FacebookIcon, InstagramIcon, TwitterIcon } from './icons/SocialIcons';

interface FooterProps {
  appName: string;
  copyrightText: string;
  socialLinks: SocialLinkInfo[];
}

const SocialIconMap: Record<SocialIconId, React.FC<{className?: string}>> = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  twitter: TwitterIcon,
};

const Footer: React.FC<FooterProps> = ({ appName, copyrightText, socialLinks }) => {
  return (
    <footer className="bg-dark-slate text-cream font-body">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <a href="#" className="text-2xl font-display font-bold text-champagne-gold hover:text-muted-gold transition-colors">
              {appName}
            </a>
            <p className="mt-2 text-sm text-gray-400 max-w-md">{copyrightText}</p>
          </div>
          
          {socialLinks.length > 0 && (
            <div className="flex space-x-6">
              {socialLinks.map((link) => {
                const IconComponent = SocialIconMap[link.iconId];
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="text-gray-400 hover:text-champagne-gold transition-colors duration-300"
                  >
                    <IconComponent className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
