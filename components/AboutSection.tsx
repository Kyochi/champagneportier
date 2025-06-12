
import React from 'react';

interface AboutSectionProps {
  title: string;
  paragraph1: string;
  paragraph2: string;
  imageUrl: string;
  altText: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ title, paragraph1, paragraph2, imageUrl, altText }) => {
  return (
    <section id="histoire" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-display font-bold text-dark-slate mb-6">
              {title}
            </h2>
            <p className="text-gray-700 font-body text-lg mb-4 leading-relaxed">
              {paragraph1}
            </p>
            <p className="text-gray-700 font-body text-lg leading-relaxed">
              {paragraph2}
            </p>
          </div>
          <div className="lg:w-1/2">
            <img 
              src={imageUrl} 
              alt={altText} 
              className="rounded-lg shadow-xl w-full h-auto object-cover max-h-[500px]" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
