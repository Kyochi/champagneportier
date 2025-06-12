
import React from 'react';
import Button from './Button';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaButtonText: string;
  backgroundImageUrl: string;
  altText: string;
  ctaLink: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, ctaButtonText, backgroundImageUrl, altText, ctaLink }) => {
  return (
    <section 
      className="relative bg-cover bg-center h-[calc(100vh-5rem)] min-h-[500px] flex items-center justify-center text-center text-white" 
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      aria-label={altText}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 p-4 sm:p-8 max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6 drop-shadow-lg">
          {title}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-body mb-8 drop-shadow-md">
          {subtitle}
        </p>
        <Button href={ctaLink} variant="primary" className="text-lg px-8 py-4">
          {ctaButtonText}
        </Button>
      </div>
    </section>
  );
};

export default Hero;
